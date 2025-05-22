<!-- 创建一个shared.js文件 -->
const config = {
  siteTitle: "Hi，老张...",
  pages: {
    "index.html": "首页",
    "home.html": "主页",
    "contact.html": "联系我们"
  }
};

function setDocumentTitle() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const pageTitle = config.pages[path] || "默认标题";
  document.title = `${pageTitle} - ${config.siteTitle}`;
}
