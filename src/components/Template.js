import React from "react";
import ImgBg from "../img/bg.jpg";
import Coca from "../img/coca.jpg";
import Pizza from "../img/pizza.jpg";

const Template = () => {
  // const iconBurger = document.querySelector("#burger");
  // const iconMenu = document.querySelector("#menu");
  // iconBurger.addEventListener("click", (e) => {
  //   if (iconMenu.classList.contains("hidden")) {
  //     iconMenu.classList.remove("hidden");
  //   } else {
  //     iconMenu.classList.add("hidden");
  //   }
  // });

  return (
    // Content Wrapper
    <div className="text-gray-600 font-sans gird md:grid-cols-3">
      <div className="md:col-span-1 md:flex md:justify-end">
        <nav className="text-right">
          <div className="flex justify-between items-center">
            <h1 className="font-bold uppercase p-4  border-gray-200">
              <a href="#" className="hover:text-gray-700 text-black">
                Food NinJa
              </a>
            </h1>
            <div className="px-4 cursor-pointer md:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
          {/* nav */}
          <ul className="text-sm mt-6 ml-2 hidden md:block">
            <li className="text-gray-700 font-bold py-2">
              <a
                href="#"
                className="px-4 flex justify-end border-r-4 border-red-500"
              >
                <span>Home</span>
                <svg
                  className="flex w-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </a>
            </li>
            <li className="text-gray-700 font-bold py-2">
              <a
                href="#"
                className="px-4 flex justify-end border-r-4 border-white"
              >
                <span>About</span>
                <svg
                  className="flex w-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
              </a>
            </li>
            <li className="text-gray-700 font-bold py-2">
              <a
                href="#"
                className="px-4 flex justify-end border-r-4 border-white"
              >
                <span>Contact</span>
                <svg
                  className="flex w-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* end of nav */}
      {/* mani */}
      <main className="px-16 py-6 bg-gray-100 md:col-span-2">
        <div className="text-indigo-400 flex justify-center md:justify-end ">
          <a
            href=""
            className="hover:bg-yellow-500 hover:text-indigo-900 border-2 border-orange-400 text-orange-400  
            transition ease-out duration-500 rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider md:border-1 md:border-red-300"
          >
            Log in
          </a>
          <a
            className="hover:bg-yellow-500 hover:text-indigo-900 ml-2 border-2 border-orange-400 text-orange-400 
            transition ease-out duration-500 rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider md:border-1 md:border-red-300"
            href="/"
          >
            Sign up
          </a>
        </div>
        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Resipes</h2>
          <h3 className="text-2xl font-semibold">For Ninjas</h3>
        </header>
        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-500">
            Latest Resipes
          </h4>
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            {/* card go here */}
            <div className="hover:shadow-2xl bg-white rounded-sm overflow-hidden shadow-md relative">
              <img
                src={ImgBg}
                alt="Stew"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold ">5 ben Chill Stew</span>
                <span className="block text-gray-500 text-sm">
                  Resipes by mario
                </span>
              </div>
              <div className="hover:shadow-2xl bg-gray-300 text-xs uppercase font bold rounded-full p-2 absolute ml-2 mt-2 top-0">
                <svg
                  className="w-4 inline-block mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="">25 min </span>
              </div>
            </div>
            <div className="hover:shadow-2xl bg-white rounded-sm overflow-hidden shadow-md relative">
              <img
                src={Coca}
                alt="coca"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold ">Real Test Coca</span>
                <span className="block text-gray-500 text-sm">
                  Resipes by mario
                </span>
              </div>
              <div className="bg-gray-300 text-xs uppercase font bold rounded-full p-2 absolute ml-2 mt-2 top-0">
                <svg
                  className="w-4 inline-block mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="">5 min </span>
              </div>
            </div>
            <div className="hover:shadow-2xl bg-white rounded-sm overflow-hidden shadow-md relative">
              <img
                src={Pizza}
                alt="pizza"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold ">Yummy Pizza</span>
                <span className="block text-gray-500 text-sm">
                  Resipes by mario
                </span>
              </div>
              <div className="hover:shadow-2xl bg-gray-300 text-xs uppercase font bold rounded-full p-2 absolute ml-2 mt-2 top-0">
                <svg
                  className="w-4 inline-block mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="">25 min </span>
              </div>
            </div>
          </div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-500">
            Most Popular
          </h4>
          <div className="mt-8">{/* card go here */}</div>
          <div className="flex justify-center">
            <div
              className="bg-gray-300 text-blue-900 items-start 
            tranform hover:scale-125 hover:opacity-90 transition ease-out duration-200 rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider hover:shadow-inner"
            >
              Learn more
            </div>
          </div>
        </div>
      </main>
      {/* end of main */}
    </div>
  );
};
export default Template;
