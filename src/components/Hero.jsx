function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white pt-16 animate__animated animate__fadeIn">
      <div className="text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 animate__animated animate__zoomIn">Hi, I'm Sujit Shah</h2>
        <p className="text-xl md:text-2xl mb-6 animate__animated animate__fadeInUp">Front-End Developer | Building Cool & Interactive Web Apps</p>
        <button
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition animate__animated animate__bounceIn"
        >
          Let's Connect
        </button>
      </div>
    </section>
  );
}

export default Hero;