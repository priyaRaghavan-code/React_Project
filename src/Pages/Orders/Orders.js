import React, { useState } from 'react'
import OrderForm from './OrderForm';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import PageHeader from '../../components/PageHeader';
import { Paper,makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from '../../components/useTable';
import * as orderService from '../../services/orderService';
import Controls  from '../../components/controls/Controls';
import { Search } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  pageContent:{
      margin:theme.spacing(5),
      padding:theme.spacing(3),
    },
  searchInput:{
    width:'75%'
  }
}))

const headCells = [
  {id:'fullName',label:'Person Name'},
  {id:'email',label:'Email'},
  {id:'mobile',label:'Mobile'},
  {id:'Department',label:'Department',disableSorting:true},
  {id:'prodName',label:'Product Name'}
]

export default function Orders() {
  const classes = useStyles();
  const [records,setRecords] = useState(orderService.getAllOrders());
  const [filterFn,setFilterFn] = useState({fn:items=>{return items;}})


  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
  }=useTable(records,headCells,filterFn);

  
  const handleSearch = e =>{
    let target = e.target;
    setFilterFn({
      fn:items => {
        if(target.value=="")
          return items
          else
          return items.filter(x=>x.fullName.toLowerCase().includes(target.value))
      }
    })
  }


  return (
    <>
       <PageHeader
          title="New Order"
          subTitle="Order with validation"
          icon={ <PeopleOutlineTwoToneIcon fontSize="large"/>}
        /> 
        <Paper className={ classes.pageContent }>

        {/* <OrderForm/> */}

        <Toolbar>
          <Controls.Input
          label="Search orders"
          className={classes.searchInput}
          InputProps ={{
            startAdornment: (<InputAdornment position="start"> <Search/>
            </InputAdornment>)
          }}
          onChange = {handleSearch}
          />
        </Toolbar>
        <TblContainer>
          <TblHead/>
          <TableBody>
            {
              recordsAfterPagingAndSorting().map(item=>
                (<TableRow key={item.id}>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                  <TableCell>{item.department}</TableCell>
                  <TableCell>{item.prodName}</TableCell>

                </TableRow>
                  ))
            }
          </TableBody>
        </TblContainer>
          <TblPagination/>
        </Paper>
    </>
  )
}
