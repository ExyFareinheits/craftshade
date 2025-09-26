import Layout from '../components/Layout';
import serverInfo from '../data/server-info.json';

export default function News() {
  return (
    <Layout title="Новини - CraftShade Ukraine">
      <div className="w3-container">
        <h1 className="glow-text">📰 Новини сервера</h1>
        
        <div className="w3-row-padding w3-margin-top">
          {serverInfo.news.map((item) => (
            <div key={item.id} className="w3-col l6 m12 w3-margin-bottom">
              <div className="minecraft-card w3-card w3-padding">
                <h3>{item.title}</h3>
                <p className="w3-small w3-opacity">
                  <i className="w3-icon">📅</i> {item.date}
                </p>
                <p className="w3-margin-top">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
