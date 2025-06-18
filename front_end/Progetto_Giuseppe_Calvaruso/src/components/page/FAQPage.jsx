function FAQ(){

    return(
    <div className="bg-[#f7f1ec] m-10 rounded-4xl shadow-2xl">
        <div className="text-center p-4 bg-[#d7e5d3] "  >
        <p className="lg:text-8xl ">FaQ</p>
        <p className="lg:text-6xl ">Your question answered here</p>
        </div>
        <div className="lg:flex justify-around lg:p-10 bg-[#d7e5d3] ">
            <div>
                <ul className="text-left pt-5 bg-[#f7f1ec] shadow-2xl rounded-2xl p-4">
                    <li className="text-3xl pb-4 pl-4 hover:text-[#4c6342] "><a href="#general">General</a></li>
                    <li className="text-3xl pb-4 pl-4  hover:text-[#4c6342]"><a href="#build">Build </a></li>
                    <li className="text-3xl pb-4 pl-4 hover:text-[#4c6342]"><a href="#promote">Promote </a></li>
                    <li className="text-3xl pb-4 pl-4 hover:text-[#4c6342]"><a href="#manage">Manage</a></li>
                    <li className="text-3xl pb-4 pl-4 hover:text-[#4c6342]"><a href="#integrations">Integrations </a></li>
                    <li className="text-3xl pb-4 pl-4 hover:text-[#4c6342]"><a href="#legal">Legal</a></li>
                </ul>
            </div>
            <div className="flex flex-col">
                <div className=" text-left bg-white rounded-4xl shadow-2xl p-4 lg:ml-20" id="general">
                    <h2 className="text-3xl text-center">General</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className=" text-left bg-white rounded-4xl shadow-2xl p-4 lg:ml-20 mt-10" id="build">
                    <h2 className="text-3xl text-center">Build</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className=" text-left bg-white rounded-4xl shadow-2xl p-4 lg:ml-20 mt-10" id="promote">
                    <h2 className="text-3xl text-center">Promote</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className=" text-left bg-white rounded-4xl shadow-2xl p-4 lg:ml-20 mt-10" id="manage">
                    <h2 className="text-3xl text-center">Manage</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className=" text-left bg-white rounded-4xl shadow-2xl p-4 lg:ml-20 mt-10" id="integrations">
                    <h2 className="text-3xl text-center">Integrations</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className=" text-left bg-white rounded-4xl shadow-2xl p-4 lg:ml-20 mt-10" id="legal">
                    <h2 className="text-3xl text-center">Legal</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </div>
    )


}


export default FAQ