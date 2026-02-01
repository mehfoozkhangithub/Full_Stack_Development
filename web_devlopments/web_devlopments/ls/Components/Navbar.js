// export const sumOfTwoNumber = (a, b) => {
//   return a + b;
// };

// export const subOfTwoNumber = (a, b) => {
//   return a - b;
// };

// export { sumOfTwoNumber, subOfTwoNumber };

// name export

//=============================================//

// const sumOfTwoNumber = (a, b) => {
//   return a + b;
// };

// const subOfTwoNumber = (a, b) => {
//   return a - b;
// };

// export default { sumOfTwoNumber, subOfTwoNumber };

// default export

export const Navbar = () => {
  return `
 <div class="logo">
            <img src="https://fakestoreapi.com/icons/logo.png" height="60px" width="60px" alt="logo">
        </div>

        <ul>
            <li id="home">Home</li>
            <li>Products</li>
            <li id="contact">Contact</li>
        </ul>

        <ul>
            <li id="cartPage" style="position:relative; cursor:pointer;">
                <i class="bi bi-cart" style="font-size:22px;"></i>
                <span id="cartCount" class="cart-badge">0</span>
            </li>
            <li id="login">Login</li>
            <li id="signup">SignUp</li>
        </ul>
`;
};

export const myName = () => {
  return 'mehfooz khan';
};

export const signup = () => {
  window.location.pathname = 'ls/pages/signUp.html';
};
export const cartPage = () => {
  console.warn('i am invoked');
  window.location.pathname = 'ls/pages/cartPage.html';
};
export const login = () => {
  window.location.pathname = 'ls/pages/login.html';
};
