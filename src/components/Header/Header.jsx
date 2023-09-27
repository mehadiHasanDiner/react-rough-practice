import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars4Icon } from "@heroicons/react/24/solid";

const Header = () => {
  const [nav, setNav] = useState(false);

  // cont handleNavIcon = () => {

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
          {routes.map((route) => (
            <Link route={route} key={route.id}></Link>
          ))}
          <span onClick={() => handleNavIcon(!nav)}>
            <Bars4Icon className="h-16 w-16 text-orange-500" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
