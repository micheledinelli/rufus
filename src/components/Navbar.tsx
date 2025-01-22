import "../cursors.css"

export default function Navbar() {
  return (
    <div className='sticky top-0 z-10 md:static flex flex-row justify-between py-2 px-4 font-extrabold md:text-xl bg-slate-950 text-white md:bg-inherit md:text-inherit'>
      <a className="planet hover:line-through decoration-4" href="/">FRANCESCO RUFINI</a>
      <a className="cursor-pointer hover:line-through decoration-4" href="/about">ABOUT</a>
    </div>
  )
}
