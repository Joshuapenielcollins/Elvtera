import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  // Hidden publicly as requested; preserved in DOM for screen readers and search engines
  return (
    <nav aria-label="Breadcrumb" className="sr-only">
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index}>
              {item.href && !isLast ? (
                <Link to={item.href}>{item.label}</Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
