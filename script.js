const questions = [
    {
      question: "What is the form tag?",
      choices: ["forme></forme>","<form></form>", "<table></table>", "<h1></h1>"],
      correct: 1
    },
    {
      question: "Which HTML element is used for the largest heading?",
      choices: [ "<h3>", "<heading>", "<h1>", "<h6>"],
      correct: 2
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      choices: ["<br>", "<break>", "<linebreak>", "<lb>"],
      correct: 0
    },
    {
      question:"Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      choices: ["title", "src", "href", "alt"],
      correct: 3
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionText = document.getElementById('question-text');
  const buttons = document.querySelectorAll('.answer-button');
  const feedback = document.getElementById('feedback');
  const scoreText = document.getElementById('score');
  const nextButton = document.getElementById('next-question');
  
  function loadQuestion() {
    questionText.textContent = questions[currentQuestion].question;
    buttons.forEach((button, index) => {
      button.textContent = questions[currentQuestion].choices[index];
      button.disabled = false;
    });
    feedback.textContent = '';
  }
  
  function checkAnswer(selected) {
    const correctAnswer = questions[currentQuestion].correct;
    if (selected === correctAnswer) {
      feedback.textContent = "Correct!";
      score++;
      scoreText.textContent = `Score: ${score}`;
    } else {
      feedback.textContent = "Wrong!";
    }
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      endGame();
    }
  }
  
  function endGame() {
    questionText.textContent = "Quiz Completed!";
    buttons.forEach(button => button.style.display = 'none');
    nextButton.textContent = "Play Again";
    nextButton.addEventListener('click', () => location.reload());
  }
  
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      checkAnswer(index);
      buttons.forEach(btn => btn.disabled = true);
    });
  });
  
  nextButton.addEventListener('click', nextQuestion);
  
  // Keyboard interaction
  document.addEventListener('keydown', (e) => {
    const key = parseInt(e.key, 10) - 1;
    if (key >= 0 && key <= 3 && !buttons[key].disabled) {
      buttons[key].click();
    }
  });
  
  loadQuestion();
  