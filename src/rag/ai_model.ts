import { Ollama } from 'ollama-node';

const ollama = new Ollama();
await ollama.setModel("deepseek-coder:1.3b");

export async function runLLM(prompt: string): Promise<string> {
  const res = await ollama.generate(prompt);
  return res.output;
}