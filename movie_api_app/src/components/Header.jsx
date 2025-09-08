import React from "react";

import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    lable: "Tv Shows",
    href: "tv",
  },
  {
    lable: "Movie",
    href: "movie",
  },
];
function Header() {
  return (
    <div>
      <header className="fixed top-0 w-full h-16 bg-neutral-600 opacity-75">
        <div className="container mx-auto px-2 flex items-center h-full">
          <div className="image_container">
            <img src={logo} alt="logo" width={120} />
          </div>
          <nav className="flex items-center gap-2 ml-2">
            {navigation.map((el, i) => {
              return (
                <div key={i}>
                  <NavLink
                    className={({ isActive }) =>
                      `px-2 hover:text-neutral-100 ${
                        isActive && "text-neutral-100"
                      }`
                    }
                    to={el.href}
                  >
                    {el.lable}
                  </NavLink>
                </div>
              );
            })}
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
