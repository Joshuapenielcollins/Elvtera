import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { SEOHead } from '../components/layout/SEOHead';
import { resourceArticles } from '../data/proofData';
import { CTABand, PageHero } from '../components/kit/Bits';

/**
 * Article page. ResourceArticle has no body field yet, so only the summary is shown.
 * Add a `body` to the type in src/types when the first real articles are written.
 */
export const ResourceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = resourceArticles.find((a) => a.id === slug);
  if (!article) return <Navigate to="/resources" replace />;

  const related = resourceArticles.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <>
      <SEOHead title={article.title} description={article.summary} canonicalPath={`/resources/${article.id}`} />
      <PageHero label={`${article.category} · ${article.readingTime}`} title={article.title}>
        <div className="relative mx-auto mt-6 flex max-w-6xl items-center gap-4 px-5 text-[14px] text-slate">
          <Link to="/resources" className="inline-flex items-center gap-1.5 hover:text-ink">
            <ArrowLeft className="h-4 w-4" /> All resources
          </Link>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> Published {article.publishDate}
          </span>
        </div>
      </PageHero>
      <section className="bg-canvas pb-20">
        <article className="mx-auto max-w-3xl rounded-[22px] bg-paper p-8 shadow-float sm:p-12">
          <p className="display text-[clamp(22px,2.4vw,28px)] leading-[1.4]">{article.summary}</p>
        </article>
        {related.length > 0 && (
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 px-5 sm:grid-cols-2 sm:px-0">
            {related.map((r) => (
              <Link key={r.id} to={`/resources/${r.id}`} className="rounded-[20px] bg-paper p-6 shadow-card hover:shadow-float">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-blue">{r.category}</span>
                <h3 className="mt-2 text-[17px] font-semibold">{r.title}</h3>
              </Link>
            ))}
          </div>
        )}
      </section>
      <CTABand title={<>Want this <span className="accent font-normal text-blue-soft">built for you?</span></>} />
    </>
  );
};
