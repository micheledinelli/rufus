import { useMemo, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ProjectData } from "../types/ProjectData";

export default function Grid() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string | null>(null);
  const [projectsData, setProjectsData] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [reloadToken, setReloadToken] = useState(0);

  useEffect(() => {
    let ignore = false;

    async function loadProjects() {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch("/json/projects.json");
        if (!response.ok) throw new Error("Failed to load projects");
        const data: ProjectData[] = await response.json();
        if (!ignore) setProjectsData(data);
      } catch (e) {
        console.error(e);
        if (!ignore) setError(true);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadProjects();
    return () => {
      ignore = true;
    };
  }, [reloadToken]);

  const filters = useMemo(() => {
    return projectsData.reduce((acc: string[], video) => {
      video.role.split(", ").forEach((role) => {
        if (!acc.includes(role)) {
          acc.push(role);
        }
      });
      return acc;
    }, []);
  }, [projectsData]);

  const projectsDataPointer = useMemo(() => {
    if (!filter) return projectsData;
    return projectsData.filter((video) =>
      video.role.split(", ").includes(filter)
    );
  }, [projectsData, filter]);

  const projectsByYear = useMemo(() => {
    return projectsDataPointer.reduce((acc, project) => {
      const year = project.year;
      if (!acc[year]) acc[year] = [];
      acc[year].push(project);
      return acc;
    }, {} as Record<string, ProjectData[]>);
  }, [projectsDataPointer]);

  const sortedYears = useMemo(() => {
    return Object.keys(projectsByYear).sort((a, b) => Number(b) - Number(a));
  }, [projectsByYear]);

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-64 gap-4 text-center px-4">
        <p className="font-bold">Something went wrong loading the work.</p>
        <button
          onClick={() => setReloadToken((t) => t + 1)}
          className="underline hover:line-through decoration-2"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="relative flex flex-row justify-between h-full bg-white select-none">
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
        flex flex-col list-inside list-disc pl-4 mt-3 py-4"
        >
          <span className="mb-2">Role</span>
          {filters &&
            filters.map((role, index) => (
              <li
                key={role + index}
                role="button"
                tabIndex={0}
                aria-pressed={filter == role}
                className={`decoration-2 cursor-pointer
                  ${
                    filter == role
                      ? "line-through text-accent"
                      : "hover:underline"
                  }`}
                onClick={() => setFilter(role)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setFilter(role);
                  }
                }}
              >
                {role}
              </li>
            ))}
          <li
            role="button"
            tabIndex={0}
            className="decoration-2 cursor-pointer hover:underline"
            onClick={() => setFilter(null)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setFilter(null);
              }
            }}
          >
            Reset
          </li>
        </ul>
        <div
          className="font-bold font-jetbrains flex flex-col pl-4 py-4">
          {sortedYears.map((year) => (
          <div key={year} className="mb-2">
            <span className="text-accent mb-2 block">{year}</span>
            <ul className="pl-4 list-disc">
              {projectsByYear[year].map((project) => (
              <li key={project.id} className="mb-1">
                <Link
                  to={`/projects/${project.id}`}
                  className="hover:bg-primary hover:text-white px-1 -mx-1 transition-colors duration-150"
                >
                  {project.title}
                </Link>
              </li>
              ))}
            </ul>
          </div>
          ))}
        </div>

      </div>

      {/* Content */}
      <div className="relative w-full h-full lg:w-4/5 md:border-l-2 md:border-slate-600">
        {loading && (
          <div className="flex justify-center items-center h-64 font-bold font-jetbrains">
            Loading...
          </div>
        )}
        {!loading &&
          projectsDataPointer &&
          projectsDataPointer.map((video) => (
            <div
              key={video.id}
              className="sticky top-12 md:flex md:flex-row md:justify-start md:items-start w-full gap-8 border-b-2 border-slate-600 bg-white"
            >
              <div
                className="relative w-full h-full md:w-3/5"
                data-cursor-dot
                onClick={() => navigate("/projects/" + video.id)}
              >
                <video
                  className="w-full h-full object-cover"
                  controlsList="nodownload"
                  loop
                  muted
                  preload="none"
                  disablePictureInPicture
                  controls={false}
                  playsInline
                  poster={video.videos[0].poster}
                  aria-label={video.title}
                  onMouseEnter={(e) => {
                    e.currentTarget.play();
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                  }}
                  onTouchStart={() => {
                    // e.currentTarget.play();
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
                  <Link to={"/projects/" + video.id} className="font-bold">
                    {video.title}
                  </Link>
                </div>
                <div className="md:hidden text-sm absolute bottom-4 right-4 text-white mix-blend-difference">
                  <p className="font-semibold">{video.role}</p>
                </div>
              </div>

              {/* Video description for md and beyond  */}
              <div className="hidden md:block mt-6 w-2/5">
                <Link
                  to={"/projects/" + video.id}
                  className="font-bold text-xl cursor-pointer py-2 hover:line-through decoration-2"
                >
                  {video.title}
                </Link>
                <div className="hidden text-sm font-semibold md:mt-8 md:flex md:flex-col md:gap-4">
                  <div>
                    <p className="text-xs font-jetbrains">Client</p>
                    <a
                      href={video.client.url}
                      target="_blank"
                      rel="noopener noreferrer"
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
                        target="_blank"
                        rel="noopener noreferrer"
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
