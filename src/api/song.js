import { commonParams } from './config'
import axios from 'axios'

export function getLyric(mid) {
    const url = '/api/lyric'

    const data = Object.assign({}, commonParams, {
        songmid: mid,
        pcachetime: +new Date(),
        platform: 'yqq',
        hostUid: 0,
        needNewCode: 0,
        g_tk: 67232076,
        format: 'json'
    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}
// 获取歌曲的guid
/*export function _getGuid() {
    if (_guid.length > 0)
        return _guid;
    var e = MUSIC.cookie.get("pgv_pvid");
    if (e && e.length > 0)
        return _guid = e;
    var t = (new Date).getUTCMilliseconds();
    return _guid = Math.round(2147483647 * Math.random()) * t % 1e10,
    document.cookie = "pgv_pvid=" + _guid + "; Expires=Sun, 18 Jan 2038 00:00:00 GMT; PATH=/; DOMAIN=qq.com;",
    _guid
}*/
// 获取歌曲的vkey
export function getSongVkey(songmid,guid) {
    const url = '/api/getVkey'
    const data = Object.assign({}, commonParams, {
        platform: 'yqq',
        needNewCode: 0,
        uin:0,
        guid: guid,
        g_tk: 5381,
        songmid: songmid,
        filename: `C400${songmid}.m4a`,
        format: 'json'
    })
  
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}