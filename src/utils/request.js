/**
 * useTo: gọi api
 * updateAt: tovantai_19/12/2022
 * author: tovantai
 * createdAt: 19/12/2022 
 */
export function httpGetAsync (url, body, resolve, reject) {
  fetch(url, body).then(res => {
    if (res.status == 200) {
      res.text().then(res => {
        resolve(res)
      })
    } else {
      res.text().then(rej => {
        reject(rej)
      })
    }
  })
}