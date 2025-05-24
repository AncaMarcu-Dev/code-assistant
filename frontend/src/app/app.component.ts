import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styles: [`
    * {
      box-sizing: border-box;
    }

    body, html {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Roboto, sans-serif;
      background: #f4f4f8;
    }

    .container {
      max-width: 720px;
      margin: 3rem auto;
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      padding: 2rem;
    }

    h2 {
      font-weight: 600;
      margin-bottom: 1rem;
    }

    textarea {
      width: 100%;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-family: monospace;
      resize: vertical;
      min-height: 160px;
      background: #fafafa;
    }

    button {
      margin-top: 1rem;
      padding: 0.5rem 1.25rem;
      font-size: 1rem;
      border: none;
      border-radius: 6px;
      background: #007bff;
      color: white;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    button:hover {
      background: #0056b3;
    }

    pre {
      background: #f1f1f1;
      padding: 1rem;
      margin-top: 1.5rem;
      border-radius: 6px;
      white-space: pre-wrap;
      font-family: monospace;
    }
  `],
  template: `
    <div class="container">
      <h2>Multiline Code Processor</h2>
      <textarea
        [(ngModel)]="inputText"
        placeholder="Paste or type your code here..."></textarea>

      <button (click)="generateOutput()">Analyze</button>

      <h3 *ngIf="outputText">Output:</h3>
      <pre *ngIf="outputText">{{ outputText }}</pre>
    </div>
  `
})
export class AppComponent {
  inputText = '';
  outputText = '';

  http = inject(HttpClient);

  generateOutput() {
    if (!this.inputText.trim()) return;

    this.http.post<{ answer: string }>('http://localhost:3000/api/ask', {
      question: this.inputText
    }).subscribe({
      next: (res) => {
        this.outputText = res.answer;
      },
      error: (err) => {
        console.error(err);
        this.outputText = 'An error occurred while processing your request.';
      }
    });
  }
}
/*
export class AppComponent {
  inputText = '';
  outputText = '';

  generateOutput() {
    // Example transformation: reverse each line
    this.outputText = this.inputText
      .split('\n')
      .map(line => line.split('').reverse().join(''))
      .join('\n');
  }
}*/
