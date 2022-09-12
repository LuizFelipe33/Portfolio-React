import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import React from 'react'
import '../styles/components/social.sass'

const socialNetworks = [
    { name: "linkedin", link: "https://www.linkedin.com/in/luiz-rodrigues-05071/",icon: <FaLinkedinIn /> },
    { name: "github",link: "https://github.com/LuizFelipe33", icon: <FaGithub /> },
    { name: "instagram",link: "https://www.instagram.com/luizf3lip33/", icon: <FaInstagram /> },
  ];
  
  const Social = () => {
    return (
      <section id="social">
        {socialNetworks.map((network) => (
          <a href={network.link} target="_blank" className="social-btn" id={network.name} key={network.name}>
            {network.icon}
          </a>
        ))}
      </section>
    );
  };

export default Social