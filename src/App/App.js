// import logo from './logo.svg';
import './App.css';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import { makeStyles,CssBaseline } from '@material-ui/core';


const useStyles = makeStyles({
    appMain:{
      paddingLeft: '50px',
      width:'100%'
    }
})

function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div class = { classes.appMain }>
        <Header />  
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
