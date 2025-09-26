import Layout from '../components/Layout';
import serverInfo from '../data/server-info.json';

export default function Updates() {
  return (
    <Layout title="Оновлення - CraftShade Ukraine">
      <div className="w3-container">
        <h1 className="glow-text">🔄 Оновлення сервера</h1>
        
        <div className="w3-margin-top">
          {serverInfo.updates.map((update) => (
            <div key={update.id} className="minecraft-card w3-card w3-margin w3-padding">
              <div className="w3-row">
                <div className="w3-col s2 m1 w3-center">
                  <i className="w3-icon w3-large" style={{ color: 'var(--minecraft-green)' }}>
                    🔄
                  </i>
                </div>
                <div className="w3-col s10 m11">
                  <h3>{update.title}</h3>
                  <p className="w3-small w3-opacity">
                    <i className="w3-icon">📅</i> {update.date}
                  </p>
                  <p className="w3-margin-top">{update.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
