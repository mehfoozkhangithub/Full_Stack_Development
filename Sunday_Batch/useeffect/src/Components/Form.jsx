import React from 'react';

import { ApiCall } from '../Api/serverApi';

export const Form = ({ props, button }) => {
  console.log(`🚀 ~ props:`, props);

  const [formData, setFormData] = React.useState(() => {
    return props.reduce((acc, curr) => {
      // if (curr === 'type') return;
      acc[curr.name] = '';
      return acc;
    }, {});
  });

  console.log(`🚀 ~ formData:`, formData);
  /* 
  use karna hai hook jiska naam hai useState()
  
  login
  {
  email:"",
  password:""
  }

  signup
  {
  email:"",
  pass:"",
  cotact:""
  }
  */

  const handleInput = (eventTrigger) => {
    const { name, value } = eventTrigger.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleCall = async () => {
    const res = await ApiCall.post('/user', formData);
    console.log(res);
  };

  return (
    <form>
      {props?.map((el, i) => {
        return (
          <div
            key={i + 1}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              width: '30%',
              marginBottom: '10px',
            }}
          >
            {el.name === 'gender' ? (
              <>
                <label>{el.name}</label>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <div>
                    <label htmlFor="male">male</label>
                    <input type={el.type} value="male" />
                  </div>
                  <div>
                    <label htmlFor="female">female</label>
                    <input type={el.type} value="female" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <label htmlFor={el.name}>{el.name}</label>
                <input
                  id={el.name}
                  type={el.type}
                  placeholder={`enter your ${el.name}`}
                  name={el.name}
                  onChange={(event) => handleInput(event)}
                />
              </>
            )}
          </div>
        );
      })}

      <button onClick={handleCall}>{button}</button>
    </form>
  );
};

/* Details -> 9 || 10 
Contact -> 3 || 8
Login -> 2
Signup -> 4 || 6 */
