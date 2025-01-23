import "../css/cursors.css"

export default function Navbar() {
  return (
    <div className='
    sticky top-0 z-10 
    flex flex-row justify-between items-center
    py-2 px-4 h-12 
    font-extrabold md:text-xl 
    bg-slate-950 text-white md:bg-white md:text-primary 
    md:border-b-1 md:border-slate-600'
    >
      <a className="planet hover:line-through decoration-4" href="/">FRANCESCO RUFINI</a>
      <a className="cursor-pointer hover:line-through decoration-4" href="/about">ABOUT</a>
    </div>
  )
}
