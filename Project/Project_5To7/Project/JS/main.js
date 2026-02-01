import { Navbar, Footer } from '../Components/Navbar.js';
import { navigate } from './route.js';

// Render navbar & footer
document.querySelector('header').innerHTML = Navbar();
document.querySelector('footer').innerHTML = Footer();

// function capitalizeFirstLetter(string) {
//   if (!string) return string; // Handle empty or null strings
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// Event delegation for routing
document.addEventListener('click', (e) => {
  const route = e.target.dataset.route;
  console.log('🚀 ~ route:first', route);
  if (!route) return;
  //   let valueCapitalize = capitalizeFirstLetter(route);

  e.preventDefault();
  navigate(route);
});

// Initial route
const initialRoute = location.pathname.replace('/', '') || 'index.html';
console.log('🚀 ~ initialRoute:', initialRoute);
navigate(initialRoute);
