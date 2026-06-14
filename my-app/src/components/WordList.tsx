import type { ReactElement } from "react";

type Props = {
  data: Record<string, number>;
};

const WordList = ({ data }: Props): ReactElement => {
  return (
    <ul>
      {Object.entries(data).map(([word, count]) => (
        <li key={word}>
          {word}: {count}
        </li>
      ))}
    </ul>
  );
};

export default WordList;
