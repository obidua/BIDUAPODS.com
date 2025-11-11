import React from 'react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTheme } from '../context/ThemeContext';

interface BlogContentRendererProps {
  content: string;
  imageUrl?: string;
  className?: string;
}

const gradientBorder =
  'before:absolute before:inset-0 before:-z-10 before:rounded-[32px] before:bg-gradient-to-r before:from-cyan-400/40 before:via-blue-500/40 before:to-purple-500/40 before:blur-3xl before:opacity-60';

/**
 * BlogContentRenderer
 * Centralized renderer that converts markdown content into themed, card-based layouts.
 * Handles gradients, typography, tables, and list formatting so every blog post stays consistent.
 */
export const BlogContentRenderer: React.FC<BlogContentRendererProps> = ({
  content,
  imageUrl,
  className = '',
}) => {
  const { theme } = useTheme();
  let paragraphIndex = 0;

  const headerAccent =
    'relative mb-6 font-bold tracking-tight text-gray-900 dark:text-white drop-shadow-sm';

  const markdownComponents: Components = {
    h1: ({ node, ...props }) => (
      <h1
        {...props}
        className={`${headerAccent} text-4xl md:text-5xl pt-4 pb-6 border-b-4 border-cyan-500/70`}
      />
    ),
    h2: ({ node, ...props }) => (
      <h2
        {...props}
        className={`${headerAccent} text-3xl md:text-4xl mt-12 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-900/70 dark:to-gray-950/40 border-l-4 border-cyan-500 px-6 py-4 rounded-2xl shadow-lg`}
      />
    ),
    h3: ({ node, ...props }) => (
      <h3
        {...props}
        className="text-2xl md:text-3xl font-semibold text-cyan-700 dark:text-cyan-300 mt-10 mb-4"
      />
    ),
    h4: ({ node, ...props }) => (
      <h4
        {...props}
        className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-300 mt-8 mb-3"
      />
    ),
    p: ({ node, ...props }) => {
      paragraphIndex += 1;
      const leadParagraph =
        paragraphIndex === 1
          ? 'text-2xl md:text-[26px] font-semibold text-gray-900 dark:text-white first-letter:text-6xl first-letter:font-black first-letter:text-cyan-600 dark:first-letter:text-cyan-300 first-letter:mr-3 first-letter:float-left first-letter:leading-none'
          : 'text-lg';

      return (
        <p
          {...props}
          className={`${leadParagraph} leading-8 text-gray-700 dark:text-gray-300 mb-6`}
        />
      );
    },
    ul: ({ node, ordered, ...props }) => (
      <ul
        {...props}
        className="my-6 space-y-3 rounded-2xl border border-cyan-100/70 dark:border-cyan-500/30 bg-white/70 dark:bg-gray-900/50 px-6 py-5 shadow-lg shadow-cyan-500/5"
      />
    ),
    ol: ({ node, ordered, ...props }) => (
      <ol
        {...props}
        className="my-6 space-y-3 rounded-2xl border border-cyan-100/70 dark:border-cyan-500/30 bg-gradient-to-br from-white via-white to-cyan-50/60 dark:from-gray-900/60 dark:via-gray-900/40 dark:to-gray-950/60 px-6 py-5 shadow-lg shadow-cyan-500/5 list-decimal list-outside pl-8"
      />
    ),
    li: ({ node, ordered, children, ...props }) => (
      <li
        {...props}
        className={`relative text-gray-700 dark:text-gray-200 leading-7 ${
          ordered ? 'pl-1' : 'pl-6'
        }`}
      >
        {!ordered && (
          <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        )}
        <span className="block">{children}</span>
      </li>
    ),
    blockquote: ({ node, ...props }) => (
      <blockquote
        {...props}
        className="relative my-10 rounded-3xl border-l-8 border-cyan-500 bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900/60 dark:to-gray-950/80 p-8 text-lg italic text-gray-800 dark:text-gray-200 shadow-xl shadow-cyan-500/10"
      />
    ),
    hr: () => (
      <div className="my-12 h-1 rounded-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-70" />
    ),
    table: ({ node, ...props }) => (
      <div className="my-10 overflow-x-auto w-full -mx-4 px-4 rounded-3xl border border-cyan-100/60 dark:border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
        <table
          {...props}
          className="min-w-max text-left text-base text-gray-700 dark:text-gray-100"
        />
      </div>
    ),
    thead: ({ node, ...props }) => (
      <thead
        {...props}
        className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white text-sm uppercase tracking-wide"
      />
    ),
    th: ({ node, ...props }) => (
      <th
        {...props}
        className="px-6 py-4 font-semibold"
      />
    ),
    td: ({ node, ...props }) => (
      <td
        {...props}
        className="px-6 py-4 border-t border-white/20 dark:border-cyan-500/10 bg-white/80 dark:bg-gray-950/30 backdrop-blur"
      />
    ),
    tr: ({ node, ...props }) => (
      <tr
        {...props}
        className="odd:bg-white even:bg-cyan-50/40 dark:odd:bg-gray-950/20 dark:even:bg-gray-900/20"
      />
    ),
    code: ({ inline, node, ...props }) =>
      inline ? (
        <code
          {...props}
          className="rounded-md bg-gray-900/5 px-2 py-1 font-mono text-sm text-cyan-600 dark:bg-gray-900/80 dark:text-cyan-300"
        />
      ) : (
        <pre className="my-8 overflow-x-auto rounded-2xl bg-gray-950 text-gray-100 p-6 text-sm font-mono shadow-xl shadow-cyan-500/20">
          <code {...props} />
        </pre>
      ),
    a: ({ node, ...props }) => (
      <a
        {...props}
        className="font-semibold text-cyan-600 underline decoration-2 decoration-transparent underline-offset-4 transition hover:decoration-cyan-400 dark:text-cyan-300"
      />
    ),
    img: ({ node, ...props }) => (
      <div className="my-10 overflow-hidden rounded-3xl border border-cyan-100 dark:border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
        <img {...props} className="w-full object-cover" />
      </div>
    ),
    strong: ({ node, ...props }) => (
      <strong
        {...props}
        className="font-semibold text-gray-900 dark:text-white"
      />
    ),
    em: ({ node, ...props }) => (
      <em {...props} className="text-gray-700 dark:text-gray-300" />
    ),
  };

  const shellColors =
    theme === 'dark'
      ? 'bg-gray-950/60 border-cyan-500/20 shadow-[0_20px_80px_rgba(8,145,178,0.25)]'
      : 'bg-white/95 border-cyan-500/10 shadow-[0_35px_120px_rgba(14,165,233,0.18)]';

  return (
    <article
      className={`relative overflow-hidden rounded-[32px] border backdrop-blur-xl ${gradientBorder} ${shellColors} ${className}`}
    >
      <div
        className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-gray-950 via-slate-950/40 to-gray-900/80'
            : 'bg-gradient-to-br from-cyan-50 via-white to-blue-50'
        } opacity-90`}
        aria-hidden="true"
      />

      <div className="relative z-10 px-4 py-8 sm:px-8 md:px-12 md:py-12 space-y-10">
        {imageUrl && (
          <div className="overflow-hidden rounded-3xl border border-white/40 dark:border-white/10">
            <img
              src={imageUrl}
              alt="Blog featured image"
              className="h-96 w-full object-cover"
            />
          </div>
        )}

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={markdownComponents}
        >
          {content.trim()}
        </ReactMarkdown>
      </div>
    </article>
  );
};
