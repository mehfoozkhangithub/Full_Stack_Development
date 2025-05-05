// clouser topics

// clouseris related to function...

// this is the parent function
const justFunction = () => {
  let n = "mehfooz"; // this goig to garbage

  return () => {
    // this is the child function of the parent function
    console.log(n);
  };
};

// this is the one way of the calling the function
console.log(justFunction()());

// this is the one way to invoke the functions

/*
const ans = justFunction();

ans();
*/
