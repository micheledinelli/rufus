import { VideoData } from "./VideoData";

export interface ProjectData {
    client: {
        name: string;
        url: string;
    };
    year: string;
    role: string;
    videos: VideoData[];
}