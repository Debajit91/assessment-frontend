import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function Navbar() {
  return (
    <header className="w-full bg-[#880808] text-[#FFFFFF]">
      <div className="container flex flex-col md:flex-row md:items-center md:justify-between p-8 gap-4">
        <div className="hidden md:block font-semibold tracking-wide text-3xl md:none">RESTAURANT</div>

        <div className="relative w-full md:max-w-[750px] h-8 md:h-11">
          <input
            className="w-full h-full rounded-xl pl-14 md:pl-18 pr-4 text-sm md:text-base text-black font-bold bg-[#FFFFFF] outline-none"
            placeholder="Search..."
          />

          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500">
          <MagnifyingGlassIcon className="w-6 h-6" />
        </span>
        </div>
        
      </div>
    </header>
  );
}
