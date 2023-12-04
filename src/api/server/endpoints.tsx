const endpoints = {
    development: {
        baseUrl: "localhost",
        port: "3100"
    },
    production: {
        baseUrl: "localhost",
        port: "3100"
    },
    test: {
        baseUrl: "localhost",
        port: "3001"
    }
}


const serverUrl = endpoints[process.env.NODE_ENV]
export default serverUrl