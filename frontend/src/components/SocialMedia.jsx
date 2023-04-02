import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/a4abdul315" target="_blank">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/abdulrehman-butt/" target="_blank">
        <FaLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
