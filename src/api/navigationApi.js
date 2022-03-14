/* 
    import { 函数名 } from ...
    let req = {}
    GetRules(req).then(res=>{})
*/
import service from "./http"

export function GetRules(req) {
    return service.request({
        method: "post",
        url: "/v1/getRules",
        params: req
    })
}

export function GetRegions(req) {
    return service.request({
        method: "post",
        url: "/v1/getRegions",
        params: req
    })
}

export function GetItemRules(req) {
    return service.request({
        method: "post",
        url: "/v1/getItemRules",
        params: req
    })
}

export function GetItems(req) {
    return service.request({
        method: "post",
        url: "/v1/getItems",
        params: req
    })
}

export function GetItemByUniId(req) {
    return service.request({
        method: "post",
        url: "/v1/getItemByUniId",
        params: req
    })
}

export function GetRegionPath(req) {
    return service.request({
        method: "post",
        url: "/v1/getRegionPath",
        params: req
    })
}

export function GetRulePath(req) {
    return service.request({
        method: "post",
        url: "/v1/getRulePath",
        params: req
    })
}
