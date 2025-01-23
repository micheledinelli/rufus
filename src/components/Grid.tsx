import { useCallback, useEffect, useState } from "react";
import { VideoData } from "../types/VideoData";

const videoData: VideoData[] = [
  {
    id: "jerez-de-la-frontera",
    title: "Jerez de la Frontera | Shoutout",
    client: {
      name: "Lamborghini squadra corse",
      url: "https://www.lamborghini.com/it-en/motorsport"
    },
    role: "Director & Editor",
    agency: "Pros on pixel",
    year: "2024",
    video: {
      src: "/videos/lambo.mp4",
      type: "video/mp4",
      poster: "/images/lambo.png"
    }
  },
  {
    id: "akoni",
    title: "Akoni | FW23",
    client: {
      name: "Akoni",
      url: "https://www.akoni.com/"
    },
    role: "Editor & VFX Editor",
    agency: "Providence",
    year: "2023",
    video: {
      src: "videos/akoni.mp4",
      type: "video/mp4",
      poster: "/images/akoni.png"
    }
  },
  {
    id: "d&g",
    title: "D&G | BTS",
    client: {
      name: "Dolce & Gabbana",
      url: "https://www.dolcegabbana.com/"
    },
    role: "Editor & VFX Editor",
    agency: "Providence",
    year: "2022",
    video: {
      src: "videos/deg.mp4",
      type: "video/mp4",
      poster: "/images/deg.png"
    }
  },
  {
    id: "missoni",
    title: "Missoni | BTS",
    client: {
      name: "Missoni",
      url: "https://www.missoni.com/"
    },
    role: "Editor & VFX Editor",
    agency: "Providence",
    year: "2022",
    video: {
      src: "videos/missoni.mp4",
      type: "video/mp4",
      poster: "/images/missoni.png"
    }
  },
  {
    id: "gucci",
    title: "Gucci | Sohutout",
    client: {
      name: "Gucci",
      url: "https://www.gucci.com/"
    },
    role: "Editor & VFX Editor",
    agency: "Providence",
    year: "2021",
    video: {
      src: "videos/gucci.mp4",
      type: "video/mp4",
      poster: "images/gucci.png"
    }
  },
  {
    id: "yatay",
    title: "Yatay | Shoutout",
    client: {
      name: "Yatay",
      url: "https://www.yatai.it/"
    },
    role: "Motion Designer",
    agency: "Providence",
    year: "2021",
    video: {
      src: "videos/yatai.mp4",
      type: "video/mp4",
      poster: "images/yatay.png"
    }
  }
];

export default function Grid() {
  const [filter, setFilter] = useState<string | null>(null);
  const [videos, setVideos] = useState<VideoData[]>(videoData);

  const filterData = useCallback((data: VideoData[]) => {
    if (!filter) {
      setVideos(data);
      return data
    }
    console.log(data.filter((video) => video.role === filter))
    setVideos(data.filter((video) => video.role === filter));
  }, [filter]);

  useEffect(() => {
    filterData(videoData);
  }, [filter, filterData]);

  return (
    <div className="relative flex flex-row justify-between h-full bg-white">

      {/* Sidebar */}
      <div className="
      hidden h-full text-sm
      md:w-1/5 md:flex md:flex-col md:justify-between 
      md:sticky md:top-12"
      >
        <div className="font-bold mt-4 flex flex-col pl-4">
          <p>VIDEO CREATOR</p>
          <a className="hover:underline text-accent" href="mailto:info@francescorufini.it">
            INFO@FRANCESCORUFINI.IT
          </a>
          <a href="tel:3392949688" className="hover:underline text-accent">3392949688</a>
        </div>
        <ul className="
        font-bold font-jetbrains border-t-1 border-b-1 border-slate-600
        flex flex-col list-inside list-disc pl-4 my-6 py-4">
          <span className="mb-2">Role</span>
          {
            videoData &&
            videoData.reduce((acc: string[], video) => {
              if (!acc.includes(video.role)) {
                acc.push(video.role);
              }
              return acc;
            }, []).map((role, index) => (
              <li
                key={index}
                className={`decoration-2 cursor-pointer 
                  ${filter == role ? "line-through text-accent" : "hover:underline"}`}
                onClick={() => setFilter(role)}>
                {role}
              </li>
            ))
          }
          <li className="decoration-2 cursor-pointer hover:underline"
            onClick={() => setFilter(null)}>
            Reset
          </li>
        </ul>
      </div >

      {/* Content */}
      < div className="relative w-full h-full lg:w-4/5 md:border-l-2 md:border-slate-600" >
        {
          videos &&
          videos.map((video) => (
            <div key={video.id} className="sticky top-12 md:flex md:flex-row md:justify-start md:items-start w-full gap-8 border-b-1 border-slate-600 bg-white">
              <div
                className="relative w-full h-full md:w-3/5"
                onClick={() => window.location.href = "/projects/" + video.id}
              >
                <video className="w-full h-full tv object-cover"
                  controlsList="nodownload"
                  autoPlay
                  loop
                  muted
                  disablePictureInPicture
                  controls={false}
                  playsInline
                  poster={video.video.poster}
                // onMouseEnter={(e) => e.currentTarget.controls = true}
                // onMouseLeave={(e) => e.currentTarget.controls = false}
                >
                  <source src={video.video.src} type={video.video.type} />
                </video>

                {/* Video badge mobile */}
                <div className="md:hidden text-sm absolute top-4 left-4 text-white mix-blend-difference">
                  <a href={"/projects/" + video.id} className="font-bold">{video.title}</a>
                </div>
                <div className="md:hidden text-sm absolute bottom-4 right-4 text-white mix-blend-difference">
                  <p className="font-semibold">{video.role}</p>
                </div>
              </div>

              {/* Video description for md and beyond  */}
              <div className="hidden md:block mt-6 w-2/5">
                <a href={"/projects/" + video.id} className="font-bold text-xl cursor-pointer py-2 hover:line-through decoration-2">
                  {video.title}
                </a>
                <div className="hidden text-sm font-semibold md:mt-8 md:flex md:flex-col md:gap-4">
                  <div>
                    <p className="text-xs font-jetbrains">Client</p>
                    <a href={video.client.url} className="hover:line-through decoration-2">{video.client.name}</a>
                  </div>
                  <div>
                    <p className="text-xs font-jetbrains">Role</p>
                    <p className={`${filter === video.role ? "animate-pulse text-accent" : ""}`}>{video.role}</p>
                  </div>
                  <div>
                    <p className="text-xs font-jetbrains">Agency</p>
                    <p>{video.agency}</p>
                    <p>{video.video.src}</p>
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
      </div >
    </div >
  );
}
