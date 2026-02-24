
import React, { useEffect } from 'react';
import { useView } from '../contexts/ViewContext';
import { useLanguage } from '../contexts/LanguageContext';
import { metaData } from '../utils/metaData';

const SEO: React.FC = () => {
  const { view } = useView();
  const { language } = useLanguage();

  useEffect(() => {
    // Get metadata for current language and view
    // Fallback to English if the specific language/view combination is missing
    const currentMeta = metaData[language]?.[view] || metaData['en']?.[view];

    if (currentMeta) {
      // 1. Update Document Title
      document.title = currentMeta.title;

      // Helper function to update or create meta tags
      const updateMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
        let tag = document.querySelector(`meta[${attribute}="${name}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute(attribute, name);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      };

      // 2. Update Standard SEO Meta Description
      updateMetaTag('description', currentMeta.description);

      // 3. Update Open Graph (Social Media) Tags
      updateMetaTag('og:title', currentMeta.title, 'property');
      updateMetaTag('og:description', currentMeta.description, 'property');
      updateMetaTag('og:type', 'website', 'property');
      
      // Determine URL based on hash routing
      const baseUrl = 'https://www.skylva.com';
      const path = window.location.hash || '/';
      updateMetaTag('og:url', `${baseUrl}/${path}`, 'property');

      // Set a default high-quality share image (can be customized per view if needed in metaData)
      updateMetaTag('og:image', `${baseUrl}/images/Hero.webp`, 'property');
    }
  }, [view, language]);

  return null; // Side-effect only component
};

export default SEO;
