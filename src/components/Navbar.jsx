import { useState } from "react";
import { navItems } from "@/app/datos";

export default function Navbar({ currentPath, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (href) => {
    setIsOpen(false);
    onNavigate(href);
  };

  return (
    <header className="topbar">
      <div className="topbar-inner shell">
        <button className="brand" onClick={() => handleNav("/")}>
          LATAMTech Summit 2026
        </button>

        <nav className="desktop-nav" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.href}
              className={item.href === currentPath ? "nav-link active" : "nav-link"}
              onClick={() => handleNav(item.href)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="topbar-actions">
          <button className="button button-primary">Register Interest</button>
          <button
            className="menu-toggle"
            aria-label="Open menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="mobile-nav shell">
          {navItems.map((item) => (
            <button
              key={item.href}
              className={item.href === currentPath ? "nav-link active" : "nav-link"}
              onClick={() => handleNav(item.href)}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </header>
  );
}
