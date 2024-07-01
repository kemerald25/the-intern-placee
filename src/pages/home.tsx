import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <header className="min-h-[17.875rem] pb-6 text-white flex justify-end flex-col pl-6 w-full relative isolate">
        {/* Dave me without conscience */}
        <img
          src="/images/23a5bbb18f810f4e62ba759d4fceaf79.png"
          alt="banner"
          className="absolute top-0 left-0 object-cover object-left w-full h-full -z-10"
        />
        <div>
          <h1 className="text-2xl mb-[1.125rem]">
            Mykola we’re here to <br /> help you land your next job!
          </h1>
          <span className="flex items-center space-x-[0.75rem]"></span>
        </div>
      </header>
    </RootLayout>
  );
}
