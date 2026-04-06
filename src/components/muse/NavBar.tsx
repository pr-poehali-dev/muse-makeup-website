import Icon from '@/components/ui/icon';

interface NavBarProps {
  toggle: () => void;
  scrollTo: (id: string) => void;
}

export default function NavBar({ toggle, scrollTo }: NavBarProps) {
  return (
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
  );
}
