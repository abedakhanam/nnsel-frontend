//navbar
"use client";

export default function NavBar() {
  return (
    <nav className="bg-background font-rubik">
      <div className="container mx-auto mt-8 flex items-center justify-between w-[1146px] h-[47px] opacity-100">
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="Logo"
            className=" w-[125px] h-[22px] filter invert-[1] brightness-[0]"
          />
        </div>
        {/* Navigation Links */}
        <div className="flex items-center space-x-12 text-[14px] leading-[16.59px]">
          <ul className="flex space-x-11 opacity-50">
            <li>
              <a
                href="/"
                className="font-medium hover:opacity-80 transition-opacity duration-300"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="/about-me"
                className="font-medium hover:opacity-80 transition-opacity duration-300"
              >
                ABOUT ME
              </a>
            </li>
            <li>
              <a
                href="/my-works"
                className="font-medium hover:opacity-80 transition-opacity duration-300"
              >
                MY WORKS
              </a>
            </li>
          </ul>
          <button className="w-[138px] h-[47px] bg-[rgba(3,3,4,0.5)] border-[2px] border-white border-opacity-30 rounded-[30px] text-sm font-bold opacity-80 transition-opacity duration-300 hover:bg-[rgba(255,255,255,0.2)]">
            CONTACT
          </button>
        </div>
      </div>
    </nav>
  );
}
