import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <div className="flex items-center justify-between px-6 py-3 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/50 shadow-lg shadow-slate-200/50">
        {/* Logo Section */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-32 h-11 overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/company/logo-768x269.webp"
              alt="Logo"
              fill
              sizes="(max-width: 768px) 100vw, 128px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Shop", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative text-sm font-semibold text-[#daaa41] hover:text-[#b88f36] transition-colors py-2 group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#daaa41] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 rounded-full" />
            </Link>
          ))}
        </div>

        {/* Right Section: Search & Profile */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search Box */}
          <div className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-48 lg:w-64 rounded-full bg-slate-50/50 border border-slate-200 focus:outline-none focus:border-[#daaa41] focus:ring-1 focus:ring-[#daaa41] text-sm text-slate-700 placeholder-slate-400 transition-all shadow-inner"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
            </svg>
          </div>

          {/* Profile Icon */}
          <button className="p-2 rounded-full hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200 text-[#daaa41] hover:text-[#b88f36]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="sr-only">Profile</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
