import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { defineStore } from "pinia";
import { getPostDetail, createPost, updatePost } from "@/service/modules/post";
import { computed } from "vue";
import type { IPost } from "@/types";

export const usePostStore = defineStore("post", () => {
  const route = useRoute();
  const router = useRouter();

  const postId = route?.params?.postId;

  // If you specify a generic type argument but omit the initial value, the resulting type will be a union type that includes undefined:
  const postDetail = ref<IPost>({
    commentcount: 0,
    viewcount: 0,
    imgsLink: [],
    status: 0,
    _id: "",
    title: "",
    wordcount: 0,
    author: {
      gender: "",
      bio: "",
      avatar: "",
      following_count: 0,
      follower_count: 0,
      private_post_count: 0,
      _id: "",
      name: "",
      createdAt: "",
      updatedAt: "",
    },
    content: "",
    abstract: "",
    createdAt: "",
    updatedAt: "",
  });

  if (postId) {
    // 编辑模式，请求原数据
    fetchPostDetail(postId);
  } else {
    // 默认创建文章
    postDetail.value.title = "默认标题";

    createPostAction();
  }

  async function fetchPostDetail(postId: any) {
    getPostDetail(postId).then((res) => {
      const { status, data } = res;
      if (status === 200) {
        postDetail.value = data.post;
      }
    });
  }

  async function createPostAction(status = 0) {
    const data = {
      title: postDetail.value.title,
      content: postDetail.value.content,
      status,
    };
    const res = await createPost(data);
    const { insertId } = res.data;
    router.replace("/editor/" + insertId);
  }

  async function updatePostAction(id: any) {
    const data = {
      title: postDetail.value.title,
      content: postDetail.value.content,
    };
    const res = await updatePost(id, data);
    console.log(res);
  }

  const getPostWordcount = computed(() => {
    return postDetail.value?.content?.length;
  });

  function initPostDetail() {
    postDetail.value = {
      commentcount: 0,
      viewcount: 0,
      imgsLink: [],
      status: 0,
      _id: "",
      title: "",
      wordcount: 0,
      author: {
        gender: "",
        bio: "",
        avatar: "",
        following_count: 0,
        follower_count: 0,
        private_post_count: 0,
        _id: "",
        name: "",
        createdAt: "",
        updatedAt: "",
      },
      content: "",
      abstract: "",
      createdAt: "",
      updatedAt: "",
    };
  }

  return {
    postId,
    postDetail,
    fetchPostDetail,
    createPostAction,
    updatePostAction,
    getPostWordcount,
    initPostDetail,
  };
});
