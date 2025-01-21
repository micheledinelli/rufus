import "../cursors.css"

export default function Navbar() {
  return (
    <div className='sm:sticky sm:top-0 md:static flex flex-row justify-between py-2 px-4 font-extrabold text-xl bg-slate-950 text-mix-blend-lighten md:bg-inherit md:text-inherit'>
      <a className="planet" href="https://francesorufini.it">FRANCESCO RUFINI</a>
      <a className="cursor-pointer" href="">About</a>
    </div>
  )
}
