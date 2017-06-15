import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Col, Row } from 'react-bootstrap';


let AddressForm = props => {
  const { handleSubmit } = props;
  return (
      <form onSubmit={ handleSubmit }>
        <Row>
          <Col lg={5} sm={12} className="form-box">
            <label htmlFor="address1" className="input-label">Add a receiving address to begin tracking payments:</label>
          </Col>
          <Col lg={5} sm={12} className="form-box">
            <Field name="address1" className="address-input" component="input" type="text" />
          </Col>
          <Col lg={2} sm={12} className="form-box">
            <div className="submit-address" onClick={handleSubmit}>Submit</div>
          </Col>
        </Row>
        <Row>
          {
            (props.error === 'ADDRESS_EXISTS') && (
                <h4>Address subscription already exists</h4>
            )
            (props.error === 'NULL_ADDRESS') && (
                <h4>Please enter an address</h4>
            )
          }
        </Row>
      </form>
  )
}

AddressForm = reduxForm({
  form: 'address'
})(AddressForm)

export default AddressForm;