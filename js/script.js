const DATA = [
    {
        question: 'Назовите самую быстро-бегающую птицу?',
        answers: [
            {
                id: '0',
                value: 'Цапля',
                correct: false,
            },
            {
                id: '1',
                value: 'Страус',
                correct: true,
            },
            {
                id: '2',
                value: 'Воробей',
                correct: false,
            }
        ]
    },
    {
    question: 'В каком виде спорта самый легкий мяч?',
        answers: [
            {
                id: '3',
                value: 'Футбол',
                correct: false,
            },
            {
                id: '4',
                value: 'Баскетбол',
                correct: true,
            },
            {
                id: '5',
                value: 'Теннис',
                correct: false,
            }
        ]
    },
    {
        question: 'Первая женщина-космонавт?',
        answers: [
            {
                id: '6',
                value: 'Иванова',
                correct: false,
            },
            {
                id: '7',
                value: 'Терешкова',
                correct: true,
            },
            {
                id: '8',
                value: 'Гагарина',
                correct: false,
            }
        ]
    },
    {
        question: 'Самый большой оптический прибор?',
        answers: [
            {
                id: '9',
                value: 'Телескоп',
                correct: true,
            },
            {
                id: '10',
                value: 'Лупа',
                correct: false,
            },
            {
                id: '11',
                value: 'Бинокль',
                correct: false,
            }
        ]
    },
    {
        question: 'Какое домашнее животное считается самым упрямым?',
        answers: [
            {
                id: '12',
                value: 'Лошадь',
                correct: false,
            },
            {
                id: '13',
                value: 'Осёл',
                correct: true,
            },
            {
                id: '14',
                value: 'Свинья',
                correct: false,
            }
        ]
    },
    {
        question: 'Что моряки рвут на груди?',
        answers: [
            {
                id: '15',
                value: 'Волосы',
                correct: false,
            },
            {
                id: '16',
                value: 'Носки',
                correct: false,
            },
            {
                id: '17',
                value: 'Тельняшку',
                correct: true,
            }
        ]
    },
    {
        question: 'Самое быстрое животное на земле?',
        answers: [
            {
                id: '18',
                value: 'Гепард',
                correct: true,
            },
            {
                id: '19',
                value: 'Собака',
                correct: false,
            },
            {
                id: '20',
                value: 'Жираф',
                correct: false,
            }
        ]
    },
    {
        question: 'Весит груша нельзя скушать?',
        answers: [
            {
                id: '21',
                value: 'Люстра',
                correct: false,
            },
            {
                id: '22',
                value: 'Лампочка',
                correct: true,
            },
            {
                id: '23',
                value: 'Фонарь',
                correct: false,
            }
        ]
    },
    {
        question: 'Сколько ног у паука?',
        answers: [
            {
                id: '24',
                value: 'Четыре',
                correct: false,
            },
            {
                id: '25',
                value: 'Восемь',
                correct: true,
            },
            {
                id: '26',
                value: 'Шесть',
                correct: false,
            }
        ]
    },
    {
        question: 'Какая кислота вырабатывается в желудке?',
        answers: [
            {
                id: '27',
                value: 'Соляная',
                correct: true,
            },
            {
                id: '28',
                value: 'Уксусная',
                correct: false,
            },
            {
                id: '29',
                value: 'Муравьиная',
                correct: false,
            }
        ]
    },
    {
        question: 'Самая маленькая птица?',
        answers: [
            {
                id: '30',
                value: 'Воробей',
                correct: false,
            },
            {
                id: '31',
                value: 'Колибри',
                correct: true,
            },
            {
                id: '32',
                value: 'Журавль',
                correct: false,
            }
        ]
    },
    {
        question: 'Самая большая змея?',
        answers: [
            {
                id: '33',
                value: 'Королевская кобра',
                correct: false,
            },
            {
                id: '34',
                value: 'Анаконда',
                correct: true,
            },
            {
                id: '35',
                value: 'Гадюка',
                correct: false,
            }
        ]
    },
    {
        question: 'Сколько месяцев в году имееют 28 дней?',
        answers: [
            {
                id: '36',
                value: 'Двенадцать',
                correct: true,
            },
            {
                id: '37',
                value: 'Один',
                correct: false,
            },
            {
                id: '38',
                value: 'Десять',
                correct: false,
            }
        ]
    },
    {
        question: 'Самая маленькая денежная единица США?',
        answers: [
            {
                id: '39',
                value: 'Доллар',
                correct: false,
            },
            {
                id: '40',
                value: 'Евро',
                correct: false,
            },
            {
                id: '41',
                value: 'Цент',
                correct: true,
            }
        ]
    },
    {
        question: 'Какой металл содержится в эритроцитах людей?',
        answers: [
            {
                id: '42',
                value: 'Алюминий',
                correct: false,
            },
            {
                id: '43',
                value: 'Железо',
                correct: true,
            },
            {
                id: '44',
                value: 'Золото',
                correct: false,
            }
        ]
    },
    {
        question: 'Какое вещество светится в темноте?',
        answers: [
            {
                id: '45',
                value: 'Ртуть',
                correct: false,
            },
            {
                id: '46',
                value: 'Вода',
                correct: false,
            },
            {
                id: '47',
                value: 'Фосфор',
                correct: true,
            }
        ]
    },
    {
        question: 'Кто является самым верным другом человеку среди животных?',
        answers: [
            {
                id: '48',
                value: 'Кошка',
                correct: false,
            },
            {
                id: '49',
                value: 'Корова',
                correct: false,
            },
            {
                id: '50',
                value: 'Собака',
                correct: true,
            }
        ]
    },
    {
        question: 'Какой цвет крови у насекомых?',
        answers: [
            {
                id: '51',
                value: 'Красный',
                correct: false,
            },
            {
                id: '52',
                value: 'Голубой',
                correct: true,
            },
            {
                id: '53',
                value: 'Желтый',
                correct: false,
            }
        ]
    },
    {
        question: 'Решите уравнение : (2*220+440-896+12313)*0=',
        answers: [
            {
                id: '54',
                value: '0',
                correct: true,
            },
            {
                id: '55',
                value: '3287',
                correct: false,
            },
            {
                id: '56',
                value: '432',
                correct: false,
            }
        ]
    },
    {
        question: 'Чему равна дли экватора?',
        answers: [
            {
                id: '57',
                value: '39 680 КМ',
                correct: false,
            },
            {
                id: '58',
                value: '41 234 КМ',
                correct: false,
            },
            {
                id: '59',
                value: '40 075 КМ',
                correct: true,
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
    question.dataset.currentStep = index;

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

const renderResults = () => {

    let content = ''; 

    const getClassname = (answer, questionIndex) => {
        let classname = '';

        if (!answer.correct && answer.id === localResult[questionIndex]) {
            classname = 'answer--invalid'; 
        } else if (answer.correct) {
            classname = 'answer--valid';
        }

        return classname;
    };
    
    const getAnswers = (questionIndex) => DATA[questionIndex].answers
        .map((answer) => `<li class=${getClassname(answer, questionIndex)}>${answer.value}</li>`)
        .join('');
    


    DATA.forEach((question, index) => {
        content += `
        <div class="quiz-results-item">
                    <div class="quiz-results-item-question">${question.question}</div>
                    <ul class="quiz-results-item-answers">${getAnswers(index)}</ul>
                       </div>
        `;
    });

    results.innerHTML = content;

};

const renderIndicator = (currentStep) => {
     indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener('change', (event) => {
    if (event.target.classList.contains('answer-input')) {
        localResult[event.target.name] =  event.target.value;
        btnNext.disabled = false; 
        
    }


});

quiz.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-next')) {
        const nextQuestionIndex = Number(question.dataset.currentStep) + 1;
        
        if(DATA.length === nextQuestionIndex) {
            question.classList.add('question--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('results--visible');
            btnNext.classList.add('btn-next--hidden');
            btnRestart.classList.add('btn-restart--visible');
            renderResults();
        }
        else {
            renderQuestion(nextQuestionIndex);
        }

        btnNext.disabled = true;
    }
    if (event.target.classList.contains('btn-restart')) {
        localResult = {};
        results.innerHTML = '';

        
         question.classList.remove('question--hidden');
         indicator.classList.remove('indicator--hidden');
         results.classList.remove('results--visible');
         btnNext.classList.remove('btn-next--hidden');
         btnRestart.classList.remove('btn-restart--visible');
         renderQuestion(0);
    }


});

renderQuestion(0);
 
