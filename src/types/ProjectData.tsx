import { VideoData } from "./VideoData";

export interface ProjectData {
    title: string;
    agency: string;
    client: {
        name: string;
        url: string;
    };
    year: string;
    role: string;
    videos: VideoData[];
}