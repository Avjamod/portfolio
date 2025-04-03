import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Made with ❤️ and lots of ☕ from ©{new Date().getFullYear()}</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
