export interface IAnswer {
  answer: string;
  correct: boolean;
}

export interface IRound {
  imgPath: string;
  answers: IAnswer[];
}

export const answers: IRound[] = [
  {
    imgPath: 'images/beer.jpg',
    answers: [
      {
        answer: 'book',
        correct: false,
      },
      {
        answer: 'beer',
        correct: true,
      },
      {
        answer: 'phone',
        correct: false,
      },
      {
        answer: 'hat',
        correct: false,
      },
    ],
  },
  {
    imgPath: 'images/bike.jpg',
    answers: [
      {
        answer: 'headphones',
        correct: false,
      },
      {
        answer: 'doll',
        correct: false,
      },
      {
        answer: 'bike',
        correct: true,
      },
      {
        answer: 'duck',
        correct: false,
      },
    ],
  },
  {
    imgPath: 'images/broccoli.jpg',
    answers: [
      {
        answer: 'broccoli',
        correct: true,
      },
      {
        answer: 'flowers',
        correct: false,
      },
      {
        answer: 'cake',
        correct: false,
      },
      {
        answer: 'violin',
        correct: false,
      },
    ],
  },
  {
    imgPath: 'images/camera.jpg',
    answers: [
      {
        answer: 'mouse',
        correct: false,
      },
      {
        answer: 'rock',
        correct: false,
      },
      {
        answer: 'magazine',
        correct: false,
      },
      {
        answer: 'camera',
        correct: true,
      },
    ],
  },
  {
    imgPath: 'images/candles.jpg',
    answers: [
      {
        answer: 'candles',
        correct: true,
      },
      {
        answer: 'trumpet',
        correct: false,
      },
      {
        answer: 'ice cream',
        correct: false,
      },
      {
        answer: 'backpack',
        correct: false,
      },
    ],
  },
  {
    imgPath: 'images/car.jpg',
    answers: [
      {
        answer: 'sushi',
        correct: false,
      },
      {
        answer: 'chalice',
        correct: false,
      },
      {
        answer: 'car',
        correct: true,
      },
      {
        answer: 'book',
        correct: false,
      },
    ],
  },
  {
    imgPath: 'images/cat.jpg',
    answers: [
      {
        answer: 'cat',
        correct: true,
      },
      {
        answer: 'saxophone',
        correct: false,
      },
      {
        answer: 'dog',
        correct: false,
      },
      {
        answer: 'bottle',
        correct: false,
      },
    ],
  },
  {
    imgPath: 'images/chair.jpg',
    answers: [
      {
        answer: 'boat',
        correct: false,
      },
      {
        answer: 'gorilla',
        correct: false,
      },
      {
        answer: 'book',
        correct: false,
      },
      {
        answer: 'chair',
        correct: true,
      },
    ],
  },
  {
    imgPath: 'images/cookies.jpg',
    answers: [
      {
        answer: 'cookies',
        correct: true,
      },
      {
        answer: 'tank',
        correct: false,
      },
      {
        answer: 'phone',
        correct: false,
      },
      {
        answer: 'deodorant',
        correct: false,
      },
    ],
  },
  {
    imgPath: 'images/dog.jpg',
    answers: [
      {
        answer: 'book',
        correct: false,
      },
      {
        answer: 'cat',
        correct: false,
      },
      {
        answer: 'dog',
        correct: true,
      },
      {
        answer: 'guitar',
        correct: false,
      },
    ],
  },
  {
    imgPath: 'images/flowers.jpg',
    answers: [
      {
        answer: 'chalice',
        correct: false,
      },
      {
        answer: 'magazine',
        correct: false,
      },
      {
        answer: 'dragon',
        correct: false,
      },
      {
        answer: 'flowers',
        correct: true,
      },
    ],
  },
  {
    imgPath: 'images/forest.jpg',
    answers: [
      {
        answer: 'forest',
        correct: true,
      },
      {
        answer: 'elephant',
        correct: false,
      },
      {
        answer: 'camera',
        correct: false,
      },
      {
        answer: 'fork',
        correct: false,
      },
    ],
  },
  {
    imgPath: 'images/giraffe.jpg',
    answers: [
      {
        answer: 'piano',
        correct: false,
      },
      {
        answer: 'monitor',
        correct: false,
      },
      {
        answer: 'giraffe',
        correct: true,
      },
      {
        answer: 'table',
        correct: false,
      },
    ],
  },
  {
    imgPath: 'images/guitar.jpg',
    answers: [
      {
        answer: 'mouse',
        correct: false,
      },
      {
        answer: 'guitar',
        correct: true,
      },
      {
        answer: 'chair',
        correct: false,
      },
      {
        answer: 'chair',
        correct: false,
      },
    ],
  },
  {
    imgPath: 'images/hamburger.jpg',
    answers: [
      {
        answer: 'sushi',
        correct: false,
      },
      {
        answer: 'notebook',
        correct: false,
      },
      {
        answer: 'hamburger',
        correct: true,
      },
      {
        answer: 'car',
        correct: false,
      },
    ],
  },
  {
    imgPath: 'images/hotdogs.jpg',
    answers: [
      {
        answer: 'tomatoes',
        correct: false,
      },
      {
        answer: 'hotdogs',
        correct: true,
      },
      {
        answer: 'hippo',
        correct: false,
      },
      {
        answer: 'bike',
        correct: false,
      },
    ],
  },
  {
    imgPath: 'images/laptop.jpg',
    answers: [
      {
        answer: 'laptop',
        correct: true,
      },
      {
        answer: 'wine',
        correct: false,
      },
      {
        answer: 'saxophone',
        correct: false,
      },
      {
        answer: 't-shirt',
        correct: false,
      },
    ],
  },
  {
    imgPath: 'images/motorcycle.jpg',
    answers: [
      {
        answer: 'potatoes',
        correct: false,
      },
      {
        answer: 'notebook',
        correct: false,
      },
      {
        answer: 'beaver',
        correct: false,
      },
      {
        answer: 'motorcycle',
        correct: true,
      },
    ],
  },
  {
    imgPath: 'images/piano.jpg',
    answers: [
      {
        answer: 'shoe',
        correct: false,
      },
      {
        answer: 'piano',
        correct: true,
      },
      {
        answer: 'hamster',
        correct: false,
      },
      {
        answer: 'pyramid',
        correct: false,
      },
    ],
  },
  {
    imgPath: 'images/pizza.jpg',
    answers: [
      {
        answer: 'pizza',
        correct: true,
      },
      {
        answer: 'fish',
        correct: false,
      },
      {
        answer: 'cake',
        correct: false,
      },
      {
        answer: 'hat',
        correct: false,
      },
    ],
  },
  {
    imgPath: 'images/shoe.jpg',
    answers: [
      {
        answer: 'camera',
        correct: false,
      },
      {
        answer: 'candle',
        correct: false,
      },
      {
        answer: 'shoe',
        correct: true,
      },
      {
        answer: 'dog',
        correct: false,
      },
    ],
  },
  {
    imgPath: 'images/statue.jpg',
    answers: [
      {
        answer: 'car',
        correct: false,
      },
      {
        answer: 'statue',
        correct: true,
      },
      {
        answer: 'violin',
        correct: false,
      },
      {
        answer: 'lake',
        correct: false,
      },
    ],
  },
  {
    imgPath: 'images/tomatoes.jpg',
    answers: [
      {
        answer: 'peppers',
        correct: false,
      },
      {
        answer: 'gloves',
        correct: false,
      },
      {
        answer: 'lion',
        correct: false,
      },
      {
        answer: 'tomatoes',
        correct: true,
      },
    ],
  },
  {
    imgPath: 'images/wine.jpg',
    answers: [
      {
        answer: 'axe',
        correct: false,
      },
      {
        answer: 'moon',
        correct: false,
      },
      {
        answer: 'backpack',
        correct: false,
      },
      {
        answer: 'wine',
        correct: true,
      },
    ],
  },
];
