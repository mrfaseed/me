import { useEffect } from 'react';

const useSEO = ({
  title = "Faseed - Android Developer",
  description = "Faseed — Android Developer. I design and build smooth Android apps with real-world performance.",
  url = "https://mohamedfaseed.vercel.app",
  image = "https://mohamedfaseed.vercel.app/og-image.jpg",
  type = "website"
} = {}) => {
  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // Helper function to update or create meta tags safely
    const setMetaTag = (attr, key, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard meta tags
    setMetaTag('name', 'description', description);

    // 3. OpenGraph Tags (Facebook/LinkedIn)
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', url);
    setMetaTag('property', 'og:image', image);

    // 4. Twitter Tags
    setMetaTag('property', 'twitter:title', title);
    setMetaTag('property', 'twitter:description', description);
    setMetaTag('property', 'twitter:image', image);
    setMetaTag('property', 'twitter:url', url);
    setMetaTag('property', 'twitter:card', 'summary_large_image');

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

  }, [title, description, url, image, type]);
};

export default useSEO;
