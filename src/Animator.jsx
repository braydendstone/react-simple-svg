import React from "react";
import ReactSVG from "react-svg";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  svg: (props) => ({
      '@keyframes primaryAnimation': {
        ...getAnimation(props.animation)
      },
      '& path': {
          fill: props.fill,
          'fill-opacity': props.fillOpacity,
          stroke: props.stroke,
          'stroke-width': props.strokeWidth,
      },
      '& svg': {
        width: props.width,
        height: props.height,
        animation: `fadein ${props.duration}`
      },
    })
}) 

const getAnimation = (name) => {
  switch(name) {
    case 'fade-in':
      return {
          from: {opacity: 0},
          to: {opacity: 1}
        }
    default: return null;
  }
}

const Animator = ({children, ...props}) => {
  const classes = useStyles(props);
  console.log(classes);
  return (
    <div className={classes.svg}>
      <ReactSVG src={children} />
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
