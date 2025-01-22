import React from "react";
import Navbar from "./components/Navbar";
import { VideoData } from "./types/VideoData";
import { ProjectData } from "./types/ProjectData";

const videoData: VideoData[] = [
  {
    id: "akoni",
    title: "Akoni | FW23",
    client: {
      name: "Akoni",
      url: "https://www.akoni.com/"
    },
    role: "Editor & VFX Editor",
    year: "2023",
    video: {
      src: "/videos/akoni.mp4",
      type: "video/mp4",
      poster: "/images/akoni.png"
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
    year: "2023",
    video: {
      src: "/videos/akoni2.mp4",
      type: "video/mp4",
      poster: "/images/akoni.png"
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
    year: "2023",
    video: {
      src: "/videos/akoni3.mp4",
      type: "video/mp4",
      poster: "/images/akoni.png"
    }
  },
]

const projectData: ProjectData = {
  client: {
    name: "Akoni",
    url: "https://www.akoni.com/"
  },
  role: "Editor & VFX Editor",
  year: "2023",
  videos: videoData
}

export default function Project() {
  return (
    <div className='relative w-full md:h-[calc(90vh-2rem)]'>
      <Navbar />
      <div className="bg-slate-950 sticky top-10 z-10 w-full p-4 flex flex-row justify-evenly text-slate-50 md:hidden">
        {projectData &&
          <React.Fragment>
            <p className="font-bold">{projectData.client.name.toUpperCase()}</p>
            <p className="font-bold">{projectData.role.toUpperCase()}</p>
            <p className="font-bold">{projectData.year}</p>
          </React.Fragment>
        }
      </div>
      <div className="relative flex flex-col md:flex-row justify-between h-full md:overflow-x-auto md:snap-x md:snap-mandatory no-scrollbar">
        {
          videoData && videoData.map((video) => (
            <div
              key={video.id}
              className="md:w-calc[(90vw)] md:h-full md:flex-shrink-0 snap-center sticky top-0">
              <video className="w-full h-full object-cover"
                controlsList="nodownload"
                autoPlay
                loop
                muted
                controls={false}
                playsInline
                poster={video.video.poster}
              >
                <source src={video.video.src} type={video.video.type} />
              </video>
            </div>
          ))
        }
      </div>
      <div className="hidden md:w-full md:mt-4 md:flex flex-row justify-evenly">
        {projectData &&
          <React.Fragment>
            <p className="font-bold">{projectData.client.name.toUpperCase()}</p>
            <p className="font-bold">{projectData.role.toUpperCase()}</p>
            <p className="font-bold">{projectData.year}</p>
          </React.Fragment>
        }
      </div>
    </div>
  )
}
