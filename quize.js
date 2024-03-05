const quizData = [
    {
        question: "1.Which among the following is the shortcut key to Zoom in window?",
        a: "Shift + [+]",
        b: "Win + [+]",
        c: "Win + F4",
        d: "Alt + [+]",
        correct: "b",
    },
    {
        question: "2.What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "3.What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "4.Which among the following is incorrectly matched?",
        a: "LAN- Local Area Network",
        b: "WAN- Wide Area Network",
        c: "MAN- Main Area Network",
        d: "IP Internet Protocol",
        correct: "c",
    },

    {
        question: "5.A web address is usually known as …",
        a: "URL",
        b: "UWL",
        c: "WWW",
        d: "UVL",
        correct: "a",
    },

    {
        question: "6.Which among the following is not a type of printer?",
        a: "LCD Printer",
        b: "Laser Printer",
        c: "Inkjet Printer",
        d: " Electro Thermal Printer",
        correct: "a",
    },

    {
        question: "7.The Second Generation Computer used …",
        a: "Transistors",
        b: " Integrated circuit",
        c: "Vacuum tube",
        d: "Chip",
        correct: "a",
    },

    {
        question: "8. MS-Office is a/an ……",
        a: "Application software",
        b: "Operating software",
        c: "Programing software",
        d: "A & B both",
        correct: "a",
    },

    {
        question: "9.Which among the following was the first computer virus detected in India?",
        a: "Good morning",
        b: "I Love you",
        c: " Melissa",
        d: "Happy Birthday Joshi",
        correct: "d",
    },

    {
        question: "10.Which among the following correctly explains the term ‘internet?",
        a: "Internet network",
        b: "International network",
        c: " Intercontinental network",
        d: "Information network",
        correct: "b",
    },

    {
        question: "11. The >>> symbol in Python is known as the _______.",
        a: "Prompt",
        b: "Cursor",
        c: "Whack",
        d: "Float",
        correct: "a",
    },

    {
        question: "12.Turtle is a _________ built into Python that performs drawing functions?",
        a: "Program",
        b: "command",
        c: "Module",
        d: "Keyword",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.b
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.a
    e_text.innerText = currentQuizData.c
    f_text.innerText = currentQuizData.a
    g_text.innerText = currentQuizData.a
    h_text.innerText = currentQuizData.a
    i_text.innerText = currentQuizData.a
    j_text.innerText = currentQuizData.d
    k_text.innerText = currentQuizData.b
    l_text.innerText = currentQuizData.a
    m_text.innerText = currentQuizData.c
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
