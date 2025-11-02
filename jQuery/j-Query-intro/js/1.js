// here we are useing this for after document [html] load and then jquery and script load.

/* 
       todo  $(document).ready(function () { } <-- this code 
        
       todo  $(function () { }) <-- this is short code.
        
*/

$(document).ready(function () {
    /*  $('p').dblclick(function () {
         console.log(`this is double click`, this.innerText);
     });
 
     $("p").mouseenter(function () {
         console.log(`this is double click`, this.innerText);
     }); */
    // this is diffrence event 

    /*    $('p').on({
           click: function () {
               console.log('thanks for clicking', this);
           },
           mouseleave: function () {
               console.log('thanks for leaving...');
           },
       }); */
    /*  $('p').hover(
         function () {
             console.log(`this is double click`, this);
         },
         function () {
             console.log('thanks for comming...');
         }
     ); */

    //? here we have to hide and show the div

    // $('#wiki').hide(1000, function () {
    //     console.log('hide the div');
    // });


    // $('#wiki').show(1000, function () {
    //     console.log('hide the div');
    // });


    $('#toggle').click(function () {
        $('#wiki').toggle(1000);
    });



    // ? Slide method in speed and  call back function is optional

    /*  $('#wiki').slideDown(1000, function () {
         console.log('working');
     }); */

    $('#wiki').animate({ opacity: 0.1 }, 2000); // syn;tex-1
    $('#wiki').animate({ opacity: 0.1, height: '150px', width: '650px' }, 'slow');  // syntex-2 here we are useing 'slow' and 'fast'

});
