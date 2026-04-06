import React, { useEffect, useRef, useState } from 'react';

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1400&q=90&fit=crop',
  portrait: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=85&fit=crop',
  masterclass: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=700&q=85&fit=crop',
  portfolio: [
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=85&fit=crop',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=85&fit=crop',
    'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=85&fit=crop',
    'https://images.unsplash.com/photo-1571646750134-36e85fcb7b59?w=600&q=85&fit=crop',
    'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&q=85&fit=crop',
    'https://images.unsplash.com/photo-1549236177-f9b0031bf2ad?w=600&q=85&fit=crop',
  ],
};

export function useTheme() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('muse-theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('muse-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export function RevealBlur({
  children,
  className = '',
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal-blur ${className}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}

export function RevealTitle({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`reveal-title ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span>{children}</span>
    </div>
  );
}