import os
import google.generativeai as genai

# --- Setup Gemini ---
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel("gemini-2.5-flash-lite")

# --- Functions ---
def gemini_generate_question():
    prompt = "Give me a multiple choice science question for grade 6 with 4 options and mark the correct answer."
    response = model.generate_content(prompt)
    return response.text.strip()

def gemini_check_answer(question_with_answer, user_answer):
    prompt = f"""
    Question with correct answer:
    {question_with_answer}

    User's Answer: {user_answer}

    Please act as a science teacher.
    - If the student’s answer matches the meaning of the correct answer (even with typos or different wording), say it's correct and encourage them.
    - If it's wrong, politely correct them and give the right answer.
    Keep the reply short (1-2 sentences).
    """
    response = model.generate_content(prompt)
    return response.text.strip()


# --- CLI Game Loop ---
def play_quiz():
    print("Welcome to the Grade 6 Science Quiz! 🚀\n")
    score = 0

    for i in range(3):  # 3 rounds
        print(f"\n--- Question {i+1} ---")
        question = gemini_generate_question()
        print(question)

        user_answer = input("\nYour answer: ")
        result = gemini_check_answer(question, user_answer)

        if result == "correct":
            print("✅ Correct!")
            score += 1
        else:
            print("❌ Incorrect!")

    print(f"\nGame Over! Your final score: {score}/3 🎉")

if __name__ == "__main__":
    play_quiz()
