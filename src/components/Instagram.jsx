import React from "react";
import logo from "../assets/icons/logo.png";

export default function Instagram({ username = "seizancompany", posts = [], theme = "light" }) {
  const profileUrl = `https://www.instagram.com/${username}/`;
  const isDark = theme === "dark";

  const cardClass = isDark
    ? "rounded-2xl border border-slate-800/90 bg-[#0a0f1e] p-6 sm:p-8 shadow-xl"
    : "rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-md";

  const handleClass = isDark
    ? "text-lg font-semibold text-white hover:text-red-400"
    : "text-lg font-semibold text-gray-900 hover:underline";

  const sublabelClass = isDark ? "text-sm text-slate-400" : "text-sm text-gray-500";

  const emptyTextClass = isDark ? "text-slate-400" : "text-gray-500";

  // Derive a post shortcode/thumbnail URL from an Instagram post URL.
  // e.g. https://www.instagram.com/p/ABC123/ → shortcode = ABC123
  const getShortcode = (url) => {
    const match = url.match(/\/p\/([A-Za-z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const getThumbnailUrl = (url) => {
    const shortcode = getShortcode(url);
    if (!shortcode) return null;
    // Instagram's public thumbnail endpoint (works without auth for public posts)
    return `https://www.instagram.com/p/${shortcode}/media/?size=m`;
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className={cardClass}>
        {/* Header */}
        <div className="flex items-center gap-4 flex-wrap">
          <img
            src={logo}
            alt="logo"
            className={`h-12 w-12 shrink-0 rounded-full ring-1 ${
              isDark ? "ring-white/15" : "ring-black/10"
            }`}
          />
          <div className="min-w-0">
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={handleClass}
            >
              @{username}
            </a>
            <div className={sublabelClass}>Instagram</div>
          </div>
          <div className="ml-auto shrink-0">
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600 transition-colors"
            >
              Follow
            </a>
          </div>
        </div>

        {/* Posts grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts && posts.length > 0 ? (
            posts.map((postUrl, i) => {
              const shortcode = getShortcode(postUrl);
              const thumbUrl = getThumbnailUrl(postUrl);

              return (
                <a
                  key={i}
                  href={postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative block overflow-hidden rounded-xl aspect-square ${
                    isDark
                      ? "bg-slate-800 ring-1 ring-slate-700"
                      : "bg-gray-100 ring-1 ring-gray-200"
                  }`}
                >
                  {thumbUrl ? (
                    <img
                      src={thumbUrl}
                      alt={`Instagram post ${shortcode}`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback: hide broken img and show placeholder
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextSibling.style.display = "flex";
                      }}
                    />
                  ) : null}

                  {/* Fallback placeholder (also shown on img error) */}
                  <div
                    className={`absolute inset-0 items-center justify-center ${
                      isDark ? "bg-slate-800 text-slate-500" : "bg-gray-100 text-gray-400"
                    }`}
                    style={{ display: thumbUrl ? "none" : "flex" }}
                  >
                    {/* Instagram icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 opacity-40"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 rounded-xl" />
                </a>
              );
            })
          ) : (
            <div
              className={`sm:col-span-2 lg:col-span-3 flex flex-col items-center justify-center py-16 gap-3 ${emptyTextClass}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 opacity-30"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="text-sm">No posts to display</span>
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-red-500 hover:underline"
              >
                View on Instagram →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
