// here we are useing this for after document [html] load and then jquery and script load.

/* 
         $(document).ready(function () { } <-- this code 
        
            $(function () { }) <-- this is short code.
        
         */

$(document).ready(function () {
  // console.log($); // THIS IS $-> REPRESENT FOR JQUERY.

  // $('selector').action()
  //$('p').click() // so here we are doing click on p

  $('p').click(function () {
    console.log('you just click me on p', this);
    // here we are just hidde the p elements
    // below property is just grap all the p tag and apply the action on it. so what we can do for this bug so this wee have use this key word to prevent this bug...
    // $('p').hide()
    // here we are prevent the bug when we get that.
    //  $(this).hide()
  });

  // here we have the 3 main selector

  /*
        1. element selector -> above this code os precents
        2. id selector -> here we have to  try...
        3. class selector
        */

  //  2. id selector  -> here we have to  try...

  //$('#one').click();

  // 3. class selector

  //$('.odd').click();

  /* other selectors */

  //$('*').click(); //-> select all the elements

  //$('p.odd').click(); // this will select all the 'p' element which have class 'odd'

  // here we have to learn about events

  /* 
    mouseEvents= click, dbclick, mouseEnter, mouseLeave
    keyboardEvents= keypress, keydown, mediaKeyStatusMap
    formEvents= sumbit, change, focus, blur
    document/window events= load, resize, scroll, unload
 
*/
});
