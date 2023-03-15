import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <section className="footer_sections">
          <p>Goava</p>
          <div className="footer_items">
            <p>Facebook</p>
            <p>Facebook</p>
            <p>Facebook</p>
            <p>Facebook</p>
            <p>Facebook</p>
          </div>
        </section>
        <section className="footer_sections">
          <p>Help</p>
          <div className="footer_items">
            <a href="https://sayande.tech/">Facebook</a>
            <a href="https://sayande.tech/">Facebook</a>
            <a href="https://sayande.tech/">Facebook</a>
            <a href="https://sayande.tech/">Facebook</a>
            <a href="https://sayande.tech/">Facebook</a>
          </div>
        </section>
        <section className="footer_sections">
          <p>Follow us</p>
          <div className="footer_items">
            <a href="https://sayande.tech/">Facebook</a>
            <a href="https://sayande.tech/">Instagram</a>
            <a href="https://sayande.tech/">Telegram</a>
            <a href="https://sayande.tech/">YouTube</a>
            <a href="https://sayande.tech/">Twitter</a>
          </div>
        </section>
      </div>
      <hr />
    </>
  );
};

export default Footer;
