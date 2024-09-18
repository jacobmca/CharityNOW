import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = ({ onLoginSuccess }) => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [loginUser] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setEmailError(false);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    if (!userFormData.email || userFormData.email.trim() === "") {
      setEmailError(true);
      return;
    }

    if (!userFormData.password || userFormData.password.trim() === "") {
      setPasswordError(true);
      return;
    }

    try {
      const { data } = await loginUser({
        variables: { ...userFormData },
      });

      // Trigger login after successful login
      Auth.login(data.login.token);

      // Trigger the success handler to hide the form
      onLoginSuccess(); 
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    // Clear form values
    setUserFormData({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>E-Mail:</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          {emailError && <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>}
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='password'>Password:</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          {passwordError && <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>}
        </Form.Group>

        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
