import { ref } from "vue";

const useMenu = () => {
  const showMenu = ref(false);

  const switchMeunStatus = () => {
    console.log("你点击了设置，为你切换菜单状态");
    showMenu.value = !showMenu.value;
  };

  const saveToPrivatePost = () => {
    console.log("将文章保存为私密");
    // emit 交给主文件处理
  };

  return {
    showMenu,
    switchMeunStatus,
    saveToPrivatePost,
  };
};

export { useMenu };
