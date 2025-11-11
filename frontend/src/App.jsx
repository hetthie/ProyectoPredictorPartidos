import { useState } from 'react';
import './App.css';

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const testConnection = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch('http://localhost:3000/api/test');
      
      if (!res.ok) {
        throw new Error('Error en la conexión con el backend');
      }
      
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">⚽ Predictor de Fútbol</h1>
        <p className="subtitle">Sistema de Predicción de Partidos</p>
        
        <div className="test-section">
          <button 
            onClick={testConnection}
            disabled={loading}
            className="test-button"
          >
            {loading ? '🔄 Conectando...' : '🔌 Probar Conexión con Backend'}
          </button>
        </div>

        {error && (
          <div className="response-box error">
            <h3>❌ Error</h3>
            <p>{error}</p>
            <small>Asegúrate de que el backend esté corriendo en puerto 3000</small>
          </div>
        )}

        {response && (
          <div className="response-box success">
            <h3>✅ Respuesta del Backend</h3>
            <div className="response-content">
              <p><strong>Mensaje:</strong> {response.message}</p>
              <p><strong>Estado:</strong> {response.status}</p>
              <p><strong>Timestamp:</strong> {new Date(response.timestamp).toLocaleString()}</p>
            </div>
          </div>
        )}

        <div className="info-section">
          <h3>ℹ️ Información del Sistema</h3>
          <ul>
            <li>Frontend: React + Vite (Puerto 5173)</li>
            <li>Backend: Node.js + Express (Puerto 3000)</li>
            <li>ML: Python + UV</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;