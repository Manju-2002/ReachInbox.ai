import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useTheme } from './context/ThemeContext'; // Ensure this path is correct
import HomePage from './pages/HomePage'; // Ensure this path is correct
import LoginPage from './pages/LoginPage'; // Ensure this path is correct
import './styles.css'; // Import your styles here

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className={`app ${theme}`}>
        <header>
          <h1>Welcome to ReachInbox</h1>
          <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
