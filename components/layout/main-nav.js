import { useState } from "react";
import { useRouter } from "next/router";

import requests from "../../utils/requests";

function MainNavigation() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="fixed top-0 w-screen lg:px-40 sm:px-10 px-2 sm:flex justify-center items-center border-b-1 border-gray-600 z-10">
      <div
        className="flex px-4 justify-between sm:py-0 pb-1"
        onClick={() => setOpen(!open)}
      >
        <button
          className="text-blue-300 text-3xl sm:hidden block focus:outline-none"
          id="navIcon"
        >
          &#9776;
        </button>
      </div>

      <ul
        className={` sm:flex cursor-pointer ${open ? "" : "hidden "}`}
        id="navContent"
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          <li
            key={key}
            onClick={() => router.push(`/?category=${key}`)}
            className="lg:text-2xl text-white py-4 px-6 sm:border-b-2 border-transparent  sm:hover:text-blue-300 transition duration-100 transform hover:scale-110 hover:text-white"
          >
            {title}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNavigation;
