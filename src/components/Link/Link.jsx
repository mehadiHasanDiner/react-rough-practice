import React from "react";

const Link = ({ route }) => {
  return (
    <>
        <li className=" py-2 px-5 hover:bg-red-600 hover:text-white rounded-lg">
          <a href={route.link}>{route.name}</a>
        </li>
    </>
  );
};

export default Link;
