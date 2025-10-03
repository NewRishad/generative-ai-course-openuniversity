# Week 01 Classwork: Deconstructing Python to Jac Syntax

This assignment focuses on **deconstructing** the "Guess the Number" game from the "Learn Jac in 5 Minutes" tutorial (available [here](https://www.jac-lang.org/learn/jac_in_a_flash/#step-6-ai-enhanced-gameplay-with-byllm)) to clearly understand the structural and syntactical differences between Python and Jac.

The goal is to analyze how Jac evolves common Python patterns into its native, scale-aware syntax, demonstrating key features like:
1. **Direct Translation:** Converting a standard Python class structure into its line-by-line Jac equivalent.
2. **Simplified Definition:** Using the $\texttt{obj}$ and $\texttt{has}$ keywords to define fields and classes more concisely, eliminating the verbose $\texttt{\_\_init\_\_}$ method.
3. **Code Organization:** Separating the object's interface (signatures in the $\texttt{.jac}$ file) from its implementation (method bodies in the $\texttt{.impl.jac}$ file).

## Required Steps

1. **Step 0 & 1:** Implement and run $\texttt{guess\_game.py}$ and $\texttt{guess\_game1.jac}$.
2. **Step 2:** Implement and run $\texttt{guess\_game2.jac}$ (using $\texttt{has}$).
3. **Step 3:** Implement and run $\texttt{guess\_game3.jac}$ and $\texttt{guess\_game3.impl.jac}$ (using $\texttt{impl}$).

## Submission Requirement

Commit the five required files ($\texttt{guess\_game.py}$, $\texttt{guess\_game1.jac}$, $\texttt{guess\_game2.jac}$, $\texttt{guess\_game3.jac}$, $\texttt{guess\_game3.impl.jac}$) to the $\texttt{Weeks/Week\_01/Classwork}$ folder.
```