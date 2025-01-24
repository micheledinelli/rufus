import "../css/cursors.css";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-20 bg-white 
    flex flex-row justify-between items-center 
    py-2 px-4 h-12 
    border-b-1 border-slate-600 font-extrabold md:text-xl">
      <a className="planet hover:line-through decoration-4" href="/">FRANCESCO RUFINI</a>
      <a className="hidden md:block cursor-pointer hover:line-through decoration-4" href="/about">ABOUT</a>
      <div className="md:hidden justify-center items-center">
        <button
          onClick={() => {
            const mobileMenu = document.getElementById("mobile-menu");
            const iconOpen = document.getElementById("icon-open");
            const iconClose = document.getElementById("icon-close");
            if (mobileMenu && iconOpen && iconClose) {
              mobileMenu.classList.toggle("hidden");
              iconOpen.classList.toggle("hidden");
              iconClose.classList.toggle("hidden");
            }
          }}
          type="button"
          id="menu-toggle"
          aria-label="Toggle Menu"
          title="Toggle Menu"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
        >
          <svg
            id="icon-open"
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
          <svg viewBox="0 0 24 24"
            id="icon-close"
            className="w-6 h-6 hidden"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path fillRule="evenodd"
                clipRule="evenodd"
                strokeWidth="1"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                fill="#0F1729"></path>
            </g>
          </svg>
        </button>
        <div
          className="hidden z-50 fixed top-12 bg-[#121212] opacity-90 text-white 
          h-[calc(100vh-3rem)] right-0 w-full
          text-6xl overflow-hidden transition-all duration-300 ease-in-out"
          id="mobile-menu"
        >
          <a
            className="w-full block cursor-pointer hover:line-through decoration-4 py-4 px-4"
            href="/"
          >
            HOME
          </a>
          <a
            className="w-full block cursor-pointer hover:line-through decoration-4 py-4 px-4"
            href="/about"
          >
            ABOUT
          </a>
        </div>
      </div>
    </div>
  );
}
