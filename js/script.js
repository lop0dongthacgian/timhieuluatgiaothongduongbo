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
            console.log("Nhạc nền đã tự động phát.");
        }).catch(error => {
            musicPlaying = false;
            audioIndicator.textContent = '🔇 Nhạc: Tắt';
            console.warn("Không thể tự động phát nhạc nền: ", error.message, ". Trình duyệt có thể yêu cầu tương tác người dùng trước.");
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
        }).catch(error => { // Xử lý lỗi nếu người dùng nhấn nút nhưng vẫn không phát được
            musicPlaying = false;
            audioIndicator.textContent = '🔇 Nhạc: Tắt';
            console.error("Lỗi khi phát nhạc: ", error.message);
            alert("Không thể phát nhạc. Vui lòng kiểm tra cài đặt trình duyệt hoặc tệp âm thanh.");
        });
    }
}

function exitApp() {
    if (audio) {
        audio.pause(); // Tắt nhạc trước khi thoát
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
const chatSection = document.getElementById('chatSection');
const quizSection = document.getElementById('quizSection');

const allContentSections = [guideSection, learningSection, chatSection, quizSection];

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
    else if (sectionIdPart === 'chat' && chatSection) targetSection = chatSection;
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

// Chat AI - Basic Knowledge Base (Dựa trên mục "Tìm hiểu")
const knowledgeBase = [
    {
        keywords: ["phạm vi điều chỉnh", "luật này quy định", "điều 1"],
        answer: "Luật Giao thông Đường bộ (GTĐB) số 35/2024/QH15 quy định về quy tắc giao thông đường bộ; phương tiện giao thông đường bộ và người điều khiển phương tiện; đường bộ và hoạt động bảo đảm trật tự, an toàn giao thông đường bộ; xử phạt vi phạm hành chính trong lĩnh vực giao thông đường bộ."
    },
    {
        keywords: ["đối tượng áp dụng", "luật này áp dụng", "điều 2"],
        answer: "Luật GTĐB số 35/2024/QH15 áp dụng đối với cơ quan, tổ chức, cá nhân có liên quan đến hoạt động giao thông đường bộ trên lãnh thổ Việt Nam."
    },
    {
        keywords: ["nguyên tắc cơ bản", "quy tắc chung"],
        answer: "Nguyên tắc cơ bản khi tham gia giao thông: đi bên phải theo chiều di chuyển, đi đúng phần đường quy định, nhường đường cho xe ưu tiên, tuân thủ tín hiệu đèn, biển báo, vạch kẻ đường."
    },
    {
        keywords: ["tốc độ tối đa", "khu dân cư", "xe máy", "xe gắn máy"],
        answer: "Trong khu dân cư, tốc độ tối đa cho xe máy, xe gắn máy là 50 km/h."
    },
    {
        keywords: ["tốc độ tối đa", "khu dân cư", "ô tô con"],
        answer: "Trong khu dân cư, tốc độ tối đa cho ô tô con là 50 km/h."
    },
    {
        keywords: ["tốc độ tối đa", "khu dân cư", "ô tô tải", "xe khách"],
        answer: "Trong khu dân cư, tốc độ tối đa cho ô tô tải, xe khách là 50 km/h."
    },
    {
        keywords: ["tốc độ tối đa", "quốc lộ", "xe máy"],
        answer: "Trên đường quốc lộ (ngoài khu dân cư), tốc độ tối đa cho xe máy là 60 km/h."
    },
    {
        keywords: ["tốc độ tối đa", "quốc lộ", "ô tô con"],
        answer: "Trên đường quốc lộ (ngoài khu dân cư), tốc độ tối đa cho ô tô con là 90 km/h."
    },
    {
        keywords: ["tốc độ tối đa", "quốc lộ", "ô tô tải", "xe khách"],
        answer: "Trên đường quốc lộ (ngoài khu dân cư), tốc độ tối đa cho ô tô tải và xe khách là 80 km/h."
    },
    {
        keywords: ["tốc độ tối đa", "cao tốc", "ô tô con"],
        answer: "Trên đường cao tốc, tốc độ tối đa cho ô tô con là 120 km/h (trừ khi có biển báo khác)."
    },
    {
        keywords: ["tốc độ tối đa", "cao tốc", "ô tô tải", "xe khách"],
        answer: "Trên đường cao tốc, tốc độ tối đa cho ô tô tải và xe khách là 90 km/h (trừ khi có biển báo khác)."
    },
    {
        keywords: ["xe máy", "cao tốc", "được đi không"],
        answer: "Xe máy không được phép lưu thông trên đường cao tốc."
    },
    {
        keywords: ["phạt", "đèn giao thông", "đèn đỏ", "xe máy"],
        answer: "Vi phạm tín hiệu đèn giao thông đối với xe máy: phạt tiền từ 800.000 - 1.000.000 đồng, tước bằng lái từ 2-4 tháng."
    },
    {
        keywords: ["phạt", "đèn giao thông", "đèn đỏ", "ô tô"],
        answer: "Vi phạm tín hiệu đèn giao thông đối với ô tô: phạt tiền từ 4.000.000 - 6.000.000 đồng, tước bằng lái từ 2-4 tháng."
    },
    {
        keywords: ["phạt", "nồng độ cồn", "xe máy", "0,25", "0.25"],
        answer: "Vi phạm nồng độ cồn xe máy (0,25-0,5mg/lít khí thở): phạt 2.000.000 - 3.000.000 đồng, tước bằng lái 10-12 tháng."
    },
    {
        keywords: ["phạt", "nồng độ cồn", "xe máy", "trên 0,5", "trên 0.5"],
        answer: "Vi phạm nồng độ cồn xe máy (trên 0,5mg/lít khí thở): phạt 6.000.000 - 8.000.000 đồng, tước bằng lái 10-12 tháng."
    },
    {
        keywords: ["phạt", "nồng độ cồn", "ô tô"],
        answer: "Vi phạm nồng độ cồn ô tô (mức cao): phạt 16.000.000 - 18.000.000 đồng, tước bằng lái 10-12 tháng. (Lưu ý: mức phạt có thể cao hơn tùy nồng độ cụ thể)."
    },
    {
        keywords: ["giấy tờ", "bắt buộc", "mang theo", "xe máy"],
        answer: "Giấy tờ bắt buộc mang theo đối với xe máy: Giấy phép lái xe, Đăng ký xe, Giấy chứng nhận bảo hiểm trách nhiệm dân sự."
    },
    {
        keywords: ["giấy tờ", "bắt buộc", "mang theo", "ô tô"],
        answer: "Giấy tờ bắt buộc mang theo đối với ô tô: Giấy phép lái xe, Đăng ký xe, Giấy chứng nhận bảo hiểm trách nhiệm dân sự, Giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường."
    },
    {
        keywords: ["mũ bảo hiểm", "quy định"],
        answer: "Người điều khiển và người ngồi trên xe mô tô, xe gắn máy phải đội mũ bảo hiểm có cài quai đúng quy cách. Mũ phải đạt tiêu chuẩn chất lượng."
    },
    {
        keywords: ["cấm đỗ xe", "nơi nào cấm đỗ"],
        answer: "Các nơi cấm đỗ xe: Trên cầu, gầm cầu, hầm đường bộ; Đường cong, đầu dốc, chân dốc; Trong phạm vi 5m từ mép cầu/đường giao nhau; Trước cổng cơ quan, bệnh viện, trường học; Nơi có biển báo cấm đỗ xe."
    },
    {
        keywords: ["xin chào", "hello", "chào bạn"],
        answer: "Xin chào! Tôi là trợ lý AI về Luật Giao thông Đường bộ. Bạn có câu hỏi nào không?"
    }
];

function getAIResponse(userInput) {
    const lowerInput = userInput.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Chuẩn hóa, bỏ dấu tiếng Việt
    let bestMatch = { score: 0, answer: "Xin lỗi, tôi chưa được huấn luyện về câu hỏi này. Bạn có thể tham khảo mục 'Tìm hiểu' hoặc hỏi một cách cụ thể hơn." };

    knowledgeBase.forEach(item => {
        let currentScore = 0;
        item.keywords.forEach(keyword => {
            const normalizedKeyword = keyword.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (lowerInput.includes(normalizedKeyword)) {
                currentScore++;
            }
        });
        if (currentScore > bestMatch.score && currentScore > 0) {
            bestMatch = { score: currentScore, answer: item.answer };
        }
    });
     // Nếu không có keyword nào khớp nhưng người dùng hỏi "tốc độ" chung chung
    if (bestMatch.score === 0 && lowerInput.includes("toc do")) {
        return "Bạn muốn hỏi về tốc độ tối đa cho loại xe nào và ở khu vực nào (khu dân cư, quốc lộ, cao tốc)? Ví dụ: 'tốc độ tối đa xe máy trong khu dân cư'";
    }
    if (bestMatch.score === 0 && lowerInput.includes("muc phat") || lowerInput.includes("bi phat")) {
        return "Bạn muốn hỏi về mức phạt cho lỗi vi phạm nào cụ thể? Ví dụ: 'mức phạt vượt đèn đỏ xe máy'";
    }

    return bestMatch.answer;
}


function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const messageText = chatInput.value.trim();

    if (messageText) {
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('message', 'user');
        userMessageDiv.textContent = messageText;
        chatMessages.appendChild(userMessageDiv);

        const aiResponseText = getAIResponse(messageText);

        setTimeout(() => {
            const botMessageDiv = document.createElement('div');
            botMessageDiv.classList.add('message', 'bot');
            botMessageDiv.innerHTML = `<strong>AI Assistant:</strong> ${aiResponseText}`;
            chatMessages.appendChild(botMessageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 500);

        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

function handleChatKeypress(event) {
    if (event.key === 'Enter') {
        sendMessage();
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
