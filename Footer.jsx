import "../style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3>ABOUT US</h3>
          <p>Electrician</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
            vestibulum magna.
          </p>
        </div>

        <div className="footer-col">
          <h3>CONTACT INFO</h3>
          <p>Address: 123 Street Name, City, England</p>
          <p>Phone: +123 456 789</p>
          <p>Email: info@example.com</p>
        </div>

        <div className="footer-col">
          <h3>CUSTOMER SERVICE</h3>
          <p>Help & FAQs</p>
          <p>Order Tracking</p>
          <p>Shipping & Delivery</p>
          <p>Returns</p>
        </div>

        <div className="footer-col">
          <h3>POPULAR TAGS</h3>
          <div className="tags">
            <span>Bag</span>
            <span>Black</span>
            <span>Blue</span>
            <span>Clothes</span>
            <span>Fashion</span>
            <span>Hub</span>
            <span>Jean</span>
            <span>Shirt</span>
            <span>Skirt</span>
            <span>Sports</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Magazines Shop - React Project
      </div>
    </footer>
  );
};

export default Footer;