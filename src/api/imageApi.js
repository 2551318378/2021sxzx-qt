import service from "./http"

export function GetImages(req) {
    return service.request({
        method: "get",
        url: "/v1/get-picture-ht",
        responseType: 'buffer',
        // responseType: 'blob',                                               
        params: req
    })
}