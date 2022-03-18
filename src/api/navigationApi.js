/* 
    引用方法
    import { 函数名 } from ...
    let req = {}
    GetRules(req).then(res=>{})
*/
import service from "./http"

export function GetRules(req) {
    return service.request({
        method: "post",
        url: "/v1/getRules",
        data: req
    })
}

export function GetRegions(req) {
    return service.request({
        method: "post",
        url: "/v1/getRegions",
        data: req
    })
}

export function GetItems(req) {
    return service.request({
        method: "post",
        url: "/v1/getItems",
        data: req
    })
}

export function GetItemByUniId(req) {
    return service.request({
        method: "post",
        url: "/v1/getItemByUniId",
        data: req
    })
}

export function GetRegionPath(req) {
    return service.request({
        method: "post",
        url: "/v1/getRegionPath",
        data: req
    })
}

export function GetRulePath(req) {
    return service.request({
        method: "post",
        url: "/v1/getRulePath",
        data: req
    })
}

export function GetChildRegionsByRuleAndRegion(req) {
    return service.request({
        method: "post",
        url: "/v1/getChildRegionsByRuleAndRegion",
        data: req
    })
}
