import { useState, useMemo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Home, Cpu, Cog, Rocket } from 'lucide-react';

const NAV_ITEMS = [
  { path: '/', label: 'Dashboard', icon: Home },
  { path: '/electrical', label: 'Electrical', icon: Cpu },
  { path: '/mechanical', label: 'Mechanical', icon: Cog },
  { path: '/levitation-propulsion', label: 'Levitation & Propulsion', icon: Rocket },
];

const NavLink = ({ item, isActive, onClick }) => (
  <Link
    to={item.path}
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 ${
      isActive
        ? 'bg-primary text-primary-foreground shadow-lg'
        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
    }`}
  >
    <item.icon className="size-5" />
    <span className="font-medium">{item.label}</span>
  </Link>
);

export function SideNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleNavClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <button
        onClick={handleToggle}
        className="fixed top-4 left-4 z-99 p-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        aria-label="Toggle navigation"
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleNavClick}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      <motion.nav
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed left-0 top-10 bottom-0 w-64 bg-card border-r border-border z-40 p-6 flex flex-col"
      >
        <div className="mt-16 flex-1">
          <h2 className="mb-6 text-foreground"></h2>
          <div className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                item={item}
                isActive={location.pathname === item.path}
                onClick={handleNavClick}
              />
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
