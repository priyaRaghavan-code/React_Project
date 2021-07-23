import React from 'react'
import OrderForm from './OrderForm';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import PageHeader from '../../components/PageHeader';
import { Paper,makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  pageContent:{
      margin:theme.spacing(5),
      padding:theme.spacing(3),
    }
}))

export default function Orders() {
  const classes = useStyles();
  return (
    <>
       <PageHeader
          title="New Order"
          subTitle="Order with validation"
          icon={ <PeopleOutlineTwoToneIcon fontSize="large"/>}
        /> 
        <Paper className={ classes.pageContent }>

        <OrderForm/>
        </Paper>
    </>
  )
}
