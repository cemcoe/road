function useHeaderPannel() {
  const isPreview = ref(false);

  const preview = () => {
    isPreview.value = true;
  };

  const goBack = () => {
    // 如果在预览状态下点击，则切换为编辑状态
    // 如果是编辑状态，则路由切换

    if (isPreview.value) {
      isPreview.value = false;
      return;
    }
    console.log("go");

    router.back();
  };

  return {};
}

export default useHeaderPannel;
