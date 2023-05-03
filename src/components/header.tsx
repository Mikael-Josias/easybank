import Image from "next/image";
import Logo from "../../public/logo.svg";
import RequestInviteButton from "./request-invite-button";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-36 h-20 fixed w-full top-0 bg-white z-10">
      <Image src={Logo} alt="Easybank logo"/>
      <nav className="flex h-full bg-gradient-to-r from-lime-green to-bright-cyan">
        <a href="#Home" className="flex px-3 hover:h-anchor-2 items-center bg-white text-dark-gray h-full">Home</a>
        <a href="#About" className="flex px-3 hover:h-anchor-2 items-center bg-white text-dark-gray h-full">About</a>
        <a href="#Contact" className="flex px-3 hover:h-anchor-2 items-center bg-white text-dark-gray h-full">Contact</a>
        <a href="#Blog" className="flex px-3 hover:h-anchor-2 items-center bg-white text-dark-gray h-full">Blog</a>
        <a href="#Careers" className="flex px-3 hover:h-anchor-2 items-center bg-white text-dark-gray h-full">Careers</a>
      </nav>
      <RequestInviteButton/>
    </header>
  );
}