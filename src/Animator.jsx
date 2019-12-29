import React from "react";
import ReactSVG from "react-svg";
import { createUseStyles } from 'react-jss';
import './Animator_animations.scss';

const useStyles = createUseStyles({
  svg: (props) => ({
      '& path': {
          fill: props.fill,
          'fill-opacity': props.fillOpacity,
          stroke: props.stroke,
          'stroke-width': props.strokeWidth,
      },
      '& svg': {
        width: props.width,
        height: props.height,
        animation: `${props.animation} ${props.duration}`
      },
    })
}) 

const Animator = ({children, ...props}) => {
  const classes = useStyles(props);
  console.log(classes);
  return (
    <div className={classes.svg}>
      <ReactSVG src={props.image || children} />
    </div>
  );
};

Animator.defaultProps = {
    fill: 'inherit',
    stroke: 'inherit',
    strokeWidth: 'inherit',
    fillOpacity: 'inherit',
    width: 'inherit',
    height: 'inherit',
    animation: 'none',
    duration: '0.5s'
}

export default Animator;
