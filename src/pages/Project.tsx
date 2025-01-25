import React from "react";
import Navbar from "../components/Navbar";
import { ProjectData } from "../types/ProjectData";
import { useParams } from "react-router";

const map: { [key: string]: ProjectData } = {
  "jerez-de-la-frontera": {
    id: "jerez-de-la-frontera",
    title: "Jerez de la Frontera | Shoutout",
    agency: "Pros on pixel",
    client: {
      name: "Lamborghini squadra corse",
      url: "https://www.lamborghini.com/it-en/motorsport"
    },
    role: "Director & Editor",
    year: "2024",
    videos: [
      {
        src: "/videos/lambo.mp4",
        type: "video/mp4",
        poster: "/images/lambo.webp"
      },
    ]
  },
  "akoni": {
    id: "akoni",
    title: "Akoni | FW23",
    agency: "Providence",
    client: {
      name: "Akoni",
      url: "https://www.akoni.com/"
    },
    role: "Editor & VFX Editor",
    year: "2023",
    videos: [
      {
        src: "/videos/akoni.mp4",
        type: "video/mp4",
        poster: "/images/akoni.webp"
      },
      {
        src: "/videos/akoni2.mp4",
        type: "video/mp4",
        poster: "/images/akoni.webp"
      },
      {
        src: "/videos/akoni3.mp4",
        type: "video/mp4",
        poster: "/images/akoni.webp"
      },
    ]
  },
  "d&g": {
    id: "d&g",
    title: "D&G | BTS",
    agency: "Providence",
    client: {
      name: "Dolce & Gabbana",
      url: "https://www.dolcegabbana.com/"
    },
    role: "Editor & VFX Editor",
    year: "2022",
    videos: [
      {
        src: "/videos/deg.mp4",
        type: "video/mp4",
        poster: "/images/deg.webp"
      },
    ]
  },
  "missoni": {
    id: "missoni",
    title: "Missoni | BTS",
    agency: "Providence",
    client: {
      name: "Missoni",
      url: "https://www.missoni.com/"
    },
    role: "Editor & VFX Editor",
    year: "2022",
    videos: [
      {
        src: "/videos/missoni.mp4",
        type: "video/mp4",
        poster: "/images/missoni.webp"
      },
    ]
  },
  "gucci": {
    id: "gucci",
    title: "Gucci | Sohutout",
    agency: "Providence",
    client: {
      name: "Gucci",
      url: "https://www.gucci.com/"
    },
    role: "Editor & VFX Editor",
    year: "2021",
    videos: [
      {
        src: "/videos/gucci.mp4",
        type: "video/mp4",
        poster: "/images/gucci.webp"
      },
      {
        src: "/videos/gucci2.mp4",
        type: "video/mp4",
        poster: "/images/gucci.webp"
      }
    ]
  },
  "yatay": {
    id: "yatay",
    title: "Yatay | Shoutout",
    client: {
      name: "Yatay",
      url: "https://www.yatai.it/"
    },
    role: "Motion Designer",
    agency: "Providence",
    year: "2021",
    videos: [
      {
        src: "/videos/yatay.mp4",
        type: "video/mp4",
        poster: "/images/yatay.webp"
      }
    ]
  }
};

export default function Project() {

  const { project } = useParams();

  return (
    <React.Fragment>
      <Navbar />
      <div className='
      relative w-full flex flex-col justify-center items-center mx-auto mt-4
      md:w-[calc(80vw)] md:h-[calc(95vh-2rem)]'>
        {
          map && project && map[project] &&
          <p className="sticky top-16 z-10 font-bold mb-4 text-xl text-white mix-blend-difference">
            {map[project].title}
          </p>
        }
        <div className="relative flex flex-col h-full rounded-sm no-scrollbar
          md:flex-row justify-between md:overflow-x-auto md:snap-x md:snap-mandatory"
        >
          {
            map && project && map[project] && map[project].videos.map((video) => (
              <div
                key={video.src}
                className="md:w-calc[(90vw)] md:h-full md:flex-shrink-0 snap-center sticky top-12 cursor-pointer">
                <video className="w-full h-full object-cover"
                  controlsList="nodownload"
                  autoPlay
                  loop
                  muted
                  controls={false}
                  playsInline
                  poster={video.poster}
                  disablePictureInPicture
                  onMouseEnter={(e) => e.currentTarget.controls = true}
                  onMouseLeave={(e) => e.currentTarget.controls = false}
                >
                  <source src={video.src} type={video.type} />
                </video>
              </div>
            ))
          }
        </div>
        {map && project && map[project] &&
          < div className="w-full my-4 px-4 md:px-0 flex flex-col justify-start gap-2">
            <div className="border-b-1 border-slate-600">
              <p className="text-xs font-jetbrains">Client</p>
              <a href={map[project].client.url} className="font-bold">{map[project].client.name}</a>
            </div>
            <div className="border-b-1 border-slate-600">
              <p className="text-xs font-jetbrains">Role</p>
              <p className="font-bold">{map[project].role}</p>
            </div>
            <div className="border-b-1 border-slate-600">
              <p className="text-xs font-jetbrains">Agency</p>
              <p className="font-bold">{map[project].agency}</p>
            </div>
            <div>
              <p className="text-xs font-jetbrains">Year</p>
              <p className="font-bold">{map[project].year}</p>
            </div>
          </div>}
      </div>
    </React.Fragment >
  )
}
