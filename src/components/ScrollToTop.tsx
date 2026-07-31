import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets scroll position on route change so each section starts at the top. */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
};

export default ScrollToTop;
