
var IS_DEBUG = true
var DOMAIN = ''

if (IS_DEBUG) {
    DOMAIN = "https://txiaowei.vzan.com/"
}
else{
    DOMAIN = "https://cityapi.vzan.com/"
}

var Address = {
    GET_MODEL_DATA: DOMAIN + 'apiMiapp/GetModelData',  // 参数appid,level
    GET_MODEl_INFO_BY_ID: DOMAIN + 'apiMiapp/GetModelInfoById', // 参数id
}

module.exports = {
    Address:Address
}