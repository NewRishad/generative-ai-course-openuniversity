# with entry works something like the main function in Java. 
# It's where the program starts
with entry {
    print("Hello, World!");
    print("My name is Rishad!");
    # Variables work same as python just with the `;` at the end
    name = 'Alice';
    print(f"{name} is not my Name");
    # the recommendation is to declare variable with Type Annotation for better
    # type safety

    # With Type Annotations
    first_name: str = "Raufa";
    last_name: str = "Yunus";
    age: int = 33;
    is_married: bool = True;
    temperature: float = 37.2;

    print(f"My sister's name is {first_name} {last_name}. She is {age} years old, is she married = {is_married}, and her body temp is at a stable {temperature}");

    # Functions with Type Annoted Variable
    def greet(name: str) {
        print(f"Hello, there {name}!");
    }
    greet("John Cena");

    # functions with Type annoted return values
    def addTwo(a: int, b: int) -> int {
        sum = a + b;
        return sum;
    }
    print(addTwo(5,5));
}

