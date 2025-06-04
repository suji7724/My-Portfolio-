import { useState } from 'react';

function Header({ toggleTheme, theme }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary text-white p-4 fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold animate__animated animate__fadeIn">Sujit Shah</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <ul className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block absolute md:static bg-primary w-full md:w-auto left-0 top-16 p-4 md:p-0`}>
            <li><button onClick={() => scrollToSection('home')} className="hover:text-secondary transition animate__animated animate__fadeIn">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="hover:text-secondary transition animate__animated animate__fadeIn">About</button></li>
            <li><button onClick={() => scrollToSection('skills')} className="hover:text-secondary transition animate__animated animate__fadeIn">Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')} className="hover:text-secondary transition animate__animated animate__fadeIn">Projects</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-secondary transition animate__animated animate__fadeIn">Contact</button></li>
          </ul>
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;