const mainTitle = document.getElementById("mainTitle");
const introText = document.getElementById('introText');
const changeTitleBtn = document.getElementById('changeTitleBtn');
const showInfoBtn = document.getElementById('showInfoBtn');
const darkModeBtn = document.getElementById('darkModeBtn');
const messageBoox = document.getElementById('messageBox');


console.log(mainTitle);
/*
console.log(introText);
console.log(changeTitleBtn);
console.log(showInfoBtn);
console.log(darkModeBtn);
console.log(messageBoox);
*/

let isChanged = false;
/*
changeTitleBtn.addEventListener("click", function() {
  if (isChanged === false) {
    mainTitle.textContent = "帅哥占领网站";
    isChanged = true;
  } else {
    mainTitle.textContent = "你好，我正在学习全栈开发 🎃";
    isChanged = false;
  }
});

showInfoBtn.addEventListener("click", function() {
  messageBox.textContent = "你已经完成 HTML、CSS、Flexbox，现在正在学习 JavaScript DOM 操作 🎃";
  messageBox.classList.add("highlight-message");
});

*/

darkModeBtn.addEventListener('click',function(){
    document.body.classList.toggle('dark-mode');
})

const projectCards = document.querySelectorAll(".project-card");

console.log(projectCards);

projectCards.forEach(function(card) {
  card.addEventListener("click", function() {
    card.classList.toggle("selected-card");
  });
});

const messageForm = document.getElementById("messageForm");
const nameInput = document.getElementById("nameInput");
const messageInput = document.getElementById("messageInput");
const messageList = document.getElementById("messageList");

messageForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "" || message === "") {
    alert("请填写名字和留言 🎃");
    return;
  }

  const messageItem = document.createElement("div");
  messageItem.className = "message-item";

  messageItem.innerHTML = `
    <div class="message-name">${name}</div>
    <div class="message-text">${message}</div>
  `;

  messageList.prepend(messageItem);

  nameInput.value = "";
  messageInput.value = "";
});

//找到所有class="tab-btn"的按钮
//找到所有 class="tab-content" 的内容区
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

//给每个按钮加事件
tabButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    //获取这个按钮对应内容id
    const targetTab = button.dataset.tab;
    //先移除所有active
    tabButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    tabContents.forEach(function(content) {
      content.classList.remove("active");
    });
    //再点亮当前active
    button.classList.add("active");
    //找到对应内容区并展示
    const targetContent = document.getElementById(targetTab);
    targetContent.classList.add("active");
  });
});

