import { Video } from "./VideoData";

export interface ProjectData {
  id: string;
  title: string;
  agency: {
    name: string;
    url: string;
  };
  client: {
    name: string;
    url: string;
  };
  year: string;
  role: string;
  director: {
    name: string;
    url: string;
  };
  videos: Video[];
}
