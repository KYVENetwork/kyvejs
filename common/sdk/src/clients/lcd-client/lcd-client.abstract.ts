import axios from "axios";
import qs from "qs";

axios.interceptors.request.use((config) => {
  config.paramsSerializer = (params) => {
    return qs.stringify(params, {
      allowDots: true,
      encode: false,
    });
  };

  return config;
});
export class AbstractKyveLCDClient {
  private restEndpoint: string;
  protected request: (
    url: string,
    params?: Record<string, any>
  ) => Promise<any>;

  constructor(restEndpoint: string) {
    this.restEndpoint = restEndpoint;

    this.request = (url: string, params?: Record<string, any>) => {
      const path = `${this.restEndpoint}${url}`;
      return axios.get(path, { params }).then((res) => res.data);
    };
  }
}
