document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("訊息已送出！");
});

document.addEventListener("DOMContentLoaded", function() {
    const postsContainer = document.getElementById("posts");
    const posts = [
        { title: "第一篇文章", content: "這是我的第一篇部落格文章！" },
        { title: "第二篇文章", content: "這是我的第二篇部落格文章！" }
    ];

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        postsContainer.appendChild(postElement);
    });
});