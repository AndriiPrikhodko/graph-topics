import axios from "axios"
import serverUrl from "../server/endpoints"

export const api = axios.create({
    baseURL: `http://${serverUrl.baseUrl}:${serverUrl.port}`,
})

interface IErrorObj {
    code: string
    response: {
        status: number
        [key: string]: any
    }
}

// defining a custom error handler for all APIs
const errorHandler = (error: IErrorObj) => {
    const statusCode = error.response?.status

    if (error.code === "ERR_CANCELED") {
        // notification.error({
        //     placement: "bottomRight",
        //     description: "API canceled!",
        // })
        return Promise.resolve()
    }

    // logging only errors that are not 401
    if (statusCode && statusCode !== 401) {
        console.error(error)
    }

    return Promise.reject(error)
}

// registering the custom error handler to the
// "api" axios instance
api.interceptors.response.use(undefined, (error: IErrorObj) => {
    return errorHandler(error)
})