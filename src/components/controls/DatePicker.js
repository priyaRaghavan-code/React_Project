import DateFnsUtils from '@date-io/date-fns'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'

export default function DatePicker(props) {
  const {name,label,value,onChange} = props;

  const convertToDeaultEventParameter=(name,value)=>({
    target:{
      name,value
    }
  })

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
        label={label}
        formate="MMM/dd/yyyy"
        name={name}
        value={value}
        onChange = { date => onChange(convertToDeaultEventParameter(name, date))}
        >
        </KeyboardDatePicker>
    </MuiPickersUtilsProvider>
  )
}
