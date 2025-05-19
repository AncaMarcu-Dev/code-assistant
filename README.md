# 🧠 Local Code Assistant (TypeScript + Ollama + ChromaDB)

A personal AI assistant that answers questions about your code using local LLMs, local embeddings, and real vector search — no paid APIs required.

---

## ⚙️ Features

- ✅ Written in TypeScript
- 🧠 Uses **Ollama** + `nomic-embed-text` for local embeddings
- 🔍 Uses **ChromaDB** for vector search
- 🤖 Designed to run fully offline
- 🧪 Educational and modular for learning AI dev skills

---

## 🧩 Requirements

- [Node.js](https://nodejs.org/) (v18+)
- [Ollama](https://ollama.com/) (running locally)
- [Python](https://www.python.org/) + `pip` (for ChromaDB)
- Git / Terminal

---

## 🛠️ Setup Instructions

### 1. Clone the project

```bash
git clone https://github.com/your-name/code-assistant.git
cd code-assistant
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Start Ollama and pull embedding model

```bash
ollama serve
ollama pull nomic-embed-text
```

---

### 4. Set up and start ChromaDB

```bash
pip install chromadb
chromadb run
```

This starts a local vector DB at `http://localhost:8000`.

---

### 5. Embed code snippets

Edit your `scripts/embed.ts` to include your own code chunks, then run:

```bash
ts-node scripts/embed.ts
```

This will:
- Embed code using `nomic-embed-text`
- Upload to ChromaDB for later search

---

### 6. Ask a question

Ask a question about your code:

```bash
npm run start -- "What does handleLogin do?"
```

Or run interactively:

```bash
npm run start
# Then type your question
```

---

## 📁 Project Structure

```
.
├── src/
│   ├── rag/
│   │   ├── getRelevantChunks.ts
│   │   ├── llm.ts
│   │   └── qa.ts
│   └── index.ts
├── scripts/
│   └── embed.ts
├── .env (optional)
├── tsconfig.json
└── package.json
```

---

## 🧠 How It Works

1. Your code is split into chunks (manually or automated)
2. Each chunk is embedded and stored in ChromaDB
3. A question is embedded using the same model
4. ChromaDB returns the most relevant code snippets
5. Those snippets + the question are sent to an LLM for a final answer

---

## 🤔 FAQ

**Q: Does this use OpenAI or any paid service?**  
**A:** Nope! Everything runs locally using free/open-source tools.

**Q: Can I use a different embedding model or LLM?**  
**A:** Yes! Ollama supports multiple models like `mistral`, `llama3`, `codellama`, etc.

**Q: How do I add more code?**  
**A:** Add more chunks to `scripts/embed.ts` or automate chunking later with a tool like LangChain.

---

## 📌 Next Steps

- ✅ Add automatic code chunking
- ✅ Use local LLMs like `codellama` for answering
- 🔜 Add context window management
- 🔜 Build a UI with Streamlit or a CLI wizard

---

## 🧑‍💻 License

MIT — use freely and hack away!


# 🧠 Code Insight Assistant (Local, Offline, TypeScript + Python)

A personal AI assistant that answers questions about your code using local LLMs, local embeddings, and real vector search. **Fully offline. No paid APIs.**

---

## ⚙️ Features

* ✅ Written in **TypeScript** (main logic)
* 🧠 Uses **Ollama** for local LLM (e.g., LLaMA3)
* 📎 Uses **Python** server (`nomic-embed-text`) for local code embeddings
* 🔍 In-memory vector search (cosine similarity)
* ⚡ Single `npm run start` command to launch everything
* 🧩 Easily extendable for CLI or UI-based interactions

---

## 📁 Project Structure

```
project-root/
│
├── python/
│   └── embed-server.py       # Flask + nomic embedding API
│
├── src/
│   ├── index.ts              # App entrypoint
│   ├── explain.ts            # Prompts LLM to explain code
│   ├── embed.ts              # Calls Python embed server
│   ├── search.ts             # In-memory vector search
│   └── utils/
│       └── pythonServer.ts   # Launches the Python server
│
├── package.json
├── tsconfig.json
├── .env
└── README.md
```

---

## 🚀 Getting Started

### 1. 🧰 Install dependencies

#### TypeScript side

```bash
npm install
```

#### Python side

```bash
cd python
pip install -r requirements.txt
```

Contents of `python/requirements.txt`:

```txt
flask
nomic
```

---

### 2. 🧠 Start Ollama

Ensure Ollama is installed and running locally:

```bash
ollama run llama3
```

---

### 3. ▶️ Run the app

```bash
npm run start
```

This will:

* Automatically launch the Python embedding server
* Wait for it to initialize
* Accept your code snippet
* Embed it, store it, and query the LLM for explanation & suggestions

---

## 🧪 Example Usage

Paste a code snippet when prompted:

```ts
function sum(a: number, b: number): number {
  return a + b;
}
```

And the assistant might respond:

> This is a simple TypeScript function that returns the sum of two numbers. Consider adding input validation.

---

## 🧱 How It Works

### 🔠 Embedding

* `embed-server.py` runs a Flask server and uses `nomic-embed-text`
* TypeScript app sends code to `http://localhost:8001/embed`

### 🔍 Vector Search

* Simple in-memory cosine similarity
* Embeds are compared against past code chunks

### 🧠 LLM

* Ollama (e.g., LLaMA3) receives prompts like:

```text
Explain this code:
<code here>

Suggest improvements.
```

---

## 🤝 License & Credits

* Built by you, powered by open-source models.
* Uses Ollama, nomic, Flask, TypeScript.

---

## ❓ Want More?

* Add a web UI (React/Next.js)
* Persist embeddings to disk or database
* Use local file watcher to auto-index files

---

Enjoy your local, private, no-API-code assistant! 🚀

