import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  inputText = '';
  outputText = '';
  loading = false;

  http = inject(HttpClient);

  generateOutput() {
     this.loading = true;
    if (!this.inputText.trim()) return;

    this.http.post<{ answer: string }>('http://localhost:3000/api/ask', {
      question: this.inputText
    }).subscribe({
      next: (res) => {
        this.outputText = res.answer;
         this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.outputText = 'An error occurred while processing your request.';
      }
    });
  }
}
