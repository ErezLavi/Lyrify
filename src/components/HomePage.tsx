import classes from "./Homepage.module.css"
import SongEditor from '../components/songEditor/SongEditor'
import Suggestions from '../components/suggestions/Suggestions'

const HomePage = () => {
  return (
    <div className={classes.div}>
        <SongEditor />
        <Suggestions />
    </div>
  );
};

export default HomePage;
