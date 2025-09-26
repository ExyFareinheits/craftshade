import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'CraftShade Ukraine' }: LayoutProps) {
  const [isDark, setIsDark] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem('theme');
    setIsDark(theme !== 'light');

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const navItems = [
    { href: '/', label: 'Головна', icon: '🏠' },
    { href: '/news', label: 'Новини', icon: '📰' },
    { href: '/updates', label: 'Оновлення', icon: '🔄' },
    { href: '/players', label: 'Гравці', icon: '👥' }
  ];

  if (!mounted) return null;

  return (
    <div className={isDark ? '' : 'light-theme'}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="CraftShade Ukraine - Український Vanilla+ Minecraft сервер 1.18.2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Enhanced Navigation Bar */}
      <nav 
        className={`w3-top navbar ${scrolled ? 'scrolled' : ''} slide-down`}
        style={{
          background: 'var(--glass-dark)',
          borderBottom: scrolled ? '2px solid var(--mc-green)' : '1px solid var(--dark-border)',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="w3-bar" style={{ height: '70px', padding: '0 20px' }}>
          {/* Mobile Menu Button */}
          <button 
            className="w3-button w3-hide-large nav-link"
            onClick={() => setSidebarOpen(true)}
            style={{ padding: '12px' }}
          >
            <span style={{ fontSize: '18px' }}>☰</span>
          </button>

          {/* Brand */}
          <div 
            className="w3-bar-item navbar-brand hover-scale" 
            style={{ paddingTop: '15px' }}
          >
            CraftShade Ukraine
          </div>

          {/* Desktop Navigation */}
          <div className="w3-hide-small w3-right" style={{ paddingTop: '8px' }}>
            {navItems.map((item, index) => (
              <div
                key={item.href}
                className="fade-in"
                style={{ 
                  display: 'inline-block',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <Link
                  href={item.href}
                  className={`nav-link w3-bar-item ${router.pathname === item.href ? 'active' : ''}`}
                >
                  <span className="w3-hide-medium">{item.icon}</span> {item.label}
                </Link>
              </div>
            ))}
            
            {/* Server Status */}
            <div 
              className="server-status w3-margin-left scale-in"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="status-indicator"></div>
              ОНЛАЙН
            </div>

            {/* Theme Toggle */}
            <button 
              className="nav-link w3-margin-left rotate-hover" 
              onClick={toggleTheme}
              style={{ border: 'none', background: 'transparent' }}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Sidebar */}
      <nav 
        className={`w3-sidebar sidebar ${sidebarOpen ? 'sidebar-open slide-in-left' : 'sidebar-closed'}`}
        style={{ 
          width: '280px',
          display: sidebarOpen ? 'block' : 'none'
        }}
      >
        {/* Sidebar Header */}
        <div 
          className="sidebar-header fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="sidebar-title">CraftShade</div>
          <div className="sidebar-subtitle">Ukraine Server</div>
          <button 
            className="w3-button mc-btn hover-scale"
            onClick={() => setSidebarOpen(false)}
            style={{ 
              position: 'absolute', 
              top: '15px', 
              right: '15px',
              padding: '8px 12px',
              fontSize: '12px'
            }}
          >
            ✕
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className="sidebar-nav">
          {navItems.map((item, index) => (
            <div
              key={item.href}
              className="slide-in-left"
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              <Link
                href={item.href}
                className={`sidebar-link ${router.pathname === item.href ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sidebar-icon">{item.icon}</span>
                {item.label}
              </Link>
            </div>
          ))}
          
          {/* Mobile Theme Toggle */}
          <button 
            className="sidebar-link w3-block slide-in-left"
            onClick={toggleTheme}
            style={{ 
              border: 'none', 
              background: 'transparent', 
              textAlign: 'left',
              animationDelay: '0.7s'
            }}
          >
            <span className="sidebar-icon">{isDark ? '☀️' : '🌙'}</span>
            {isDark ? 'Світла тема' : 'Темна тема'}
          </button>
        </div>

        {/* Server Status in Sidebar */}
        <div 
          className="fade-in"
          style={{ 
            padding: '20px', 
            borderTop: '2px solid var(--dark-border)',
            animationDelay: '0.8s'
          }}
        >
          <div className="server-status">
            <div className="status-indicator"></div>
            Сервер онлайн
          </div>
          <div style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '12px', 
            marginTop: '8px' 
          }}>
            127 гравців онлайн
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div 
        className="w3-main fade-in" 
        style={{ 
          marginTop: '70px',
          animationDuration: '0.5s'
        }}
      >
        <div style={{ minHeight: 'calc(100vh - 70px)' }}>
          {children}
        </div>

        {/* Enhanced Footer */}
        <footer 
          className="slide-up"
          style={{ 
            background: 'var(--dark-secondary)', 
            borderTop: '2px solid var(--dark-border)',
            padding: '50px 20px',
            textAlign: 'center'
          }}
        >
          <div 
            className="mc-card-header bounce-in" 
            style={{ 
              marginBottom: '25px', 
              fontSize: '18px',
              animationDelay: '0.2s'
            }}
          >
            CraftShade Ukraine
          </div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '25px' }}>
            © 2024 CraftShade Ukraine. Найкращий український Minecraft сервер.
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            {['Discord', 'Telegram', 'YouTube'].map((social, index) => (
              <button 
                key={social}
                className="mc-btn slide-up hover-scale" 
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                {social}
              </button>
            ))}
          </div>
        </footer>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="w3-overlay w3-hide-large fade-in" 
          onClick={() => setSidebarOpen(false)}
          style={{ 
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(4px)',
            animationDuration: '0.3s'
          }}
        />
      )}
    </div>
  );
}
