import Image from "next/image";
import Logo from "../../public/logo.svg";
import RequestInviteButton from "./request-invite-button";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

export default function Header() {
  const [toggleOpened, setToggleOpened] = useState(false);
  return (
    <header className="w-full h-20 fixed top-0 bg-white z-10">
      <div className="flex items-center justify-between w-full xl:w-[1200px] px-10 xl:px-0 m-auto h-full">
        <Image src={Logo} alt="Easybank logo"/>
        <nav className="lg:flex h-full bg-gradient-to-r from-lime-green to-bright-cyan hidden lg:visible">
          <a href="#Home" className="flex px-3 hover:h-anchor-2 items-center bg-white text-dark-gray h-full">Home</a>
          <a href="#About" className="flex px-3 hover:h-anchor-2 items-center bg-white text-dark-gray h-full">About</a>
          <a href="#Contact" className="flex px-3 hover:h-anchor-2 items-center bg-white text-dark-gray h-full">Contact</a>
          <a href="#Blog" className="flex px-3 hover:h-anchor-2 items-center bg-white text-dark-gray h-full">Blog</a>
          <a href="#Careers" className="flex px-3 hover:h-anchor-2 items-center bg-white text-dark-gray h-full">Careers</a>
        </nav>
        <RequestInviteButton collapse={'hidden lg:block'}/>
        <button className="p-2 rounded-full lg:hidden" onClick={() => setToggleOpened(!toggleOpened)}>
          {toggleOpened? <X /> : <List />}
        </button>
      </div>

      {toggleOpened && <div className="lg:hidden w-full bg-gradient-to-b from-dark-blue/80 to-transparent absolute p-4 pb-24">
        <nav className="bg-white rounded w-full overflow-hidden flex flex-col items-center gap-3 py-4">
          <a href="#Home" className="flex px-3 hover:h-anchor-2 items-center bg-white text-black h-full">Home</a>
          <a href="#About" className="flex px-3 hover:h-anchor-2 items-center bg-white text-black h-full">About</a>
          <a href="#Contact" className="flex px-3 hover:h-anchor-2 items-center bg-white text-black h-full">Contact</a>
          <a href="#Blog" className="flex px-3 hover:h-anchor-2 items-center bg-white text-black h-full">Blog</a>
          <a href="#Careers" className="flex px-3 hover:h-anchor-2 items-center bg-white text-black h-full">Careers</a>
        </nav>
      </div>}
    </header>
  );
}

    