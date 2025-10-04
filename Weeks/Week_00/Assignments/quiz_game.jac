"""A Simple AI-Powered Science Quiz"""

import from byllm.llm { Model }

# api key is set up in the virtual environment. Add API or export to environment to run code
glob llm = Model(model_name="gemini/gemini-2.0-flash", api_key="", verbose=False);

"""Ask Gemini to create a Grade 6 science question with 4 choices"""
def generate_question() -> str by llm();

"""Check if student’s answer is correct and respond like a teacher"""
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
        print(result);
        self.history.append("Answer: " + user_answer);
        self.history.append("Feedback: " + result);
    }
}

with entry {
    game = QuizGame();

    q1 = game.ask_question();
    # In CLI mode: user enters answer interactively
    ans1 = input("\nYour Answer: ");
    game.evaluate_answer(q1, ans1);

    q2 = game.ask_question();
    ans2 = input("\nYour Answer: ");
    game.evaluate_answer(q2, ans2);
}
