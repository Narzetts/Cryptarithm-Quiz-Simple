const questions = [
    { level: 1, question: "SEND + MORE = MONEY", answer: "9567+1085=10652" },
    { level: 2, question: "BASE + BALL = GAMES", answer: "1234+5678=6912" },
    { level: 3, question: "SO + MANY = MORE", answer: "27+4360=4387" },
    { level: 4, question: "FORTY + TEN + TEN = SIXTY", answer: "29786+850+850=31586" },
    { level: 5, question: "EAT + THAT = APPLE", answer: "271+6801=7072" },
    { level: 6, question: "FUN + GAME = HAPPY", answer: "124+3867=3991" },
    { level: 7, question: "THIS + IS + HIS = CLAIM", answer: "4851+45+851=5747" },
    { level: 8, question: "READ + CODE = LOGIC", answer: "1394+3501=4895" },
    { level: 9, question: "PLANE + PLAN = LEVEL", answer: "94375+9425=103800" },
    { level: 10, question: "BOOK + BOOK = READING", answer: "2562+2562=5124" },
    { level: 11, question: "FIVE + FIVE = TEN", answer: "4500+4500=9000" },
    { level: 12, question: "FOUR + FOUR = EIGHT", answer: "2104+2104=4208" },
    { level: 13, question: "SIX + SIX = TWELVE", answer: "1530+1530=3060" },
    { level: 14, question: "ONE + ONE = TWO", answer: "423+423=846" },
    { level: 15, question: "SEVEN + SEVEN = FOURTEEN", answer: "3247+3247=6494" },
    { level: 16, question: "EIGHT + EIGHT = SIXTEEN", answer: "5079+5079=10158" },
    { level: 17, question: "NINE + NINE = EIGHTEEN", answer: "6183+6183=12366" },
    { level: 18, question: "TEN + TEN = TWENTY", answer: "490+490=980" },
    { level: 19, question: "ELEVEN + ELEVEN = TWENTY-TWO", answer: "6972+6972=13944" },
    { level: 20, question: "TWELVE + TWELVE = TWENTY-FOUR", answer: "8475+8475=16950" },
    { level: 21, question: "THIRTEEN + THIRTEEN = TWENTY-SIX", answer: "9537+9537=19074" },
    { level: 22, question: "FOURTEEN + FOURTEEN = TWENTY-EIGHT", answer: "10458+10458=20916" },
    { level: 23, question: "FIFTEEN + FIFTEEN = THIRTY", answer: "12030+12030=24060" },
    { level: 24, question: "SIXTEEN + SIXTEEN = THIRTY-TWO", answer: "13892+13892=27784" },
    { level: 25, question: "SEVENTEEN + SEVENTEEN = THIRTY-FOUR", answer: "15264+15264=30528" },
];

let currentLevel = 0;

const levelElement = document.getElementById('level');
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

function loadQuestion() {
    if (currentLevel < questions.length) {
        const currentQuestion = questions[currentLevel];
        levelElement.textContent = `Level: ${currentQuestion.level}`;
        questionElement.textContent = currentQuestion.question;
        answerInput.value = '';
        resultElement.textContent = '';
    } else {
        levelElement.textContent = 'Congratulations!';
        questionElement.textContent = 'You have completed all levels!';
        answerInput.style.display = 'none';
        submitButton.style.display = 'none';
    }
}

submitButton.addEventListener('click', () => {
    const userAnswer = answerInput.value.trim();
    const correctAnswer = questions[currentLevel].answer;

    if (userAnswer === correctAnswer) {
        resultElement.textContent = 'Correct!';
        currentLevel++;
        loadQuestion();
    } else {
        resultElement.textContent = 'Incorrect, try again.';
    }
});

loadQuestion();
