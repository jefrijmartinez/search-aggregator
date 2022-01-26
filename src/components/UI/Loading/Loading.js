import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes.loading}>
      <div className={classes["lds-aggregator"]}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
