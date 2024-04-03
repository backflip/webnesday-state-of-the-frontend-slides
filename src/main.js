import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes/notes.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

const deck = new Reveal({
  plugins: [Markdown, RevealNotes],
});

deck.initialize({
  hash: true,
});

deck.addEventListener("ready", () => {
  for (const listItem of document.querySelectorAll(
    ".custom-fragmented-list li"
  )) {
    listItem.classList.add("fragment");
  }
});
