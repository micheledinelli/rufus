import "../cursors.css"

export default function Navbar() {
  return (
    <div className='flex flex-row justify-between py-2 px-4 font-extrabold text-xl bg-slate-950 text-mix-blend-lighten md:bg-inherit md:text-inherit'>
      <a className="planet" href="https://francesorufini.it">FRANCESCO RUFINI</a>
      <div>About</div>
    </div>
  )
}
