import axios from "axios";
import { BASE_URL } from ".";

export const ReportsApiService = () => {
    return {
        /**
         * Fetches a list of reports from the API.
         *
         * @returns {Promise<any>} A promise that resolves to the data retrieved from the API.
         */
        getReports: async (): Promise<any> => {
            const { data } = await axios.get(`${BASE_URL}/reports`);
            return data;
        },

        /**
         * Creates a new report with an image.
         *
         * @param {string} id - The ID of the report to which the image will be added.
         * @param {File} image - The image file to be uploaded and associated with the report.
         * @returns {Promise<any>} A promise that resolves to the data returned from the API.
         */
        createReport: async (id: string, image: File): Promise<any> => {
            const formData = new FormData();
            formData.append("image", image);

            const { data } = await axios.put(
                `${BASE_URL}/reports/${id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            return data;
        },

        /**
         * Deletes a report by its ID.
         *
         * @param {string} id - The ID of the report to be deleted.
         * @returns {Promise<void>} A promise that resolves when the report is successfully deleted.
         */
        deleteReport: async (id: string): Promise<void> => {
            await axios.delete(`${BASE_URL}/reports/${id}`);
        },
    };
};
ReportsApiService.prototype.STATIC_VALUE = "test";
