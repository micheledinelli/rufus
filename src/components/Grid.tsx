interface VideoData {
  title: string;
  client: {
    name: string;
    url: string;
  };
  role: string;
  year: string;
  video: {
    src: string;
    type: string;
    poster: string;
  };
}

const videoData: VideoData[] = [
  {
    title: "Jerez de la Frontera | Shoutout",
    client: {
      name: "Lamborghini squadra corse",
      url: "https://www.lamborghini.com/it-en/motorsport"
    },
    role: "Director & Editor",
    year: "2024",
    video: {
      src: "/videos/lambo.mp4",
      type: "video/mp4",
      poster: "/images/lambo.png"
    }
  },
  {
    title: "Akoni | FW23",
    client: {
      name: "Akoni",
      url: "https://www.akoni.com/"
    },
    role: "Editor & VFX Editor",
    year: "2023",
    video: {
      src: "videos/akoni.mp4",
      type: "video/mp4",
      poster: "/images/akoni.png"
    }
  },
  {
    title: "D&G | BTS",
    client: {
      name: "Dolce & Gabbana",
      url: "https://www.dolcegabbana.com/"
    },
    role: "Editor & VFX Editor",
    year: "2022",
    video: {
      src: "videos/deg.mp4",
      type: "video/mp4",
      poster: "/images/deg.png"
    }
  },
  {
    title: "Missoni | BTS",
    client: {
      name: "Missoni",
      url: "https://www.missoni.com/"
    },
    role: "Editor & VFX Editor",
    year: "2022",
    video: {
      src: "videos/missoni.mp4",
      type: "video/mp4",
      poster: "/images/missoni.png"
    }
  },
  {
    title: "Gucci | Sohutout",
    client: {
      name: "Gucci",
      url: "https://www.gucci.com/"
    },
    role: "Editor & VFX Editor",
    year: "2021",
    video: {
      src: "videos/gucci.mp4",
      type: "video/mp4",
      poster: "images/gucci.png"
    }
  },
  {
    title: "Yatay | Shoutout",
    client: {
      name: "Yatay",
      url: "https://www.yatai.it/"
    },
    role: "Director & Editor",
    year: "2021",
    video: {
      src: "videos/yatai.mp4",
      type: "video/mp4",
      poster: "images/yatay.png"
    }
  }
];

export default function Grid() {
  return (
    <div className="relative flex flex-row justify-between border-t-1 border-slate-600 h-full">
      {/* Sidebar */}
      <div className="h-full sticky top-0 hidden text-sm md:w-1/5 md:flex md:flex-col md:justify-between md:pl-4">
        <div className="font-bold mt-4">
          <p>VIDEO CREATOR</p>
          <a className="text-accent" href="mailto:info@francescorufini.it">
            INFO@FRANCESCORUFINI.IT
          </a>
          <div>
            <a href="tel:3392949688" className="text-accent">3392949688</a>
          </div>
        </div>
        <p className="fixed bottom-2 font-jetbrains text-xs">Francesco Rufini&copy;{new Date().getFullYear()}</p>
      </div>

      {/* Content */}
      <div className="relative w-full h-full lg:w-4/5 md:border-l-2 md:border-slate-600">
        {
          videoData &&
          videoData.map((video, index) => (
            <div key={index} className="sticky top-0 md:flex md:flex-row md:justify-start md:items-start w-full gap-8 border-b-1 border-slate-600 bg-white">
              <div className="relative w-full h-full md:w-2/4">
                <video className="w-full h-full tv object-cover"
                  controlsList="nodownload"
                  poster={video.video.poster}
                  onMouseEnter={(e) => e.currentTarget.controls = true}
                  onMouseLeave={(e) => e.currentTarget.controls = false}>
                  <source src={video.video.src} type={video.video.type} />
                </video>

                {/* Video badge mobile */}
                <div className="md:hidden text-sm absolute top-4 left-4 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  <a href={"/projects/" + index} className="font-bold">{video.title}</a>
                </div>
                <div className="md:hidden text-sm absolute bottom-4 right-4 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  <p className="font-semibold">{video.role}</p>
                </div>
              </div>

              {/* Video description for md and beyond  */}
              <div className="hidden md:block mt-4 w-2/4">
                <a href={"/projects/" + index} className="font-bold text-xl cursor-pointer py-2 hover:line-through decoration-4">{video.title}</a>
                <div className="hidden font-semibold md:mt-8 md:flex md:flex-col md:gap-4">
                  <div>
                    <p className="text-xs font-jetbrains">Client</p>
                    <a href={video.client.url} className="hover:line-through decoration-4">{video.client.name}</a>
                  </div>
                  <div>
                    <p className="text-xs font-jetbrains">Role</p>
                    <p>{video.role}</p>
                  </div>
                  <div>
                    <p className="text-xs font-jetbrains">Year</p>
                    <p>{video.year}</p>
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
