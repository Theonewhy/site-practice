// 将数据、词库、语录分离为独立配置文件
const gameData = {
    // 游戏题库
    wordList: [
        "javascript", "html", "css", "programming", "developer", 
        "keyboard", "monitor", "browser", "internet", "computer",
        "mountain", "ocean", "animal", "journey", "victory"
    ],
    
    // 语录配置
    quotes: {
        start: ["救救我！快猜出单词！", "我不想被淹没，靠你了！"],
        correct: ["谢谢你！", "干得漂亮！", "太棒了，离得救又近了一步！", "好样的！"],
        wrong: ["没关系，再试一次！", "不要放弃！", "差一点点！", "加油，你可以的！"],
        waterUp: ["救命！水漫上来了！", "好可怕，快点猜对吧！", "水越来越深了，呜呜..."],
        win: ["我得救了！太感谢你了！🎉", "你是我的英雄！"],
        lose: ["咕噜咕噜咕噜... 😭"]
    },
    
    // 存储用户上传的照片 (Base64格式)，默认无照片
    userPhoto: null
};
