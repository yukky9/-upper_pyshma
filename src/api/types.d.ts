/**
 * Represents a report with associated image URLs and a file URL.
 */
interface Report {
    id: number;
    name: string;
    date: string;
    complete: number;
    safety: boolean;
    imageUrls: Array<string>;
    fileUrl: string;
}

export type { Report };
