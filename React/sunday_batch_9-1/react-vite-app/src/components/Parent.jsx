import { Child } from './Child';

export const Parent = (props) => {
  return (
    <>
      <Child greet={props} />
    </>
  );
};

/* 
how to crate default export short-cut 

normal function components -> rfce

arrow function compoents-> rafce

how to create name function export short-cut

normal function components -> rfce

arrow function components -> rafc

*/
