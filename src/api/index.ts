const BASE_URL = "http://localhost:8080";

import { Report } from "./types";
import { ReportsApiService } from "./reports";

/**
 * Converts a response body into a Report or an array of Reports.
 *
 * @param {any} responseBody - The response body from the API which could be a single object or an array of objects.
 * @returns {Report | Report[]} A Report object or an array of Report objects with imageUrls and fileUrl fields.
 */
const bodyToReport = (responseBody: any): Report | Report[] => {
    if (Array.isArray(responseBody)) {
        return responseBody.map((body) => ({
            id: body.id,
            name: body.name,
            date: body.date,
            complete: body.complete,
            safety: body.safety,
            imageUrls: body.image_urls,
            fileUrl: body.file_url,
        }));
    }
    return {
        id: responseBody.id,
        name: responseBody.name,
        date: responseBody.date,
        safety: responseBody.safety,
        complete: responseBody.complete,
        imageUrls: responseBody.image_urls,
        fileUrl: responseBody.file_url,
    };
};

export { BASE_URL, bodyToReport, ReportsApiService };
