// 游戏状态变量
let targetWord = "";
let maxLives = 0;
let currentLives = 0;
let wrongGuesses = [];
let revealedWord = [];
let currentWaterStage = 0;

// DOM 元素获取
const wordDisplay = document.getElementById('word-display');
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const restartBtn = document.getElementById('restart-btn');
const wrongGuessesDisplay = document.getElementById('wrong-guesses');
const livesText = document.getElementById('lives-text');
const waterText = document.getElementById('water-text');
const waterDiv = document.getElementById('water');
const dialogueBubble = document.getElementById('dialogue-bubble');
const charEmoji = document.getElementById('char-emoji');
const charImg = document.getElementById('char-img');
const photoUpload = document.getElementById('photo-upload');

// 随机获取语录
function getRandomQuote(type) {
    const list = gameData.quotes[type];
    return list[Math.floor(Math.random() * list.length)];
}

// 处理上传照片
photoUpload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            gameData.userPhoto = event.target.result;
            applyPhoto();
        };
        reader.readAsDataURL(file);
    }
});

function applyPhoto() {
    if (gameData.userPhoto) {
        charImg.src = gameData.userPhoto;
    } else {
        charImg.src = 'images/enze.jpg';
    }
    charImg.style.display = 'block';
    charEmoji.style.display = 'none';
}

// 更新角色表情或滤镜
function updateCharacterEmotion(emotionStr) {
    if (emotionStr === 'start') {
        charImg.style.filter = "none";
    } else if (emotionStr === 'correct') {
        charImg.style.filter = "brightness(1.1) saturate(1.2)";
    } else if (emotionStr === 'wrong') {
        charImg.style.filter = "brightness(0.9) contrast(1.1)";
    } else if (emotionStr === 'waterUp') {
        charImg.style.filter = "sepia(0.8) hue-rotate(-30deg) saturate(2)";
    } else if (emotionStr === 'win') {
        charImg.style.filter = "drop-shadow(0 0 10px gold) brightness(1.1)";
    } else if (emotionStr === 'lose') {
        charImg.style.filter = "grayscale(100%)";
    }
}

// 初始化游戏
function initGame() {
    targetWord = gameData.wordList[Math.floor(Math.random() * gameData.wordList.length)];
    maxLives = targetWord.length * 2;
    currentLives = maxLives;
    wrongGuesses = [];
    revealedWord = Array(targetWord.length).fill(false);
    currentWaterStage = 0;

    // UI 重置
    dialogueBubble.textContent = getRandomQuote('start');
    updateCharacterEmotion('start');
    
    waterDiv.style.height = "0%";
    guessInput.value = "";
    guessInput.disabled = false;
    guessBtn.disabled = false;
    restartBtn.style.display = "none";
    
    applyPhoto(); // 确保加载上传的照片
    updateDisplay();
}

// 更新画面和数据展示
function updateDisplay() {
    let displayStr = "";
    for (let i = 0; i < targetWord.length; i++) {
        displayStr += revealedWord[i] ? targetWord[i] : "_";
        displayStr += " ";
    }
    wordDisplay.textContent = displayStr.trim();

    wrongGuessesDisplay.textContent = wrongGuesses.length > 0 ? wrongGuesses.join(', ') : "无";
    livesText.textContent = `剩余机会: ${currentLives} / ${maxLives}`;
    waterText.textContent = `当前水位: ${currentWaterStage}/5`;

    // 需求1：最后一次上涨刚好淹没头部。场景满载是100%
    // 分为5级，每级上涨 20%，第5级达到100%即可完全覆盖最顶部(top:0)的小人。
    waterDiv.style.height = `${(currentWaterStage / 5) * 100}%`;
}

// 处理猜测逻辑
function handleGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    guessInput.value = "";
    guessInput.focus();

    if (!guess) return;

    if (wrongGuesses.includes(guess)) {
        dialogueBubble.textContent = "你已经猜过这个了！";
        return;
    }

    let isCorrect = false;

    if (guess === targetWord) {
        isCorrect = true;
        revealedWord = Array(targetWord.length).fill(true);
    } 
    else if (targetWord.includes(guess)) {
        isCorrect = true;
        let startIndex = 0;
        let index;
        while ((index = targetWord.indexOf(guess, startIndex)) > -1) {
            for (let i = 0; i < guess.length; i++) {
                revealedWord[index + i] = true;
            }
            startIndex = index + guess.length;
        }
    }

    if (isCorrect) {
        dialogueBubble.textContent = getRandomQuote('correct');
        updateCharacterEmotion('correct');
    } else {
        wrongGuesses.push(guess);
        currentLives--;
        
        const errorsMade = maxLives - currentLives;
        const errorsPerStage = maxLives / 5;
        const newWaterStage = Math.floor(errorsMade / errorsPerStage);

        if (newWaterStage > currentWaterStage) {
            currentWaterStage = newWaterStage > 5 ? 5 : newWaterStage;
            dialogueBubble.textContent = getRandomQuote('waterUp');
            updateCharacterEmotion('waterUp');
        } else {
            dialogueBubble.textContent = getRandomQuote('wrong');
            updateCharacterEmotion('wrong');
        }
    }

    updateDisplay();
    checkGameStatus();
}

function checkGameStatus() {
    if (revealedWord.every(status => status === true)) {
        dialogueBubble.textContent = getRandomQuote('win');
        updateCharacterEmotion('win');
        endGame();
    } 
    else if (currentLives <= 0) {
        currentWaterStage = 5;
        updateDisplay();
        dialogueBubble.textContent = getRandomQuote('lose');
        updateCharacterEmotion('lose');
        wordDisplay.textContent = targetWord.split('').join(' ');
        endGame();
    }
}

function endGame() {
    guessInput.disabled = true;
    guessBtn.disabled = true;
    restartBtn.style.display = "inline-block";
}

guessBtn.addEventListener('click', handleGuess);
guessInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') handleGuess();
});
restartBtn.addEventListener('click', initGame);

// 启动游戏
initGame();
