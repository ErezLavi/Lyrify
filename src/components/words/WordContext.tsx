import { createContext, useContext, useState, FC, ReactNode } from "react";

interface WordContextType {
  selectedWord: string | null;
  selectWord: (word: string | null) => void;
}

const WordContext = createContext<WordContextType | undefined>(undefined);

export const useWordContext = () => {
  const context = useContext(WordContext);
  if (!context) {
    throw new Error("useWordContext must be used within a WordProvider");
  }
  return context;
};

interface WordProviderProps {
  children: ReactNode;
}

export const WordProvider: FC<WordProviderProps> = ({ children }) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const selectWord = (word: string | null) => {
    setSelectedWord(word);
  };

  const value = { selectedWord, selectWord };

  return <WordContext.Provider value={value}>{children}</WordContext.Provider>;
};
