function padTo2Digits (num) {
  try {
    return num.toString().padStart(2, '0');
  } catch (err) {
    console.log(err);
  }
}
/**
 * useTo: định dạng date dd-mm-yy
 * updateAt: tovantai_17/12/2022
 * author: tovantai
 * createdAt: 12/12/2022
 */
export function formatDate (dateString) {
  try {
    let date = new Date(dateString);
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  } catch (err) {
    console.log(err);
  }
}

/**
 * useTo: định dạng date yy-mm-dd
 * updateAt: tovantai_17/12/2022
 * author: tovantai
 * createdAt: 12/12/2022
 */
export function formatDateV2 (dateString) {
  try {
    let date = new Date(dateString);
    return [
      date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate()),
    ].join('-');
  } catch (err) {
    console.log(err);
  }
}

/**
 * useTo: kiểm tra email có đúng định dạng
 * updateAt
 * author: tovantai
 * createdAt: 22/12/2022
 * @param {*} email 
 * @returns 
 */
export function IsValidEmail (email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}