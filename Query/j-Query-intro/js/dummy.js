// here we are useing this for after document [html] load and then jquery and script load.

/* 
       todo  $(document).ready(function () { } <-- this code 
        
       todo  $(function () { }) <-- this is short code.
        
*/

$(document).ready(function () {
  // console.log($); // THIS IS $-> REPRESENT FOR JQUERY.

  // $('selector').action()
  //$('p').click() // so here we are doing click on p

  /*   $('p').click(function () {
    // console.log('you just click me on p', this);
    //* here we are just hidde the p elements
    //* below property is just grap all the p tag and apply the action on it. so what we can do for this bug so this wee have use this key word to prevent this bug...
    // $('p').hide()
    //* here we are prevent the bug when we get that.
    //  $(this).hide()
  });
 */
  //todo here we have the 3 main selector

  /*
      ?  1. element selector -> above this code os precents
      ?  2. id selector -> here we have to  try...
      ?  3. class selector
*/

  //!  2. id selector  -> here we have to  try...

  //$('#one').click();

  //* 3. class selector

  //$('.odd').click();

  //* other selectors

  //$('*').click(); //-> select all the elements

  //$('p.odd').click(); // this will select all the 'p' element which have class 'odd'

  //* here we have to learn about events

  /* 
   ? mouseEvents= click, dbclick, mouseEnter, mouseLeave
   ? keyboardEvents= keypress, keydown, mediaKeyStatusMap
   ? formEvents= sumbit, change, focus, blur
   ? document/window events= load, resize, scroll, unload
*/
  /*
  $('p').dblclick(function () {
    console.log(`this is double click`, this);
  });

  $('p').mouseenter(function () {
    console.log(`this is double click`, this);
  });

  $('p').mouseenter(function () {
    console.log(`this is double click`, this);
  });
*/
  //? we can write this for multiple function on it sam jQuery syntex...

  /*  $('p').hover(
    function () {
      console.log(`this is double click`, this);
    },
    function () {
      console.log('thanks for comming...');
    }
  ); */

  //! here we are doing the on-methods...

  $('p').on({
    click: function () {
      console.log('thanks for clicking', this);
    },
    mouseleave: function () {
      console.log('thanks for leaving...');
    },
  });

  //? here we have to hide and show the div

  /*   $('#wiki').hide(1000, function () {
    console.log('hide the div');
  });

  $('#wiki').show(1000, function () {
    console.log('hide the div');
  }); */

  // here we are toggle the button to 'hide ' and 'show' data of div..
  /*   $('#toggle').click(function () {
    $('#wiki').toggle(1000);
  }); */

  //todo task

  /* 
  fadeOut()
  fadeIn()
  fadeToggle()
  fadeTo()
  */

  // ? Slide method in speed and  call back function is optional

  $('#wiki').slideToggle(1000);
});
