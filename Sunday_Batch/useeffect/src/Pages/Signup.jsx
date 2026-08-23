import React from 'react';
import { Form } from '../Components/Form';

export const Signup = () => {
  const data = [
    { name: 'email', type: 'text' },
    { name: 'password', type: 'password' },
    { name: 'phone', type: 'phone' },
    { name: 'address', type: 'address' },
    { name: 'gender', type: 'radio' },
    { name: 'city', type: 'city' },
    { name: 'country', type: 'country' },
  ];
  return <Form props={data} button={'signup'} />;
};
