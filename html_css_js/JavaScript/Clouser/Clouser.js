// clouser topics

// clouseris related to function...

// this is the parent function
const justFunction = () => {
  let n = "mehfooz"; // this goig to garbage

  return () => {
    let n = "hello"; // because this is running and prev n is destroyed after end of exicutional stack...
    // this is the child function of the parent function
    return n;
  };
};

// this is the one way of the calling the function
console.log(justFunction()());

// this is the one way to invoke the functions

/*
const ans = justFunction();

ans();
*/

/*   

notes :- it's closes the variable that are depedence it's like frezzes them it's dosent allow them to destroyed only there is some dependence, and what that means of dependence  was -> A child function need a variable  from a parent function even those parent function had been called or after the function called the varaiable destroyed but the parent func share the  variable to the chile function...



closure happend to nested function or there has to any depedence to parent func to child fucn...

*/
