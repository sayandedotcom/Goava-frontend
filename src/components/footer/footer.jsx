import React from "react";
import Footersection from "./footerSection/footerSection";
import Footeritems from "./footerItems/footerItems";
import "./footer.css";

const example = [
  { id: 1, name: "Example1", link: "https://sayande.tech/", icons: "" },
  { id: 2, name: "Example2", link: "https://sayande.tech/", icons: "" },
  { id: 3, name: "Example3", link: "https://sayande.tech/", icons: "" },
  { id: 4, name: "Example4", link: "https://sayande.tech/", icons: "" },
  { id: 5, name: "Example5", link: "https://sayande.tech/", icons: "" },
];
const socials = [
  { id: 1, name: "Facebook", link: "https://sayande.tech/", icons: "" },
  { id: 2, name: "Instagram", link: "https://sayande.tech/", icons: "" },
  { id: 3, name: "YouTube", link: "https://sayande.tech/", icons: "" },
  { id: 4, name: "Linkedin", link: "https://sayande.tech/", icons: "" },
  { id: 5, name: "Twitter", link: "https://sayande.tech/", icons: "" },
];
const contact = [
  { id: 1, name: "Telegram", link: "https://sayande.tech/", icons: "" },
  { id: 2, name: "Mail", link: "https://sayande.tech/", icons: "" },
  { id: 3, name: "Discord", link: "https://sayande.tech/", icons: "" },
  { id: 4, name: "Address", link: "https://sayande.tech/", icons: "" },
  { id: 5, name: "Phone No", link: "https://sayande.tech/", icons: "" },
];
const Footer = () => {
  return (
    <>
      <div className="bg-[#2c4152] text-white uppercase flex justify-around flex-wrap py-16">
        <Footersection>
          <p className="text-xl font-black mb-1">Goava</p>
          <hr />
          <Footeritems>
            {example.map(({ id, name, link }) => (
              <a key={id} href={link} target="blank">
                {name}
              </a>
            ))}
          </Footeritems>
        </Footersection>

        <Footersection>
          <p className="text-xl font-black mb-1">Help</p>
          <hr />
          <Footeritems>
            {example.map(({ id, name, link }) => (
              <a key={id} href={link} target="blank">
                {name}
              </a>
            ))}
          </Footeritems>
        </Footersection>

        <Footersection>
          <p className="text-xl font-black mb-1">Socials</p>
          <hr />
          <Footeritems>
            {socials.map(({ id, name, link }) => (
              <a key={id} href={link} target="blank">
                {name}
              </a>
            ))}
          </Footeritems>
        </Footersection>

        <Footersection>
          <p className="text-xl font-black mb-1">Contact Us</p>
          <hr />
          <Footeritems>
            {contact.map(({ id, name, link }) => (
              <a key={id} href={link} target="blank">
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
