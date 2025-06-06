import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="home" id="home">
      <div className="container">
        <div className="content">
          <svg viewBox="0 0 1500 500" data-aos="fade-down">
            <text x="50%" y="50%" textAnchor="middle">
              Elson Mauricio
            </text>
          </svg>
          <h1 data-aos="zoom-in-up">
            Fornecendo soluções de Full Stack personalizadas que <span>se destacam</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Home;
