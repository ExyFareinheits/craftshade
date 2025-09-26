import Layout from '../components/Layout';
import { useState } from 'react';

export default function Home() {
  const [copiedIP, setCopiedIP] = useState(false);

  const serverInfo = {
    serverName: "CraftShade Ukraine",
    version: "1.18.2",
    ip: "play.craftshade.ua",
    discord: "https://discord.gg/craftshade",
    features: [
      "Vanilla+ геймплей без модів",
      "VoiceMod для голосового чату", 
      "Discord інтеграція та боти",
      "Активна українська спільнота",
      "Професійна модерація 24/7",
      "Регулярні івенти та змагання"
    ],
    stats: [
      { label: "Онлайн", value: "127", icon: "👥" },
      { label: "Всього гравців", value: "1,247", icon: "🏆" },
      { label: "Аптайм", value: "99.9%", icon: "⚡" },
      { label: "Підтримка", value: "24/7", icon: "🛡️" }
    ],
    news: [
      {
        id: 1,
        date: "2024-01-15",
        title: "Відкриття CraftShade Ukraine!",
        content: "Ласкаво просимо на найкращий український Minecraft сервер! Приєднуйтесь до нашої спільноти та відкривайте нові пригоди разом.",
        type: "announcement"
      },
      {
        id: 2,
        date: "2024-01-12", 
        title: "PvP турнір цими вихідними!",
        content: "Готуйтесь до епічного турніру з призовим фондом 5000 грн! Реєстрація в нашому Discord сервері.",
        type: "event"
      }
    ]
  };

  const copyIP = async () => {
    try {
      await navigator.clipboard.writeText(serverInfo.ip);
      setCopiedIP(true);
      setTimeout(() => setCopiedIP(false), 2000);
    } catch (err) {
      console.error('Failed to copy IP:', err);
    }
  };

  return (
    <Layout title="CraftShade Ukraine - Головна">
      {/* Hero Section */}
      <section className="hero">
        <div className="w3-container w3-center">
          <h1 className="hero-title fade-in">
            {serverInfo.serverName}
          </h1>
          <p className="hero-subtitle fade-in">
            🇺🇦 Найкращий український Vanilla+ сервер Minecraft {serverInfo.version}
          </p>
          
          {/* Server IP Card */}
          <div className="w3-margin-top fade-in">
            <div className="mc-card" style={{ 
              maxWidth: '500px', 
              margin: '0 auto',
              background: 'var(--dark-tertiary)'
            }}>
              <div className="mc-card-header">
                🎮 IP для підключення
              </div>
              <div className="mc-card-content">
                <div style={{ 
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '24px',
                  color: 'var(--mc-green)',
                  marginBottom: '20px',
                  padding: '15px',
                  background: 'var(--dark-primary)',
                  border: '2px solid var(--dark-border)',
                  letterSpacing: '2px'
                }}>
                  {serverInfo.ip}
                </div>
                <button 
                  className={`mc-btn ${copiedIP ? 'mc-btn-primary' : ''}`}
                  onClick={copyIP}
                >
                  {copiedIP ? '✓ Скопійовано!' : '📋 Копіювати IP'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Server Statistics */}
      <section style={{ padding: '60px 20px' }}>
        <div className="w3-container">
          <div className="stats-grid">
            {serverInfo.stats.map((stat, index) => (
              <div 
                key={index} 
                className="stat-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>
                  {stat.icon}
                </div>
                <span className="stat-number">{stat.value}</span>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Community */}
      <section style={{ padding: '60px 20px', background: 'var(--dark-secondary)' }}>
        <div className="w3-container">
          <div className="w3-row-padding">
            {/* Features */}
            <div className="w3-col l6 m12">
              <div className="mc-card fade-in">
                <div className="mc-card-header">
                  ✨ Особливості сервера
                </div>
                <div className="mc-card-content">
                  <ul className="feature-list">
                    {serverInfo.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-icon">▶</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Community */}
            <div className="w3-col l6 m12">
              <div className="mc-card fade-in">
                <div className="mc-card-header">
                  🔗 Приєднуйся до спільноти
                </div>
                <div className="mc-card-content">
                  <p style={{ marginBottom: '25px', color: 'var(--text-secondary)' }}>
                    Станьте частиною найбільшої української Minecraft спільноти!
                  </p>
                  
                  <a 
                    href={serverInfo.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mc-btn mc-btn-primary w3-block w3-center"
                    style={{ 
                      marginBottom: '15px',
                      background: '#5865F2',
                      borderColor: '#5865F2',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '20px'
                    }}
                  >
                    <span style={{ fontSize: '18px', marginRight: '10px' }}>💬</span>
                    Discord Сервер
                    <div style={{ fontSize: '12px', marginTop: '5px', opacity: '0.8' }}>
                      Понад 1000 активних учасників!
                    </div>
                  </a>
                  
                  <div className="w3-row-padding">
                    <div className="w3-col s6">
                      <button className="mc-btn w3-block w3-center">
                        📺 YouTube
                      </button>
                    </div>
                    <div className="w3-col s6">
                      <button className="mc-btn w3-block w3-center">
                        📱 Telegram
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section style={{ padding: '60px 20px' }}>
        <div className="w3-container">
          <h2 className="mc-card-header w3-center w3-margin-bottom" 
              style={{ fontSize: '20px', border: 'none' }}>
            📰 Останні новини
          </h2>
          
          <div className="w3-row-padding">
            {serverInfo.news.map((item, index) => (
              <div key={item.id} className="w3-col l6 m12">
                <div className="mc-card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '15px' 
                  }}>
                    <div style={{ 
                      fontSize: '32px', 
                      marginRight: '15px',
                      width: '50px',
                      textAlign: 'center'
                    }}>
                      {item.type === 'announcement' ? '📢' : '🏆'}
                    </div>
                    <div>
                      <h3 className="mc-card-header" style={{ 
                        margin: '0', 
                        fontSize: '16px',
                        border: 'none'
                      }}>
                        {item.title}
                      </h3>
                      <div className="text-secondary" style={{ fontSize: '12px' }}>
                        📅 {item.date}
                      </div>
                    </div>
                  </div>
                  <div className="mc-card-content">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
