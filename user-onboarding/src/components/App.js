import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';

import Form from './Form';
import schema from '../validation/formSchema';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  fruits: '',
  terms: false
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  fruits: '',
  terms: ''
}

export default function App() {
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [ users, setUsers ] = useState([])

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
      .then(res => {
        // console.log(res)
        setUsers([ res.data, ...users ])
      })
      .catch(err => console.error(err))
  }

  const handleChange = (name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <div className="App">
      <Form 
        values={formValues} 
        change={handleChange} 
        errors={formErrors} 
        submit={handleSubmit} 
      />
      {
        users.map(user => (
          <div key={user.id}>
            <h2>{user.username}</h2>
            <p>Email: {user.email}</p>
            <p>Fruit: {user.fruits}</p>
          </div>
        ))
      }
    </div>
  );
}

