function myFunctions() {
  const edits = document.querySelector('#edits');
  edits.focus();
  edits.onkeydown = function (event) {
    console.log('-> event:', event);
    if (event.key === 'Enter') {
      const value = edits.value;
      console.log('Stored value:', value);
    }
  };
}
