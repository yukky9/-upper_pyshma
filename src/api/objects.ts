import axios from "axios";
import { BASE_URL } from ".";

/**
 * Provides an API for fetching, creating and deleting objects.
 */
export const ObjectsApiService = () => {
    return {
        /**
         * Fetches a list of objects from the API.
         *
         * @returns {Promise<any>} A promise that resolves to the data retrieved from the API.
         */
        getObjects: async (): Promise<any> => {
            const { data } = await axios.get(`${BASE_URL}/objects`);
            return data;
        },

        /**
         * Creates a new object.
         *
         * @param {any} objectData - The data for the new object.
         * @returns {Promise<any>} A promise that resolves to the data returned from the API.
         */
        createObject: async (objectData: any): Promise<any> => {
            const { data } = await axios.post(
                `${BASE_URL}/objects`,
                objectData
            );
            return data;
        },

        /**
         * Deletes an object by its ID.
         *
         * @param {string} id - The ID of the object to be deleted.
         * @returns {Promise<void>} A promise that resolves when the object is successfully deleted.
         */
        deleteObject: async (id: string): Promise<void> => {
            await axios.delete(`${BASE_URL}/objects/${id}`);
        },
    };
};
