import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';


export  function useForm(initialFValues) {
  const [values, setValues] = useState(initialFValues);

  const handleInputOnChange= e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]:value
    })
  }

  return {
    values,
    setValues,
    handleInputOnChange
  }
}


const useStyles = makeStyles(theme => ({
  
  
  root:{
    '& .MuiFormControl-root':{
      width:'80%',
      margin:theme.spacing(1)
    }
  }
}))

export function Form(props) {
  const classes = useStyles();
  return (
   <form className={ classes.root } autoComplete="off">
     {props.children}
   </form>
  )
}