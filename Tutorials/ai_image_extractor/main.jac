
import from byllm.lib { Model }

glob llm = Model(model_name="gemini-2.5-flash-image");

# one tiny object replaves a giant schema
obj MemoryDetails {
    has who: list[str];
    has what: str;
    has where: str;
}
sem MemoryDetails = "Extract people, event, place from the photo";

def extract_memory_details(
    image: Image, city: str
) -> MemoryDetails by llm(); # Magic happens here
 
 with entry {
    img = Image("./assets/test_image.jpg");
    details = extract_memory_details(img, "Philiphines");
    print(details);
 }