import "../css/cursors.css";

export default function Navbar() {
  return (
    <div
      className="sticky top-0 z-20 bg-white 
    flex flex-row justify-between items-center 
    py-2 px-4 h-12 tracking-tighter
    border-b-2 border-slate-600 font-extrabold md:text-2xl"
    >
      <a className="planet hover:line-through decoration-4" href="/">
        FRANCESCO RUFINI
      </a>
      <a
        className="hidden md:block cursor-pointer hover:line-through decoration-4"
        href="/about"
      >
        ABOUT
      </a>
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
            className="w-7 h-7 cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 17.27v-1h16v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z"
            />
          </svg>
          <svg
            viewBox="0 0 24 24"
            id="icon-close"
            className="w-7 h-7 hidden cursor-pointer"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="m12 12.708l-5.246 5.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L11.292 12L6.046 6.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L12 11.292l5.246-5.246q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354L12.708 12l5.246 5.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16z"
            />
          </svg>
        </button>
        <div
          className="hidden z-50 fixed top-12 bg-primary opacity-90 text-white 
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
