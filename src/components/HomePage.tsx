import classes from "./Homepage.module.css";
import SongEditor from "../components/songEditor/SongEditor";
import Suggestions from "../components/suggestions/Suggestions";
import { useState } from "react";

const HomePage = () => {
  const [song, setSong] = useState({
    title: "",
    lyrics: "",
  });

  return (
    <div className={classes.div}>
      <SongEditor song={song} setSong={setSong} />
      <Suggestions song={song} />
    </div>
  );
};

export default HomePage;
