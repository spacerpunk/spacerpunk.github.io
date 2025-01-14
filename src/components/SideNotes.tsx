// src/components/SideNotes.tsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface HeadingItem {
  id: string;
  title: string;
}

const LINK_BASE_STYLES = "flex items-center p-2 transition-colors duration-200 font-light text-sm";
const LINK_HOVER_STYLES = "hover:text-nasared";

const SideNotes = () => {
  const location = useLocation();
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const h1Elements = document.querySelectorAll('h2');
    const headingItems: HeadingItem[] = Array.from(h1Elements).map((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
      return {
        id: heading.id,
        title: heading.textContent || ''
      };
    });
    setHeadings(headingItems);
  }, [location]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 right-0 bg-white h-screen shadow-lg transition-all duration-300 
        ${isExpanded ? 'w-64' : 'w-16'} z-10`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-4">
        <div className="space-y-2">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              className={`${LINK_BASE_STYLES} ${LINK_HOVER_STYLES}
                w-full text-left
                ${!isExpanded ? 'justify-center' : ''}`}
            >
              {isExpanded ? (
                <span className="ml-2">{heading.title}</span>
              ) : (
                <span className="w-4 overflow-hidden">
                  {heading.title[0]}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SideNotes;