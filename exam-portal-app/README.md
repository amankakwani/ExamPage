# Exam Portal App

A React-based exam portal application with three main screens: Start, Exam, and Review.

## Features

- **Start Screen**: Simple interface to begin the assessment
- **Exam Screen**: Multiple choice questions with navigation
- **Review Screen**: Score display and answer review with color-coded feedback

## Project Structure

```
exam-portal-app/
├── src/
│   ├── pages/
│   │   ├── StartPage.jsx
│   │   ├── ExamPage.jsx
│   │   └── ReviewPage.jsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Container.jsx
│   │   ├── exam/
│   │   │   ├── QuestionCard.jsx
│   │   │   ├── OptionItem.jsx
│   │   │   ├── NavigationBar.jsx
│   │   │   └── LastQuestionAlert.jsx
│   │   └── review/
│   │       ├── ScoreBadge.jsx
│   │       ├── QuestionNavigator.jsx
│   │       └── ReviewPanel.jsx
│   ├── data/
│   │   └── questions.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Installation & Setup

1. Navigate to the project directory:
```bash
cd exam-portal-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Click "Start Assessment" to begin the exam
2. Answer questions by selecting options
3. Use "Prev" and "Next" buttons to navigate between questions
4. Click "End" on the last question to finish the exam
5. Review your score and answers on the review screen
6. Click on numbered buttons to jump to specific questions in review mode

## Customization

### Adding Questions

Edit `src/data/questions.js` to add or modify questions:

```javascript
{
  id: 6,
  question: "Your question here?",
  options: [
    { id: "A", text: "Option A" },
    { id: "B", text: "Option B" },
    { id: "C", text: "Option C" },
    { id: "D", text: "Option D" }
  ],
  correctAnswer: "A"
}
```

### Styling

Modify `src/styles/global.css` for global styles, or update component-level styles in individual component files.

