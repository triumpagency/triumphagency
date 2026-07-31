import { useEffect } from "react";

const upsert = (selector: string, create: () => HTMLElement, content: string) => {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  if (el.tagName === "LINK") el.setAttribute("href", content);
  else el.setAttribute("content", content);
};

/** Keeps title, description, canonical and social tags in sync per route. */
export const useSeo = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) => {
  useEffect(() => {
    document.title = title;

    upsert(
      'meta[name="description"]',
      () => Object.assign(document.createElement("meta"), { name: "description" }),
      description
    );
    upsert(
      'link[rel="canonical"]',
      () => Object.assign(document.createElement("link"), { rel: "canonical" }),
      path
    );
    (
      [
        ['meta[property="og:title"]', "og:title", title],
        ['meta[property="og:description"]', "og:description", description],
        ['meta[property="og:url"]', "og:url", path],
        ['meta[name="twitter:title"]', "twitter:title", title],
        ['meta[name="twitter:description"]', "twitter:description", description],
      ] as const
    ).forEach(([selector, key, value]) => {
      upsert(
        selector,
        () => {
          const meta = document.createElement("meta");
          if (key.startsWith("og:")) meta.setAttribute("property", key);
          else meta.setAttribute("name", key);
          return meta;
        },
        value
      );
    });
  }, [title, description, path]);
};
