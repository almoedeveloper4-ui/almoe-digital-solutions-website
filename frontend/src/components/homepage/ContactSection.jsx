import { useState } from "react";
import { submitContactMessage } from "../../services/api";
import "./ContactSection.css";

function ContactSection({ data }) {

    const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  phone: "",
  country: "United Arab Emirates",
  email: "",
  companyName: "",
  message: "",
});

const [status, setStatus] = useState("");

const handleChange = (event) => {
  const { name, value } = event.target;

  setFormData((previous) => ({
    ...previous,
    [name]: value,
  }));
};

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    setStatus("Sending...");

    await submitContactMessage(formData);

    setStatus("Message sent successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      country: "United Arab Emirates",
      email: "",
      companyName: "",
      message: "",
    });
    setTimeout(() => {
  setStatus("");
}, 2000);
  } catch (error) {
    console.error("Failed to submit contact message:", error);
    setStatus("Something went wrong. Please try again.");
  }
};

  return (
    <section className="contact-section">
      <div className="container contact-section-container">
        <div className="contact-section-header">
          <h2>{data?.Title}</h2>
          <p>{data?.Description}</p>
        </div>

        <div className="contact-section-form-wrapper">
         <form
  className="contact-section-form"
  onSubmit={handleSubmit}
>
            <div className="contact-field">
              <label>
                Full Name
              </label>

              <div className="contact-field-row">
              <input
  type="text"
  name="firstName"
  value={formData.firstName}
  onChange={handleChange}
  placeholder="First Name"
  required
/>

            <input
  type="text"
  name="lastName"
  value={formData.lastName}
  onChange={handleChange}
  placeholder="Last Name"
  required
/>
              </div>
            </div>

            <div className="contact-field">
              <label>
                Phone <span>(required)</span>
              </label>

              <div className="contact-field-row">
              <select
  name="country"
  value={formData.country}
  onChange={handleChange}
>
                  <option>United Arab Emirates</option>
                  <option>India</option>
                  <option>Saudi Arabia</option>
                  <option>Qatar</option>
                  <option>Oman</option>
                </select>
<input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="+971"
  required
/>
              </div>
            </div>

            <div className="contact-field">
              <label>
                Email <span>(required)</span>
              </label>

           <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email"
  required
/>
            </div>

            <div className="contact-field">
              <label>Company Name</label>

           <input
  type="text"
  name="companyName"
  value={formData.companyName}
  onChange={handleChange}
  placeholder="Company Name"
/>
            </div>

            <div className="contact-field">
              <label>
                Message <span>(required)</span>
              </label>

           <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Message"
  rows="5"
  required
/>
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              Send
            </button>
            {status && (
  <p className="contact-form-status">
    {status}
  </p>
)}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;