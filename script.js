const quizData = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    }
];

let currentQuestion = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', loadQuestion);

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const scoreElement = document.getElementById('score');

    if (currentQuestion >= quizData.length) {
        questionContainer.textContent = "Quiz Completed!";
        optionsContainer.innerHTML = "";
        scoreElement.textContent = `Final Score: ${score}/${quizData.length}`;
        return;
    }

    const currentQuiz = quizData[currentQuestion];

    questionContainer.textContent = currentQuiz.question;
    optionsContainer.innerHTML = "";

    currentQuiz.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option');
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => checkAnswer(option, currentQuiz.correctAnswer));

        optionsContainer.appendChild(optionButton);
    });

    scoreElement.textContent = `Score: ${score}`;
}

function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestion++;
    loadQuestion();
}
