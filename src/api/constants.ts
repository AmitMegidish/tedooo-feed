export const baseURL = "https://dev.tedooo.com/hw/feed.json";

import { AxiosRequestConfig } from "axios";
import { ERequestMethods } from "../ts/enums";

export type TAxiosReqConfig = {
    url?: string,
    method: ERequestMethods,
    config: AxiosRequestConfig,
}