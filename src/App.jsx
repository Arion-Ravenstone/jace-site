import React from 'react';

// Main App component
const App = () => {
  return (
    // The main container for the entire application, using Tailwind CSS for full height and responsive design.
    // 'min-h-screen' ensures it takes at least the full viewport height.
    // 'bg-gray-100' sets a light gray background.
    // 'font-sans' applies a sans-serif font, commonly 'Inter' by default with Tailwind.
    // 'text-gray-800' sets a default text color.
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      {/* Header Section */}
      {/* 'bg-blue-600' for a solid blue background. */}
      {/* 'text-white' for white text. */}
      {/* 'p-4' for padding. */}
      {/* 'shadow-md' for a subtle shadow effect. */}
      {/* 'rounded-b-lg' for rounded bottom corners. */}
      <header className="bg-blue-600 text-white p-4 shadow-md rounded-b-lg">
        {/*
          Outer container for the header.
          Using flexbox with 'flex-col' to stack logo/name and nav vertically on small screens.
          'md:flex-row md:justify-between md:items-center' arranges them horizontally
          on medium screens and above, with space between logo/name and nav.
        */}
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Top Row: Logo and Website Name */}
          {/*
            Using 'flex items-center' to align the logo and name horizontally.
            'justify-center' centers them horizontally on small screens.
            'md:justify-start' aligns them to the start (left) on medium screens and above.
            'mb-4 md:mb-0' adds margin-bottom on small screens, but removes it on medium and up.
          */}
          <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0 w-full md:w-auto">
            {/* Logo */}
            {/*
              Placeholder image for the logo. You can replace the 'src' with your actual logo path.
              'w-12 h-12' sets width and height.
              'rounded-full' makes it circular.
              'mr-4' adds margin to the right.
              'flex-shrink-0' prevents the logo from shrinking on smaller screens.
            */}
            <img
              src="https://placehold.co/48x48/007bff/ffffff?text=Logo"
              alt="Website Logo"
              className="w-12 h-12 rounded-full mr-4 flex-shrink-0"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/48x48/cccccc/333333?text=Error"; }}
            />
            {/* Website Name */}
            {/*
              'text-3xl' for larger text.
              'font-extrabold' for extra bold font.
              'text-center md:text-left' for centering on small, left-align on medium screens.
            */}
            <h1 className="text-3xl font-extrabold text-center md:text-left flex-grow">
              My Awesome Website
            </h1>
          </div>

          {/* Navigation Links */}
          {/*
            'w-full md:w-auto' makes the nav take full width on small screens.
            'mt-4 md:mt-0' adds margin-top on small screens, removes on medium.
            'justify-center md:justify-end' centers nav on small, right-aligns on medium.
          */}
          <nav className="w-full md:w-auto mt-4 md:mt-0 flex justify-center md:justify-end">
            {/*
              'flex flex-col md:flex-row' stacks links vertically on small, horizontally on medium.
              'space-y-2 md:space-y-0 md:space-x-4' adds vertical space on small, horizontal on medium.
            */}
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li><a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-700 transition duration-300">Home</a></li>
              <li><a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-700 transition duration-300">About</a></li>
              <li><a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-700 transition duration-300">Services</a></li>
              <li><a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-700 transition duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      {/* 'flex-grow' allows this section to take up available space, pushing the footer to the bottom. */}
      {/* 'p-8' for overall padding. */}
      {/* 'container mx-auto' centers the content. */}
      <main className="flex-grow p-8 container mx-auto">
        {/* Main content card/section */}
        {/* 'bg-white' for a white background. */}
        {/* 'p-6' for inner padding. */}
        {/* 'rounded-lg' for rounded corners. */}
        {/* 'shadow-lg' for a more pronounced shadow. */}
        {/* 'mb-8' for margin-bottom, separating it from potential other elements below. */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Welcome to Your New Project!</h2>
          <p className="text-lg leading-relaxed mb-4">
            This is a foundational React application, ready for you to build upon.
            Feel free to modify this content, add new components, and integrate your unique features.
          </p>
          <p className="text-md leading-relaxed">
            It's designed with responsiveness in mind, using Tailwind CSS, so it should look great on
            desktops, tablets, and mobile devices. Start by editing the `App.js` file!
          </p>
        </section>

        {/* Example of another section (optional) */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">Next Steps:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Explore the `App.js` file and modify its content.</li>
            <li>Add new React components for different sections or features.</li>
            <li>Integrate data fetching (e.g., from an API) into your components.</li>
            <li>Customize the Tailwind CSS classes to match your brand's aesthetic.</li>
            <li>Implement routing if your website has multiple pages.</li>
          </ul>
        </section>
      </main>

      {/* Footer Section */}
      {/* 'bg-blue-800' for a darker blue background. */}
      {/* 'text-white' for white text. */}
      {/* 'p-4' for padding. */}
      {/* 'mt-8' for margin-top, separating it from the main content. */}
      {/* 'rounded-t-lg' for rounded top corners. */}
      <footer className="bg-blue-800 text-white p-4 mt-8 rounded-t-lg">
        {/* Container for footer content. */}
        <div className="container mx-auto text-center text-sm">
          <p>&copy; {new Date().getFullYear()} My Awesome Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App; // Export the App component as the default export