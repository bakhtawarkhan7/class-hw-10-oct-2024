// src/app/page.tsx

import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
