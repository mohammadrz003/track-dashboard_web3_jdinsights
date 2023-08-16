import { useState } from "react";
import { coins } from "../constants";
import DarkModeToggle from "./DarkModeToggle";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Link, createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const Header = ({ isDark, setIsDark, protocolName, setProtocolName }) => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamValues = Object.fromEntries([...searchParams]);
  const [address, setAddress] = useState("")

  const selectProtocolHandler = (name) => {
    setProtocolName(name);
    const params = {
      address: searchParamValues?.address,
    };
    const options = {
      pathname: `/${name}`,
      search: `?${createSearchParams(params)}`,
    };
    navigate(options, { replace: true });
  };

  const searchHandler = () => {
    setSearchParams({ 'address': address })
  }

  return (
    <>
      <dialog id="searchbar_modal" className="modal">
        <form method="dialog" className="modal-box dark:bg-slate-800">
          <h3 className="font-semibold text-lg mb-5 dark:text-slate-100">Enter your address to track your wallet</h3>
          <div className="join w-full">
            <input value={address} onChange={(e) => setAddress(e.target.value)} className="flex-1 input input-bordered join-item dark:bg-slate-700 dark:text-slate-300" placeholder="Search Address" />
            <button className="btn join-item rounded-r-lg bg-blue-500 text-white hover:bg-blue-600 border-transparent" onClick={searchHandler}>Search</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <section className="shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] z-20 relative dark:shadow-none dark:border-b dark:border-b-slate-700">
        <div className="navbar container max-w-screen-xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn bg-transparent px-2 dark:border-slate-800 dark:text-white dark:hover:bg-slate-700"
              >
                {protocolName === "zkevm" ? (
                  <div className="flex items-center gap-x-2.5">
                    <img
                      src="https://files.moonfo.com/jdinsights/polygon-zkevm-logo.png"
                      alt="zkevm"
                      className="w-9 h-9"
                    />
                    <span>Zkevm</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-x-2.5">
                    <img
                      src="https://files.moonfo.com/jdinsights/base.png"
                      alt="base"
                      className="w-9 h-9"
                    />
                    <span>Base</span>
                  </div>
                )}
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-slate-800 relative dark:text-slate-200"
              >
                {coins.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => selectProtocolHandler(item.name)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-2.5">
                        <img src={item.img} alt={item.name} className="w-9 h-9" />
                        <span className="capitalize">{item.name}</span>
                      </div>
                      {item.name === protocolName && (
                        <CheckIcon className="w-5 h-5 fill-green-500" />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <Link to="/" className=" text-xl text-black dark:text-white">JDInSights</Link>
          </div>
          <div className="navbar-end">
            <DarkModeToggle
              isDark={isDark}
              onClickMethod={setIsDark}
              setIsDark={setIsDark}
            />
            <button className="btn btn-ghost btn-circle" onClick={() => window.searchbar_modal.showModal()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 dark:text-slate-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
