const endpoints = {
    local: {
        baseUrl: "localhost",
        port: "3100"
    },
    production: {
        baseUrl: "",
        port: ""
    }
}

// const serverUrl = endpoints[process.env.SERVER_NAME]
const serverUrl = endpoints['local']
export default serverUrl