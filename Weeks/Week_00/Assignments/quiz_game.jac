"""A Simple AI-Powered Science Quiz"""

import from byllm.llm { Model }

glob llm = Model(model_name="gemini/gemini-2.0-flash", api_key="", verbose=False);

"""Generate a multiple-choice Grade 6 science question with 4 options (A–D)."""
def generate_question() -> str by llm();

"""The question was: {question}

The student answered: {user_answer}

Evaluate if their answer is correct, allowing for typos or synonyms. 
Respond like a kind teacher: 
- If correct → encourage them and confirm which answer was correct.
- If wrong → gently correct and give the right answer.
Keep response within 2 sentences."""
def check_answer(question: str, user_answer: str) -> str by llm();

obj QuizGame {
    has history: list(str) = [];

    def ask_question {
        q = generate_question();
        print("\n--- New Question ---");
        print(q);
        self.history.append(q);
        return q;
    }

    def evaluate_answer(question: str, user_answer: str) {
        result = check_answer(question, user_answer);
        print("\n" + result);
        self.history.append("Answer: " + user_answer);
        self.history.append("Feedback: " + result);
    }
}

with entry {
    game = QuizGame();

    for i in range(10) {  # 10 questions
        q = game.ask_question();
        ans = input("\nYour Answer: ");
        game.evaluate_answer(q, ans);
    }
}