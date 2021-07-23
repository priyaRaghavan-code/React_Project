import React, { useState, useEffect } from 'react';
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
  quantity:'',
  orderDate:new Date(),
  isPermanent:false
}

export default function OrderForm() {
  const {
    values,
    setValues,
    handleInputOnChange
  } = useForm(initialFValues);

  return (
    <Form>
      <Grid container>
          <Grid item xs={6}>
            <Controls.Input
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={ handleInputOnChange }
            />
            <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={ handleInputOnChange }
            />
            <Controls.Input
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={ handleInputOnChange }
            />
            <Controls.Input
            label="Product Name"
            name="prodName"
            value={values.prodName}
            onChange={ handleInputOnChange }
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
              />
            </div>

          </Grid>
      </Grid>
    </Form>
  )
}



