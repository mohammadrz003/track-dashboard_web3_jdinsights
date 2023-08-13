import { Link, createSearchParams, useNavigate } from "react-router-dom"
import DarkModeToggle from "../components/DarkModeToggle"
import GrowingCircleAnimation from "../components/GrowingCircleAnimation"
import { useState } from "react"

const Search = ({ isDark, setIsDark }) => {
    const [address, setAddress] = useState("");
    const navigate = useNavigate()

    const onAddressChage = (e) => {
        setAddress(e.target.value)
    }

    const searchHandler = () => {
        if (address.trim() === "") {
            return;
        }

        const params = {
            address,
        };
        const options = {
            pathname: `/zkevm`,
            search: `?${createSearchParams(params)}`,
        };
        navigate(options, { replace: false });
    }

    return (
        <>
            <GrowingCircleAnimation isDark={isDark} />
            <section className="shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] dark:shadow-none dark:border-b dark:border-b-slate-700 z-20 relative">
                <div className="navbar container max-w-screen-xl mx-auto">
                    <div className="navbar-start">
                        <Link to="/" className="pl-3 text-xl text-black dark:text-white">JDInSights</Link>
                    </div>
                    <div className="navbar-end">
                        <DarkModeToggle
                            isDark={isDark}
                            onClickMethod={setIsDark}
                            setIsDark={setIsDark}
                        />
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font relative z-10">
                <div className="container mx-auto flex flex-col px-5 pb-5 pt-7 min-h-[calc(100vh-64px)] justify-center items-center">
                    <img className="mb-10 object-cover object-center rounded w-20 h-auto" alt="hero" src="https://moonfo-files.storage.iran.liara.space/jsinsights/logos/happy-etherium.gif" />
                    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 className="text-2xl sm:text-4xl mb-4 text-gray-900 dark:text-slate-200 dark:font-normal">Enter you wallet address to track your address and see how many volume you did on either Zkevm or Base</h1>
                        <div className="flex w-full justify-center items-end mt-2">
                            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                                <input value={address} onChange={onAddressChage} type="text" placeholder="Search Address" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:border-slate-600 dark:bg-slate-700" />
                            </div>
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={searchHandler}>Search</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search