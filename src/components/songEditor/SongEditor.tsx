import React, { useState } from "react";
import classes from "./SongEditor.module.css";


const SongEditor = () => {
  const [song, setSong] = useState({
    title: "",
    lyrics: "",
  });

  const changeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSong((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const changeLyricsHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setSong((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <section className={classes.section}>
      <form>
        <input
          type="text"
          id="title"
          placeholder="Enter Title here..."
          name="title"
          value={song.title}
          onChange={changeTitleHandler}
        />
        <label htmlFor="lyrics">Lyrics</label>
        <textarea
          id="lyrics"
          placeholder="Enter lyrics here..."
          name="lyrics"
          value={song.lyrics}
          onInput={changeLyricsHandler}
        />
      </form>
    </section>
  );
};

export default SongEditor;
