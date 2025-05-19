import dotenv from 'dotenv';
dotenv.config();

import { askQuestion } from './rag/ask_question.js';
import readline from 'readline';

const args = process.argv.slice(2);
if (args.length > 0) {
  const question = args.join(' ');
  run(question);
} else {
  // No question in args, prompt user interactively
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Code: ', (question) => {
    run(question);
    rl.close();
  });
}

async function run(question: string) {
  const answer = await askQuestion(question);
  console.log('\\n🧠 Answer:\\n', answer);
}
