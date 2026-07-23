"use strict";

/* =========================
   番剧数据
   以后可以继续增加对象
========================== */
const weeklyAnime = {
  monday: [
    {
      title: "星海旅行者",
      image: "images/anime-01.jpg",
      episode: "更新至第 03 集",
      rating: "PG-12",
      description: "少年与伙伴们展开星际旅行"
    },
    {
      title: "魔法学院日记",
      image: "images/anime-02.jpg",
      episode: "更新至第 07 集",
      rating: "普通级",
      description: "魔法学校里的轻松日常"
    },
    {
      title: "黑夜猎人",
      image: "images/anime-03.jpg",
      episode: "更新至第 11 集",
      rating: "R-18",
      description: "神秘都市中的战斗故事"
    },
    {
      title: "春风与你",
      image: "images/anime-04.jpg",
      episode: "更新至第 05 集",
      rating: "PG-12",
      description: "校园青春恋爱故事"
    },
    {
      title: "勇者退休计划",
      image: "images/anime-05.jpg",
      episode: "更新至第 09 集",
      rating: "PG-12",
      description: "勇者退休后的奇妙生活"
    },
    {
      title: "异世界食堂",
      image: "images/anime-06.jpg",
      episode: "更新至第 02 集",
      rating: "普通级",
      description: "连接多个世界的神秘餐厅"
    },
    {
      title: "机械之心",
      image: "images/anime-07.jpg",
      episode: "更新至第 12 集",
      rating: "PG-12",
      description: "机器人开始理解人类情感"
    }
  ],

  tuesday: [
    {
      title: "云端恋曲",
      image: "images/anime-08.jpg",
      episode: "更新至第 04 集",
      rating: "PG-12",
      description: "发生在空中城市的恋爱故事"
    },
    {
      title: "超能便利店",
      image: "images/anime-09.jpg",
      episode: "更新至第 08 集",
      rating: "普通级",
      description: "拥有超能力的便利店员工"
    },
    {
      title: "深海来信",
      image: "images/anime-10.jpg",
      episode: "更新至第 03 集",
      rating: "PG-12",
      description: "来自深海的神秘信件"
    },
    {
      title: "王国边境",
      image: "images/anime-11.jpg",
      episode: "更新至第 10 集",
      rating: "PG-12",
      description: "守卫边境的年轻骑士"
    },
    {
      title: "猫咪侦探社",
      image: "images/anime-12.jpg",
      episode: "更新至第 06 集",
      rating: "普通级",
      description: "猫咪们组成的侦探小队"
    }
  ],

  wednesday: [
    {
      title: "时间收藏家",
      image: "images/anime-13.jpg",
      episode: "更新至第 05 集",
      rating: "PG-12",
      description: "可以收藏时间的神秘少女"
    },
    {
      title: "极光车站",
      image: "images/anime-14.jpg",
      episode: "更新至第 09 集",
      rating: "普通级",
      description: "只在极光下出现的列车"
    },
    {
      title: "恶魔室友",
      image: "images/anime-15.jpg",
      episode: "更新至第 07 集",
      rating: "R-18",
      description: "普通学生与恶魔的合租生活"
    },
    {
      title: "剑与魔导书",
      image: "images/anime-16.jpg",
      episode: "更新至第 12 集",
      rating: "PG-12",
      description: "失落魔法与古老王国"
    },
    {
      title: "夏日摄影部",
      image: "images/anime-17.jpg",
      episode: "更新至第 02 集",
      rating: "普通级",
      description: "记录夏日青春的摄影社团"
    }
  ],

  thursday: [
    {
      title: "银月守护者",
      image: "images/anime-18.jpg",
      episode: "更新至第 08 集",
      rating: "PG-12",
      description: "月夜中的神秘守护者"
    },
    {
      title: "偶像练习室",
      image: "images/anime-19.jpg",
      episode: "更新至第 04 集",
      rating: "普通级",
      description: "新人偶像的成长故事"
    },
    {
      title: "灵魂图书馆",
      image: "images/anime-20.jpg",
      episode: "更新至第 06 集",
      rating: "PG-12",
      description: "收录人类记忆的图书馆"
    },
    {
      title: "外星转学生",
      image: "images/anime-21.jpg",
      episode: "更新至第 10 集",
      rating: "普通级",
      description: "外星人进入普通高中学习"
    },
    {
      title: "废土列车",
      image: "images/anime-22.jpg",
      episode: "更新至第 03 集",
      rating: "R-18",
      description: "末日世界中的最后一班列车"
    }
  ],

  friday: [
    {
      title: "银河咖啡店",
      image: "images/anime-23.jpg",
      episode: "更新至第 07 集",
      rating: "普通级",
      description: "漂浮在银河中的咖啡店"
    },
    {
      title: "剑圣养成日记",
      image: "images/anime-24.jpg",
      episode: "更新至第 11 集",
      rating: "PG-12",
      description: "少年成为剑圣的冒险旅程"
    },
    {
      title: "怪谈事务所",
      image: "images/anime-25.jpg",
      episode: "更新至第 05 集",
      rating: "R-18",
      description: "处理都市怪谈的特殊组织"
    },
    {
      title: "海风吹过时",
      image: "images/anime-26.jpg",
      episode: "更新至第 09 集",
      rating: "PG-12",
      description: "沿海小镇的青春故事"
    },
    {
      title: "天才游戏社",
      image: "images/anime-27.jpg",
      episode: "更新至第 01 集",
      rating: "普通级",
      description: "一群游戏天才的社团生活"
    }
  ],

  saturday: [
    {
      title: "龙族便利屋",
      image: "images/anime-28.jpg",
      episode: "更新至第 06 集",
      rating: "PG-12",
      description: "龙族经营的万能便利屋"
    },
    {
      title: "午夜电台",
      image: "images/anime-29.jpg",
      episode: "更新至第 10 集",
      rating: "R-18",
      description: "只能在午夜收听的神秘电台"
    },
    {
      title: "甜点魔法师",
      image: "images/anime-30.jpg",
      episode: "更新至第 04 集",
      rating: "普通级",
      description: "用甜点施展魔法的少女"
    },
    {
      title: "失落王冠",
      image: "images/anime-31.jpg",
      episode: "更新至第 08 集",
      rating: "PG-12",
      description: "寻找王国失落的王冠"
    },
    {
      title: "未来观察局",
      image: "images/anime-32.jpg",
      episode: "更新至第 12 集",
      rating: "PG-12",
      description: "调查未来异常事件的组织"
    }
  ],

  sunday: [
    {
      title: "周末勇者",
      image: "images/anime-33.jpg",
      episode: "更新至第 03 集",
      rating: "普通级",
      description: "只在周末拯救世界的勇者"
    },
    {
      title: "月光料理人",
      image: "images/anime-34.jpg",
      episode: "更新至第 07 集",
      rating: "PG-12",
      description: "月光下才营业的餐馆"
    },
    {
      title: "雪国来客",
      image: "images/anime-35.jpg",
      episode: "更新至第 05 集",
      rating: "PG-12",
      description: "来自冰雪王国的神秘访客"
    },
    {
      title: "校园怪兽部",
      image: "images/anime-36.jpg",
      episode: "更新至第 09 集",
      rating: "普通级",
      description: "专门研究怪兽的校园社团"
    },
    {
      title: "最后的魔女",
      image: "images/anime-37.jpg",
      episode: "更新至第 11 集",
      rating: "R-18",
      description: "世界上最后一位魔女"
    }
  ]
};

/* =========================
   其他分类数据
========================== */
const trendingAnime = [
  {
    title: "暗夜迷城",
    image: "images/trending-01.jpg",
    episode: "热度 982 万",
    rating: "R-18",
    description: "被黑暗笼罩的未来都市"
  },
  {
    title: "星海旅行者",
    image: "images/trending-02.jpg",
    episode: "热度 875 万",
    rating: "PG-12",
    description: "少年与伙伴们展开星际旅行"
  },
  {
    title: "风与剑之歌",
    image: "images/trending-03.jpg",
    episode: "热度 743 万",
    rating: "PG-12",
    description: "剑士守护故乡的冒险故事"
  },
  {
    title: "猫咪侦探社",
    image: "images/trending-04.jpg",
    episode: "热度 698 万",
    rating: "普通级",
    description: "猫咪侦探们解决神秘案件"
  },
  {
    title: "天际魔法学院",
    image: "images/trending-05.jpg",
    episode: "热度 662 万",
    rating: "PG-12",
    description: "天空之城中的魔法学院"
  },
  {
    title: "机械纪元",
    image: "images/trending-06.jpg",
    episode: "热度 590 万",
    rating: "PG-12",
    description: "人与机械共同生活的时代"
  },
  {
    title: "午后轻音乐",
    image: "images/trending-07.jpg",
    episode: "热度 512 万",
    rating: "普通级",
    description: "校园轻音乐社的快乐日常"
  }
];

const recommendAnime = [
  {
    title: "樱花列车",
    image: "images/recommend-01.jpg",
    episode: "全网独播",
    rating: "PG-12",
    description: "穿越樱花海的梦幻列车"
  },
  {
    title: "魔王的暑假",
    image: "images/recommend-02.jpg",
    episode: "每周六更新",
    rating: "普通级",
    description: "魔王来到人类世界度假"
  },
  {
    title: "极夜侦探",
    image: "images/recommend-03.jpg",
    episode: "更新至第 04 集",
    rating: "R-18",
    description: "永夜城市里的连环谜案"
  },
  {
    title: "花园守护灵",
    image: "images/recommend-04.jpg",
    episode: "更新至第 06 集",
    rating: "普通级",
    description: "少女遇见花园中的精灵"
  },
  {
    title: "深空信号",
    image: "images/recommend-05.jpg",
    episode: "更新至第 08 集",
    rating: "PG-12",
    description: "来自宇宙深处的神秘信号"
  },
  {
    title: "剑士与龙",
    image: "images/recommend-06.jpg",
    episode: "更新至第 09 集",
    rating: "PG-12",
    description: "剑士和巨龙踏上共同旅程"
  }
];

const classicAnime = [
  {
    title: "旧日星光",
    image: "images/classic-01.jpg",
    episode: "全 26 集",
    rating: "普通级",
    description: "一段关于梦想与友情的故事"
  },
  {
    title: "钢铁战线",
    image: "images/classic-02.jpg",
    episode: "全 52 集",
    rating: "PG-12",
    description: "保卫城市的机甲战士"
  },
  {
    title: "魔法少女物语",
    image: "images/classic-03.jpg",
    episode: "全 48 集",
    rating: "普通级",
    description: "经典魔法少女冒险故事"
  },
  {
    title: "银河英雄传说",
    image: "images/classic-04.jpg",
    episode: "全 36 集",
    rating: "PG-12",
    description: "发生在银河中的战争史诗"
  },
  {
    title: "永远的夏天",
    image: "images/classic-05.jpg",
    episode: "全 12 集",
    rating: "PG-12",
    description: "令人怀念的校园青春故事"
  },
  {
    title: "城市猎影",
    image: "images/classic-06.jpg",
    episode: "全 24 集",
    rating: "R-18",
    description: "夜晚城市中的神秘猎人"
  }
];

/* =========================
   获取常用网页元素
========================== */
const noticeModal = document.querySelector("#noticeModal");
const closeModalButton = document.querySelector("#closeModalButton");
const weeklyRow = document.querySelector("#weeklyRow");
const toast = document.querySelector("#toast");
const backToTopButton = document.querySelector("#backToTopButton");
const browseButton = document.querySelector("#browseButton");

/* 提示框计时器 */
let toastTimer;

/* =========================
   创建单张动漫卡片
========================== */
function createAnimeCard(anime, index) {
  /* 根据分级决定颜色 */
  let ratingClass = "";

  if (anime.rating === "R-18") {
    ratingClass = "rating-r18";
  }

  if (anime.rating === "普通级") {
    ratingClass = "rating-general";
  }

  return `
    <article
      class="anime-card"
      tabindex="0"
      data-title="${anime.title}"
    >
      <div class="card-cover">

        <!-- 没有图片时显示编号 -->
        <div class="cover-placeholder">
          ${String(index + 1).padStart(2, "0")}
        </div>

        <!-- 动漫封面 -->
        <img
          src="${anime.image}"
          alt="${anime.title}"
          draggable="false"
          onerror="this.style.display='none'"
        >

        <!-- 年龄分级 -->
        <span class="age-rating ${ratingClass}">
          ${anime.rating}
        </span>

        <!-- 更新信息 -->
        <span class="episode-info">
          ${anime.episode}
        </span>
      </div>

      <!-- 动漫标题 -->
      <h3>${anime.title}</h3>

      <!-- 动漫简介 -->
      <p>${anime.description}</p>
    </article>
  `;
}

/* =========================
   把数据渲染成卡片
========================== */
function renderAnimeList(container, animeList) {
  container.innerHTML = animeList
    .map((anime, index) => createAnimeCard(anime, index))
    .join("");

  /* 卡片生成后添加点击事件 */
  addCardEvents(container);
}

/* =========================
   卡片点击事件
========================== */
function addCardEvents(container) {
  const cards = container.querySelectorAll(".anime-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.dataset.title;

      showToast(`🚧《${title}》详情页施工中`);
    });

    /* 支持键盘 Enter 打开 */
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const title = card.dataset.title;

        showToast(`🚧《${title}》详情页施工中`);
      }
    });
  });
}

/* =========================
   日期 Tab 切换
========================== */
function initializeDayTabs() {
  const dayButtons = document.querySelectorAll(".day-tab");

  dayButtons.forEach((button) => {
    button.addEventListener("click", () => {
      /* 移除原来的 active */
      dayButtons.forEach((item) => {
        item.classList.remove("active");
      });

      /* 当前按钮变为 active */
      button.classList.add("active");

      /* 获取按钮中的日期数据 */
      const selectedDay = button.dataset.day;

      /* 更换当前日期的动漫 */
      renderAnimeList(
        weeklyRow,
        weeklyAnime[selectedDay]
      );

      /* 切换后回到横向列表开头 */
      weeklyRow.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    });
  });
}

/* =========================
   左右按钮控制横向滑动
========================== */
function initializeRailButtons() {
  const rails = document.querySelectorAll(".rail");

  rails.forEach((rail) => {
    const row = rail.querySelector(".card-row");
    const leftButton = rail.querySelector(".rail-button-left");
    const rightButton = rail.querySelector(".rail-button-right");

    leftButton.addEventListener("click", () => {
      row.scrollBy({
        left: -650,
        behavior: "smooth"
      });
    });

    rightButton.addEventListener("click", () => {
      row.scrollBy({
        left: 650,
        behavior: "smooth"
      });
    });
  });
}

/* =========================
   鼠标拖动横向卡片列表
========================== */
function initializeDragScroll() {
  const rows = document.querySelectorAll(".card-row");

  rows.forEach((row) => {
    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let movedDistance = 0;

    row.addEventListener("pointerdown", (event) => {
      isDragging = true;
      startX = event.clientX;
      startScrollLeft = row.scrollLeft;
      movedDistance = 0;

      row.classList.add("dragging");
      row.setPointerCapture(event.pointerId);
    });

    row.addEventListener("pointermove", (event) => {
      if (!isDragging) {
        return;
      }

      const distance = event.clientX - startX;
      movedDistance = Math.abs(distance);

      row.scrollLeft = startScrollLeft - distance;
    });

    function stopDragging(event) {
      if (!isDragging) {
        return;
      }

      isDragging = false;
      row.classList.remove("dragging");

      if (row.hasPointerCapture(event.pointerId)) {
        row.releasePointerCapture(event.pointerId);
      }
    }

    row.addEventListener("pointerup", stopDragging);
    row.addEventListener("pointercancel", stopDragging);

    /*
      拖动距离较大时阻止误点卡片，
      不然用户只是想拖动，网页却热情地打开详情页。
    */
    row.addEventListener(
      "click",
      (event) => {
        if (movedDistance > 8) {
          event.preventDefault();
          event.stopPropagation();
        }
      },
      true
    );
  });
}

/* =========================
   公告弹窗
========================== */
function openModal() {
  noticeModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeModal() {
  noticeModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

closeModalButton.addEventListener("click", closeModal);

/* 按 Escape 关闭弹窗 */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

/* =========================
   显示施工中提示
========================== */
function showToast(message) {
  clearTimeout(toastTimer);

  toast.textContent = message;
  toast.classList.add("show");

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2300);
}

/* 给所有施工中按钮添加事件 */
function initializeComingSoonButtons() {
  const buttons = document.querySelectorAll("[data-coming-soon]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const featureName = button.dataset.comingSoon;

      showToast(`🚧 ${featureName}正在施工中`);
    });
  });
}

/* =========================
   开始浏览按钮
========================== */
browseButton.addEventListener("click", () => {
  document
    .querySelector("#weeklySection")
    .scrollIntoView({
      behavior: "smooth"
    });
});

/* =========================
   返回顶部按钮
========================== */
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* =========================
   网页初始化
========================== */
function initializeWebsite() {
  /* 渲染默认周一内容 */
  renderAnimeList(
    weeklyRow,
    weeklyAnime.monday
  );

  /* 渲染其他分类 */
  renderAnimeList(
    document.querySelector("#trendingRow"),
    trendingAnime
  );

  renderAnimeList(
    document.querySelector("#recommendRow"),
    recommendAnime
  );

  renderAnimeList(
    document.querySelector("#classicRow"),
    classicAnime
  );

  /* 启动各种交互 */
  initializeDayTabs();
  initializeRailButtons();
  initializeDragScroll();
  initializeComingSoonButtons();

  /* 每次刷新都显示公告 */
  openModal();
}

/* 运行网页 */
initializeWebsite();