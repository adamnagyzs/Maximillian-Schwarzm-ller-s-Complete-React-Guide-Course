import type { ReactElement } from "react";
import { useRef, useState } from "react";
import WordList from "./WordList";
import classes from "./Input.module.css";

const Input = (): ReactElement => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [result, setResult] = useState<Record<string, number>>({});

  function getTopWords(text: string, n: number): Record<string, number> {
    const words = text
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .split(/\s+/);

    const freq: Record<string, number> = {};

    for (const word of words) {
      if (word) {
        freq[word] = (freq[word] || 0) + 1;
      }
    }

    return Object.fromEntries(
      Object.entries(freq)
        .sort((a, b) => {
          if (b[1] !== a[1]) {
            return b[1] - a[1];
          }

          return a[0].localeCompare(b[0]);
        })
        .slice(0, n),
    );
  }
  const handleClick = () => {
    const text = inputRef.current?.value ?? "";
    const topWords = getTopWords(text, 5);
    setResult(topWords);
  };

  return (
    <div className={classes.inputBox}>
      <label htmlFor="text">Text</label>

      <textarea id="text" ref={inputRef} />

      <button onClick={handleClick}>Show</button>

      <WordList data={result} />
    </div>
  );
};

export default Input;
