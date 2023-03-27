const Footer = () => {
  return (
    <footer id="footer">
      <div className="footerLinks">
        <div className="contactInfo">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <img src="placeholder.png" alt="location" className="footerIcon" />
            <p className="footerText">
              345 Faulconer Drive, Suite 4 Charlottesville, CA, 12345
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <img src="phone.png" alt="location" className="footerIcon" />
            <p className="footerText" style={{ marginRight: "30px" }}>
              (123)456-7890
            </p>
            <p className="footerText">(123)456-7890</p>
          </div>
        </div>

        <div className="socialInfo">
          <div className="socialRow">
            <img src="LinkedIn.png" alt="tag" className="socialTag" />
            <img src="Instagram.png" alt="tag" className="socialTag" />
            <img src="LinkedIn.png" alt="tag" className="socialTag" />
            <img src="Instagram.png" alt="tag" className="socialTag" />
          </div>

          <div className="socialRow">
            <img src="LinkedIn.png" alt="tag" className="socialTag" />
            <img src="Instagram.png" alt="tag" className="socialTag" />
            <img src="Instagram.png" alt="tag" className="socialTag" />
            <img src="LinkedIn.png" alt="tag" className="socialTag" />
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="bottomText-Grp">
          <p className="bottomText">ABOUT US</p>
          <p className="bottomText">CONTACT US</p>
          <p className="bottomText">HELP</p>
          <p className="bottomText">PRIVACY POLICY</p>
          <p className="bottomText">DISCLAIMER</p>
        </div>
        <div className="copyright">
          Copyright © 2020 Minimumlivingcost. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
