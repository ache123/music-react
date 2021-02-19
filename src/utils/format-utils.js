export function getSizeImage(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`
}

export function getCount(count) {
  if (count < 10000) {
    return count;
  }else if (Math.floor(count/10000) < 10000) {
    return Math.floor(count / 10000) + "万";
  }else {
    return Math.floor(count / 100000000) + "亿";
  }
}