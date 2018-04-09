import {assets} from 'chai';
import {
  GAME_ROUNDS_NUMBER,
  MAX_LIVE,
  POINTS
} from './../consts';
import countPoints from './../points-counter';

const fastAndCorrectAnswers = new Array(10);
fastAndCorrectAnswers.fill({
  answer: true,
  time: 5
});

const averageAndCorrectAnswers = new Array(10);
fastAndCorrectAnswers.fill({
  answer: true,
  time: 15
});

const slowAndCorrectAnswers = new Array(10);
fastAndCorrectAnswers.fill({
  answer: true,
  time: 25
});

let expectedValue;
let remainingLives;

describe(`Function that counts result score at the end of the game`, () => {
  it(`should only accept answers as array`, () => {
    const answers = {};
    const cb = () => countPoints();
    assert.throws(cb, `answers should be an array`);
  });

  // it(`should return -1 when player answered on less than 10 questions`, () => {
  //
  // };
  //
  // it(`should return -1 when player answered on less than 10 questions`, () => {
  //   expectedValue = -1;
  //   remainingLives = 10;
  //   assert.equal(expectedValue, countPoints(fastAndCorrectAnswers, remainingLives));
  // });
};
