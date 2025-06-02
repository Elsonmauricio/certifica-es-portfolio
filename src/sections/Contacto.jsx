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
        >
          <div className="input">
            <input type="text" placeholder="Name..." />
            <input type="email" placeholder="Email..." />
            <input type="number" placeholder="Phone..." />
            <input type="text" placeholder="Subject..." />
          </div>
          <textarea name="message" placeholder="Message..." defaultValue={""} />
        </form>
      </div>
    </div>
    </section>
  );
};

export default Contato;