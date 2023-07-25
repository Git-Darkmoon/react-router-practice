import logo from "../assets/interview_undraw.svg"

function Contact() {
  return (
    <main className="container">
      <picture className="img-content">
        <img src={logo} alt="" />
      </picture>
      <div className="text-content">
        <h2 className="title">Contact Us</h2>
        <p className="desc">
          Got questions or suggestions? We&apos;d love to hear from you! Reach
          out and let&apos;s chat about all things movies. 📧🎟️ #MovieLovers
        </p>
        <form action="" className="contact-form">
          <input
            type="text"
            name=""
            id="contact-name"
            required
            placeholder="Your name"
          />
          <input
            type="email"
            name=""
            id="contact-email"
            required
            placeholder="Your email "
          />
          <textarea
            name=""
            id="contact-msg"
            cols="30"
            rows="5"
            required
            placeholder="Your message "
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  )
}
export default Contact
