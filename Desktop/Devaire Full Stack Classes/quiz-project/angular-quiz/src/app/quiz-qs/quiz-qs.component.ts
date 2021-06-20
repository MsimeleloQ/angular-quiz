import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-qs',
  templateUrl: './quiz-qs.component.html',
  styleUrls: ['./quiz-qs.component.css']
})
export class QuizQsComponent implements OnInit {
  quizzes: Quiz[]=[];

  currentQuiz = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers =0;

  result = false;

  constructor(private _quizService: QuizService) { }

  ngOnInit(): void {
    this.quizzes = this._quizService.getQuizzes();
  }

  onAnswer(option: boolean) {
    this.answerSelected = true;
    setTimeout(() => {
      this.currentQuiz++;
      this.answerSelected = false;
    }, 3000);

    if(option){
      this.correctAnswers++;
    }else{
      this.incorrectAnswers++;
    }
    
  }
   viewResults(){
     this.result = true;
   }

}
