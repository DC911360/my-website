import http from '@/utils/http'

export const doctorList =(url,paramData)=>{
    return  http("POST", url, paramData)
}