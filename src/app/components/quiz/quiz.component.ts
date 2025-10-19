import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Question } from '../../models/question.model';
import { QuizService } from '../../services/quiz.service';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ResultsComponent],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex = 0;
  selectedAnswer: number | null = null;
  showResult = false;
  score = 0;
  totalQuestions = 0;
  quizCompleted = false;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.quizService.getQuestions().subscribe({
      next: (questions: Question[]) => {
        this.questions = questions;
        this.totalQuestions = questions.length;
      },
      error: (error) => {
        console.error('Erro ao carregar perguntas:', error);
      }
    });
  }

  selectAnswer(optionIndex: number): void {
    this.selectedAnswer = optionIndex;
  }

  nextQuestion(): void {
    if (this.selectedAnswer !== null) {
      // Verifica se a resposta está correta
      if (this.selectedAnswer === this.questions[this.currentQuestionIndex].correctAnswer) {
        this.score++;
      }

      this.selectedAnswer = null;
      this.currentQuestionIndex++;

      // Se chegou ao final do quiz
      if (this.currentQuestionIndex >= this.questions.length) {
        this.showResult = true;
        this.quizCompleted = true;
      }
    }
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.selectedAnswer = null;
    this.showResult = false;
    this.score = 0;
    this.quizCompleted = false;
  }

  // Adicione este método à classe QuizComponent
getOptionLetter(index: number): string {
  return String.fromCharCode(65 + index); // 65 = 'A' em ASCII
}
}