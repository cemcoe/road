<script setup>
// https://highlightjs.org/usage/
// https://marked.js.org/using_advanced

import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: "hljs language-", // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartypants: false,
  xhtml: false,
});

const props = defineProps({
  markdownString: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    class="marked-preview"
    v-if="markdownString"
    v-html="marked.parse(markdownString)"
  ></div>
</template>

<style scoped>
.marked-preview {
  line-height: 28px;
  padding: 10px;
}
.marked-preview:deep(img) {
  width: 100%;
  display: block;
  padding: 10px auto;
}
.marked-preview:deep(a) {
  text-decoration: none;
}
.marked-preview:deep(pre) {
  background-color: rgb(250, 243, 243);
  overflow-y: hidden;
}
.marked-preview:deep(p) {
  margin-bottom: 20px;
}

.marked-preview:deep(ul) {
  margin-bottom: 20px;
  padding: 10px;
  background-color: rgb(244, 237, 237);
}

.marked-preview:deep(a) {
  color: #f40;
}
</style>
