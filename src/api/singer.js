import {commonParams} from './config'
import axios from 'axios'

export function getSingerList(){
    const url = '/api/getSingerList'

    const data = Object.assign({}, commonParams, {
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq',
        g_tk: 1664029744,
        format: 'json'
      })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}

export function getSingerDetail(singerId){
    const url = '/api/getSingerDetail'

    const data = Object.assign({}, commonParams, {
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq',
        order: 'listen',
        begin: 0,
        num: 80,
        songstatus: 1,
        singermid: singerId,
        g_tk: 1664029744
      })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}

export function getSongVkey(songmid) {
    const url = '/api/getSongVkey'
    const data = Object.assign({}, commonParams, {
      format: 'json',
      platform: 'yqq',
      needNewCode: 0,
      cid: 0,
      uin: 0,
      guid: 8249147505,
      songmid: songmid,
      filename: `C400${songmid}.m4a`,
      g_tk: 1664029744
    })
    
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}