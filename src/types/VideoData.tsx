export interface VideoData {
    id: string;
    title: string;
    client: {
        name: string;
        url: string;
    };
    role: string;
    agency: string;
    year: string;
    video: {
        src: string;
        type: string;
        poster: string;
    };
}