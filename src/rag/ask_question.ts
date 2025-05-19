import { runLLM } from './ai_model.js';

export async function askQuestion(code: string): Promise<string> {
  const prompt = `Explain this code snippet in simple terms: ${code} Suggest any improvements or best practices.`;
  const answer = await runLLM(prompt);
  return answer;
}
