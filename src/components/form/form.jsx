import "./form.css";
import emailjs from '@emailjs/browser'

function ContactMe() {
    
    const sendEmail = (e) => {
        e.preventDefault()
        alert("Your message has been sent !")

        emailjs.sendForm('service_7uw6dqn', 'template_5zynxqv ', e.target, 'rKber6TCA4TN78fQc')
    }

  return (
    <form onSubmit={sendEmail} className="form">
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default ContactMe;
