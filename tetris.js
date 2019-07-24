var overlay = document.querySelector('.overlay');
var modal = document.querySelector('.modal');
var speed = 0;

modal.addEventListener("click", function (e) {
  if (e.target.classList.contains('easy')){
    speed = 1000;
  } else if (e.target.classList.contains('normal')){
    speed = 500;
  } else if (e.target.classList.contains('hard')){
    speed = 200;
  }

  if(e.target.classList.contains('button')){
    modal.style.display = 'none';
    overlay.style.display = 'none';
    startGame();
  }
});


function startGame() {

  var tetris = document.createElement('div');
  tetris.classList.add('tetris');

  for (var i = 1; i < 181; i++) {
    var excel = document.createElement('div');
    excel.classList.add('excel');
    tetris.appendChild(excel);
  }

  var main = document.getElementsByClassName('main')[0];
  main.appendChild(tetris);

  var excel = document.getElementsByClassName('excel');

  var i = 0;

  for (var y = 18; y > 0; y--) {
    for (var x = 1; x < 11; x++) {
      excel[i].setAttribute('posX', x);
      excel[i].setAttribute('posY', y);
      i++;
    }
  }

  var x = 5, y = 15;

  var mainArr = [
    //палка
    [
      [0, 1],
      [0, 2],
      [0, 3],
      //поворот на 90 гр
      [
        [-1, 1],
        [0, 0],
        [1, -1],
        [2, -2]
      ],
      //поворот на 180 гр
      [
        [1, -1],
        [0, 0],
        [-1, 1],
        [-2, 2]
      ],
      //поворот на 270 гр
      [
        [-1, 1],
        [0, 0],
        [1, -1],
        [2, -2]
      ],
      //поворот на 360 гр
      [
        [1, -1],
        [0, 0],
        [-1, 1],
        [-2, 2]
      ]
    ],
    //квадрат
    [
      [1, 0],
      [0, 1],
      [1, 1],
      //поворот на 90 гр
      [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ],
      //поворот на 180 гр
      [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ],
      //поворот на 270 гр
      [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ],
      //поворот на 360 гр
      [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    ],
    //буква L
    [
      [1, 0],
      [0, 1],
      [0, 2],
      //поворот на 90 гр
      [
        [0, 0],
        [-1, 1],
        [1, 0],
        [2, -1]
      ],
      //поворот на 180 гр
      [
        [1, -1],
        [1, -1],
        [-1, 0],
        [-1, 0]
      ],
      //поворот на 270 гр
      [
        [-1, 0],
        [0, -1],
        [2, -2],
        [1, -1]
      ],
      //поворот на 360 гр
      [
        [0, -1],
        [0, -1],
        [-2, 0],
        [-2, 0]
      ]
    ],
    //зеркальная буква L
    [
      [1, 0],
      [1, 1],
      [1, 2],
      //поворот на 90 гр
      [
        [0, 0],
        [0, 0],
        [1, -1],
        [-1, -1]
      ],
      //поворот на 180 гр
      [
        [0, -1],
        [-1, 0],
        [-2, 1],
        [1, 0]
      ],
      //поворот на 270 гр
      [
        [2, 0],
        [0, 0],
        [1, -1],
        [1, -1]
      ],
      //поворот на 360 гр
      [
        [-2, 0],
        [1, -1],
        [0, 0],
        [-1, 1]
      ]
    ],
    //молния вправо
    [
      [1, 0],
      [-1, 1],
      [0, 1],
      //поворот на 90 гр
      [
        [0, -1],
        [-1, 0],
        [2, -1],
        [1, 0]
      ],
      //поворот на 180 гр
      [
        [0, 0],
        [1, -1],
        [-2, 0],
        [-1, -1]
      ],
      //поворот на 270 гр
      [
        [0, -1],
        [-1, 0],
        [2, -1],
        [1, 0]
      ],
      //поворот на 360 гр
      [
        [0, 0],
        [1, -1],
        [-2, 0],
        [-1, -1]
      ]
    ],
    //молния влево
    [
      [1, 0],
      [1, 1],
      [2, 1],
      //поворот на 90 гр
      [
        [2, -1],
        [0, 0],
        [1, -1],
        [-1, 0]
      ],
      //поворот на 180 гр
      [
        [-2, 0],
        [0, -1],
        [-1, 0],
        [1, -1]
      ],
      //поворот на 270 гр
      [
        [2, -1],
        [0, 0],
        [1, -1],
        [-1, 0]
      ],
      //поворот на 360 гр
      [
        [-2, 0],
        [0, -1],
        [-1, 0],
        [1, -1]
      ]
    ],
    //деталь лего
    [
      [1, 0],
      [2, 0],
      [1, 1],
      //поворот на 90 гр
      [
        [1, -1],
        [0, 0],
        [0, 0],
        [0, 0]
      ],
      //поворот на 180 гр
      [
        [0, 0],
        [-1, 0],
        [-1, 0],
        [1, -1]
      ],
      //поворот на 270 гр
      [
        [1, -1],
        [1, -1],
        [1, -1],
        [0, 0]
      ],
      //поворот на 360 гр
      [
        [-2, 0],
        [0, -1],
        [0, -1],
        [-1, -1]
      ]
    ],
  ];

  var currentFigure = 0;
  var figureBody = 0;
  var rotate = 1;

  function create() {
    function getRandom() {
      return Math.round(Math.random() * (mainArr.length - 1));
    }

    rotate = 1;
    currentFigure = getRandom();

    figureBody = [
      document.querySelector(`[posX = "${x}"][posY = "${y}"]`),
      document.querySelector(`[posX = "${x + mainArr[currentFigure][0][0]}"][posY = "${y + mainArr[currentFigure][0][1]}"]`),
      document.querySelector(`[posX = "${x + mainArr[currentFigure][1][0]}"][posY = "${y + mainArr[currentFigure][1][1]}"]`),
      document.querySelector(`[posX = "${x + mainArr[currentFigure][2][0]}"][posY = "${y + mainArr[currentFigure][2][1]}"]`)
    ]

    for (var i = 0; i < figureBody.length; i++) {
      figureBody[i].classList.add('figure');
    }
  }

  create();

  var score = 0;
  var input = document.getElementsByTagName('input')[0];
  input.value = `Ваши очки: ${score}`;

  function move() {
    var moveFlag = true;
    var coordinates = [
      [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')],
      [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')],
      [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')],
      [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')]
    ];
    for (var i = 0; i < coordinates.length; i++) {
      if (coordinates[i][1] == 1 || document.querySelector(`[posX = "${coordinates[i][0]}"][posY = "${coordinates[i][1] - 1}"]`).classList.contains('set')) {
        moveFlag = false;
        break;
      }
    }

    if (moveFlag) {
      for (var i = 0; i < figureBody.length; i++) {
        figureBody[i].classList.remove('figure');
      }

      figureBody = [
        document.querySelector(`[posX = "${coordinates[0][0]}"][posY = "${coordinates[0][1] - 1}"]`),
        document.querySelector(`[posX = "${coordinates[1][0]}"][posY = "${coordinates[1][1] - 1}"]`),
        document.querySelector(`[posX = "${coordinates[2][0]}"][posY = "${coordinates[2][1] - 1}"]`),
        document.querySelector(`[posX = "${coordinates[3][0]}"][posY = "${coordinates[3][1] - 1}"]`)
      ];
      for (var i = 0; i < figureBody.length; i++) {
        figureBody[i].classList.add('figure');
      }
    } else {
      for (var i = 0; i < figureBody.length; i++) {
        figureBody[i].classList.remove('figure');
        figureBody[i].classList.add('set');
      }
      for (var i = 1; i < 15; i++) {
        var count = 0;
        for (var k = 1; k < 11; k++) {
          if (document.querySelector(`[posX = "${k}"][posY = "${i}"]`).classList.contains('set')) {
            count++;
            if (count == 10) {
              score += 10;
              input.value = `Ваши очки: ${score}`;
              for (var m = 1; m < 11; m++) {
                document.querySelector(`[posX = "${m}"][posY = "${i}"]`).classList.remove('set')
              }
              var set = document.querySelectorAll('.set');

              var newSet = [];
              for (var s = 0; s < set.length; s++) {
                var setCoordinates = [set[s].getAttribute('posX'), set[s].getAttribute('posY')];

                if (setCoordinates[1] > i) {
                  set[s].classList.remove('set');
                  newSet.push(document.querySelector(`[posX = "${setCoordinates[0]}"][posY = "${setCoordinates[1] - 1}"]`));
                }
              }
              for (var a = 0; a < newSet.length; a++) {
                newSet[a].classList.add('set');
              }
              i--;
            }
          }
        }
      }

      for (var n = 1; n < 11; n++) {
        if (document.querySelector(`[posX = "${n}"][posY = "${15}"]`).classList.contains('set')) {
          clearInterval(interval);
          alert(`Игра окончена. Ваши очки: ${score}`);
          break;
        }
      }

      create();
    }
  }

  var interval = setInterval(() => {
    move();
  }, speed);

  var flag = true;

  window.addEventListener('keydown', function (e) {
    var coordinates1 = [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')];
    var coordinates2 = [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')];
    var coordinates3 = [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')];
    var coordinates4 = [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')]

    function getNewState(a) {

      flag = true;

      var figureNew = [
        document.querySelector(`[posX = "${+coordinates1[0] + a}"][posY = "${coordinates1[1]}"]`),
        document.querySelector(`[posX = "${+coordinates2[0] + a}"][posY = "${coordinates2[1]}"]`),
        document.querySelector(`[posX = "${+coordinates3[0] + a}"][posY = "${coordinates3[1]}"]`),
        document.querySelector(`[posX = "${+coordinates4[0] + a}"][posY = "${coordinates4[1]}"]`)
      ];

      for (var i = 0; i < figureNew.length; i++) {
        if (!figureNew[i] || figureNew[i].classList.contains('set')) {
          flag = false;
        }
      }
      if (flag) {
        for (var i = 0; i < figureBody.length; i++) {
          figureBody[i].classList.remove('figure');
        }

        figureBody = figureNew;

        for (var i = 0; i < figureBody.length; i++) {
          figureBody[i].classList.add('figure');
        }
      }
    }

    if (e.keyCode == 37) {
      getNewState(-1)
    } else if (e.keyCode == 39) {
      getNewState(1)
    } else if (e.keyCode == 40) {
      move();
    } else if (e.keyCode == 38) {
      flag = true;

      var figureNew = [
        document.querySelector(`[posX = "${+coordinates1[0] + mainArr[currentFigure][rotate + 2][0][0]}"][posY = "${+coordinates1[1] + mainArr[currentFigure][rotate + 2][0][1]}"]`),
        document.querySelector(`[posX = "${+coordinates2[0] + mainArr[currentFigure][rotate + 2][1][0]}"][posY = "${+coordinates2[1] + mainArr[currentFigure][rotate + 2][1][1]}"]`),
        document.querySelector(`[posX = "${+coordinates3[0] + mainArr[currentFigure][rotate + 2][2][0]}"][posY = "${+coordinates3[1] + mainArr[currentFigure][rotate + 2][2][1]}"]`),
        document.querySelector(`[posX = "${+coordinates4[0] + mainArr[currentFigure][rotate + 2][3][0]}"][posY = "${+coordinates4[1] + mainArr[currentFigure][rotate + 2][3][1]}"]`)
      ];

      for (var i = 0; i < figureNew.length; i++) {
        if (!figureNew[i] || figureNew[i].classList.contains('set')) {
          flag = false;
        }
      }
      if (flag) {
        for (var i = 0; i < figureBody.length; i++) {
          figureBody[i].classList.remove('figure');
        }

        figureBody = figureNew;

        for (var i = 0; i < figureBody.length; i++) {
          figureBody[i].classList.add('figure');
        }

        if (rotate < 4) {
          rotate++;
        } else {
          rotate = 1;
        }
      }
    }
  })
}
