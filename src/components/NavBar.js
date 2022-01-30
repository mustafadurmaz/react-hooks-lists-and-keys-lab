import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // const linkElements = links.map((link,index) => {
  //   return <a href={link} key={index}>{link}</a> });

  return (
    <nav>
      {/* display an <a> tag for each link here */}{" "}
      {links.map((link, index) => {
        return (
          <a href={'#' + link} key={index}>
            {link}
          </a>
          ) 
      })}
    </nav>
  );
}

export default NavBar;
