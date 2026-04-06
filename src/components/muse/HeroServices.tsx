import React from 'react';
import { IMAGES, RevealBlur, RevealTitle } from './shared';

interface HeroServicesProps {
  scrollTo: (id: string) => void;
}

export default function HeroServices({ scrollTo }: HeroServicesProps) {
  return (
    <>
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
    </>
  );
}