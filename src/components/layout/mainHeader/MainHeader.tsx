import React from "react";
import classes from "./MainHeader.module.css";

const MainNavigation: React.FC = () => {
  return (
    <header className={classes.header}>
      <section>
        <label>SongMate</label>
      </section>
    </header>
  );
};

export default MainNavigation;
