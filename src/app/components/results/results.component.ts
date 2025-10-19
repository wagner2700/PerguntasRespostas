import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @Input() score: number = 0;
  @Input() totalQuestions: number = 0;
  @Output() restart = new EventEmitter<void>();

  get percentage(): number {
    return Math.round((this.score / this.totalQuestions) * 100);
  }

  get performanceMessage(): string {
    if (this.percentage >= 90) return 'Excelente! 🎉';
    if (this.percentage >= 70) return 'Muito bom! 👍';
    if (this.percentage >= 50) return 'Bom trabalho! 💪';
    return 'Continue praticando! 📚';
  }

  get performanceColor(): string {
    if (this.percentage >= 90) return '#2ecc71';
    if (this.percentage >= 70) return '#3498db';
    if (this.percentage >= 50) return '#f39c12';
    return '#e74c3c';
  }

  restartQuiz(): void {
    this.restart.emit();
  }
}