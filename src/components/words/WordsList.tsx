import WordItem from "./WordItem";
import classes from "./WordsList.module.css";
import { TailSpin } from "react-loader-spinner";


interface Props {
  words: string[];
  isLoading: boolean;
}

const WordsList = ({ words, isLoading }: Props) => {
  return (
    <div className={classes.div}>
      {isLoading ? (
        <div className="loading-spinner">
          <TailSpin color={"#36D7B7"} />
        </div>
      ) : (
        <div>
          {words.length === 0 && <h2>No words found.</h2>}
          {words.map((word, index) => (
            <WordItem key={index} word={word} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WordsList;
