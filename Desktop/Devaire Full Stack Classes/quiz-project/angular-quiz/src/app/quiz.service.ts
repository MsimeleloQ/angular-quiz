import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'What is the most used languages for the layout of creating a website?',
      answer: [
        { option: 'HTML', correct: true },
        { option: 'CSS', correct: false },
        { option: 'Javascript', correct: false },
        { option: 'C#', correct: false }
      ]
    },
    {
      question: 'What is the most commonly used language for Machine Learning?',
      answer: [
        { option: 'C#', correct: false },
        { option: 'OOP', correct: false },
        { option: 'Python', correct: true },
        { option: 'HTML', correct: false }
      ]
    },
    {
      question: 'which web application was created with angular?',
      answer: [
        { option: 'Forbes', correct: true },
        { option: 'Facebook', correct: false },
        { option: 'Twitter', correct: false },
        { option: 'Airbnb', correct: false }
      ]
    },
    {
      question: 'Which company created Javascript?',
      answer: [
        { option: 'Google', correct: false },
        { option: 'Microsoft', correct: false },
        { option: 'Amazon', correct: false },
        { option: 'Netscape', correct: true }
      ]
    },
    {
      question: 'When was the first website created?',
      answer: [
        { option: 'July 2001', correct: false },
        { option: 'August 1991', correct: true },
        { option: 'December 1880', correct: false },
        { option: 'June 2011', correct: false }
      ]
    },
    {
      question: 'Who create HTML?',
      answer: [
        { option: 'Tim Berners-Lee', correct: true },
        { option: 'Bhuda Msi', correct: false },
        { option: 'Freedom Faku', correct: false },
        { option: 'Elon Musk', correct: false }
      ]
    },
    {
      question: 'Who create angular?',
      answer: [
        { option: 'Bill Gates', correct: false },
        { option: 'Steve Jobs', correct: false },
        { option: 'Misko Hevery', correct: true },
        { option: 'Mark zekurburg', correct: false }
      ]
    },
    {
      question: 'What is angular used for?',
      answer: [
        { option: 'Angular helps build an interactive single page application', correct: true },
        { option: 'It is used to create Software systems', correct: false },
        { option: 'Used for Machine Learning', correct: false },
        { option: 'To make Tea', correct: false }
      ]
    },
  ]

  constructor() { }

  getQuizzes(){
    return this.quizzes;
  }
}
