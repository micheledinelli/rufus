import { useCallback, useEffect, useState } from "react";
import { ProjectData } from "../types/ProjectData";

export default function Grid() {
  const [filter, setFilter] = useState<string | null>(null);
  const [filters, setFilters] = useState<string[]>([]);
  const [projectsData, setProjectsData] = useState<ProjectData[]>([]);
  const [projectsDataPointer, setprojectsDataPointer] = useState<ProjectData[]>(
    []
  );

  const filterData = useCallback(
    (data: ProjectData[]) => {
      if (!filter) {
        setprojectsDataPointer(data);
        return data;
      }

      const filteredData: ProjectData[] = data.filter((video) => {
        return video.role.split(", ").includes(filter);
      });

      setprojectsDataPointer(filteredData);
    },
    [filter]
  );

  const fetchData = async () => {
    const response = await fetch("/json/projects.json");
    const data: ProjectData[] = await response.json();

    const filters = data.reduce((acc: string[], video) => {
      video.role.split(", ").forEach((role) => {
        if (!acc.includes(role)) {
          acc.push(role);
        }
      });
      return acc;
    }, []);

    setProjectsData(data);
    setprojectsDataPointer(data);
    setFilters(filters);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterData(projectsData.slice());
  }, [filter, filterData]);

  return (
    <div className="relative flex flex-row justify-between h-full bg-white">
      {/* Sidebar */}
      <div
        className="
      hidden h-full text-sm
      md:w-1/5 md:flex md:flex-col md:justify-between 
      md:sticky md:top-12"
      >
        <div className="font-bold mt-4 flex flex-col pl-4">
          <p>VIDEO CREATOR</p>
          <a
            className="hover:underline decoration-2 text-accent"
            href="mailto:info@francescorufini.it"
          >
            INFO@FRANCESCORUFINI.IT
          </a>
          <a
            href="tel:3392949688"
            className="hover:underline decoration-2 text-accent"
          >
            3392949688
          </a>
        </div>
        <ul
          className="
        font-bold font-jetbrains border-t-2 border-b-2 border-slate-600
        flex flex-col list-inside list-disc pl-4 my-6 py-4"
        >
          <span className="mb-2">Role</span>
          {filters &&
            filters.map((role, index) => (
              <li
                key={role + index}
                className={`decoration-2 cursor-pointer 
                  ${
                    filter == role
                      ? "line-through text-accent"
                      : "hover:underline"
                  }`}
                onClick={() => setFilter(role)}
              >
                {role}
              </li>
            ))}
          <li
            className="decoration-2 cursor-pointer hover:underline"
            onClick={() => setFilter(null)}
          >
            Reset
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="relative w-full h-full lg:w-4/5 md:border-l-2 md:border-slate-600">
        {projectsDataPointer &&
          projectsDataPointer.map((video) => (
            <div
              key={video.id}
              className="sticky top-12 md:flex md:flex-row md:justify-start md:items-start w-full gap-8 border-b-2 border-slate-600 bg-white"
            >
              <div
                className="relative w-full h-full md:w-3/5"
                onClick={() => (window.location.href = "/projects/" + video.id)}
              >
                <video
                  className="w-full h-full tv object-cover"
                  controlsList="nodownload"
                  loop
                  muted
                  disablePictureInPicture
                  controls={false}
                  playsInline
                  poster={video.videos[0].poster}
                  onMouseEnter={(e) => {
                    e.currentTarget.play();
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.play();
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.pause();
                  }}
                >
                  <source
                    src={video.videos[0].src}
                    type={video.videos[0].type}
                  />
                </video>

                {/* Video badge mobile */}
                <div className="md:hidden text-sm absolute top-4 left-4 text-white mix-blend-difference">
                  <a href={"/projects/" + video.id} className="font-bold">
                    {video.title}
                  </a>
                </div>
                <div className="md:hidden text-sm absolute bottom-4 right-4 text-white mix-blend-difference">
                  <p className="font-semibold">{video.role}</p>
                </div>
              </div>

              {/* Video description for md and beyond  */}
              <div className="hidden md:block mt-6 w-2/5">
                <a
                  href={"/projects/" + video.id}
                  className="font-bold text-xl cursor-pointer py-2 hover:line-through decoration-2"
                >
                  {video.title}
                </a>
                <div className="hidden text-sm font-semibold md:mt-8 md:flex md:flex-col md:gap-4">
                  <div>
                    <p className="text-xs font-jetbrains">Client</p>
                    <a
                      href={video.client.url}
                      className="hover:line-through decoration-2"
                    >
                      {video.client.name}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-jetbrains">Role</p>
                    {video.role.split(", ").map((role, index) => (
                      <span
                        key={role + index}
                        className={`${
                          filter === role ? "animate-pulse text-accent" : ""
                        }`}
                      >
                        {role}
                        {index < video.role.split(", ").length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                  {video.agency && (
                    <div>
                      <p className="text-xs font-jetbrains">Agency</p>
                      <a
                        className="hover:line-through decoration-2"
                        href={video.agency.url}
                      >
                        {video.agency.name}
                      </a>
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-jetbrains">Year</p>
                    <p>{video.year}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
