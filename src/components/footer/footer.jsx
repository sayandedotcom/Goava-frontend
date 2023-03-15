import React from "react";
import "./footer.css";

const socials = [
  { name: "Facebook", link: "https://sayande.tech/", icons: "" },
  { name: "Instagram", link: "https://sayande.tech/", icons: "" },
  { name: "YouTube", link: "https://sayande.tech/", icons: "" },
  { name: "Linkedin", link: "https://sayande.tech/", icons: "" },
  { name: "Twitter", link: "https://sayande.tech/", icons: "" },
];
const contact = [
  { name: "Telegram", link: "https://sayande.tech/", icons: "" },
  { name: "Mail", link: "https://sayande.tech/", icons: "" },
  { name: "Discord", link: "https://sayande.tech/", icons: "" },
  { name: "Address", link: "https://sayande.tech/", icons: "" },
  { name: "Phone No", link: "https://sayande.tech/", icons: "" },
];
const Footer = () => {
  return (
    <>
      <div className="footer">
        <section className="footer_sections">
          <p>Goava</p>
          <hr />
          <div className="footer_items"></div>
        </section>
        <section className="footer_sections">
          <p>Help</p>
          <hr />
          <div className="footer_items"></div>
        </section>
        <section className="footer_sections">
          <p>Socials</p>
          <hr />
          <div className="footer_items">
            {socials.map(({ name, link }) => (
              <a href={link} target="blank">
                {name}
              </a>
            ))}
          </div>
        </section>
        <section className="footer_sections">
          <p>Contact Us</p>
          <hr />
          <div className="footer_items">
            {contact.map(({ name, link }) => (
              <a href={link} target="blank">
                {name}
              </a>
            ))}
          </div>
        </section>
      </div>
      <hr />
    </>
  );
};

export default Footer;
