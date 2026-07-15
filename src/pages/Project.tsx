import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Page404 from "./Page404";
import { ProjectData } from "../types/ProjectData";
import { Video } from "../types/VideoData";
import { useParams } from "react-router";

function isInternalUrl(url: string) {
  return url.startsWith("/");
}

function ExternalOrInternalLink({
  url,
  className,
  children,
}: {
  url: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (isInternalUrl(url)) {
    return (
      <a href={url} className={className}>
        {children}
      </a>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function LazyVideo({ video, title }: { video: Video; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) setHasLoaded(true);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !hasLoaded) return;

    if (isVisible) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [isVisible, hasLoaded]);

  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover"
      controlsList="nodownload"
      loop
      muted
      preload="none"
      controls={false}
      playsInline
      poster={video.poster}
      disablePictureInPicture
      aria-label={title}
      onMouseEnter={(e) => (e.currentTarget.controls = true)}
      onMouseLeave={(e) => (e.currentTarget.controls = false)}
    >
      {hasLoaded && <source src={video.src} type={video.type} />}
    </video>
  );
}

export default function Project() {
  const { project } = useParams();

  const [map, setMap] = useState<{ [key: string]: ProjectData } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [reloadToken, setReloadToken] = useState(0);

  useEffect(() => {
    let ignore = false;

    async function loadProject() {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch("/json/projects.json");
        if (!response.ok) throw new Error("Failed to load project");
        const data: ProjectData[] = await response.json();

        const map: { [key: string]: ProjectData } = {};
        data.forEach((project: ProjectData) => {
          map[project.id] = project;
        });

        if (!ignore) setMap(map);
      } catch (e) {
        console.error(e);
        if (!ignore) setError(true);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadProject();
    return () => {
      ignore = true;
    };
  }, [reloadToken]);

  if (!loading && !error && project && map && !map[project]) {
    return <Page404 />;
  }

  return (
    <React.Fragment>
      <Navbar />
      <div
        className="
      relative w-full flex flex-col justify-center items-center mx-auto mt-4
      md:w-[calc(60vw)] md:h-[calc(95vh-2rem)]"
      >
        {loading && (
          <div className="flex justify-center items-center h-64 font-bold font-jetbrains">
            Loading...
          </div>
        )}
        {error && (
          <div className="flex flex-col justify-center items-center h-64 gap-4 text-center px-4">
            <p className="font-bold">
              Something went wrong loading this project.
            </p>
            <button
              onClick={() => setReloadToken((t) => t + 1)}
              className="underline hover:line-through decoration-2"
            >
              Try again
            </button>
          </div>
        )}
        {map && project && map[project] && (
          <p className="sticky top-16 z-10 font-bold mb-4 text-2xl text-white mix-blend-difference tracking-tighter">
            {map[project].title}
          </p>
        )}
        <div className="h-4/6 w-full flex flex-col rounded md:flex-row justify-between md:overflow-x-scroll md:snap-mandatory md:snap-x">
          {map &&
            project &&
            map[project] &&
            map[project].videos.map((video) => (
              <div
                key={video.src}
                className="h-full w-full sticky top-12 md:w-[calc(w-full-2rem)] md:snap-center md:shrink-0 cursor-pointer"
              >
                <LazyVideo video={video} title={map[project].title} />
              </div>
            ))}
        </div>
        {map && project && map[project] && (
          <div className="w-full my-4 px-4 md:px-0 flex flex-col justify-start gap-2">
            <div className="border-b-2 border-slate-600">
              <p className="text-xs font-jetbrains">Client</p>
              <ExternalOrInternalLink
                url={map[project].client.url}
                className="hover:line-through decoration-2 font-bold"
              >
                {map[project].client.name}
              </ExternalOrInternalLink>
            </div>
            <div className="border-b-2 border-slate-600">
              <p className="text-xs font-jetbrains">Role</p>
              <p className="font-bold">{map[project].role}</p>
            </div>
            <div className="border-b-2 border-slate-600">
              <p className="font-jetbrains text-xs">Director</p>
              <ExternalOrInternalLink
                url={map[project].director.url}
                className="font-bold hover:line-through decoration-2"
              >
                {map[project].director.name}
              </ExternalOrInternalLink>
            </div>
            {map[project].agency && (
              <div className="border-b-2 border-slate-600">
                <p className="text-xs font-jetbrains">Agency</p>
                <ExternalOrInternalLink
                  url={map[project].agency.url}
                  className="hover:line-through decoration-2 font-bold"
                >
                  {map[project].agency.name}
                </ExternalOrInternalLink>
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
