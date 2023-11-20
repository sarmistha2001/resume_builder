import React from "react";

const Footer = () => {
  return (
    <div style={{backgroundColor:'creamy'}}>
      <p
        style={{
          textAlign: "center",
          fontFamily: "cursive",
          marginTop: "30px",
          padding:'10px'
        }}
      >
        Made with ❤️ by SARMISTHA SATRUSALLYA |
        <a
          href="http://sarmistha2001.github.io/portfolionew/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <b>Portfolio</b>
        </a>{" "}
      </p>
    </div>
  );
};

export default Footer;
