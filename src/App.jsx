import './App.css'

function App() {
  return (
    <div className="page">
      <div className="layout">
        <main>
          <header>
            <p className="label">Project</p>
            <h1>Ticket Management System</h1>
            <p className="desc">I created this simple practice project to learn a few Azure services for the AER intern roles</p>
            <div className="links">
              <a href="https://witty-rock-0cda6d90f.1.azurestaticapps.net" target="_blank">Live Demo →</a>
              <a href="https://github.com/raja-omar/ticket-management-AER" target="_blank">GitHub</a>
            </div>
          </header>

          <section className="arch-section">
            <h2>Architecture</h2>
            <div className="diagram-container">
              <svg viewBox="0 0 580 140" className="diagram">
                <rect x="5" y="50" width="60" height="40" rx="3" fill="#0078d4"/>
                <text x="35" y="74" textAnchor="middle" fill="white" fontSize="10">User</text>
                
                <line x1="65" y1="70" x2="95" y2="70" stroke="#666" strokeWidth="1"/>
                <polygon points="93,67 98,70 93,73" fill="#666"/>
                
                <rect x="100" y="40" width="100" height="60" rx="3" fill="none" stroke="#0078d4" strokeWidth="1.5"/>
                <text x="150" y="58" textAnchor="middle" fill="#0078d4" fontSize="9" fontWeight="600">Static Web Apps</text>
                <text x="150" y="72" textAnchor="middle" fill="#333" fontSize="8">React + Vite</text>
                <text x="150" y="84" textAnchor="middle" fill="#888" fontSize="7">CDN / HTTPS</text>
                
                <line x1="200" y1="70" x2="230" y2="70" stroke="#666" strokeWidth="1"/>
                <polygon points="228,67 233,70 228,73" fill="#666"/>
                
                <rect x="235" y="35" width="115" height="70" rx="3" fill="none" stroke="#ff8c00" strokeWidth="1.5"/>
                <text x="292" y="50" textAnchor="middle" fill="#ff8c00" fontSize="9" fontWeight="600">Azure Functions</text>
                <text x="292" y="64" textAnchor="middle" fill="#333" fontSize="8">GET/POST /tickets</text>
                <text x="292" y="76" textAnchor="middle" fill="#333" fontSize="8">PATCH/DELETE /:id</text>
                <text x="292" y="88" textAnchor="middle" fill="#333" fontSize="8">Comments API</text>
                <text x="292" y="100" textAnchor="middle" fill="#888" fontSize="7">Node.js</text>
                
                <line x1="350" y1="70" x2="380" y2="70" stroke="#666" strokeWidth="1"/>
                <polygon points="378,67 383,70 378,73" fill="#666"/>
                
                <rect x="385" y="40" width="100" height="60" rx="3" fill="none" stroke="#107c10" strokeWidth="1.5"/>
                <text x="435" y="55" textAnchor="middle" fill="#107c10" fontSize="9" fontWeight="600">Azure SQL</text>
                <text x="435" y="70" textAnchor="middle" fill="#333" fontSize="8">Tickets</text>
                <text x="435" y="82" textAnchor="middle" fill="#333" fontSize="8">Comments</text>
                <text x="435" y="94" textAnchor="middle" fill="#888" fontSize="7">Activities</text>
              </svg>
            </div>
          </section>

          <section>
            <h2>What I Learned</h2>
            <ul className="learnings">
              <li>Learned how Azure SQL Database works - setting up firewall rules to allow connections, designing tables with foreign key relationships.</li>
              <li>Understood how Azure Functions handle HTTP requests - how triggers work, cold starts, and why connection pooling matters for database access.</li>
              <li>Got familiar with Azure Static Web Apps - how it serves SPAs, handles routing, and integrates with the CDN.</li>
              <li>Learned to use Azure CLI tools - func CLI for deploying functions, swa CLI for frontend deployments.</li>
            </ul>
          </section>
        </main>

        <aside>
          <div className="sidebar-section">
            <h3>Tech Stack</h3>
            <div className="tech-item">
              <span className="tech-label">Frontend</span>
              <span>React, Vite</span>
            </div>
            <div className="tech-item">
              <span className="tech-label">Backend</span>
              <span>Azure Functions</span>
            </div>
            <div className="tech-item">
              <span className="tech-label">Database</span>
              <span>Azure SQL</span>
            </div>
            <div className="tech-item">
              <span className="tech-label">Hosting</span>
              <span>Static Web Apps</span>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Features</h3>
            <ul className="features-list">
              <li>CRUD for tickets</li>
              <li>Comments per ticket</li>
              <li>Activity log</li>
              <li>Status & priority filters</li>
            </ul>
          </div>
        </aside>
      </div>

      <footer>Raja Muhammed Omar</footer>
    </div>
  )
}

export default App
