import React from 'react'
import { Field, reduxForm } from 'redux-form'

let AddressForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="address1">Bitcoin Address</label>
        <Field name="address1" component="input" type="text" />
      </div>
      <div onClick={handleSubmit}><h3>Submit</h3></div>
    </form>
  )
}

AddressForm = reduxForm({
  form: 'address'
})(AddressForm)

export default AddressForm;