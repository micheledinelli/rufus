import LamboJerez from "../assets/lambo.mp4";
import DolceAndGabbana from "../assets/deg.mp4";
import Akoni from "../assets/akoni.mp4";

export default function Grid() {
  return (
    <div className="flex flex-row justify-between border-t-1 border-slate-600 h-full">
      {/* Sidebar */}
      <div className="hidden md:w-1/5 border-r-2 border-slate-600 md:flex md:flex-col md:justify-between pl-4 text-sm">
        <div className="mt-4 sticky top-2">
          <p className="font-bold">VIDEO CREATOR</p>
          <a className="text-accent font-bold planet" href="mailto:info@francescorufini.it">
            INFO@FRANCESCORUFINI.IT
          </a>
          <p className="text-accent font-bold planet">3392949688</p>
        </div>
        <p className="absolute bottom-2 font-bold font-jetbrains text-sm">FrancescoRufini&copy;{new Date().getFullYear()}</p>
      </div>

      {/* Content */}
      <div className="relative w-full lg:w-4/5">

        {/* LAMBO */}
        <div className="md:flex md:flex-row md:justify-start md:items-start w-full gap-8 border-b-1 border-slate-600">
          <div className="relative w-full md:w-2/4">
            <video className="w-full tv">
              <source src={LamboJerez} type="video/mp4" />
            </video>
            <div className="md:hidden absolute top-4 left-4">
              <p className="font-bold text-lg">Jerez de la Frontera | Shoutout</p>
            </div>
            <div className="md:hidden absolute bottom-4 right-4">
              <p className="font-semibold">Director & Editor</p>
            </div>
          </div>
          <div className="hidden md:block mt-4">
            <p className="font-bold text-lg">Jerez de la Frontera | Shoutout</p>
            <div className="hidden md:mt-4 md:flex md:flex-col md:gap-4 text-sm">
              <div>
                <p className="text-xs font-jetbrains">Client</p>
                <p className="font-semibold">Lamborghini squadra corse</p>
              </div>
              <div>
                <p className="text-xs font-jetbrains">Role</p>
                <p className="font-semibold">Director & Editor</p>
              </div>
              <div>
                <p className="text-xs font-jetbrains">Year</p>
                <p className="font-semibold">2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Akoni */}
        <div className="md:flex md:flex-row md:justify-start md:items-start w-full gap-8 border-b-1 border-slate-600">
          <div className="relative w-full md:w-2/4">
            <video className="w-full tv">
              <source src={Akoni} type="video/mp4" />
            </video>
            <div className="md:hidden absolute top-4 left-4">
              <p className="font-bold text-lg">Akoni | FW23</p>
            </div>
            <div className="md:hidden absolute bottom-4 right-4">
              <p className="font-semibold">Editor & VFX Editor</p>
            </div>
          </div>
          <div className="hidden md:block mt-4">
            <p className="font-bold text-lg">Akoni | FW23</p>
            <div className="hidden md:mt-4 md:flex md:flex-col md:gap-4 text-sm">
              <div>
                <p className="text-xs font-jetbrains">Client</p>
                <p className="font-semibold">Akoni</p>
              </div>
              <div>
                <p className="text-xs font-jetbrains">Role</p>
                <p className="font-semibold">Editor & VFX Editor</p>
              </div>
              <div>
                <p className="text-xs font-jetbrains">Year</p>
                <p className="font-semibold">2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dolce & Gabbana */}
        <div className="md:flex md:flex-row md:justify-start md:items-start w-full gap-8 border-b-1 border-slate-600">
          <div className="relative w-full md:w-2/4">
            <video className="w-full tv">
              <source src={DolceAndGabbana} type="video/mp4" />
            </video>
            <div className="md:hidden absolute top-4 left-4">
              <p className="font-bold text-lg">D&G | Backstage</p>
            </div>
            <div className="md:hidden absolute bottom-4 right-4">
              <p className="font-semibold">Editor & VFX Editor</p>
            </div>
          </div>
          <div className="hidden md:block mt-4">
            <p className="font-bold text-lg">D&G | Backstage</p>
            <div className="hidden md:mt-4 md:flex md:flex-col md:gap-4 text-sm">
              <div>
                <p className="text-xs font-jetbrains">Client</p>
                <p className="font-semibold">D&G</p>
              </div>
              <div>
                <p className="text-xs font-jetbrains">Role</p>
                <p className="font-semibold">Editor & VFX Editor</p>
              </div>
              <div>
                <p className="text-xs font-jetbrains">Year</p>
                <p className="font-semibold">2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
