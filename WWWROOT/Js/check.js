// 检查登录状态
    if (localStorage.getItem("isLoggedIn") !== "true") {
        alert("请先登录！");
        window.location.href = "../../index.html";
    }