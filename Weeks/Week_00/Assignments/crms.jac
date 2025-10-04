# amazing_poem_writer.impl.jac
impl PoemWriter.start {
    if not [root --> (`?turn)] {
        next = root ++> turn();
    } else {
        next = [root --> (`?turn)];
    }
    visit next;
}

impl PoemWriter.write {
    print(generate_poem(self.theme, self.style, self.tone));
    disengage;
}