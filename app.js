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

// ... [KEEP YOUR EXISTING quizData ARRAY HERE] ...

const startScreen = document.getElementById('start-screen');
const quizSection = document.getElementById('quiz-section');
const quizContent = document.getElementById('quiz-content');
const submitBtn = document.getElementById('submit-btn');
const resultsDisplay = document.getElementById('results-display');
const scoreSpan = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const timerContainer = document.getElementById('timer-display');

let studentName = "";
let timerInterval;
let timeRemaining = 420; // 7 minutes in seconds
let isSubmitted = false;

// Quiz closes at this exact instant. 5:00 PM GMT today.
// 17:00 UTC = 17 * 60 * 60 * 1000 ms into the day.
const DEADLINE = (() => {
    const now = new Date();
    return Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 17, 0, 0);
})();

function isPastDeadline() {
    return Date.now() >= DEADLINE;
}

// 1. Check if they already took it, or if the deadline has passed
// Note: replacing startScreen.innerHTML removes the start button entirely,
// so there is nothing to disable afterwards.
if (isPastDeadline()) {
    startScreen.innerHTML = `<h2>Assessment Closed</h2>
                             <p>The deadline for this assessment has passed (5:00 PM GMT). Submissions are no longer accepted.</p>`;
} else if (localStorage.getItem('nonyCorpQuizCompleted') === 'true') {
    startScreen.innerHTML = `<h2>Assessment Already Completed</h2>
                             <p>You have already submitted this assessment. Reattempts are not allowed.</p>`;
}

// 2. Start Quiz Logic
document.getElementById('start-btn').addEventListener('click', () => {
    // Re-check the clock at click time: the page may have been left open
    // across the deadline.
    if (isPastDeadline()) {
        alert('The deadline for this assessment (5:00 PM GMT) has passed. Submissions are no longer accepted.');
        location.reload();
        return;
    }

    const nameInput = document.getElementById('student-name').value.trim();
    if (!nameInput) {
        alert('Please enter your name to begin.');
        return;
    }

    studentName = nameInput;
    startScreen.classList.add('hidden');
    quizSection.classList.remove('hidden');
    
    buildQuiz();
    startTimer();

    // Anti-Cheat: Detect tab switching or window minimizing
    document.addEventListener('visibilitychange', handleVisibilityChange);
});

// 3. Timer Logic
function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        
        timeDisplay.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeRemaining <= 60) { // Under 1 minute
            timerContainer.classList.add('warning');
        }

        // Close the quiz if the wall-clock deadline arrives mid-attempt.
        if (isPastDeadline()) {
            clearInterval(timerInterval);
            alert("The 5:00 PM GMT deadline has passed. Your answers will be submitted now.");
            processSubmission("Deadline Reached");
            return;
        }

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Time is up! Your answers will be automatically submitted.");
            processSubmission("Time Expired");
        }
    }, 1000);
}

// 4. Anti-Cheat Logic
function handleVisibilityChange() {
    if (document.hidden && !isSubmitted) {
        alert("Warning: You left the assessment window! The quiz is now auto-submitting.");
        processSubmission("Auto-submitted due to tab switch/leaving window");
    }
}

// Escape text so that code samples like <h1> or <br> are shown literally
// instead of being parsed as HTML by innerHTML.
function escapeHTML(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// 5. Build Quiz (Same as before)
function buildQuiz() {
    const output = [];
    quizData.forEach((currentQuestion, questionNumber) => {
        const optionsHTML = [];
        for (const letter in currentQuestion.options) {
            optionsHTML.push(
                `<label class="options-label">
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    <strong>${letter.toUpperCase()}:</strong> ${escapeHTML(currentQuestion.options[letter])}
                </label>`
            );
        }
        output.push(
            `<div class="question-card">
                <h3>${escapeHTML(currentQuestion.question)}</h3>
                <div class="options">${optionsHTML.join('')}</div>
            </div>`
        );
    });
    quizContent.innerHTML = output.join('');
}

// 6. Manual Submit Button
submitBtn.addEventListener('click', () => {
    const confirmSubmit = confirm("Are you sure you want to submit your answers?");
    if (confirmSubmit) {
        processSubmission("Completed Normally");
    }
});

// 7. Process Score and Send to Backend
function processSubmission(statusReason) {
    if (isSubmitted) return;
    isSubmitted = true;
    clearInterval(timerInterval);
    document.removeEventListener('visibilitychange', handleVisibilityChange);

    // Lock them out from future attempts
    localStorage.setItem('nonyCorpQuizCompleted', 'true');

    // Calculate Score
    const answerContainers = quizContent.querySelectorAll('.options');
    let numCorrect = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correct) {
            numCorrect++;
        }
    });

    const finalScore = `${numCorrect}/${quizData.length}`;

    // Show results to student
    quizSection.classList.add('hidden');
    resultsDisplay.classList.remove('hidden');
    document.getElementById('student-result-name').innerText = `Student: ${studentName}`;
    scoreSpan.innerText = finalScore;

    // Send data to you
    sendDataToInstructor(studentName, finalScore, statusReason);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 8. API call to save the scores
// 8. API call to send the scores to your email via Formspree
async function sendDataToInstructor(name, score, status) {
    const statusText = document.getElementById('submission-status');
    statusText.innerText = "Sending scores to Karl's email...";

    // The data that will appear in your email
    const payload = {
        Student_Name: name,
        Final_Score: score,
        Submission_Status: status,
        Timestamp: new Date().toLocaleString()
    };

    // PASTE YOUR FORMSPREE LINK BELOW, e.g. 'https://formspree.io/f/abcdwxyz'
    const formspreeEndpoint = 'https://formspree.io/f/mzezkver';

    // Guard: if the endpoint is missing or malformed, tell the user instead of failing silently.
    if (!formspreeEndpoint || !/^https?:\/\//.test(formspreeEndpoint)) {
        console.warn('Formspree endpoint is not configured. Set formspreeEndpoint in app.js.');
        statusText.innerText = "Score not sent automatically (instructor endpoint not configured). Please take a screenshot of your score and send it to the instructor.";
        statusText.style.color = "#ef4444";
        return;
    }

    try {
        const response = await fetch(formspreeEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            statusText.innerText = "Scores successfully sent to instructor!";
            statusText.style.color = "green";
        } else {
            throw new Error('Failed to send');
        }
    } catch (error) {
        console.error(error);
        statusText.innerText = "Error sending email. Please take a screenshot of your score and send it to the instructor.";
        statusText.style.color = "#ef4444";
    }
}