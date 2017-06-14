import React from 'react'
import { Field, reduxForm } from 'redux-form'

let AddressForm = props => {
  const { handleSubmit } = props;
  return (
    <div className="address-form-block">
      <form onSubmit={ handleSubmit }>
          <label htmlFor="address1" className="input-label">Add a Bitcoin Address to Monitor:</label>
          <Field name="address1" className="address-input" component="input" type="text" />
          <div className="submit-address" onClick={handleSubmit}>Submit</div>
      </form>
    </div>
  )
}

AddressForm = reduxForm({
  form: 'address'
})(AddressForm)

export default AddressForm;