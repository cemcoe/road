<template>
  <web-view :src="webviewSrc" />
</template>

<script>
let webview;
export default {
  data() {
    return {
      // 防止webview缓存
      webviewSrc: "https://road.cemcoe.com?_t=" + new Date().getTime(),
    };
  },
  onReady: function () {
    // 获取当前web-view
    var currentWebview = this.$scope.$getAppWebview();
    uni.getSystemInfo({
      success: (sysinfo) => {
        // 页面初始化延时调用，防止webview还未渲染
        var interval = setInterval(() => {
          webview = currentWebview.children()[0];
          if (!webview) return;
          // 给Webview设置全屏展示
          webview.setStyle({ top: sysinfo.statusBarHeight, bottom: 0 });
          // 关闭启动加载菊花
          setTimeout(function () {
            plus.navigator.closeSplashscreen();
          }, 600);
          // 初始化成功清除
          clearInterval(interval);
        }, 100);
      },
      complete: () => {},
    });
  },

  onBackPress: function (options) {
    // 监听手机回退按钮/手势，使得后退是回退页面不是退出APP
    webview.canBack(function (e) {
      if (!e.canBack) {
        return plus.runtime.quit();
      }
      webview.back();
    });
    return true;
  },
};
</script>
