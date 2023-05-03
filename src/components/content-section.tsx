import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="bg-light-gray-blue h-screen pt-28 px-28">
      <h2 className="text-dark-blue text-4xl mb-5">Why choose Easybank?</h2>
      <span className="text-dark-gray block">
        We leverage Open Banking to turn your bank account into your financial hub.<br/>
        Control your finances like never before.
      </span>
      <div className="grid grid-cols-4 gap-8 mt-16">
        <div className="flex flex-col gap-7">
          <Image width={70} height={70} src="/icon-online.svg" alt="credit card icon"/>
          <strong className="text-dark-blue text-xl font-normal">Online Banking</strong>
          <span className="text-dark-gray text-sm">
            Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
          </span>
        </div>
        <div className="flex flex-col gap-7">
          <Image width={70} height={70} src="/icon-budgeting.svg" alt="credit card icon"/>
          <strong className="text-dark-blue text-xl font-normal">Simple Budgeting</strong>
          <span className="text-dark-gray text-sm">
            See exactly where your money goes each month. Receive notifications when you&apos;re close to hitting your limits. 
          </span>
        </div>
        <div className="flex flex-col gap-7">
          <Image width={70} height={70} src="/icon-onboarding.svg" alt="credit card icon"/>
          <strong className="text-dark-blue text-xl font-normal">Fast Onboarding</strong>
          <span className="text-dark-gray text-sm">
            We don&apos;t do branches. Open your account in minutes online and start taking control of your finances right away.
          </span>
        </div>
        <div className="flex flex-col gap-7">
          <Image width={70} height={70} src="/icon-api.svg" alt="credit card icon"/>
          <strong className="text-dark-blue text-xl font-normal">Open API</strong>
          <span className="text-dark-gray text-sm">
            Manage your savings, investments, pension, and much more  from one account. Tracking your money has never been easier.
          </span>
        </div>
      </div>
    </section>
  );
}