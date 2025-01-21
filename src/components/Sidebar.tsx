export default function Sidebar() {
  return (
    <div className="border-r-2 border-slate-600 fixed top-16 left-0 w-1/4 h-[calc(100vh-4rem)] pl-4 pt-4 text-sm flex flex-col justify-between">
      <div>
        <p className="font-semibold">VIDEO CREATOR</p>
        <a className="text-slate-600" href="mailto:info@francescorufini.it">
          INFO@FRANCESCORUFINI.IT
        </a>
        <p className="text-slate-600">3392949688</p>
      </div>

      <p className="font-jetbrains text-sm mb-4">FrancescoRufini&copy;{new Date().getFullYear()}</p>
    </div>
  );
}
