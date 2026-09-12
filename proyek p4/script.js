// ===============================
// DATA SOAL
// ===============================

const questions = {

    kosakata: [

        {
            question: "「いしゃ」 artinya...",
            answers: ["Guru", "Dokter", "Polisi", "Perawat"],
            correct: 1,
            explanation: "「いしゃ」(isha) berarti dokter."
        },

        {
            question: "「せんせい」 artinya...",
            answers: ["Dokter", "Guru", "Pelajar", "Polisi"],
            correct: 1,
            explanation: "「せんせい」(sensei) berarti guru."
        },

        {
            question: "「がくせい」 artinya...",
            answers: ["Guru", "Dokter", "Siswa", "Petani"],
            correct: 2,
            explanation: "「がくせい」(gakusei) berarti siswa atau pelajar."
        },

        {
            question: "「せんしゅ」 artinya...",
            answers: ["Atlet", "Dokter", "Guru", "Insinyur"],
            correct: 0,
            explanation: "「せんしゅ」(senshu) berarti atlet atau pemain olahraga."
        },

        {
            question: "「かんごし」 artinya...",
            answers: ["Perawat", "Guru", "Polisi", "Karyawan"],
            correct: 0,
            explanation: "「かんごし」(kangoshi) berarti perawat."
        }

    ],


    // ===============================
    // PEKERJAAN
    // ===============================

    pekerjaan: [

        {
            question: "Bahasa Jepang dari 'dokter' adalah...",
            answers: ["いしゃ", "せんせい", "がくせい", "かしゅ"],
            correct: 0,
            explanation: "Bahasa Jepang dari dokter adalah 「いしゃ」(isha)."
        },

        {
            question: "Bahasa Jepang dari 'guru' adalah...",
            answers: ["いしゃ", "せんせい", "せんしゅ", "けいさつかん"],
            correct: 1,
            explanation: "Bahasa Jepang dari guru adalah 「せんせい」(sensei)."
        },

        {
            question: "「エンジニア」 adalah pekerjaan...",
            answers: ["Guru", "Dokter", "Insinyur", "Penyanyi"],
            correct: 2,
            explanation: "「エンジニア」(enjinia) berarti insinyur atau engineer."
        },

        {
            question: "「かしゅ」 artinya...",
            answers: ["Penyanyi", "Atlet", "Polisi", "Perawat"],
            correct: 0,
            explanation: "「かしゅ」(kashu) berarti penyanyi."
        },

        {
            question: "「けいさつかん」 artinya...",
            answers: ["Polisi", "Guru", "Dokter", "Insinyur"],
            correct: 0,
            explanation: "「けいさつかん」(keisatsukan) berarti polisi."
        }

    ],


    // ===============================
    // SUKI
    // ===============================

    suki: [

        {
            question: "「すしがすきです」 artinya...",
            answers: [
                "Saya tidak suka sushi",
                "Saya suka sushi",
                "Saya makan sushi",
                "Saya membuat sushi"
            ],
            correct: 1,
            explanation: "「すしがすきです」 berarti 'Saya suka sushi'."
        },

        {
            question: "「ねこがすきです」 artinya...",
            answers: [
                "Saya suka kucing",
                "Saya punya kucing",
                "Saya melihat kucing",
                "Saya memberi makan kucing"
            ],
            correct: 0,
            explanation: "「ねこがすきです」 berarti 'Saya suka kucing'."
        },

        {
            question: "「なにがすきですか」 artinya...",
            answers: [
                "Siapa kamu?",
                "Apa yang kamu suka?",
                "Di mana kamu?",
                "Apa pekerjaanmu?"
            ],
            correct: 1,
            explanation: "「なにがすきですか」 berarti 'Apa yang kamu suka?'."
        },

        {
            question: "「すきではありません」 artinya...",
            answers: [
                "Sangat suka",
                "Tidak suka",
                "Sedikit suka",
                "Tidak tahu"
            ],
            correct: 1,
            explanation: "「すきではありません」 berarti 'tidak suka'."
        },

        {
            question: "「わたしは ねこが すきです」 artinya...",
            answers: [
                "Saya suka kucing",
                "Saya suka anjing",
                "Saya punya kucing",
                "Saya melihat kucing"
            ],
            correct: 0,
            explanation: "Kalimat tersebut berarti 'Saya suka kucing'."
        }

    ]

};


// ===============================
// DATA FLASHCARD
// ===============================

const flashcards = {

    kosakata: [

        {
            front: "いしゃ",
            back: "Dokter",
            reading: "いしゃ (isha)"
        },

        {
            front: "せんせい",
            back: "Guru",
            reading: "せんせい (sensei)"
        },

        {
            front: "がくせい",
            back: "Siswa / Pelajar",
            reading: "がくせい (gakusei)"
        },

        {
            front: "せんしゅ",
            back: "Atlet",
            reading: "せんしゅ (senshu)"
        },

        {
            front: "かんごし",
            back: "Perawat",
            reading: "かんごし (kangoshi)"
        }

    ],


    pekerjaan: [

        {
            front: "いしゃ",
            back: "Dokter",
            reading: "isha"
        },

        {
            front: "せんせい",
            back: "Guru",
            reading: "sensei"
        },

        {
            front: "エンジニア",
            back: "Insinyur / Engineer",
            reading: "enjinia"
        },

        {
            front: "かしゅ",
            back: "Penyanyi",
            reading: "かしゅ (kashu)"
        },

        {
            front: "けいさつかん",
            back: "Polisi",
            reading: "けいさつかん (keisatsukan)"
        }

    ],


    suki: [

        {
            front: "すしがすきです",
            back: "Saya suka sushi",
            reading: "Sushi ga suki desu"
        },

        {
            front: "ねこがすきです",
            back: "Saya suka kucing",
            reading: "Neko ga suki desu"
        },

        {
            front: "なにがすきですか",
            back: "Apa yang kamu suka?",
            reading: "Nani ga suki desu ka"
        },

        {
            front: "すきではありません",
            back: "Tidak suka",
            reading: "Suki dewa arimasen"
        },

        {
            front: "わたしは ねこが すきです",
            back: "Saya suka kucing",
            reading: "Watashi wa neko ga suki desu"
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
// VARIABEL FLASHCARD
// ===============================

let currentFlashcards = [];

let currentCard = 0;

let cardFlipped = false;


// ===============================
// PINDAH HALAMAN
// ===============================

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(screen => {

        screen.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

}


// ===============================
// HOME
// ===============================

function showHome() {

    showScreen("home");

}


// ===============================
// CATEGORY
// ===============================

function showCategory() {

    showScreen("category");

}


// ===============================
// PILIH MATERI
// ===============================

function openLearning(category) {

    selectedCategory = category;

    const titles = {

        kosakata: "📖 Kosakata",

        pekerjaan: "👨‍🏫 Pekerjaan",

        suki: "❤️ 好きです",

        campuran: "🎲 Campuran"

    };

    document.getElementById("learningTitle").textContent =
        titles[category];

    showScreen("learning");

}


// ===============================
// MULAI FLASHCARD
// ===============================

function startFlashcard() {

    if (selectedCategory === "campuran") {

        currentFlashcards = [

            ...flashcards.kosakata,
            ...flashcards.pekerjaan,
            ...flashcards.suki

        ];

        currentFlashcards.sort(
            () => Math.random() - 0.5
        );

    } else {

        currentFlashcards =
            [...flashcards[selectedCategory]];

    }

    currentCard = 0;

    cardFlipped = false;

    showScreen("flashcard");

    loadFlashcard();

}


// ===============================
// LOAD FLASHCARD
// ===============================

function loadFlashcard() {

    const card =
        currentFlashcards[currentCard];


    document.getElementById("flashcardNumber").textContent =
        `Kartu ${currentCard + 1} / ${currentFlashcards.length}`;


    document.getElementById("flashcardFront").textContent =
        card.front;


    document.getElementById("flashcardBack").textContent =
        card.back;


    document.getElementById("flashcardReading").textContent =
        card.reading;


    // Reset posisi kartu

    cardFlipped = false;

    document
        .getElementById("flashcardCard")
        .classList.remove("flipped");


    // Tombol sebelumnya

    document.getElementById("previousCard").disabled =
        currentCard === 0;


    // Tombol berikutnya

    document.getElementById("nextCard").textContent =

        currentCard === currentFlashcards.length - 1

            ? "Selesai 🎉"

            : "Berikutnya →";

}


// ===============================
// FLIP CARD
// ===============================

function flipCard() {

    const card =
        document.getElementById("flashcardCard");


    cardFlipped = !cardFlipped;


    if (cardFlipped) {

        card.classList.add("flipped");

    } else {

        card.classList.remove("flipped");

    }

}


// ===============================
// KARTU SEBELUMNYA
// ===============================

function previousCard() {

    if (currentCard > 0) {

        currentCard--;

        loadFlashcard();

    }

}


// ===============================
// KARTU BERIKUTNYA
// ===============================

function nextCard() {

    if (
        currentCard <
        currentFlashcards.length - 1
    ) {

        currentCard++;

        loadFlashcard();

    } else {

        // Kalau sudah kartu terakhir

        showCategory();

    }

}


// ===============================
// MULAI QUIZ
// ===============================

function startGame(category) {

    selectedCategory = category;


    if (category === "campuran") {

        currentQuestions = [

            ...questions.kosakata,
            ...questions.pekerjaan,
            ...questions.suki

        ];

        currentQuestions.sort(
            () => Math.random() - 0.5
        );

    } else {

        currentQuestions =
            [...questions[category]];

    }


    // Maksimal 10 soal

    currentQuestions =
        currentQuestions.slice(0, 10);


    currentQuestion = 0;

    score = 0;


    showScreen("quiz");

    loadQuestion();

}


// ===============================
// LOAD SOAL
// ===============================

function loadQuestion() {

    const question =
        currentQuestions[currentQuestion];


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


    document.getElementById("feedback").innerHTML =
        "";


    document.getElementById("nextButton").style.display =
        "none";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.className =
                "answer";


            button.textContent =
                `${String.fromCharCode(65 + index)}. ${answer}`;


            button.onclick = () =>
                checkAnswer(index, button);


            answersContainer.appendChild(button);

        }
    );

}


// ===============================
// CEK JAWABAN
// ===============================

function checkAnswer(
    selected,
    selectedButton
) {

    const question =
        currentQuestions[currentQuestion];


    const allButtons =
        document.querySelectorAll(".answer");


    // Mencegah klik berkali-kali

    allButtons.forEach(button => {

        button.disabled = true;

    });


    if (
        selected === question.correct
    ) {

        selectedButton.classList.add(
            "correct"
        );


        score++;


        document.getElementById("score").textContent =
            `⭐ ${score}`;


        document.getElementById("feedback").innerHTML = `

            <div class="feedback-box correct-feedback">

                <strong>
                    ✅ Benar! Bagus sekali!
                </strong>

                <div class="explanation">

                    <strong>
                        💡 Penjelasan:
                    </strong>

                    <br>

                    ${question.explanation}

                </div>

            </div>

        `;

    } else {

        selectedButton.classList.add(
            "wrong"
        );


        allButtons[question.correct]
            .classList.add("correct");


        document.getElementById("feedback").innerHTML = `

            <div class="feedback-box wrong-feedback">

                <strong>
                    ❌ Kurang tepat.
                </strong>

                <div class="explanation">

                    <strong>
                        💡 Penjelasan:
                    </strong>

                    <br>

                    ${question.explanation}

                </div>

            </div>

        `;

    }


    document.getElementById("nextButton").style.display =
        "block";

}


// ===============================
// SOAL BERIKUTNYA
// ===============================

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion <
        currentQuestions.length
    ) {

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

        message =
            "🏆 Sempurna! Sugoi!";

    }

    else if (percentage >= 80) {

        message =
            "🎉 Bagus sekali! Terus belajar!";

    }

    else if (percentage >= 60) {

        message =
            "👍 Lumayan! Tingkatkan lagi!";

    }

    else {

        message =
            "💪 Jangan menyerah! Coba lagi!";

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