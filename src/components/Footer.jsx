import React from "react";

function Footer() {
  return (
    <footer className="black py-5 border-t mt-16">
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Neethu M. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;