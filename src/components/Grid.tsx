interface VideoData {
  title: string;
  client: string;
  role: string;
  year: string;
  video: {
    src: string;
    type: string;
  };
}

const videoData: VideoData[] = [
  {
    title: "Jerez de la Frontera | Shoutout",
    client: "Lamborghini squadra corse",
    role: "Director & Editor",
    year: "2024",
    video: {
      src: "/videos/lambo.mp4",
      type: "video/mp4"
    }
  },
  {
    title: "Akoni | FW23",
    client: "Akoni",
    role: "Editor & VFX Editor",
    year: "2023",
    video: {
      src: "videos/akoni.mp4",
      type: "video/mp4"
    }
  },
  {
    title: "D&G | Backstage",
    client: "D&G",
    role: "Editor & VFX Editor",
    year: "2022",
    video: {
      src: "videos/deg.mp4",
      type: "video/mp4"
    }
  },
  {
    title: "Akoni | FW23",
    client: "Akoni",
    role: "Editor & VFX Editor",
    year: "2023",
    video: {
      src: "videos/akoni.mp4",
      type: "video/mp4"
    }
  },
  {
    title: "D&G | Backstage",
    client: "D&G",
    role: "Editor & VFX Editor",
    year: "2022",
    video: {
      src: "videos/deg.mp4",
      type: "video/mp4"
    }
  }
];

export default function Grid() {
  return (
    <div className="flex flex-row justify-between border-t-1 border-slate-600 h-full">
      {/* Sidebar */}
      <div className="hidden md:w-1/5 border-r-2 border-slate-600 md:flex md:flex-col md:justify-between pl-4 text-sm">
        <div className="mt-4 sticky top-12">
          <p className="font-bold">VIDEO CREATOR</p>
          <a className="text-accent font-bold planet" href="mailto:info@francescorufini.it">
            INFO@FRANCESCORUFINI.IT
          </a>
          <p className="text-accent font-bold planet">3392949688</p>
        </div>
        <p className="fixed bottom-2 font-bold font-jetbrains text-sm">FrancescoRufini&copy;{new Date().getFullYear()}</p>
      </div>

      {/* Content */}
      <div className="relative w-full h-full lg:w-4/5">
        {
          videoData &&
          videoData.map((video, index) => (
            <div key={index} className="md:flex md:flex-row md:justify-start md:items-start w-full gap-8 border-b-1 border-slate-600">
              <div className="relative w-full h-full md:w-2/4">
                <video className="w-full h-full tv border-none">
                  <source src={video.video.src} type={video.video.type} />
                </video>
                <div className="md:hidden absolute top-4 left-4">
                  <p className="font-bold text-lg">{video.title}</p>
                </div>
                <div className="md:hidden absolute bottom-4 right-4">
                  <p className="font-semibold">{video.role}</p>
                </div>
              </div>
              <div className="hidden md:block mt-4 w-2/4">
                <p className="font-bold text-lg">{video.title}</p>
                <div className="hidden md:mt-4 md:flex md:flex-col md:gap-4 text-sm">
                  <div>
                    <p className="text-xs font-jetbrains">Client</p>
                    <p className="font-semibold">{video.client}</p>
                  </div>
                  <div>
                    <p className="text-xs font-jetbrains">Role</p>
                    <p className="font-semibold">{video.role}</p>
                  </div>
                  <div>
                    <p className="text-xs font-jetbrains">Year</p>
                    <p className="font-semibold">{video.year}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div >
  );
}
