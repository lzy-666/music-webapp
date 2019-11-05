import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'

export function getTopList() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  
    const data = Object.assign({}, commonParams, {
      uin: 0,
      needNewCode: 1,
      platform: 'h5'
    })
  
    return jsonp(url, data, options)
}

export function getMusicList(topid) {
    const url = '/api/getMusicList'
    const data = Object.assign({}, commonParams, {
      topid,
      notice:0,
      needNewCode: 1,
      uin: 0,
      tpl: 3,
      page: 'detail',
      type: 'top',
      platform: 'h5',
      format: 'json'
    })
  
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}