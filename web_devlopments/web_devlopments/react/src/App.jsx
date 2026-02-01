import './App.css';
import { Form } from './Components/Form';
import { PropsOverView } from './Components/PropsOverView';
import { PropsValidations } from './Components/PropsValidations';

function App() {
  const field = [
    {
      name: 'userName',
      id: 'userName',
      label: 'user name',
      type: 'text',
      isRequire: true,
      placeholder: 'enter your name',
    },
    {
      name: 'userEmail',
      id: 'userEmail',
      label: 'user email',
      type: 'email',
      isRequire: true,
      placeholder: 'enter your email',
    },
    {
      name: 'userPhone',
      id: 'userPhone',
      label: 'phone',
      type: 'tel',
      isRequire: true,
      placeholder: 'enter your phone',
    },
    {
      name: 'userPass',
      id: 'userPass',
      label: 'Password',
      type: 'password',
      isRequire: true,
      placeholder: 'enter your password',
    },
    {
      name: 'userConfirmPass',
      id: 'userConfirmPass',
      label: 'Confirm Password',
      type: 'password',
      isRequire: true,
      placeholder: 'enter your confirm password',
    },
  ];

  const finallySubmit = (data) => {
    console.log('🚀 ~ this is from Parent File:', data);
  };

  return (
    <>
      {/* <PropsOverView
        components={1}
        name="mehfooz khan"
        email="mehfoozkhan33@gmail.com"
        phone={9923279804}
      />
      <PropsOverView
        components={2}
        name="nilesh khan"
        email="nileshkhan786@gmail.com"
      />
      <PropsOverView /> */}
      {/* <PropsValidations label="mefooz" length={3} /> */}
      <Form formData={field} btnValue="submit" funcValue={finallySubmit} />
    </>
  );
}

export default App;
