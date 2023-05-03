import Image from "next/image";
import RequestInviteButton from "./request-invite-button";

export default function HeroSection() {
  return (
    <main className="bg-light-gray h-screen overflow-x-hidden">
      <div className="relative overflow-hidden h-full">
        <div className="mt-48 ml-28">
          <h1 className="text-dark-blue text-5xl mb-8">Next generation<br/>digital banking</h1>
          <span className="text-dark-gray mb-8 block">
            Take your financial life online. Your Easybank account<br/>will be a one-stop-shop for spending, saving,<br/>budgeting, investing and much more. 
          </span>
          <RequestInviteButton/>
        </div>
        <Image width={1200} height={1200} src="/bg-intro-desktop.svg" alt="blue and green background" className="absolute right-[-400px] top-[-160px]"/>
      </div>
      <Image width={700} height={700} src="/image-mockups.png" alt="four cellphones with easybank app open" className="absolute right-[-120px] top-[-30px]"/>
    </main>
  );
}