impl QuizGame {
    def generate_question() -> str by llm() {
        """Generate a multiple-choice Grade 6 science question with 4 options (A–D). 
        Clearly mark the correct answer at the end with 'Correct Answer: X'."""
    }

    def check_answer(question: str, user_answer: str) -> str by llm() {
        f"""The following question was asked:
        {question}

        The student answered: {user_answer}

        Evaluate if their answer is correct, allowing for typos or synonyms. 
        Respond like a kind teacher: 
        - If correct → encourage them and confirm. 
        - If wrong → gently correct and give the right answer.
        Keep response within 2 sentences."""
    }
}
