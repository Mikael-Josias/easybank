import Image from "next/image";
import RequestInviteButton from "./request-invite-button";

export default function HeroSection() {
  return (
    <main className="bg-light-gray w-full h-auto pb-24 lg:pb-0 lg:h-[650px]">
      <div className="w-full xl:w-[1200px] h-full mx-auto px-10 xl:px-0 relative flex flex-col-reverse">
        <div className="mt-[calc(100vw+30px)] w-full text-center lg:pb-24 lg:mt-0 lg:w-auto lg:text-left overflow-hidden">
          <h1 className="text-dark-blue text-5xl mb-8">Next generation<br/>digital banking</h1>
          <span className="text-dark-gray mb-8 block">
            Take your financial life online. Your Easybank account<br/>will be a one-stop-shop for spending, saving,<br/>budgeting, investing and much more. 
          </span>
          <RequestInviteButton/>
        </div>
        <Image width={1000} height={1000} src="/bg-intro-desktop.svg" alt="blue and green background" className="hidden lg:block absolute right-[-400px] top-[-80px]"/>
        <div className="block lg:hidden">
          <Image width={1000} height={1000} src="/bg-intro-mobile.svg" alt="blue and green background" className="block absolute left-0 top-0"/>
        </div>
      </div>
      <Image width={700} height={700} src="/image-mockups.png" alt="four cellphones with easybank app open" className="absolute right-1/2 translate-x-1/2 top-[-140px] lg:right-[-220px] lg:translate-x-0 xl:right-[calc(50%-500px)] xl:translate-x-1/2 lg:top-[-30px]"/>
    </main>
  );
}