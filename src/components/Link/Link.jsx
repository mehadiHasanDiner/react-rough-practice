import React from "react";

const Link = ({ route }) => {
  return (
    <div>
      <ul className=" bg-orange-400 text-black rounded-lg hover:bg-cyan-400">
        <li className="m-2 p-2">
          <a href={route.link}>{route.name}</a>
        </li>
      </ul>
    </div>
  );
};

export default Link;
