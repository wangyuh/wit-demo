// import ajax from './ajax'

function getData(params) {
  console.log('异步...... ', params)
  let count = 0
  for (let i = 0; i < 10000000000; i++) {
    // console.log(i)
    count = i
  }
  console.log('count: ', count)
  // ajax(
  //   '请求的 url, 相对路径会报错',
  //   params,
  //   function(res) {
  //     console.log(123, res)
  //     postMessage(res)
  //   },
  //   function(err) {
  //     console.log(456, err)
  //   }
  // )
  self.postMessage(count)
}

onmessage = function(event) {
  if (event.data) {
    getData(event.data)
  }
}