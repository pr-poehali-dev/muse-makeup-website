import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

function useTheme() {
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

const IMAGES = {
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

function useScrollReveal(threshold = 0.15) {
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

function RevealBlur({
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

function RevealTitle({
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

export default function Index() {
  const { toggle } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll('.hero-el').forEach((el) => el.classList.add('is-visible'));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>

      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-6 flex items-center justify-between"
        style={{ background: 'linear-gradient(to bottom, rgba(248,244,239,0.9) 0%, transparent 100%)', backdropFilter: 'blur(0px)' }}
      >
        <span
          className="font-display"
          style={{ fontSize: '1.1rem', letterSpacing: '0.35em', color: 'var(--ink)', fontStyle: 'italic' }}
        >
          MUSE
        </span>
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'Услуги', id: 'services' },
            { label: 'Портфолио', id: 'portfolio' },
            { label: 'Мастер-классы', id: 'masterclass' },
            { label: 'О мастере', id: 'about' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-xs tracking-widest uppercase"
              style={{
                color: 'var(--ink-muted)',
                letterSpacing: '0.15em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="theme-toggle"
            aria-label="Переключить тему"
          >
            <span className="theme-icon theme-icon-sun" style={{ color: 'var(--ink-muted)' }}>
              <Icon name="Sun" size={15} />
            </span>
            <span className="theme-icon theme-icon-moon" style={{ color: 'var(--ink-muted)' }}>
              <Icon name="Moon" size={15} />
            </span>
          </button>
          <button onClick={() => scrollTo('booking')} className="btn-rose px-6 py-3">
            Записаться
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end" style={{ paddingBottom: '80px' }}>
        <div className="absolute inset-0 photo-wrap">
          <img
            src={IMAGES.hero}
            alt="MUSE"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.82) saturate(0.85)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(46,36,32,0.6) 0%, rgba(46,36,32,0.1) 45%, transparent 70%)' }}
          />
        </div>

        <div className="relative z-10 px-8 md:px-16 w-full">
          <div className="reveal-title hero-el">
            <span
              className="font-display block"
              style={{
                fontSize: 'clamp(5rem, 14vw, 13rem)',
                lineHeight: 0.88,
                color: 'var(--cream)',
                fontStyle: 'italic',
                fontWeight: 300,
                letterSpacing: '-0.02em',
              }}
            >
              MUSE
            </span>
          </div>
          <div className="reveal-title hero-el" style={{ transitionDelay: '0.25s' }}>
            <span
              className="block"
              style={{
                fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
                color: 'rgba(248,244,239,0.65)',
                fontWeight: 300,
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                marginTop: '20px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Студия макияжа и визажа · Москва
            </span>
          </div>
          <div className="reveal-blur hero-el" style={{ transitionDelay: '0.55s', marginTop: '36px' }}>
            <button onClick={() => scrollTo('booking')} className="btn-rose px-10 py-4">
              Записаться на консультацию
            </button>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="px-8 md:px-16 py-32" style={{ backgroundColor: 'var(--bg)' }}>
        <RevealTitle delay={0.05}>
          <span
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--ink)',
            }}
          >
            Услуги
          </span>
        </RevealTitle>

        <div
          className="grid md:grid-cols-3 mt-16"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          {[
            {
              num: '01',
              title: 'Свадебный макияж',
              desc: 'Образ, который останется в памяти навсегда. Индивидуальная консультация, пробный макияж, съёмочный день.',
              price: 'от 8 000 ₽',
            },
            {
              num: '02',
              title: 'Вечерний & Event',
              desc: 'Для торжественных выходов, фотосессий, деловых мероприятий. Стойкий образ на весь день.',
              price: 'от 5 000 ₽',
            },
            {
              num: '03',
              title: 'Повседневный',
              desc: 'Лёгкий, натуральный образ. Подбор продуктов и техники под ваш тип кожи и ритм жизни.',
              price: 'от 3 500 ₽',
            },
          ].map((s, i) => (
            <RevealBlur key={s.num} delay={i * 0.12} className="py-12 md:pr-10">
              <div
                className="text-xs mb-6"
                style={{ color: 'var(--rose-dust)', letterSpacing: '0.2em' }}
              >
                {s.num}
              </div>
              <h3
                className="font-display mb-4"
                style={{ fontSize: '1.45rem', fontWeight: 400, fontStyle: 'italic', color: 'var(--ink)' }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: 'var(--ink-muted)', fontWeight: 300, lineHeight: 1.85 }}
              >
                {s.desc}
              </p>
              <div className="text-sm" style={{ color: 'var(--rose-dust)' }}>
                {s.price}
              </div>
            </RevealBlur>
          ))}
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="px-8 md:px-16 pb-32" style={{ backgroundColor: 'var(--bg)' }}>
        <RevealTitle delay={0.05}>
          <span
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--ink)',
              marginBottom: '48px',
              display: 'block',
            }}
          >
            Портфолио
          </span>
        </RevealTitle>

        <div
          className="mt-12"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto',
            gap: '14px',
          }}
        >
          {[
            { src: IMAGES.portfolio[0], style: { gridColumn: 'span 2', gridRow: 'span 2' }, height: '520px' },
            { src: IMAGES.portfolio[1], style: { gridColumn: 'span 1' }, height: '250px' },
            { src: IMAGES.portfolio[2], style: { gridColumn: 'span 1' }, height: '250px' },
            { src: IMAGES.portfolio[3], style: { gridColumn: 'span 1' }, height: '300px' },
            { src: IMAGES.portfolio[4], style: { gridColumn: 'span 1', gridRow: 'span 2' }, height: '614px' },
            { src: IMAGES.portfolio[5], style: { gridColumn: 'span 1' }, height: '300px' },
          ].map((item, i) => (
            <RevealBlur
              key={item.src}
              delay={i * 0.08}
              className="photo-wrap"
              style={item.style as React.CSSProperties}
            >
              <img
                src={item.src}
                alt={`Portfolio ${i + 1}`}
                className="w-full object-cover"
                style={{ height: item.height }}
                loading="lazy"
              />
            </RevealBlur>
          ))}
        </div>
      </section>

      {/* ── MASTERCLASS ── */}
      <section id="masterclass" style={{ backgroundColor: 'var(--bg-alt)' }} className="py-32 px-8 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <RevealBlur delay={0.05}>
              <div
                className="text-xs uppercase mb-6"
                style={{ color: 'var(--rose-dust)', letterSpacing: '0.2em' }}
              >
                Обучение
              </div>
            </RevealBlur>
            <RevealTitle delay={0.1}>
              <span
                className="font-display"
                style={{
                  fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'var(--ink)',
                  display: 'block',
                  marginBottom: '20px',
                }}
              >
                Мастер-классы
              </span>
            </RevealTitle>
            <RevealBlur delay={0.2}>
              <p
                className="text-sm mb-10"
                style={{ color: 'var(--ink-muted)', fontWeight: 300, lineHeight: 1.9 }}
              >
                Научитесь делать профессиональный макияж самостоятельно. Малые группы — максимум 4 человека. Только практика, никакой теории ради теории.
              </p>

              <div className="space-y-0 mb-10">
                {[
                  { title: 'Base — основы макияжа', duration: '4 часа', price: '6 000 ₽' },
                  { title: 'Evening — вечерние образы', duration: '3 часа', price: '5 000 ₽' },
                  { title: 'Intensive — полный курс', duration: '2 дня', price: '18 000 ₽' },
                ].map((mc) => (
                  <div
                    key={mc.title}
                    className="flex justify-between items-center py-5"
                    style={{ borderBottom: '1px solid rgba(180,160,148,0.35)' }}
                  >
                    <div>
                      <div className="text-sm" style={{ color: 'var(--ink)', fontWeight: 400 }}>
                        {mc.title}
                      </div>
                      <div className="text-xs mt-1" style={{ color: 'var(--ink-muted)' }}>
                        {mc.duration}
                      </div>
                    </div>
                    <div className="text-sm" style={{ color: 'var(--rose-dust)' }}>
                      {mc.price}
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={() => scrollTo('booking')} className="btn-rose px-10 py-4">
                Записаться на мастер-класс
              </button>
            </RevealBlur>
          </div>

          <RevealBlur delay={0.15} className="photo-wrap" style={{ height: '580px' }}>
            <img
              src={IMAGES.masterclass}
              alt="Мастер-класс"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </RevealBlur>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-32 px-8 md:px-16" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <RevealBlur delay={0.1} className="photo-wrap order-2 md:order-1" style={{ height: '600px' }}>
            <img
              src={IMAGES.portrait}
              alt="Мастер"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </RevealBlur>

          <div className="order-1 md:order-2">
            <RevealBlur delay={0.05}>
              <div className="text-xs uppercase mb-6" style={{ color: 'var(--rose-dust)', letterSpacing: '0.2em' }}>
                О мастере
              </div>
            </RevealBlur>
            <RevealTitle delay={0.15}>
              <span
                className="font-display"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'var(--ink)',
                  display: 'block',
                  marginBottom: '24px',
                }}
              >
                Анна Воронова
              </span>
            </RevealTitle>
            <RevealBlur delay={0.3}>
              <p
                className="text-sm mb-4"
                style={{ color: 'var(--ink-muted)', fontWeight: 300, lineHeight: 1.9 }}
              >
                Профессиональный визажист с 8-летним опытом. Editorial-съёмки для российских и европейских изданий, свадебные проекты по всему миру.
              </p>
              <p
                className="text-sm mb-12"
                style={{ color: 'var(--ink-muted)', fontWeight: 300, lineHeight: 1.9 }}
              >
                Убеждена: хороший макияж не скрывает — он раскрывает. Каждый образ создаётся в диалоге, а не по шаблону.
              </p>

              <div className="flex gap-12">
                {[
                  { num: '8+', label: 'лет опыта' },
                  { num: '400+', label: 'проектов' },
                  { num: '120+', label: 'учениц' },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      className="font-display"
                      style={{ fontSize: '2.5rem', fontStyle: 'italic', color: 'var(--rose-dust)', lineHeight: 1 }}
                    >
                      {s.num}
                    </div>
                    <div
                      className="text-xs mt-2"
                      style={{ color: 'var(--ink-muted)', letterSpacing: '0.1em' }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </RevealBlur>
          </div>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section id="booking" style={{ backgroundColor: 'var(--bg-alt)' }} className="py-32 px-8 md:px-16">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-16">
            <RevealBlur delay={0.05}>
              <div className="muse-divider mb-10" />
            </RevealBlur>
            <RevealTitle delay={0.1}>
              <span
                className="font-display"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'var(--ink)',
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                Записаться
              </span>
            </RevealTitle>
            <RevealBlur delay={0.2}>
              <p
                className="text-sm"
                style={{ color: 'var(--ink-muted)', fontWeight: 300, lineHeight: 1.85 }}
              >
                Оставьте заявку — свяжемся в течение часа и подберём удобное время
              </p>
            </RevealBlur>
          </div>

          <RevealBlur delay={0.3}>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              <input type="text" placeholder="Ваше имя" className="muse-input" />
              <input type="tel" placeholder="Телефон или Instagram" className="muse-input" />
              <select className="muse-input" defaultValue="" style={{ cursor: 'pointer' }}>
                <option value="" disabled>Выберите услугу</option>
                <optgroup label="Макияж">
                  <option>Свадебный макияж</option>
                  <option>Вечерний макияж</option>
                  <option>Повседневный образ</option>
                </optgroup>
                <optgroup label="Мастер-классы">
                  <option>Мастер-класс Base (4 часа)</option>
                  <option>Мастер-класс Evening (3 часа)</option>
                  <option>Интенсив 2 дня</option>
                </optgroup>
              </select>
              <textarea
                placeholder="Расскажите о вашем образе (необязательно)"
                className="muse-input"
                rows={3}
                style={{ resize: 'none' }}
              />
              <button type="submit" className="btn-rose w-full py-5">
                Отправить заявку
              </button>
            </form>
          </RevealBlur>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-10 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-5"
        style={{ borderTop: '1px solid var(--border-color)', backgroundColor: 'var(--bg)' }}
      >
        <span
          className="font-display"
          style={{ fontSize: '1rem', letterSpacing: '0.3em', color: 'var(--ink)', fontStyle: 'italic' }}
        >
          MUSE
        </span>
        <div className="flex gap-8">
          {['Instagram', 'Telegram', 'WhatsApp'].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs uppercase tracking-wider"
              style={{ color: 'var(--ink-muted)', textDecoration: 'none', letterSpacing: '0.12em' }}
            >
              {s}
            </a>
          ))}
        </div>
        <div className="text-xs" style={{ color: 'var(--ink-muted)', opacity: 0.55 }}>
          © 2026 MUSE Studio · Москва
        </div>
      </footer>
    </div>
  );
}