// ===============================
// DATA SOAL
// ===============================

const questions = {

    kosakata: [
        {
            question: "「いしゃ」 artinya...",
            answers: ["Guru", "Dokter", "Polisi", "Perawat"],
            correct: 1
        },
        {
            question: "「せんせい」 artinya...",
            answers: ["Dokter", "Guru", "Pelajar", "Polisi"],
            correct: 1
        },
        {
            question: "「がくせい」 artinya...",
            answers: ["Guru", "Dokter", "Siswa", "Petani"],
            correct: 2
        },
        {
            question: "「せんしゅ」 artinya...",
            answers: ["Atlet", "Dokter", "Guru", "Insinyur"],
            correct: 0
        },
        {
            question: "「かんごし」 artinya...",
            answers: ["Perawat", "Guru", "Polisi", "Karyawan"],
            correct: 0
        }
    ],


    pekerjaan: [
        {
            question: "Bahasa Jepang dari 'dokter' adalah...",
            answers: ["いしゃ", "せんせい", "がくせい", "かしゅ"],
            correct: 0
        },
        {
            question: "Bahasa Jepang dari 'guru' adalah...",
            answers: ["いしゃ", "せんせい", "せんしゅ", "けいさつかん"],
            correct: 1
        },
        {
            question: "「エンジニア」 adalah pekerjaan...",
            answers: ["Guru", "Dokter", "Insinyur", "Penyanyi"],
            correct: 2
        },
        {
            question: "「かしゅ」 artinya...",
            answers: ["Penyanyi", "Atlet", "Polisi", "Perawat"],
            correct: 0
        },
        {
            question: "「けいさつかん」 artinya...",
            answers: ["Polisi", "Guru", "Dokter", "Insinyur"],
            correct: 0
        }
    ],


    suki: [
        {
            question: "「すしがすきです」 artinya...",
            answers: [
                "Saya tidak suka sushi",
                "Saya suka sushi",
                "Saya makan sushi",
                "Saya membuat sushi"
            ],
            correct: 1
        },
        {
            question: "「ねこがすきです」 artinya...",
            answers: [
                "Saya suka kucing",
                "Saya punya kucing",
                "Saya melihat kucing",
                "Saya memberi makan kucing"
            ],
            correct: 0
        },
        {
            question: "「なにがすきですか」 artinya...",
            answers: [
                "Siapa kamu?",
                "Apa yang kamu suka?",
                "Di mana kamu?",
                "Apa pekerjaanmu?"
            ],
            correct: 1
        },
        {
            question: "「すきではありません」 artinya...",
            answers: [
                "Sangat suka",
                "Tidak suka",
                "Sedikit suka",
                "Tidak tahu"
            ],
            correct: 1
        },
        {
            question: "「わたしは ねこが すきです」 artinya...",
            answers: [
                "Saya suka kucing",
                "Saya suka anjing",
                "Saya punya kucing",
                "Saya melihat kucing"
            ],
            correct: 0
        }
    ]

};


// ===============================
// VARIABEL GAME
// ===============================

let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let selectedCategory = "";


// ===============================
// PINDAH HALAMAN
// ===============================

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}


function showHome() {
    showScreen("home");
}


function showCategory() {
    showScreen("category");
}


// ===============================
// MULAI GAME
// ===============================

function startGame(category) {

    selectedCategory = category;

    if (category === "campuran") {

        currentQuestions = [
            ...questions.kosakata,
            ...questions.pekerjaan,
            ...questions.suki
        ];

        // Acak soal
        currentQuestions.sort(() => Math.random() - 0.5);

    } else {

        currentQuestions = [...questions[category]];

    }

    // Ambil maksimal 10 soal
    currentQuestions = currentQuestions.slice(0, 10);

    currentQuestion = 0;
    score = 0;

    showScreen("quiz");

    loadQuestion();
}


// ===============================
// LOAD SOAL
// ===============================

function loadQuestion() {

    const question = currentQuestions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        `Soal ${currentQuestion + 1} / ${currentQuestions.length}`;

    document.getElementById("score").textContent =
        `⭐ ${score}`;

    document.getElementById("question").textContent =
        question.question;

    document.getElementById("progressBar").style.width =
        `${((currentQuestion + 1) / currentQuestions.length) * 100}%`;


    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";

    document.getElementById("feedback").textContent = "";

    document.getElementById("nextButton").style.display = "none";


    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${answer}`;

        button.onclick = () =>
            checkAnswer(index, button);

        answersContainer.appendChild(button);

    });
}


// ===============================
// CEK JAWABAN
// ===============================

function checkAnswer(selected, selectedButton) {

    const question = currentQuestions[currentQuestion];

    const allButtons =
        document.querySelectorAll(".answer");

    // Mencegah klik berkali-kali
    allButtons.forEach(button => {
        button.disabled = true;
    });


    if (selected === question.correct) {

        selectedButton.classList.add("correct");

        score++;

        document.getElementById("score").textContent =
            `⭐ ${score}`;

        document.getElementById("feedback").textContent =
            "✅ Benar! Bagus sekali!";

    } else {

        selectedButton.classList.add("wrong");

        allButtons[question.correct]
            .classList.add("correct");

        document.getElementById("feedback").textContent =
            "❌ Salah. Jawaban yang benar ditandai hijau.";

    }


    document.getElementById("nextButton").style.display =
        "block";
}


// ===============================
// SOAL BERIKUTNYA
// ===============================

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < currentQuestions.length) {

        loadQuestion();

    } else {

        showResult();

    }
}


// ===============================
// HASIL
// ===============================

function showResult() {

    showScreen("result");

    document.getElementById("finalScore").textContent =
        score;


    let message = "";

    const percentage =
        (score / currentQuestions.length) * 100;


    if (percentage === 100) {

        message = "🏆 Sempurna! Sugoi!";

    } else if (percentage >= 80) {

        message = "🎉 Bagus sekali! Terus belajar!";

    } else if (percentage >= 60) {

        message = "👍 Lumayan! Tingkatkan lagi!";

    } else {

        message = "💪 Jangan menyerah! Coba lagi!";

    }


    document.getElementById("resultMessage").textContent =
        message;
}


// ===============================
// RESTART
// ===============================

function restartGame() {

    startGame(selectedCategory);

}