import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  // const handleNavIcon = () => {
  //   setNavOpen(navOpen)
  // }

  const routes = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Services",
      link: "/services",
    },
    {
      id: 4,
      name: "Contact",
      link: "/contact",
    },
    {
      id: 5,
      name: "Blog",
      link: "/blog",
    },
  ];
  return (
    <>
      <div className="mx-4 sm:mx-20 bg-red-900 h-16 w-100 rounded-br-lg rounded-bl-lg shadow-2xl sticky top-0 z-10 flex justify-between">
        <div>
          <h1 className="font-bold text-2xl p-3"> My Shop BD</h1>
        </div>
        <div>
          <div className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
            <span>{navOpen=== true ? 
            <XMarkIcon className="h-16 w-16 text-orange-500" /> :
            <Bars4Icon className="h-16 w-16 text-orange-500" />}
            </span>
          </div>

          <ul className={`md:flex md:bg-transparent md:right-0 md:top-0 md:text-yellow-400 absolute ${navOpen? 'right-0' : '-right-72' } bg-orange-400 text-black rounded-lg py-2 px-4 duration-500`}>
            {routes.map((route) => (
            <Link route={route} key={route.id}></Link>
          ))}
          </ul>
           
     
          
        </div>
      </div>
    </>
  );
};

export default Header;
