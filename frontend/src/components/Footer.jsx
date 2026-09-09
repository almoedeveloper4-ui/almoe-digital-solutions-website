import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-logo">
          <img src="https://images.squarespace-cdn.com/content/v1/63a984a4ef582d3ba99b375c/923c8f04-594e-4faf-8767-388ecb324d4a/ALMOE_DIGITAL_SOLUTIONS.jpg?format=300w" alt="Almoe Digital Solutions" />
        </div>

        <div className="footer-column">
          <a href="/about-us">About Us</a>
          <a href="/brands">AV Brands</a>
          <a href="/brands">IT Brands</a>
          <a href="/products">Products</a>
          <a href="/solutions">Solutions</a>
          <a href="/services">Services</a>
        </div>

        <div className="footer-column">
          <a href="/contact-us">Contact Us</a>
          <a href="/partner-with-us">Partner With Us</a>
          <a href="/product-enquiry">Product Enquiry</a>
          <a href="/product-support">Product Support</a>
          <a href="/sustainability">Sustainability</a>
          <a href="/careers">Careers</a>
        </div>

        <div className="footer-newsletter">
          <h2>Join our mailing list</h2>
          <p>Get updates and special offers from us!</p>

          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Email Address"
            />

            <button type="button">
              Sign Up
            </button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">

        <div className="footer-social">
          <span>Follow Us:</span>

          <a href="#" aria-label="LinkedIn">
            in
          </a>

          <a href="#" aria-label="Instagram">
            ◎
          </a>
        </div>

        <div className="footer-copyright">
          <span>© Copyrights Reserved to Almoe Digital Solutions.</span>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;