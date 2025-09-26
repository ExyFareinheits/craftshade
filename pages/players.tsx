import Layout from '../components/Layout';
import serverInfo from '../data/server-info.json';

export default function Players() {
  return (
    <Layout title="Гравці - CraftShade Ukraine">
      <div className="w3-container">
        <h1 className="glow-text">👥 Список гравців</h1>
        
        <div className="w3-row-padding w3-margin-top">
          {serverInfo.players.map((player, index) => (
            <div key={index} className="w3-col l4 m6 s12 w3-margin-bottom">
              <div className="minecraft-card w3-card w3-padding w3-center">
                <div className="w3-circle w3-large w3-margin-bottom" 
                     style={{ 
                       width: '80px', 
                       height: '80px', 
                       background: 'var(--minecraft-green)',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       margin: '0 auto'
                     }}>
                  <i className="w3-icon w3-xlarge">👤</i>
                </div>
                <h4>{player.username}</h4>
                <p className="w3-tag w3-small" 
                   style={{ background: 'var(--minecraft-gold)' }}>
                  {player.role}
                </p>
                <p className="w3-small w3-opacity w3-margin-top">
                  <i className="w3-icon">📅</i> Приєднався: {player.joinDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
