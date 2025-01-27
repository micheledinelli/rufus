import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { ProjectData } from "../types/ProjectData";
import { useParams } from "react-router";

export default function Project() {
  const { project } = useParams();

  const [map, setMap] = React.useState<{ [key: string]: ProjectData } | null>(
    null
  );

  const fetchData = async () => {
    const response = await fetch("/json/projects.json");
    const data: ProjectData[] = await response.json();

    const map: { [key: string]: ProjectData } = {};
    data.forEach((project: ProjectData) => {
      map[project.id] = project;
    });

    setMap(map);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div
        className="
      relative w-full flex flex-col justify-center items-center mx-auto mt-4
      md:w-[calc(80vw)] md:h-[calc(95vh-2rem)]"
      >
        {map && project && map[project] && (
          <p className="sticky top-16 z-10 font-bold mb-4 text-2xl text-white mix-blend-difference tracking-tighter">
            {map[project].title}
          </p>
        )}
        <div className="h-2/3 w-full md:w-4/5 flex flex-col rounded md:flex-row no-scrollbar">
          {map &&
            project &&
            map[project] &&
            map[project].videos.map((video) => (
              <div
                key={video.src}
                className="flex-1 md:h-full w-2/3 snap-center sticky top-12 cursor-pointer"
              >
                <video
                  className="w-full h-full object-cover"
                  controlsList="nodownload"
                  autoPlay
                  loop
                  muted
                  controls={false}
                  playsInline
                  poster={video.poster}
                  disablePictureInPicture
                  onMouseEnter={(e) => (e.currentTarget.controls = true)}
                  onMouseLeave={(e) => (e.currentTarget.controls = false)}
                >
                  <source src={video.src} type={video.type} />
                </video>
              </div>
            ))}
        </div>
        {map && project && map[project] && (
          <div className="w-full my-4 px-4 md:px-0 flex flex-col justify-start gap-2">
            <div className="border-b-2 border-slate-600">
              <p className="text-xs font-jetbrains">Client</p>
              <a href={map[project].client.url} className="font-bold">
                {map[project].client.name}
              </a>
            </div>
            <div className="border-b-2 border-slate-600">
              <p className="text-xs font-jetbrains">Role</p>
              <p className="font-bold">{map[project].role}</p>
            </div>
            {map[project].agency && (
              <div className="border-b-2 border-slate-600">
                <p className="text-xs font-jetbrains">Agency</p>
                <a href={map[project].agency.url} className="font-bold">
                  {map[project].agency.name}
                </a>
              </div>
            )}
            <div>
              <p className="text-xs font-jetbrains">Year</p>
              <p className="font-bold">{map[project].year}</p>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
