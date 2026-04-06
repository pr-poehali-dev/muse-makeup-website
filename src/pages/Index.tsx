import { useEffect } from 'react';
import { useTheme } from '@/components/muse/shared';
import NavBar from '@/components/muse/NavBar';
import HeroServices from '@/components/muse/HeroServices';
import MasterAboutBooking from '@/components/muse/MasterAboutBooking';

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
      <NavBar toggle={toggle} scrollTo={scrollTo} />
      <HeroServices scrollTo={scrollTo} />
      <MasterAboutBooking scrollTo={scrollTo} />
    </div>
  );
}
