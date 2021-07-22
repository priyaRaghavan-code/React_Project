import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import React from 'react';


const useStyles = makeStyles({
  root:{
    backgroundColor:'#fff',
  }
})

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={ classes.root }>
        <Toolbar>
          <Grid container>
            <Grid item>
              <InputBase />
            </Grid>
            <Grid item sm>
              </Grid>
            <Grid item>
              <IconButton>
                <Badge badgeContent={6} color="secondary">
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={6} color="secondary">
                      <ChatBubbleOutlineIcon/>
                </Badge>
              </IconButton>
              <IconButton>
                  <PowerSettingsNewIcon/>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
