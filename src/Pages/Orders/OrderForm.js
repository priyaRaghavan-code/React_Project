// import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Controls  from '../../components/controls/Controls';
import { useForm, Form } from '../../components/useForm';
import * as orderService from "../../services/orderService";

const genderItems = [
  {id:'male',title:'Male'},
  {id:'female',title:'Female'},
  {id:'others',title:'Others'},
]

const initialFValues = {
  id:0,
  fullName:'',
  email:'',
  mobile:'',
  gender:'male',
  departmentId:'',
  prodName:'',
  orderDate:new Date(),
  isPermanent:false
}

export default function OrderForm() {
  const validate = (fieldValues=values)=>{
    let temp = {...errors}
    if('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName?"":"This field is required."
    if('email' in fieldValues)
      temp.email = (/$^|.+@.+..+/).test(fieldValues.email)?"":"Email is not valid."
    if('mobile' in fieldValues)
      temp.mobile = fieldValues.mobile.length>9?"":"Minimum 10 numbers is required"
    if('prodName' in fieldValues)
      temp.prodName = fieldValues.prodName?"":"This field is required."
    if('departmentId' in fieldValues)
      temp.departmentId = fieldValues.departmentId.length!=0?"":"This field is required."

    setErrors({
      ...temp
    })
    if(fieldValues=values)
      return Object.values(temp).every(x => x == "")
  }


  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputOnChange,
    resetForm
  } = useForm(initialFValues,true,validate);


const handleSubmit = e => {
  e.preventDefault();
  if(validate())
    orderService.insertOrder(values);
    resetForm();
}


  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
          <Grid item xs={6}>
            <Controls.Input
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={ handleInputOnChange }
            error={errors.fullName }  
            />
            <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={ handleInputOnChange }
            error={errors.email }
            />
            <Controls.Input
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={ handleInputOnChange }
            error={errors.mobile }

            />
            <Controls.Input
            label="Product Name"
            name="prodName"
            value={values.prodName}
            onChange={ handleInputOnChange }
            error={errors.prodName }

            />
          </Grid>
          <Grid item xs={6}>
            <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={ handleInputOnChange }
            items={genderItems}
            />
            <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={ handleInputOnChange }
            options={orderService.getDepartmentCollection()}
            error={errors.departmentId }

            />
            <Controls.DatePicker
            name="orderDate"
            label="Order Date"
            value={values.orderDate}
            onChange={ handleInputOnChange }
            />

            <Controls.Checkbox
            name="isPermanent"
            label="Permanent Item"
            value={values.isPermanent}
            onChange={ handleInputOnChange }
            />
            <div>
              <Controls.Button
              type="submit"
              text="Submit"
              />
              <Controls.Button
              text="Reset"
              color="default"
              onClick={resetForm}
              />
            </div>

          </Grid>
      </Grid>
    </Form>
  )
}



