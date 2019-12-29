import React from "react";
import ReactSVG from "react-svg";
import { createUseStyles } from "react-jss";
import "./SimpleSVG_animations.scss";

const useStyles = createUseStyles({
  svg: props => {
    let animationString = ''
    if(props.animationNames) {
      props.animationNames.map((name, index) => {
        animationString += `${name} ${props.animationDurations ? `${props.animationDurations[index]},` || '0.5s,' : '0.5s,'}`
      })
      animationString = animationString.replace(/(,$)/g, "")
      console.log(animationString);
    } else {
      animationString = `${props.animation} ${props.duration}`
    }
    return {
      "& path": {
        fill: props.fill,
        "fill-opacity": props.fillOpacity,
        stroke: props.stroke,
        "stroke-width": props.strokeWidth
      },
      "& svg": {
        width: props.width,
        height: props.height,
        animation: animationString
      }
    };
  }
});

const SimpleSVG = ({ children, ...props }) => {
  const classes = useStyles(props);
  console.log(classes);
  return (
    <div className={classes.svg}>
      <ReactSVG src={props.image || children} />
    </div>
  );
};

SimpleSVG.defaultProps = {
  fill: "inherit",
  stroke: "inherit",
  strokeWidth: "inherit",
  fillOpacity: "inherit",
  width: "inherit",
  height: "inherit",
  animation: "none",
  duration: "0.5s"
};

export default SimpleSVG;
