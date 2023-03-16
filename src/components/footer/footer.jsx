import React from "react";
import Footersection from "./footerSection/footerSection";
import Footeritems from "./footerItems/footerItems";
import "./footer.css";

const example = [
  { name: "Example1", link: "https://sayande.tech/", icons: "" },
  { name: "Example2", link: "https://sayande.tech/", icons: "" },
  { name: "Example3", link: "https://sayande.tech/", icons: "" },
  { name: "Example4", link: "https://sayande.tech/", icons: "" },
  { name: "Example5", link: "https://sayande.tech/", icons: "" },
];
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
      <div className="bg-[#2c4152] text-white uppercase flex justify-around flex-wrap py-16">
        <Footersection>
          <p className="text-xl font-black mb-1">Goava</p>
          <hr />
          <Footeritems>
            {example.map(({ name, link }) => (
              <a href={link} target="blank">
                {name}
              </a>
            ))}
          </Footeritems>
        </Footersection>

        <Footersection>
          <p className="text-xl font-black mb-1">Help</p>
          <hr />
          <Footeritems>
            {example.map(({ name, link }) => (
              <a href={link} target="blank">
                {name}
              </a>
            ))}
          </Footeritems>
        </Footersection>

        <Footersection>
          <p className="text-xl font-black mb-1">Socials</p>
          <hr />
          <Footeritems>
            {socials.map(({ name, link }) => (
              <a href={link} target="blank">
                {name}
              </a>
            ))}
          </Footeritems>
        </Footersection>

        <Footersection>
          <p className="text-xl font-black mb-1">Contact Us</p>
          <hr />
          <Footeritems>
            {contact.map(({ name, link }) => (
              <a href={link} target="blank">
                {name}
              </a>
            ))}
          </Footeritems>
        </Footersection>
      </div>
      <hr />
    </>
  );
};

export default Footer;
