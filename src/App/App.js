// import logo from './logo.svg';
import './App.css';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import { makeStyles,CssBaseline,ThemeProvider,createMuiTheme} from '@material-ui/core';
import Orders from '../Pages/Orders/Orders';


const theme = createMuiTheme({
  palette:{
    primary:{
      // main:'#FF000',
      main:'#00eea3',
      light:'#3c44b126'
    },
    secondary:{
      main:'#f83245',
      light:'#f8324526'
    },
    background:{
      default:'#f4f5fd'
    },
    overrides:{
      MuiAppBar:{
        root:{
          transform:'translateZ(0)'
        }
      }
    }

  }
})
const useStyles = makeStyles({
    appMain:{
      paddingLeft: '50px',
      width:'100%'
    }
})

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme = { theme }>
      <SideMenu />
      <div className = { classes.appMain }>
        <Header /> 
        
        <Orders/>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
