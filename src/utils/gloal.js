// // 防抖
// export function _debounce(fn, delay) {

//   var delay = delay || 200;
//   var timer;
//   return function () {
//     var th = this;
//     var args = arguments;
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(function () {
//       timer = null;
//       fn.apply(th, args);
//     }, delay);
//   };
// }
// // 节流
export function _throttle(fn, interval) {
  var last;
  var timer;
  var interval = interval || 200;
  return function () {
    var th = this;
    var args = arguments;
    var now = +new Date();
    if (last && now - last < interval) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn.apply(th, args);
      }, interval);
    } else {
      last = now;
      fn.apply(th, args);
    }
  }
}

///////////////////////////////////////////////////////

// https://juejin.im/entry/6844903466427482120

// 单位时间的每个函数的执行都是互斥，承重量是一辆车的桥，在桥没有空余时不能让其他车上桥
// 节流：单位时间只能执行一次任务

// export function _throttle(fn, interval = 200) {
//   // 确保单位时间待执行队列中只有一个函数
//   let canRun = true

//   return function (...args) {

//     // 队列中已有，不进入队列
//     if (!canRun) return

//     // 队列没人，进入队列并上锁
//     canRun = false

//     setTimeout(() => {
//       fn.apply(this, args)
//       // 函数执行，解开锁允许下个运行

//       canRun = true
//     }, interval)
//   }
// }


/////////////////////////////

// 函数防抖：任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行
export function _debounce(fn, interval = 200) {
  let timer = null

  return function (...args) {
    clearInterval(timer)

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, interval)
  }
}


// 深拷贝
export function _deepClone(obj = {}) {

  // 不是对象直接返回
  if (typeof obj !== "object" || obj === null) {
    return obj
  }

  // 初始化返回结果
  let result
  // 保留原有格式
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  // 展开复制
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = _deepClone(obj[key])
    }
  }

  // 得到最终结果
  return result
}