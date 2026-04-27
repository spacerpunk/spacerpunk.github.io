import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const DEFAULT_TITLE = 'spcrpnk - SPACERPUNK';
const DEFAULT_DESCRIPTION =
  'SPACERPUNK - Music, Visuals, and Creative Technology by Nico Requena. Exploring generative AI, sound design, and visual experiences.';
const DEFAULT_IMAGE = 'https://spacerpunk.github.io/og-image.png';
const BASE_URL = 'https://spacerpunk.github.io';

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url,
  type = 'website',
}: SEOProps) {
  const fullTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
  const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;

  useEffect(() => {
    document.title = fullTitle;

    const metaTags: { [key: string]: string } = {
      description,
      'og:title': fullTitle,
      'og:description': description,
      'og:image': image,
      'og:url': fullUrl,
      'og:type': type,
      'og:site_name': 'SPACERPUNK',
      'twitter:card': 'summary_large_image',
      'twitter:title': fullTitle,
      'twitter:description': description,
      'twitter:image': image,
      'theme-color': '#d92906',
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(
        `meta[name="${name}"], meta[property="${name}"]`,
      ) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement('meta');
        const isProperty =
          name.startsWith('og:') || name.startsWith('twitter:');
        if (isProperty) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }

      meta.content = content;
    });

    let linkCanonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = fullUrl;
  }, [fullTitle, description, image, fullUrl, type]);

  return null;
}
