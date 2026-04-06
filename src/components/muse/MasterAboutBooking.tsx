import { IMAGES, RevealBlur, RevealTitle } from './shared';

interface MasterAboutBookingProps {
  scrollTo: (id: string) => void;
}

export default function MasterAboutBooking({ scrollTo }: MasterAboutBookingProps) {
  return (
    <>
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
    </>
  );
}
