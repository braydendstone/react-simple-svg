import React from "react";
import ReactSVG from "react-svg";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  svg: props => ({
    backgroundColor: "#ddd",
    '& path': {
        fill: props.fillColor,
        stroke: props.stroke,
        'stroke-width': props.strokeWidth
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
    strokeWidth: 'inherit'
}

export default Animator;
