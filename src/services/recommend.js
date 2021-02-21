import request from './request';

export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}

export function getTopList(idx) {
  return request({
    url:"top/list",
    params: {
      idx
    }
  })
}

export function getSingerList(type, area, limit) {
  return request({
    url: "/artist/list",
    params: {
      type,
      area,
      limit
    }
  })
}

export function getTopListDJ(limit) {
  return request({
    url: "/dj/toplist/popular",
    params: {
      limit
    }
  })
}