import { frontendUrl } from "@/utils/urls";

export function generateMetadata(seoData, nofollow, path) {
  const sanitizedPath = path?.replace("/index", "");
  const canonicalUrl = `${frontendUrl}${sanitizedPath}`;

  const robotsDirective = nofollow
    ? { index: false, follow: false }
    : { index: true, follow: true };

  return {
    title: seoData?.title || 'Shantira Realty',
    description: seoData?.description || 'Shantira Realty',
    keywords: seoData?.keywords || '',
    // metadataBase: new URL(frontendUrl),
    icons: {
      icon: [
    // { url: '/favicon.ico' }, // Google reads this
    { url: 'https://www.shantirarealty.com/favicon.png', sizes: '32x32', type: 'image/png' },
    { url: 'https://www.shantirarealty.com/favicon.png', sizes: '16x16', type: 'image/png' },
  ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { rel: 'manifest', url: '/' },
      ],
    },
    themeColor: '#63af51',
    alternates: {
      canonical: canonicalUrl,
    },
    robots: robotsDirective,
    openGraph: {
      title: seoData?.ogTitle || seoData?.title || 'Shantira Realty',
      description: seoData?.ogDescription || seoData?.description || 'Shantira Realty',
      url: canonicalUrl,
      siteName: seoData?.siteName || 'Shantira Realty',
      locale: seoData?.locale || 'en_US',
      type: seoData?.type || 'website',
      modifiedTime: seoData?.modifiedTime || '',
      images: seoData?.images || [
        {
          url: 'https://www.shantirarealty.com/Logo.png',
          width: 479,
          height: 482,
          type: 'image/png',
          alt: 'Shantira Realty',
        },
      ],
    },
    twitter: {
      card: seoData?.twitterCard || 'summary_large_image',
      title: seoData?.twitterTitle || seoData?.title || 'Shantira Realty',
      description: seoData?.twitterDescription || seoData?.description || 'Shantira Realty',
      images: seoData?.twitterImages || ['https://www.shantirarealty.com/Logo.png'],
    },
  };
}