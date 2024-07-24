import Head from 'next/head';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import KeyFeaturesSection from './components/KeyFeaturesSection';
import ShowcaseSection from './components/ShowcaseSection';
import AboutSection from './components/AboutSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>npm faves - Chrome Extension</title>
        <meta name="description" content="A Chrome extension to manage your favorite npm packages" />
        <meta name="keywords" content="npm, chrome extension, package management, open source, npm faves" />
        <meta name="author" content="npm faves Team" />
        <meta property="og:title" content="npm faves - Chrome Extension" />
        <meta property="og:description" content="A Chrome extension to manage your favorite npm packages" />
        <meta property="og:url" content="https://chromewebstore.google.com/detail/npm-faves/lgcedkogdjoickahfdegicgmbkloaaem" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white min-h-screen text-slate-700">
        <NavBar />
        <HeroSection />
        <ShowcaseSection />
        <KeyFeaturesSection />
        <AboutSection />
        <Footer />
      </main>
    </div>
  );
}
