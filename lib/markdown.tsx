import React from "react";

/**
 * A lightweight, zero-dependency Markdown parser helper for legal pages.
 * Converts headings, bullet lists, bold highlights, and paragraph texts.
 */
export function parseMarkdown(text: string): React.ReactNode[] {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];

  const flushList = (key: number) => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${key}`} className="list-disc pl-6 space-y-2 text-slate-600 my-4 leading-relaxed">
          {currentList.map((item, i) => (
            <li key={i}>{parseInline(item)}</li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith("# ")) {
      flushList(i);
      // Skip h1 as it is rendered by the page hero component
      continue;
    }

    if (line.startsWith("## ")) {
      flushList(i);
      elements.push(
        <h2 key={i} className="text-xl font-bold text-primary mt-8 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
      continue;
    }

    if (line.startsWith("### ")) {
      flushList(i);
      elements.push(
        <h3 key={i} className="text-lg font-bold text-primary mt-6 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
      continue;
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      currentList.push(line.substring(2));
      continue;
    }

    if (line === "") {
      flushList(i);
      continue;
    }

    // Ignore horizontal rules or frontmatter formatting
    if (line.startsWith("---") || line.startsWith("Last Updated:") || line.startsWith("**Last Updated:**")) {
      flushList(i);
      continue;
    }

    flushList(i);
    elements.push(
      <p key={i} className="leading-relaxed text-slate-600 my-4">
        {parseInline(line)}
      </p>
    );
  }
  
  flushList(lines.length);
  return elements;
}

function parseInline(text: string): React.ReactNode {
  // Bold parser: **bold** -> <strong>
  const parts = text.split("**");
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return (
        <strong key={i} className="font-bold text-primary">
          {part}
        </strong>
      );
    }
    
    // Italic parser: *italic* -> <em>
    const italicParts = part.split("*");
    return italicParts.map((item, j) => {
      if (j % 2 === 1) {
        return (
          <em key={j} className="italic">
            {item}
          </em>
        );
      }
      return item;
    });
  });
}
