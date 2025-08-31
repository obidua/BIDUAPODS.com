import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  structuredData?: object;
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "BIDUA Pods | Premium Capsule Beds & Sleeping Pods in India",
  description = "BIDUA Pods supplies premium capsule beds and sleeping pods for hospitals, hostels, airports and offices. Imported & Made-in-India options with intelligent LED controls, security features, and fresh-air ventilation. Enquire for pricing and delivery.",
  canonical = "https://biduapods.com/",
  ogTitle,
  ogDescription,
  ogImage = "/image.png",
  ogUrl,
  twitterCard = "summary_large_image",
  structuredData,
  noIndex = false
}) => {
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;
  const finalOgUrl = ogUrl || canonical;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="BIDUA Pods" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;