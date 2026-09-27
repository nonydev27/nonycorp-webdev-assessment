const quizData = [
    // --- HTML QUESTIONS (1-12) ---
    {
        question: "1. What does HTML stand for?",
        options: {
            a: "Hyper Text Preprocessor",
            b: "Hyper Text Markup Language",
            c: "Hyper Tool Multi Language",
            d: "Hyperlink and Text Markup Language"
        },
        correct: "b"
    },
    {
        question: "2. Choose the correct HTML element for the largest heading:",
        options: {
            a: "<head>",
            b: "<h6>",
            c: "<heading>",
            d: "<h1>"
        },
        correct: "d"
    },
    {
        question: "3. What is the correct HTML element for inserting a line break?",
        options: {
            a: "<break>",
            b: "<lb>",
            c: "<br>",
            d: "<tr>"
        },
        correct: "c"
    },
    {
        question: "4. Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: {
            a: "title",
            b: "alt",
            c: "src",
            d: "longdesc"
        },
        correct: "b"
    },
    {
        question: "5. Which character is used to indicate an end tag in HTML?",
        options: {
            a: "*",
            b: "<",
            c: "/",
            d: "^"
        },
        correct: "c"
    },
    {
        question: "6. How can you make a numbered list?",
        options: {
            a: "<ul>",
            b: "<list>",
            c: "<ol>",
            d: "<dl>"
        },
        correct: "c"
    },
    {
        question: "7. How can you make a bulleted list?",
        options: {
            a: "<ol>",
            b: "<list>",
            c: "<dl>",
            d: "<ul>"
        },
        correct: "d"
    },
    {
        question: "8. What is the correct HTML for making a hyperlink?",
        options: {
            a: "<a href='http://www.example.com'>Example</a>",
            b: "<a url='http://www.example.com'>Example</a>",
            c: "<a>http://www.example.com</a>",
            d: "<a name='http://www.example.com'>Example</a>"
        },
        correct: "a"
    },
    {
        question: "9. Which HTML element defines the title of a document?",
        options: {
            a: "<meta>",
            b: "<head>",
            c: "<title>",
            d: "<body>"
        },
        correct: "c"
    },
    {
        question: "10. What is the correct HTML element to define important text?",
        options: {
            a: "<strong>",
            b: "<i>",
            c: "<important>",
            d: "<b>"
        },
        correct: "a"
    },
    {
        question: "11. Which attribute is used to open a hyperlink in a new tab or window?",
        options: {
            a: "target='_new'",
            b: "target='_blank'",
            c: "open='new'",
            d: "window='_blank'"
        },
        correct: "b"
    },
    {
        question: "12. How do you add a comment in HTML?",
        options: {
            a: "// This is a comment //",
            b: "<!-- This is a comment -->",
            c: "/* This is a comment */",
            d: "' This is a comment"
        },
        correct: "b"
    },

    // --- CSS QUESTIONS (13-24) ---
    {
        question: "13. What does CSS stand for?",
        options: {
            a: "Computer Style Sheets",
            b: "Cascading Style Sheets",
            c: "Creative Style Sheets",
            d: "Colorful Style Sheets"
        },
        correct: "b"
    },
    {
        question: "14. Where in an HTML document is the correct place to refer to an external style sheet?",
        options: {
            a: "In the <body> section",
            b: "At the end of the document",
            c: "In the <head> section",
            d: "Before the <html> tag"
        },
        correct: "c"
    },
    {
        question: "15. Which HTML tag is used to define an internal style sheet?",
        options: {
            a: "<script>",
            b: "<style>",
            c: "<css>",
            d: "<link>"
        },
        correct: "b"
    },
    {
        question: "16. Which CSS property is used to change the text color of an element?",
        options: {
            a: "text-color",
            b: "fgcolor",
            c: "color",
            d: "font-color"
        },
        correct: "c"
    },
    {
        question: "17. Which CSS property controls the text size?",
        options: {
            a: "text-size",
            b: "font-style",
            c: "text-style",
            d: "font-size"
        },
        correct: "d"
    },
    {
        question: "18. How do you select an element with id 'demo'?",
        options: {
            a: "#demo",
            b: ".demo",
            c: "demo",
            d: "*demo"
        },
        correct: "a"
    },
    {
        question: "19. How do you select elements with class name 'test'?",
        options: {
            a: "#test",
            b: ".test",
            c: "test",
            d: "*test"
        },
        correct: "b"
    },
    {
        question: "20. Which property is used to change the background color?",
        options: {
            a: "color",
            b: "bgcolor",
            c: "background-color",
            d: "bg-color"
        },
        correct: "c"
    },
    {
        question: "21. How do you add a comment in a CSS file?",
        options: {
            a: "// this is a comment",
            b: "/* this is a comment */",
            c: "<!-- this is a comment -->",
            d: "' this is a comment"
        },
        correct: "b"
    },
    {
        question: "22. Which property is used to change the font of an element?",
        options: {
            a: "font-family",
            b: "font-weight",
            c: "font-style",
            d: "text-font"
        },
        correct: "a"
    },
    {
        question: "23. The CSS Box Model consists of which of the following?",
        options: {
            a: "Margins, Borders, Padding, and the actual Content",
            b: "Header, Body, Footer",
            c: "Lines, Shapes, Colors, Text",
            d: "Position, Display, Float, Clear"
        },
        correct: "a"
    },
    {
        question: "24. How do you make the text bold in CSS?",
        options: {
            a: "font: bold;",
            b: "style: bold;",
            c: "font-weight: bold;",
            d: "text-size: bold;"
        },
        correct: "c"
    },

    // --- GIT & GITHUB QUESTIONS (25-35) ---
    {
        question: "25. What is Git?",
        options: {
            a: "A programming language",
            b: "A remote hosting platform",
            c: "A Version Control System",
            d: "A text editor"
        },
        correct: "c"
    },
    {
        question: "26. What is the command to initialize a new Git repository?",
        options: {
            a: "git start",
            b: "git init",
            c: "git new",
            d: "git create"
        },
        correct: "b"
    },
    {
        question: "27. Which command is used to check the state of the working directory and the staging area?",
        options: {
            a: "git log",
            b: "git state",
            c: "git status",
            d: "git check"
        },
        correct: "c"
    },
    {
        question: "28. How do you add all modified files to the staging area in Git?",
        options: {
            a: "git add all",
            b: "git stage *",
            c: "git commit -a",
            d: "git add ."
        },
        correct: "d"
    },
    {
        question: "29. What does the 'git commit' command do?",
        options: {
            a: "Pushes changes to GitHub",
            b: "Saves a snapshot of the staged changes to the local repository",
            c: "Adds files to the staging area",
            d: "Downloads a remote repository"
        },
        correct: "b"
    },
    {
        question: "30. Which command is used to push local commits to a remote repository on GitHub?",
        options: {
            a: "git upload",
            b: "git send",
            c: "git push",
            d: "git pull"
        },
        correct: "c"
    },
    {
        question: "31. What is the purpose of the .gitignore file?",
        options: {
            a: "To delete files from the repository",
            b: "To list files that Git should not track",
            c: "To configure Git user settings",
            d: "To resolve merge conflicts"
        },
        correct: "b"
    },
    {
        question: "32. What is the default name of the main branch in modern Git repositories?",
        options: {
            a: "master",
            b: "main",
            c: "head",
            d: "trunk"
        },
        correct: "b"
    },
    {
        question: "33. How do you create a copy of an existing remote repository on your local machine?",
        options: {
            a: "git copy",
            b: "git clone",
            c: "git fork",
            d: "git download"
        },
        correct: "b"
    },
    {
        question: "34. What is a Pull Request (PR) in GitHub?",
        options: {
            a: "A command to pull data from a server",
            b: "A request to merge your code changes into another branch/repository",
            c: "A way to delete a branch",
            d: "A feature to block users"
        },
        correct: "b"
    },
    {
        question: "35. What is the difference between Git and GitHub?",
        options: {
            a: "They are the same thing",
            b: "Git is a cloud service; GitHub is a local tool",
            c: "Git is the version control software; GitHub is a cloud platform that hosts Git repositories",
            d: "Git is for HTML; GitHub is for CSS"
        },
        correct: "c"
    }
];

const quizContent = document.getElementById('quiz-content');
const submitBtn = document.getElementById('submit-btn');
const resultsDisplay = document.getElementById('results-display');
const scoreSpan = document.getElementById('score');

function buildQuiz() {
    const output = [];

    quizData.forEach((currentQuestion, questionNumber) => {
        const optionsHTML = [];

        for (letter in currentQuestion.options) {
            optionsHTML.push(
                `<label class="options-label">
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    <strong>${letter.toUpperCase()}:</strong> ${currentQuestion.options[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question-card">
                <h3>${currentQuestion.question}</h3>
                <div class="options">
                    ${optionsHTML.join('')}
                </div>
            </div>`
        );
    });

    quizContent.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContent.querySelectorAll('.options');
    let numCorrect = 0;

    // Check if the user missed any questions before submitting
    let missedQuestions = false;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const checkedInput = answerContainer.querySelector(selector);
        
        if (!checkedInput) {
            missedQuestions = true;
        }
    });

    if (missedQuestions) {
        const confirmSubmit = confirm("You haven't answered all the questions. Are you sure you want to submit?");
        if (!confirmSubmit) return; // Stop execution if they click cancel
    }

    // Calculate score
    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // Reset styling for all labels in this question
        const allLabels = answerContainer.querySelectorAll('.options-label');
        allLabels.forEach(label => {
            label.style.backgroundColor = '';
            label.style.borderColor = '#cbd5e1';
            label.style.color = '#333';
        });

        if (userAnswer === currentQuestion.correct) {
            numCorrect++;
            // Highlight the correct answer box in green
            const correctLabel = answerContainer.querySelector(`input[value="${userAnswer}"]`).parentElement;
            correctLabel.style.backgroundColor = '#dcfce7'; // light green
            correctLabel.style.borderColor = '#22c55e';
            correctLabel.style.color = '#166534';
        } else {
            // Highlight their wrong answer box in red
            if (userAnswer) {
                const wrongLabel = answerContainer.querySelector(`input[value="${userAnswer}"]`).parentElement;
                wrongLabel.style.backgroundColor = '#fee2e2'; // light red
                wrongLabel.style.borderColor = '#ef4444';
                wrongLabel.style.color = '#991b1b';
            }
            
            // Show them the correct answer in green
            const correctLabel = answerContainer.querySelector(`input[value="${currentQuestion.correct}"]`).parentElement;
            correctLabel.style.backgroundColor = '#dcfce7'; 
            correctLabel.style.borderColor = '#22c55e';
        }
    });

    submitBtn.classList.add('hidden');
    resultsDisplay.classList.remove('hidden');
    scoreSpan.innerText = `${numCorrect} / ${quizData.length}`;
    
    // Scroll to the top to see the score
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

buildQuiz();

submitBtn.addEventListener('click', showResults);