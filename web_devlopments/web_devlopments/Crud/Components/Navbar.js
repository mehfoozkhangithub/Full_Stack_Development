export const Navbar = () => {
  return `
        <nav style="display: flex; justify-content: space-evenly; align-items: center; border: 1px solid gray;">
            <div>
                <img width="100" height="100%" src="../utils/react-logo-svgrepo-com.svg" alt="">
            </div>
            <ol
                style="display: flex; list-style: none; gap: 30px; text-transform: capitalize; font-weight: 600; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                <button id="form" style="cursor:pointer">form</button>
                <button id="all_data" style="cursor:pointer">all data</button>
            </ol>
            <button style="padding: 7px 15px;">login / logout</button>
        </nav>
    `;
};

// here we are routing the page

/* export const formPage = () => {
  window.location.pathname = 'Crud/index.html';
};

export const all_dataPage = () => {
  window.location.pathname = 'Crud/AllData.html';
};
 */

export let pages = {
  home: `<form action="#" style="display: flex; flex-direction: column; width: 40%; gap: 10px; justify-self: center; margin: 15px 0;">
        <label for="email">email</label>
        <input id="email" type="email" placeholder="enter your email...">
        <label for="pass">password</label>
        <input id="pass" type="password" placeholder="enter your pass...">
        <fieldset>
            <legend>gender</legend>
            <label for="male">male</label>
            <input name="gender" id="maleGender" type="radio" value="male">
            <label for="female">female</label>
            <input name="gender" id="femaleGender" type="radio" value="female">
        </fieldset>
        <label for="country">country</label>
        <select name="country" id="country">
            <option value="">none</option>
            <option value="india">india</option>
            <option value="china">china</option>
            <option value="afganistan">afganistan</option>
        </select>
        <div style="display: flex; justify-content: space-between;">
            <label for="">please check befor you submit</label>
            <input id="watchman" type="checkbox">
        </div>

        <!-- <input id="btn" type="submit" value="submit"> -->
        <button type="submit" id="btn">submit</button>
    </form>`,
};
