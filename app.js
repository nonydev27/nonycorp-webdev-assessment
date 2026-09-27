// Array of question objects
const quizData = [
    {
        question: "1. What does HTML stand for?",
        options: {
            a: "Hyper Text Markup Language",
            b: "Home Tool Markup Language",
            c: "Hyperlinks and Text Markup Language"
        },
        correct: "a"
    },
    {
        question: "2. Which HTML tag is used to define an internal style sheet?",
        options: {
            a: "<script>",
            b: "<style>",
            c: "<css>"
        },
        correct: "b"
    },
    {
        question: "3. What is the correct CSS syntax to change the text color of a paragraph to red?",
        options: {
            a: "p {text-color: red;}",
            b: "p {color: red;}",
            c: "p {font-color: red;}"
        },
        correct: "b"
    },
    {
        question: "4. Which Git command is used to record changes to the repository?",
        options: {
            a: "git push",
            b: "git add",
            c: "git commit"
        },
        correct: "c"
    },
    {
        question: "5. What is the main purpose of GitHub?",
        options: {
            a: "To host code repositories and collaborate on projects",
            b: "To compile JavaScript code into machine code",
            c: "To create local databases"
        },
        correct: "a"
    }
    // Continue adding your questions here...
];

const quizContent = document.getElementById('quiz-content');
const submitBtn = document.getElementById('submit-btn');
const resultsDisplay = document.getElementById('results-display');
const scoreSpan = document.getElementById('score');

// Function to render the quiz to the DOM
function buildQuiz() {
    const output = [];

    quizData.forEach((currentQuestion, questionNumber) => {
        const optionsHTML = [];

        // Generate the HTML for each radio button option
        for (letter in currentQuestion.options) {
            optionsHTML.push(
                `<label class="options-label">
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}: ${currentQuestion.options[letter]}
                </label>`
            );
        }

        // Add the question and its options to the output array
        output.push(
            `<div class="question-card">
                <h3>${currentQuestion.question}</h3>
                <div class="options">
                    ${optionsHTML.join('')}
                </div>
            </div>`
        );
    });

    // Combine output list into one string of HTML and put it on the page
    quizContent.innerHTML = output.join('');
}

// Function to calculate and show the results
function showResults() {
    const answerContainers = quizContent.querySelectorAll('.options');
    let numCorrect = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        // Find the selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // If answer is correct
        if (userAnswer === currentQuestion.correct) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // Hide the submit button and show the results
    submitBtn.classList.add('hidden');
    resultsDisplay.classList.remove('hidden');
    
    // Display the final score
    scoreSpan.innerText = `${numCorrect} out of ${quizData.length}`;
}

// Initialize the quiz
buildQuiz();

// Event listener for the submit button
submitBtn.addEventListener('click', showResults);