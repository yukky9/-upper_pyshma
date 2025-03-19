import { Configuration, ObjectsApi, ReportsApi } from "../gen/api";

export const Config = new Configuration({
    basePath: "https://api.penki.tech",
});

export const Api = {
    reports: new ReportsApi(Config, "https://api.penki.tech"),
    objects: new ObjectsApi(Config, "https://api.penki.tech"),
    BASE_URI: "https://api.penki.tech",
};
