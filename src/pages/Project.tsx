import React from "react";
import Navbar from "../components/Navbar";
import { VideoData } from "../types/VideoData";
import { ProjectData } from "../types/ProjectData";

const videoData: VideoData[] = [
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
    agency: "Providence",
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
    agency: "Providence",
    year: "2023",
    video: {
      src: "/videos/akoni3.mp4",
      type: "video/mp4",
      poster: "/images/akoni.png"
    }
  },
]

const projectData: ProjectData = {
  title: "Akoni | FW23",
  agency: "Providence",
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
    <React.Fragment>
      <Navbar />
      <div className='
      relative w-full flex flex-col justify-center items-center mx-auto mt-4
      md:w-[calc(80vw)] md:h-[calc(90vh-2rem)]'>
        <p className="sticky top-16 z-10 font-bold mb-4 text-xl text-white mix-blend-difference">{projectData.title}</p>
        <div className="relative flex flex-col h-full rounded-sm no-scrollbar
          md:flex-row justify-between md:overflow-x-auto md:snap-x md:snap-mandatory"
        >
          {
            videoData && videoData.map((video) => (
              <div
                key={video.id}
                className="md:w-calc[(90vw)] md:h-full md:flex-shrink-0 snap-center sticky top-12">
                <video className="w-full h-full object-cover"
                  controlsList="nodownload"
                  autoPlay
                  loop
                  muted
                  controls={false}
                  playsInline
                  poster={video.video.poster}
                  onMouseEnter={(e) => e.currentTarget.controls = true}
                  onMouseLeave={(e) => e.currentTarget.controls = false}
                >
                  <source src={video.video.src} type={video.video.type} />
                </video>
              </div>
            ))
          }
        </div>
        <div className="w-full my-4 px-4 md:px-0 flex flex-col justify-start gap-2">
          <div className="border-b-1 border-slate-600">
            <p className="text-xs font-jetbrains">Client</p>
            <a href={projectData.client.url} className="font-bold">{projectData.client.name}</a>
          </div>
          <div className="border-b-1 border-slate-600">
            <p className="text-xs font-jetbrains">Role</p>
            <p className="font-bold">{projectData.role}</p>
          </div>
          <div className="border-b-1 border-slate-600">
            <p className="text-xs font-jetbrains">Agency</p>
            <p className="font-bold">{projectData.agency}</p>
          </div>
          <div>
            <p className="text-xs font-jetbrains">Year</p>
            <p className="font-bold">{projectData.year}</p>
          </div>
        </div>
      </div>
    </React.Fragment >
  )
}
