import React from 'react';

// Main App component
const App = () => {
  return (
    // The main container for the entire application, using custom CSS classes.
    // This div will now rely on styles defined in index.css for layout and appearance.
    <div className="app-container">
      {/* Header Section */}
      <header className="main-header">
        <div className="header-content">
          {/* Top Row: Logo and Website Name */}
          <div className="logo-section">
            {/* Logo - using a placeholder image */}
            <img
              src="/src/media/logo.png" // Path to the logo image
              alt="Website Logo"
              className="website-logo"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/48x48/cccccc/333333?text=Error"; }}
            />
            {/* Website Name */}
            <h1 className="website-name">My Awesome Website</h1>
          </div>

          {/* Navigation Links */}
          <nav className="main-nav">
            <ul className="nav-list">
              <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link">About</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Main content card/section */}
        <section className="content-section">
          <h2 className="section-title">Welcome to Your New Project!</h2>
          <p className="section-paragraph">
            This is a foundational React application, styled with traditional CSS.
            Feel free to modify this content, add new components, and integrate your unique features.
          </p>
          <p className="section-paragraph">
            It's designed with responsiveness in mind, using CSS media queries, so it should look great on
            desktops, tablets, and mobile devices. Start by editing the `App.js` file and `index.css`!
          </p>
        </section>

        {/* Example of another section (optional) */}
        <section className="content-section secondary-section">
          <h3 className="section-subtitle">Next Steps:</h3>
          <ul className="next-steps-list">
            <li className="list-item">Explore the `App.js` file and modify its content.</li>
            <li className="list-item">Add new React components for different sections or features.</li>
            <li className="list-item">Integrate data fetching (e.g., from an API) into your components.</li>
            <li className="list-item">Customize the CSS in `index.css` to match your brand's aesthetic.</li>
            <li className="list-item">Implement routing if your website has multiple pages.</li>
          </ul>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="main-footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} My Awesome Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App; // Export the App component