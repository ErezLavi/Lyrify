import classes from "./WordItem.module.css";

interface WordItemProps {
  word: string;
}

const WordItem: React.FC<WordItemProps> = ({ word }) => {
  return <div className={classes.div}>{word}</div>;
};

export default WordItem;