import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');
  const [projects] = useState([
    {
      id: 1,
      title: 'To-Do List App',
      description: 'A task management app built with React and Tailwind CSS.',
      link: 'https://github.com/yourusername/todo-app',
      demo: 'https://yourusername.github.io/todo-app',
    },
    {
      id: 2,
      title: 'E-Commerce Store',
      description: 'A mock online store with product listings and cart functionality.',
      link: 'https://github.com/yourusername/ecommerce-app',
      demo: 'https://yourusername.github.io/ecommerce-app',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'This very portfolio, built with Html,Css and Javascript.',
      link: 'https://suji7724.github.io/',
      demo: '#',
    },
  ]);
  const [skills] = useState([
    'React',
    'JavaScript',
    'HTML',
    'Python',
    'Tailwind CSS',
    'Node.js',
  ]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;




      

