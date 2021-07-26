import React from 'react'
import { withStyles } from '@material-ui/core'

//withStyeles and makeStyles
const styles = {
  sideMenu:{
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0',
    width: '50px',
    height: '100%',
    backgroundColor: '#1c1f2d'
  }
}

const sideMenu = (props) => {
  const { classes } = props;
  return (
    <div className = { classes.sideMenu }>
      
    </div>
  )
}

export default withStyles(styles)(sideMenu);
