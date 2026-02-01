function sum(a, b) {
  //   console.log(a + b);
  return a + b;
}

export function sub(a, b) {
  //   console.log(a + b);
  return a - b;
}

// this is name export multy function pattern
// export { sum, sub };

// this is for single default export pattern
export default sum;
// default export one or many function export via default pattern
// export default { sum, sub };

/* 
1.export 
        - default -> took any name in this format.
        - name -> but in this you should take only the give or assign name into it.
*/
