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
      md:w-[calc(60vw)] md:h-[calc(95vh-2rem)]"
      >
        {map && project && map[project] && (
          <p className="sticky top-16 z-10 font-bold mb-4 text-2xl text-white mix-blend-difference tracking-tighter">
            {map[project].title}
          </p>
        )}
        <div className="relative h-4/6 w-full flex flex-col rounded md:flex-row justify-between overflow-x-scroll snap-mandatory snap-x">
          {map &&
            project &&
            map[project] &&
            map[project].videos.map((video) => (
              <div
                key={video.src}
                className="h-full w-full md:w-[calc(w-full-2rem)] shrink-0 sticky top-12 cursor-pointer snap-center"
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
              <a
                href={map[project].client.url}
                className="hover:line-through decoration-2 font-bold"
              >
                {map[project].client.name}
              </a>
            </div>
            <div className="border-b-2 border-slate-600">
              <p className="text-xs font-jetbrains">Role</p>
              <p className="font-bold">{map[project].role}</p>
            </div>
            <div className="border-b-2 border-slate-600">
              <p className="font-jetbrains text-xs">Director</p>
              <a
                href={map[project].director.url}
                className="font-bold hover:line-through decoration-2"
              >
                {map[project].director.name}
              </a>
            </div>
            {map[project].agency && (
              <div className="border-b-2 border-slate-600">
                <p className="text-xs font-jetbrains">Agency</p>
                <a
                  href={map[project].agency.url}
                  className="hover:line-through decoration-2 font-bold"
                >
                  {map[project].agency.name}
                </a>
              </div>
            )}
            <div>
              <p className="font-jetbrains text-sm">Year</p>
              <p className="font-bold">{map[project].year}</p>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
