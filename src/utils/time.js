export function formatDate(utcDateStr) {
  // 2020-12-11T11:26:39.680Z

  const localDate = new Date(utcDateStr)
  // Fri Dec 11 2020 19:26:39 GMT+0800 (China Standard Time)

  const result = (localDate.getMonth() + 1) + '-' + localDate.getDate() + ' ' + localDate.getHours() + ':' + localDate.getMinutes()
  // 12-11 19:26

  console.log(result)

  return result

}