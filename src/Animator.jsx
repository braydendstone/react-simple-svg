import React from "react";
import ReactSVG from "react-svg";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  svg: props => ({
    backgroundColor: "#ddd",
    '& path': {
        fill: props.fillColor,
        'fill-opacity': props.fillOpacity,
        stroke: props.stroke,
        'stroke-width': props.strokeWidth
    },
    '& svg': {
      width: props.width,
      height: props.height
    }
  })
})

const Animator = ({children, ...props}) => {

  const classes = useStyles(props);

  return (
    <div className={classes.svg}>
      <ReactSVG src={children} />
    </div>
  );
};

Animator.defaultProps = {
    fillColor: 'inherit',
    stroke: 'inherit',
    strokeWidth: 'inherit',
    fillOpacity: 'inherit',
    width: 'inherit',
    height: 'inherity'
}

export default Animator;
