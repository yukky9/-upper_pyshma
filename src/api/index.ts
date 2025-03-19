const BASE_URL = "http://localhost:8080";

import { ConstructionReport } from "./types";
import { ReportsApiService } from "./reports";

/**
 * Converts a response body into a Report or an array of Reports.
 *
 * @param {any} responseBody - The response body from the API which could be a single object or an array of objects.
 * @returns {ConstructionReport | ConstructionReport[]} A Report object or an array of Report objects with imageUrls and fileUrl fields.
 */
const bodyToReport = (
    responseBody: any
): ConstructionReport | ConstructionReport[] => {
    if (Array.isArray(responseBody)) {
        return responseBody.map(
            (body): ConstructionReport => ({
                id: body.id,
                name: body.name,
                date: body.date,
                complete: body.complete,
                safety: body.safety,
                imageUrls: body.image_urls,
                fileUrl: body.file_url,
                workersGood: body.workers_good,
                workersBad: body.workers_bad,
                workersViolations: body.workers_violations,
                objectViolations: body.object_violations,
                elements: body.elements,
                elementsTypes: body.elements_types,
            })
        );
    }
    return {
        id: responseBody.id,
        name: responseBody.name,
        date: responseBody.date,
        complete: responseBody.complete,
        safety: responseBody.safety,
        imageUrls: responseBody.image_urls,
        fileUrl: responseBody.file_url,
        workersGood: responseBody.workers_good,
        workersBad: responseBody.workers_bad,
        workersViolations: responseBody.workers_violations,
        objectViolations: responseBody.object_violations,
        elements: responseBody.elements,
        elementsTypes: responseBody.elements_types,
    };
};

export { BASE_URL, bodyToReport, ReportsApiService };
