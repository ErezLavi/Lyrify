import classes from "./Suggestions.module.css";
import WordList from "../words/WordsList";
import { IconSettings, IconArrowsShuffle } from "@tabler/icons-react";
import { useState } from "react";
import ReactSlider from "react-slider";

const Suggestions = () => {
  const address = "http://10.18.15.205:5007/home";
  const IP_ADDR = "http://10.18.15.202:5173";
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [settings, isSettings] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(address, {
        method: "GET", // Specify the request method
        headers: {
          Origin: IP_ADDR,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      const data = await response.json();
      const words = Object?.values(data);
      setLoading(false);
      setData(words as string[]);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const shuffleListHandler = () => {
    fetchData();
  };

  const settingsHandler = () => {
    isSettings(!settings);
  };
  return (
    <>
      {!settings ? (
        <div className={classes.div}>
          <h2>Suggestions</h2>
          <WordList words={data} isLoading={loading} />
          <section>
            <IconArrowsShuffle
              size={60}
              onClick={shuffleListHandler}
              className={classes.shuffle}
            />
            <IconSettings
              size={60}
              onClick={settingsHandler}
              className={classes.settings}
            />
          </section>
        </div>
      ) : (
        <div className={classes.div2}>
          <h2>Settings</h2>
          <section>
            <label>Creativity</label>
            <ReactSlider
              className={classes.slider}
              thumbClassName={classes.sliderThunb}
              min={0}
              max={10}
            />
            <label>Mood</label>
            <ReactSlider
              className={classes.slider}
              thumbClassName={classes.sliderThunb}
              min={0}
              max={10}
            />
            <IconSettings
              size={60}
              onClick={settingsHandler}
              className={classes.settings2}
            />
          </section>
        </div>
      )}
    </>
  );
};

export default Suggestions;
