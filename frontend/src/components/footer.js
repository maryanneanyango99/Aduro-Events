import React from "react";

const Footer = (props) => {
  return (
    <div className="_footer" ref={props.footer}>
      <div
        className="social_link"
        onClick={(e) =>
          (window.location.href = "https://github.com/maryanneanyango99")
        }
      >
        <div className="">
          <img src="/images/github.svg" />
        </div>
        <p>Github</p>
      </div>
    </div>
  );
};

export default Footer;