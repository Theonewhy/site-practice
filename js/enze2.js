// =======================
// 1. Tab 切换
// =======================

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const targetTab = button.dataset.tab;

    tabButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    tabContents.forEach(function(content) {
      content.classList.remove("active");
    });

    button.classList.add("active");

    const targetContent = document.getElementById(targetTab);
    targetContent.classList.add("active");
  });
});


// =======================
// 2. 假目录渲染
// =======================

const chapterList = document.getElementById("chapterList");

const chapters = [
  {
    title: "第 1 章：地铁站偶遇",
    desc: "故事从一个非常离谱但安全的早晨开始。"
  },
  {
    title: "第 2 章",
    desc: ""
  },
  {
    title: "第 3 章",
    desc: ""
  },
  {
    title: "第 4 章",
    desc: ""
  }
];

function renderChapters() {
  chapterList.innerHTML = "";

  chapters.forEach(function(chapter) {
    const chapterItem = document.createElement("div");
    chapterItem.className = "chapter-item";

    chapterItem.innerHTML = `
      <h3>${chapter.title}</h3>
      <p>${chapter.desc}</p>
    `;

    chapterList.appendChild(chapterItem);
  });
}

renderChapters();


// =======================
// 3. 评论区 CRUD + localStorage
// =======================

const commentForm = document.getElementById("commentForm");
const nameInput = document.getElementById("nameInput");
const commentInput = document.getElementById("commentInput");
const commentList = document.getElementById("commentList");
const commentCount = document.getElementById("commentCount");
const commentStat = document.getElementById("commentStat");

let comments = JSON.parse(localStorage.getItem("comments")) || [];

function saveComments() {
  localStorage.setItem("comments", JSON.stringify(comments));
}

function renderComments() {
  commentList.innerHTML = "";

  commentCount.textContent = `当前共有 ${comments.length} 条评论`;
  commentStat.textContent = `${comments.length} 评论`;

  if (comments.length === 0) {
    commentList.innerHTML = `<p class="empty-text">暂无评论，来当第一个整活的人 🎃</p>`;
    return;
  }

  comments.forEach(function(comment, index) {
    const commentItem = document.createElement("div");
    commentItem.className = "comment-item";

    commentItem.innerHTML = `
      <div class="comment-name">${comment.name}</div>
      <div class="comment-time">${comment.time}</div>
      <div class="comment-text">${comment.text}</div>

      <div class="comment-actions">
        <button class="edit-btn" onclick="editComment(${index})">修改</button>
        <button class="delete-btn" onclick="deleteComment(${index})">删除</button>
      </div>
    `;

    commentList.appendChild(commentItem);
  });
}

commentForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const text = commentInput.value.trim();

  if (name === "" || text === "") {
    alert("请填写名字和评论 🎃");
    return;
  }

  const newComment = {
    name: name,
    text: text,
    time: new Date().toLocaleString()
  };

  comments.push(newComment);
  saveComments();
  renderComments();

  nameInput.value = "";
  commentInput.value = "";
});

function deleteComment(index) {
  const confirmed = confirm("确定要删除这条评论吗？");

  if (confirmed === false) {
    return;
  }

  comments.splice(index, 1);
  saveComments();
  renderComments();
}

function editComment(index) {
  const currentComment = comments[index];

  const newName = prompt("修改名字：", currentComment.name);
  const newText = prompt("修改评论：", currentComment.text);

  if (newName === null || newText === null) {
    return;
  }

  if (newName.trim() === "" || newText.trim() === "") {
    alert("名字和评论不能为空 🎃");
    return;
  }

  comments[index] = {
    name: newName.trim(),
    text: newText.trim(),
    time: currentComment.time
  };

  saveComments();
  renderComments();
}

renderComments();