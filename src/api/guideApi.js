import service from "./http"

export function GetItemGuide(req) {
    return service.request({
        method: "post",
        url: "/v1/getItemGuide",
        data: req
    })
}