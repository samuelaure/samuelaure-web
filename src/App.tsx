import { useState, useEffect } from 'react';
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
        <div className="app">
            <header style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Samuel Auré</h1>
                <button
                    onClick={toggleTheme}
                    style={{
                        padding: '0.5rem 1rem',
                        cursor: 'pointer',
                        fontFamily: 'Oswald',
                        background: 'var(--text-primary)',
                        color: 'var(--bg-color)',
                        border: 'none',
                        borderRadius: '4px'
                    }}
                >
                    {theme === 'light' ? 'MODO NOCHE (TECH)' : 'MODO DÍA (LIFE)'}
                </button>
            </header>

            <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                <section>
                    <h2>El Fundador Multidimensional</h2>
                    <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
                        Explorando la intersección entre la libertad personal, los sistemas digitales y las sociedades estratégicas.
                    </p>
                </section>
            </main>
        </div>
    );
}

export default App;
