// js/script.js

// Audio control
let musicPlaying = false;
const audio = document.getElementById('backgroundMusic');
const audioIndicator = document.getElementById('audioIndicator');

function attemptAutoplay() {
    if (audio) {
        audio.play().then(() => {
            musicPlaying = true;
            audioIndicator.textContent = '🎵 Nhạc: Bật';
        }).catch(error => {
            console.warn("Không thể tự động phát nhạc: ", error.message);
            // Thử phát lại khi người dùng tương tác
            document.body.addEventListener('click', () => {
                audio.play().then(() => {
                    musicPlaying = true;
                    audioIndicator.textContent = '🎵 Nhạc: Bật';
                });
            }, { once: true });
        });
    }
}

function toggleMusic() {
    if (!audio) return;
    if (musicPlaying) {
        audio.pause();
        musicPlaying = false;
        audioIndicator.textContent = '🔇 Nhạc: Tắt';
    } else {
        audio.play().then(() => {
            musicPlaying = true;
            audioIndicator.textContent = '🎵 Nhạc: Bật';
        }).catch(error => {
            musicPlaying = false;
            audioIndicator.textContent = '🔇 Nhạc: Tắt';
            console.error("Lỗi khi phát nhạc: ", error.message);
            alert("Không thể phát nhạc. Vui lòng kiểm tra cài đặt trình duyệt hoặc tệp âm thanh.");
        });
    }
}

function exitApp() {
    if (audio) {
        audio.pause();
        musicPlaying = false;
        audioIndicator.textContent = '🔇 Nhạc: Tắt';
    }
    if (confirm('Bạn có chắc chắn muốn thoát ứng dụng?')) {
        window.close();
        document.body.innerHTML = '<div style="text-align:center; padding:50px; font-size:24px; color: #fff; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center;"><div>Cảm ơn bạn đã sử dụng ứng dụng!<br>Bạn có thể đóng tab này.</div></div>';
    }
}

// Navigation
const mainMenu = document.getElementById('mainMenu');
const guideSection = document.getElementById('guideSection');
const learningSection = document.getElementById('learningSection');
const quizSection = document.getElementById('quizSection');

const allContentSections = [guideSection, learningSection, quizSection];

function showSection(sectionIdPart) {
    if (mainMenu) {
        mainMenu.style.display = 'none';
    }

    allContentSections.forEach(section => {
        if (section) {
            section.style.display = 'none';
            section.classList.remove('active');
        }
    });

    let targetSection;
    if (sectionIdPart === 'guide' && guideSection) targetSection = guideSection;
    else if (sectionIdPart === 'learning' && learningSection) targetSection = learningSection;
    else if (sectionIdPart === 'quiz' && quizSection) {
        targetSection = quizSection;
        if (typeof quizData !== 'undefined' && quizData.length > 0 && (currentQuestionIndex === 0 || quizFinished)) {
             // resetQuiz(); // Nếu muốn quiz tự reset khi vào lại section
        }
    } else {
        console.error('Unknown or null section:', sectionIdPart);
        showMainMenu();
        return;
    }

    if (targetSection) {
        targetSection.style.display = 'block';
        void targetSection.offsetWidth;
        targetSection.classList.add('active');
    }
}

function openAIChat() {
    window.open('https://giao-thong-ai-chat.vercel.app/', '_blank');
}

function showMainMenu() {
    allContentSections.forEach(section => {
        if (section) {
            section.style.display = 'none';
            section.classList.remove('active');
        }
    });
    if (mainMenu) {
        mainMenu.style.display = 'block';
    }
}

// Quiz functionalities
// quizData is now loaded from js/questions.js
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; 
let questionsAttempted = []; 
let quizFinished = false;


const questionTextEl = document.getElementById('questionText');
const answerOptionsEl = document.getElementById('answerOptions');
const currentQuestionDisplay = document.getElementById('currentQuestion');
const totalQuestionsDisplay = document.getElementById('totalQuestions');
const scoreDisplay = document.getElementById('score');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function loadQuestion(index) {
    if (!questionTextEl || !answerOptionsEl || index < 0 || !quizData || index >= quizData.length) {
        if (questionTextEl) questionTextEl.textContent = "Lỗi tải câu hỏi hoặc không có câu hỏi.";
        if (answerOptionsEl) answerOptionsEl.innerHTML = "";
        if (totalQuestionsDisplay) totalQuestionsDisplay.textContent = (quizData && quizData.length) ? quizData.length : 0;
        if (currentQuestionDisplay && (!quizData || quizData.length === 0)) currentQuestionDisplay.textContent = 0;
        if (nextBtn) nextBtn.disabled = true;
        if (prevBtn) prevBtn.disabled = true;
        return;
    }
    quizFinished = false;
    currentQuestionIndex = index;
    const question = quizData[index];
    questionTextEl.textContent = `Câu ${index + 1}: ${question.question}`;
    answerOptionsEl.innerHTML = '';

    question.options.forEach(optionText => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('answer-option');
        optionButton.textContent = optionText;
        optionButton.onclick = () => selectAnswer(optionButton, optionText, question.answer);

        if (userAnswers[index] !== null) { 
            optionButton.disabled = true;
            if (optionText === question.answer) {
                optionButton.classList.add('correct');
            } else if (optionText === userAnswers[index]) {
                optionButton.classList.add('incorrect');
            }
        }
        answerOptionsEl.appendChild(optionButton);
    });

    if (currentQuestionDisplay) currentQuestionDisplay.textContent = index + 1;
    if (totalQuestionsDisplay) totalQuestionsDisplay.textContent = quizData.length;
    if (scoreDisplay) scoreDisplay.textContent = score;
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) {
        nextBtn.disabled = false;
        nextBtn.textContent = (index === quizData.length - 1) ? "Hoàn thành" : "Câu tiếp →";
    }
}

function selectAnswer(buttonEl, selectedOption, correctAnswer) {
    if (userAnswers[currentQuestionIndex] !== null) return; 

    userAnswers[currentQuestionIndex] = selectedOption;

    answerOptionsEl.querySelectorAll('.answer-option').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct');
        }
    });

    if (selectedOption === correctAnswer) {
        buttonEl.classList.add('correct');
        if (!questionsAttempted[currentQuestionIndex]) {
            score++;
        }
    } else {
        buttonEl.classList.add('incorrect');
    }
    questionsAttempted[currentQuestionIndex] = true;
    if (scoreDisplay) scoreDisplay.textContent = score;
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    } else {
        quizFinished = true;
        questionTextEl.innerHTML = `🎉 Quiz Hoàn thành! 🎉<br>Điểm của bạn: <strong>${score} / ${quizData.length}</strong>`;
        answerOptionsEl.innerHTML = `<p style="text-align:center; margin-top:20px;">Bạn có muốn thử lại không?</p>`;
        if (nextBtn) nextBtn.disabled = true;
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    if (typeof quizData !== 'undefined' && quizData.length > 0) {
        userAnswers = new Array(quizData.length).fill(null);
        questionsAttempted = new Array(quizData.length).fill(false);
    } else {
        userAnswers = [];
        questionsAttempted = [];
    }
    quizFinished = false;

    if (typeof quizData !== 'undefined' && quizData.length > 0) {
        loadQuestion(0);
        if (nextBtn) nextBtn.disabled = false;
        if (prevBtn) prevBtn.disabled = true;
    } else {
        if (questionTextEl) questionTextEl.textContent = "Không có câu hỏi nào được tải.";
        if (answerOptionsEl) answerOptionsEl.innerHTML = "";
        if (totalQuestionsDisplay) totalQuestionsDisplay.textContent = 0;
        if (currentQuestionDisplay) currentQuestionDisplay.textContent = 0;
        if (scoreDisplay) scoreDisplay.textContent = 0;
        if (nextBtn) nextBtn.disabled = true;
        if (prevBtn) prevBtn.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    attemptAutoplay(); // Thử tự động phát nhạc

    if (document.getElementById('quizSection')) {
        if (typeof quizData !== 'undefined' && quizData.length > 0) {
            if(totalQuestionsDisplay) totalQuestionsDisplay.textContent = quizData.length;
            resetQuiz();
        } else {
            console.warn("quizData is not defined or empty. Quiz cannot be initialized.");
            if (questionTextEl) questionTextEl.textContent = "Chưa có dữ liệu câu hỏi.";
             if (totalQuestionsDisplay) totalQuestionsDisplay.textContent = 0;
            if (currentQuestionDisplay) currentQuestionDisplay.textContent = 0;
             if (scoreDisplay) scoreDisplay.textContent = 0;
            if (nextBtn) nextBtn.disabled = true;
            if (prevBtn) prevBtn.disabled = true;
        }
    }
    showMainMenu();
});
