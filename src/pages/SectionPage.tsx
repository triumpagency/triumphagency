import { Suspense } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSection, sections } from "@/lib/sections";
import { useSeo } from "@/hooks/useSeo";

const SectionPage = () => {
  const { slug } = useParams();
  const section = getSection(slug);
  const index = sections.findIndex((s) => s.slug === slug);

  if (!section) return <Navigate to="/404" replace />;

  const prev = index > 0 ? sections[index - 1] : undefined;
  const next = index < sections.length - 1 ? sections[index + 1] : undefined;

  return (
    <>
      <Seo section={section} />
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1">
          <div className="container mx-auto pt-10">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{section.label}</span>
            </nav>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4">
              {section.title}
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl">{section.description}</p>
          </div>

          <Suspense
            fallback={
              <div className="container mx-auto py-24" aria-busy="true">
                <div className="h-6 w-40 rounded bg-secondary animate-pulse mb-6" />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-48 rounded-2xl bg-secondary animate-pulse" />
                  ))}
                </div>
              </div>
            }
          >
            <section.Component />
          </Suspense>

          <div className="container mx-auto pb-20 flex flex-wrap items-center justify-between gap-4">
            {prev ? (
              <Link
                to={`/${prev.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft size={16} /> {prev.label}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                to={`/${next.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-80 transition-opacity"
              >
                {next.label} <ChevronRight size={16} />
              </Link>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

const Seo = ({ section }: { section: NonNullable<ReturnType<typeof getSection>> }) => {
  useSeo({
    title: `${section.title} | Triumph Agency`,
    description: section.description,
    path: `/${section.slug}`,
  });
  return null;
};

export default SectionPage;
