
# 🧠 Local Code Assistant (TypeScript + Ollama + Angular19+) 

A personal AI assistant that answers questions about your code using local LLMs — no paid APIs required.

---

## ⚙️ Features

- ✅ Written in TypeScript
- 🧠 Uses **Ollama**
- 🔍 Uses **Angular** for frontend
- 🤖 Designed to run fully offline
- 🧪 Educational and modular for learning AI dev skills

---

## 🧩 Requirements

- [Node.js](https://nodejs.org/) (v18+)
- [Ollama](https://ollama.com/) (running locally)
- [Angular CLI](https://github.com/angular/angular-cli)
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

### 3. Install Ollama and pull a model

- [Ollama](https://ollama.com/)

```bash
ollama run deepseek-coder:1.3b (you can chose any model you want)
```

---

### 5. RUN all with one command

```bash
npm run start
```


### 6. Ask a question

Ask a question about your code inside the UI 


## 📁 Project Structure

```
.
├── frontend/                   # Angular 19 app
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.component.ts
│   │   │   └── code.service.ts
│   └── angular.json
├── src/                        # Node.js + TypeScript backend
│   ├── llm/
│   │   ├── ai_model.ts
│   │   └── ask_questions.ts
│   └── index.ts
├── tsconfig.json
└── package.json

---

## 🧑‍💻 License

MIT — use freely and hack away!
