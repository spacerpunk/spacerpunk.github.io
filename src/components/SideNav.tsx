// src/components/SideNav.tsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MenuItem {
  title: string;
  path?: string;
  icon?: React.ReactNode;
  submenu?: MenuItem[];
}

interface SubMenuProps {
  item: MenuItem;
  isActive?: boolean;
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}

const LINK_BASE_STYLES =
  'flex items-center p-2 transition-colors duration-200 font-bold';
const LINK_HOVER_STYLES = 'hover:bg-nasared hover:text-white';
const ACTIVE_STYLES = 'bg-nasared text-white text-sm font-semibold';
const INACTIVE_STYLES = 'text-white bg-black-900 font-normal text-sm';
const SUBMENU_LINK_STYLES = `${LINK_BASE_STYLES} text-sm font-normal`;

const SubMenu = ({ item, isActive, isOpen, onToggle }: SubMenuProps) => {
  const location = useLocation();

  return (
    <div className="mb-2">
      <button
        className={`${LINK_BASE_STYLES} w-full justify-between ${LINK_HOVER_STYLES}
          ${isActive ? ACTIVE_STYLES : INACTIVE_STYLES}`}
        onClick={() => onToggle(!isOpen)}
      >
        <span className="flex items-center gap-2">
          {item.icon}
          {item.title}
        </span>
        <svg
          className={`h-4 w-4 transition-transform duration-200 
            ${isOpen ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && item.submenu && (
        <div className="ml-4 mt-2 space-y-2">
          {item.submenu.map((subItem) => {
            const isSubItemActive = location.pathname === subItem.path;
            return (
              <Link
                key={subItem.path}
                to={subItem.path ?? ''}
                className={`${SUBMENU_LINK_STYLES} ${LINK_HOVER_STYLES}
                  ${isSubItemActive ? ACTIVE_STYLES : INACTIVE_STYLES}`}
              >
                {subItem.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

const SideNav = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      title: 'SPCRPNK',
      path: '/home',
      icon: <span></span>,
    },
    {
      title: 'WORK',
      icon: <span></span>,
      submenu: [
        { title: 'AI', path: '/work/Generative' },
        { title: '@Monks', path: '/work/monks' },
        { title: 'Dove', path: '/work/dove' },
        { title: 'ATEA', path: '/work/atea' },
        { title: '@Tungsteno Films', path: '/work/Tungsteno' },
      ],
    },
    {
      title: 'PROJECTS',
      icon: <span></span>,
      submenu: [
        { title: 'Anomaly', path: '/projects/Anomaly' },
        { title: 'The Noise', path: '/projects/TheNoise' },
        { title: 'The Tape', path: '/projects/TheTape' },
        { title: 'Trench Run', path: '/projects/TrenchRun' },
        { title: 'The Glitch', path: '/projects/TheGlitch' },
        { title: 'Yutani-Log', path: '/projects/YutaniLog' },
      ],
    },
    // {
    //   title: 'TECH LABS',
    //   path: '/Labs',
    //   icon: <span></span>,
    // },
    // {
    //   title: 'Reel',
    //   path: '/Reel',
    //   icon: <span></span>,
    // },
    {
      title: 'ABOUT',
      path: '/about',
      icon: <span></span>,
    },
  ];

  return (
    <nav className="bg-black-900 h-screen w-64 shadow-lg">
      <div className="p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <div key={item.path ?? item.title}>
                {item.submenu ? (
                  <SubMenu
                    item={item}
                    isActive={isActive}
                    isOpen={activeDropdown === item.title}
                    onToggle={(isOpen) => {
                      setActiveDropdown(isOpen ? item.title : null);
                    }}
                  />
                ) : (
                  <Link
                    to={item.path ?? ''}
                    className={`${LINK_BASE_STYLES} ${LINK_HOVER_STYLES}
                      ${isActive ? ACTIVE_STYLES : INACTIVE_STYLES}`}
                  >
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
