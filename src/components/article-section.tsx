import Image from "next/image";

export default function ArticleSection() {
  return (
    <section className="bg-light-gray h-screen pt-28 px-28 mb-12">
      <h2 className="text-dark-blue text-4xl mb-10">Latest Articles</h2>
      <div className="grid grid-cols-4 gap-5">
        <div className="bg-white rounded-xl overflow-hidden">
          <Image width={500} height={500} src="/image-currency.jpg" alt="Currency" className="h-40"/>
          <div className="w-full h-full flex flex-col gap-2 p-4 mt-2">
            <span className="text-xs text-dark-gray">by Claire Robinson</span>
            <h5 className="text-base font-normal hover:text-bright-cyan hover:cursor-pointer">Receive money in any currency with no fees</h5>
            <span className="text-sm text-dark-gray">The world is getting smaller and we&apos;re becoming more mobile. So why should you be forced to only receive money in a single...</span>
          </div>
        </div>
        <div className="bg-white rounded-xl overflow-hidden">
          <Image width={500} height={500} src="/image-restaurant.jpg" alt="Restaurant" className="h-40"/>
          <div className="w-full h-full flex flex-col gap-2 p-4 mt-2">
            <span className="text-xs text-dark-gray">by Wilson Hutton</span>
            <h5 className="text-base font-normal hover:text-bright-cyan hover:cursor-pointer">Treat yourself whitout worring about money</h5>
            <span className="text-sm text-dark-gray">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...</span>
          </div>
        </div>
        <div className="bg-white rounded-xl overflow-hidden">
          <Image width={500} height={500} src="/image-plane.jpg" alt="Plane" className="h-40"/>
          <div className="w-full h-full flex flex-col gap-2 p-4 mt-2">
            <span className="text-xs text-dark-gray">by Wilson Hutton</span>
            <h5 className="text-base font-normal hover:text-bright-cyan hover:cursor-pointer">Take your Easybank card wherever you go</h5>
            <span className="text-sm text-dark-gray">We want you to enjoy your travels. This is why we don&apos;t charge any fees on purchases while you&apos;re abroad. We&apos;ll even show you...</span>
          </div>
        </div>
        <div className="bg-white rounded-xl overflow-hidden">
          <Image width={500} height={500} src="/image-confetti.jpg" alt="Plane" className="h-40"/>
          <div className="w-full h-full flex flex-col gap-2 p-4 mt-2">
            <span className="text-xs text-dark-gray">by Claire Robinson</span>
            <h5 className="text-base font-normal hover:text-bright-cyan hover:cursor-pointer">Our invite-only beta accounts are now live!</h5>
            <span className="text-sm text-dark-gray">After a lot of hard work by the whole team, we&apos;re exited to lauch our closed beta. It&apos;s easy to request an invite through the site...</span>
          </div>
        </div>
      </div>
    </section>
  );
}