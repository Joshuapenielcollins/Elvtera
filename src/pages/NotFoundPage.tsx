import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/layout/SEOHead';
import { Button } from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The page you requested could not be found on Elvtera."
        canonicalPath="/404"
      />

      <section className="py-24 lg:py-36 bg-white text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block p-4 bg-[#F4F5F7] border border-neutral-300 rounded-2xl mb-6">
            <span className="text-4xl font-black text-[#0546F2] font-mono">404</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight mb-4">
            Page Not Found
          </h1>
          <p className="text-sm text-neutral-600 mb-8 leading-relaxed">
            The route you navigated to does not exist or may have been updated.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="primary">
                Return to Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" showArrow={false}>
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
