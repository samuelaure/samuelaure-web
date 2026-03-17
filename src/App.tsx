import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import BookingModal from './components/BookingModal';
import HomePage from './pages/HomePage';
import HablemosPage from './pages/HablemosPage';
import { Navigate, Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import './styles/index.css';

function App() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    }, [theme]);

    return (
        <Router>
            <BookingProvider>
                <div className="app">
                    <header className="main-header">
                        <div className="header-content">
                            <Link to="/" className="logo-link">
                                <h1 className="logo">Samuel Aure</h1>
                            </Link>
                            <button
                                className="theme-toggle"
                                onClick={toggleTheme}
                                title={theme === 'light' ? 'Modo Noche' : 'Modo Día'}
                            >
                                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                                <span>{theme === 'light' ? 'TECH' : 'LIFE'}</span>
                            </button>
                            <Link to="/hablemos" className="header-cta">
                                Conversemos
                            </Link>
                        </div>
                    </header>

                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/hablemos" element={<HablemosPage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>

                    <BookingModal />
                </div>

                <style>{`
          .main-header {
            padding: 2rem;
            position: sticky;
            top: 0;
            background: var(--bg-color);
            z-index: 100;
            transition: var(--transition-smooth);
            border-bottom: 1px solid rgba(128, 128, 128, 0.1);
          }

          .header-content {
            max-width: var(--max-width-content);
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .logo {
            font-size: 1.25rem;
            letter-spacing: 0.1em;
            font-weight: 700;
          }

          .theme-toggle {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.6rem 1.2rem;
            background: var(--text-primary);
            color: var(--bg-color);
            border: none;
            cursor: pointer;
            font-family: 'Oswald', sans-serif;
            font-size: 0.75rem;
            letter-spacing: 0.15em;
            font-weight: 600;
            transition: var(--transition-fast);
            border-radius: 4px;
          }

          .theme-toggle:hover {
            transform: scale(1.05);
            opacity: 0.9;
          }

          @media (max-width: 768px) {
            .main-header { padding: 1.5rem; }
            .theme-toggle span { display: none; }
          }

          .logo-link {
            text-decoration: none;
            color: inherit;
          }

          .header-cta {
            margin-left: 1.5rem;
            text-decoration: none;
            color: var(--text-primary);
            font-family: 'Oswald', sans-serif;
            font-weight: 600;
            font-size: 0.85rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 0.6rem 1.2rem;
            border: 1px solid var(--text-primary);
            border-radius: 4px;
            transition: var(--transition-fast);
          }

          .header-cta:hover {
            background: var(--text-primary);
            color: var(--bg-color);
          }
        `}</style>
            </BookingProvider>
        </Router>
    );
}

export default App;
