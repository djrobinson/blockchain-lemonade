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
      <button type="submit">Submit</button>
    </form>
  )
}

AddressForm = reduxForm({
  form: 'address'
})(AddressForm)

export default AddressForm;