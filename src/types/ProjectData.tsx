import { Video } from "./VideoData";

export interface ProjectData {
    id: string;
    title: string;
    agency: string;
    client: {
        name: string;
        url: string;
    };
    year: string;
    role: string;
    videos: Video[];
}