/**
 * Represents a report with associated image URLs and a file URL.
 */
interface ConstructionReport {
    id: number;
    name: string;
    date: string;
    complete: number;
    safety: boolean;
    imageUrls: Array<string>;
    fileUrl: string;
    workersGood: number;
    workersBad: number;
    workersViolations: number;
    objectViolations: number;
    elements: number;
    elementsTypes: number;
}

/**
 * Represents an object with associated construction report.
 */
interface ConstructionObject {
    id: string;
    name: string;
}

export type { ConstructionReport, ConstructionObject };
