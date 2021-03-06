import {getLyric} from 'api/song';
import {ERR_OK} from 'api/config'
import {Base64} from 'js-base64'

export default class Song {
    constructor({ id, mid, singer, name, album, duration, image, url }) {
        this.id = id
        this.mid = mid
        this.singer = singer
        this.name = name
        this.album = album
        this.duration = duration
        this.image = image
        this.url = url
    }

    getLyric() {
      if(this.lyric){
        return Promise.resolve(this.lyric)
      }
      return new Promise((resolve,reject)=>{
        getLyric(this.mid).then((res)=>{
          if(res.code === ERR_OK){
            this.lyric = Base64.decode(res.lyric)
            resolve(this.lyric)
          }else{
            reject('no lyric')
          }
        })
      })
    }
}

export function createSong(musicData,songVkey) {
    return new Song({
      id: musicData.songid,
      mid: musicData.songmid,
      strMediaMid:musicData.strMediaMid,
      singer: filterSinger(musicData.singer),
      name: musicData.songname,
      album: musicData.albumname,
      duration: musicData.interval,
      image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
      url: `http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400${musicData.strMediaMid}.m4a?guid=8994728896&vkey=D4859C7EC9CF00A2A535F305504FFCE160B7B64D0946259D49A3B9F180D9530B72BB02DEC3BD5CA9200F39B2758F4B55974560B582460E8B&uin=0&fromtag=38`,
    })
}

function filterSinger(singer) {
    let ret = []
    if (!singer) {
      return ''
    }
    singer.forEach((s) => {
      ret.push(s.name)
    })
    return ret.join('/')
}
  