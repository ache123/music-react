import request from './request';

export function getAlbum(type, limit, offset, area) {
  return request({
    url: "/top/album",
    params: {
      limit,
      offset,
      area,
      type
    }
  })
}