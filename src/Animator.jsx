import React from "react";
import ReactSVG from "react-svg";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  svg: props => ({
    backgroundColor: "#ddd",
    '& path': {
        fill: props.fillColor
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
    fillColor: 'black'
}

export default Animator;
