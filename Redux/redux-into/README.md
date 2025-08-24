# Intro `Redux`

## History of Redux, MVC pattern Flux

- MVC (Model View Controller) Architecture pattern.

![MVC](https://github.com/mehfoozkhangithub/Full_Stack_Development/blob/main/Redux/redux-into/public/image-0.png?raw=true)

- MVC Pattern
  1. **view** = Someting that the user sees and interacts within an application. Apresentational layer, UI logic.
  1. **model** = Contains the dtate/data related logic that runs the application. it can be independent too, without views.
  1. **ocontroller** = Interface between the model and views. it interacts with the views and updates the model. External actions can trigger the controller too.

1. _`View`_
   ![VIEW](https://github.com/mehfoozkhangithub/Full_Stack_Development/blob/main/Redux/redux-into/public/image-1.png?raw=true)
1. _`Model`_
   ![MODEL](https://github.com/mehfoozkhangithub/Full_Stack_Development/blob/main/Redux/redux-into/public/image-2.png?raw=true)
1. _`Controller`_
   ![CONTROLLER](https://github.com/mehfoozkhangithub/Full_Stack_Development/blob/main/Redux/redux-into/public/image-3.png?raw=true)

> note : the issue arrise in `mvc` pattern **scalability issue** of in this structue.

![SCALABILITY-ISSUE](https://github.com/mehfoozkhangithub/Full_Stack_Development/blob/main/Redux/redux-into/public/image-4.png?raw=true)

> watch this [![YouTube Video](https://img.youtube.com/vi/nYkdrAPrdcw/hqdefault.jpg)](https://youtu.be/nYkdrAPrdcw)

# _**`Flux`**_

![FLUX](https://github.com/mehfoozkhangithub/Full_Stack_Development/blob/main/Redux/redux-into/public/image-5.png?raw=true)

# _**`Flux with React`**_

![FLUX WITH REACT](https://github.com/mehfoozkhangithub/Full_Stack_Development/blob/main/Redux/redux-into/public/image-6.png?raw=true)

# _**`MVC vs Flux`**_

![MVC vs FLUX](https://github.com/mehfoozkhangithub/Full_Stack_Development/blob/main/Redux/redux-into/public/image-7.png?raw=true)

# _**`journy`**_

![JOURNY](https://github.com/mehfoozkhangithub/Full_Stack_Development/blob/main/Redux/redux-into/public/image-8.png?raw=true)

# What basically redux is?

![REDUX](https://github.com/mehfoozkhangithub/Full_Stack_Development/blob/main/Redux/redux-into/public/image-9.png?raw=true)

> Since, Reduxisn't related to Rect itself, it can be used with plain js and direct DOM updates, as wll as with other Front-End or Backend frameworks like AngularJS, EmberJS, VueJS, etc...

Q.1 why should we used redux?

- central state management.
- debugging
- performance optimization
- separation of concerns[clean code].
- resolve scaling complexity

Q.2 when should we use redux?

- you have large amounts of application state, that are needed in many place in this app.
- the app state is updated frequently
- the logic to update that state may be complex
- the app has a medium or large-size codebase, and might be worked on by many people
- you need to see how that stae is being updated over-time.

## core of redux

1. action
1. dispatch
1. reducer
1. store

#### Install `redux` and build the counter app.

1. install the 'redux' library, using `npm install redux`.
2. create the folder structure.
   - Redux folder
     - action.js
     - reducer.js
     - store.js
3. create the store file contents.
4. create the reducer file contents.
