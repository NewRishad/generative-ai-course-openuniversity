# 🧪 AI Science Quiz

A simple interactive quiz that uses Google's Gemini AI to generate Grade 6 science questions and provide feedback.

## Setup

1. Install dependencies:
   ```bash
   pip install jaclang byllm
   ```

2. Get a [Gemini API key](https://makersuite.google.com/app/apikey)

3. Add your API key to the code:
   ```jac
   glob llm = Model(model_name="gemini/gemini-2.0-flash", api_key="YOUR_KEY_HERE", verbose=False);
   ```

## Usage

```bash
jac run quiz_game.jac
```

Answer the multiple-choice questions and get instant feedback! You can type your answer flexibly - "A", "a", "option A", or even the full answer text. The AI understands typos and synonyms.

## How It Works

The `by llm()` syntax delegates functions to the AI:
- `generate_question()` - Gemini creates a new science question each time
- `check_answer()` - Gemini evaluates your answer and gives teacher-like feedback

No question database needed - everything is generated on the fly!

## Customize

Change the number of questions by modifying the `with entry` block, or adjust difficulty by editing the prompt:

```jac
"""Generate a multiple-choice Grade 8 science question with 4 options (A–D)."""
```