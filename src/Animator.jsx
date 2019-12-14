import React from "react";
import ReactSVG from "react-svg";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  svg: (props, animation) => ({
    backgroundColor: "#ddd",
    '& path': {
        fill: props.fill,
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

  const getAnimation = (name) => {
    switch(name) {
      case 'fade-in':
        return {
          '@keyframes fadein': {
            from: {opacity: 0},
            to: {opacity: 1}
          },
          '& svg': {
            animationName: '$fadein'
          }
        }
      default: return null;
    }
  }

  const classes = useStyles(props, getAnimation('fade-in'));

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
}

export default Animator;
