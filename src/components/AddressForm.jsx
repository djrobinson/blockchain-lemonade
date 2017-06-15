import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Col, Row } from 'react-bootstrap';


let AddressForm = props => {
  const { handleSubmit } = props;
  return (
      <form onSubmit={ handleSubmit }>
        <Col lg={5} className="form-box">
          <label htmlFor="address1" className="input-label">Add a Bitcoin address to begin tracking payments:</label>
        </Col>
        <Col lg={5} className="form-box">
          <Field name="address1" className="address-input" component="input" type="text" />
        </Col>
        <Col lg={2} className="form-box">
          <div className="submit-address" onClick={handleSubmit}>Submit</div>
        </Col>
      </form>
  )
}

AddressForm = reduxForm({
  form: 'address'
})(AddressForm)

export default AddressForm;