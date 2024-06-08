import Image from "next/image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePriceChange } from "react-icons/md";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { isAuthenticated } from "../../../utils/Auth";
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="flex items-center gap-1" href={"/"}>  Home <FaHome className="text-secondary" /></Link>
              </li>
              <li>
                <Link className="flex items-center gap-1" href={"/"}>Generate</Link>
                <ul className="p-2">
                  <li>
                    <Link className="flex items-center gap-1" href={"/t2p"}>T2P</Link>
                  </li>
                  <li>
                    <Link className="flex items-center gap-1" href={"/#working"}>Working</Link>
                  </li>
                </ul>
              </li>
              <li>
                <button className="flex btn btn-secondary items-center gap-1"><Link href={"/"} className="flex items-center gap-1">
              Pricing <MdOutlinePriceChange size={25} />
            </Link></button>
              </li>
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl"> <Image
          src={"/t2p_logo.png"}
          className=" bg-contain"
          alt="Logo"
          width={60}
          height={60}
        /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <Link className="flex items-center gap-1" href={"/"}>  Home <FaHome className="text-secondary" /></Link>
            </li>
            <li>
              <details>
                <summary>Generate</summary>
                <ul className="p-2">
                  <li>
                    <Link href={"/t2p"} className="flex items-center gap-1">T2P</Link>
                  </li>
                  <li>
                    <Link href={"/#working"} className="flex items-center gap-1">working</Link>
                  </li>
                </ul>
              </details>
            </li>
            {/* <li>
              <Link className="flex items-center gap-1">Item 3</Link>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end flex items-center mr-6 gap-10">
          <button className="btn"><Link href={"/"} className="flex items-center gap-1">
              Pricing <MdOutlinePriceChange size={25} />
            </Link></button>
            <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
       {isAuthenticated? (<div className="w-10 rounded-full">
          <Image alt="profile" src="/profile.png" width={130} height={130}/>
        </div>):(<button className="btn mr-4"><Link href={"/login"} className="flex items-center gap-1">
              Login <IoMdLogIn size={25} />
            </Link></button>)}
      </div>
      {isAuthenticated?<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link href={"/"} className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link href={"/"}>Settings</Link></li>
        <li><Link href={"/"}>Logout</Link></li>
      </ul>:""}
    </div>
 

        </div>
      </div>
     
    </>
  );
};

export default Navbar;
