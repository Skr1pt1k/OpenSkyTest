import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';

import {fieldValidator} from '../../services/fieldValidator';

const LoginComponent = ({handleSubmitRequest, sessionError}) => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting
  } = fieldValidator(login);

  function login() {
    handleSubmitRequest(values);
  }

  return (
    <div className='auth'>
      <Container className='auth__container'>
        <h2 className='auth__header'>Sign In</h2>
        <Form className="auth__form form-auth" onSubmit={ handleSubmit } >
          <Col className='auth__col'>
            <FormGroup>
              <Label className='form-auth__text'>e-mail</Label>
              <Input
                bsSize="sm"
                autoComplete="off"
                name="email"
                className={ `input ${errors.email && 'is-danger'}` }
                placeholder="user@example.com"
                onChange={ handleChange }
                value={ values.email || '' }
                invalid={ (isSubmitting && errors.email === 'Email address is invalid') || sessionError }
                valid={ isSubmitting && errors.email === undefined  }
                required
              />
              { errors.email ? <FormFeedback>{errors.email}</FormFeedback> : null }
            </FormGroup>
          </Col>
          <Col className='auth__col'>
            <FormGroup>
              <Label className='form-auth__text'>password</Label>
              <Input
                bsSize="sm"
                type="password"
                name="password"
                placeholder="********"
                className={ `input ${errors.password && 'is-danger'}` }
                onChange={ handleChange }
                value={ values.password || '' }
                invalid={ isSubmitting && errors.password || sessionError }
                valid={ isSubmitting && !errors.password }
                required
              />
              { errors.password ? <FormFeedback>{errors.password}</FormFeedback> : null}
              { sessionError ? <span className='form-auth__error'>{sessionError}</span> : null}
            </FormGroup>
          </Col>
          <Button className='form-auth__button font-weight-bold font-size-10' type='submit'>Login</Button>
        </Form>
      </Container>
    </div>
  );
};

LoginComponent.propTypes = {
  handleSubmitRequest: PropTypes.func,
  sessionError: PropTypes.string
};

export default LoginComponent;
