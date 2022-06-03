const DATA = [
    {
        question: 'Вопрос 1',
        answers: [
            {
                id: '0',
                value: 'Ответ 1',
                correct: true,
            },
            {
                id: '1',
                value: 'Ответ 2',
                correct: false,
            },
            {
                id: '2',
                value: 'Ответ 3',
                correct: false,
            }
        ]
    },
    {
    question: 'Вопрос 2',
        answers: [
            {
                id: '4',
                value: 'Ответ 1',
                correct: false,
            },
            {
                id: '5',
                value: 'Ответ 2',
                correct: true,
            },
            {
                id: '6',
                value: 'Ответ 3',
                correct: false,
            }
        ]
    },

];

let localResult = {};


const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const renderQuestion = (index) => {
    renderIndicator(index + 1);

    const renderAnswers = () => DATA[index].answers
     .map((answer) => `
            <li>
            <label>
                <input class='answer-input' type="radio" name=${index} value=${answer.id}>
                ${answer.value}
            </label>
            </li>
            `
        )  

        .join('');
    question.innerHTML = `
    <div class="quiz-question-item">
                    <div class="quiz-question-item-question">${DATA[index].question}</div>
                    <ul class="quiz-question-item-answers">${renderAnswers()}</ul>
                </div>
    
    `;
};

const renderResults = () => {};

const renderIndicator = (currentStep) => {
     indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener('change', (event) => {
    if (event.target.classList.contains('answer-input')) {
        console.log('input')
        localResult[event.target.name] =  event.target.value;
        btnNext.disabled = false; 
        console.log(localResult);
    }


});

quiz.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-next')) {
        console.log('Далее')
    }
    if (event.target.classList.contains('btn-restart')) {
        console.log('с начала')
    }


});

renderQuestion(0);
 
