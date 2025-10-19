import { Component } from '@angular/core';
import { QuizComponent } from './components/quiz/quiz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuizComponent],
  template: `
    <div class="app-container">
      <header class="app-header">
        <h1>Quiz Interativo</h1>
        <p>Teste seus conhecimentos</p>
      </header>
      <main>
        <app-quiz></app-quiz>
      </main>
      <footer class="app-footer">
        <p>&copy; 2024 Quiz App - Desenvolvido com Angular</p>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    .app-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px 0;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .app-header h1 {
      font-weight: 300;
      font-size: 2.5rem;
      margin: 0 0 10px 0;
    }
    
    .app-header p {
      margin: 0;
      opacity: 0.9;
      font-size: 1.1rem;
    }
    
    main {
      flex: 1;
      padding: 40px 20px;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }
    
    .app-footer {
      background-color: #2c3e50;
      color: white;
      text-align: center;
      padding: 20px 0;
      margin-top: auto;
    }
    
    .app-footer p {
      margin: 0;
      opacity: 0.8;
      font-size: 0.9rem;
    }
  `]
})
export class AppComponent {}