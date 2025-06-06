import "./Contacto.css";

const Contato = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="content">
          <h1 data-aos="zoom-in-down" data-aos-delay={300} className="title">
            Contact
          </h1>
          <form
            data-aos="zoom-in-down"
            data-aos-delay={300}
            className="contact-form"
            action="https://formsubmit.co/maelsonmauricio0@gmail.com"
            method="POST"
          >
            <div className="input">
              <input type="text" name="name" placeholder="Name..." required />
              <input type="email" name="email" placeholder="Email..." required />
              <input type="number" name="phone" placeholder="Phone..." />
              <input type="text" name="subject" placeholder="Subject..." />
            </div>
            <textarea name="message" placeholder="Message..." required />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;