/**
 * 监听滚动有两种情况，window || element
 * 取相关长度时也要区分，window.document.documentElement || ELement
 * 防止border等永远滚不到最底部的情况，最好加个距离，还可以减少数据请求时间
 * 相关的数据：scrollTop scrollHeight clientHeight
 * 该hook支持两种情况，不传值就监听window，传值就监听对应element
 */

import { ref, onUnmounted, onMounted } from "vue";
import _ from "lodash";

const [scrollTop, scrollHeight, clientHeight] = [ref(0), ref(0), ref(0)];
// 距离底部的距离，防止border等永远滚不到最底部的情况
const bottomSpace = 140;

const isReachBottom = ref(false);
const wait = 600;

let el = window.document.documentElement;

const useScroll = (eleRef) => {
  // 来两值： window 和普通的element监听方式不同
  // window.document.documentElement 是无法监听到scroll的
  // 当然，也可以再取值时条件处理

  const scrollListerHandler = () => {
    scrollTop.value = el.scrollTop;
    scrollHeight.value = el.scrollHeight;
    clientHeight.value = el.clientHeight;

    if (
      scrollHeight.value <=
      scrollTop.value + clientHeight.value + bottomSpace
    ) {
      isReachBottom.value = true;
    }
  };

  // 默认监听window
  let listenEle = window;
  onMounted(() => {
    // mounted后才能拿ref对应的元素
    if (eleRef) {
      el = eleRef.value;
      listenEle = el;
    }

    listenEle.addEventListener("scroll", _.throttle(scrollListerHandler, wait));
  });

  onUnmounted(() => {
    listenEle.removeEventListener("scroll", listenEle);
  });

  return {
    scrollTop,
    scrollHeight,
    clientHeight,
    isReachBottom,
  };
};

export { useScroll };
