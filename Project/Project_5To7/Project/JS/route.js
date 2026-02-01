const routes = {
  home: './index.html',
  login: './PAGES/Login.html',
  signup: './PAGES/Signup.html',
  contact: './PAGES/Contact.html',
  help: './PAGES/Help.html',
};

export async function navigate(route) {
  console.log('🚀 ~ route:second', route);
  const app = document.getElementById('app');

  if (!routes[route]) return;

  // Home is inline
  if (route === 'index') {
    app.innerHTML = routes.home;
    history.pushState({}, '', `/${route}.html`);
    return;
  }

  // Load HTML pages without reload
  const res = await fetch(routes[route]);
  const html = await res.text();
  console.log('🚀 ~ html:', html);

  history.pushState({}, '', `/${route}.html`);
}

// Handle browser back/forward
window.addEventListener('popstate', () => {
  const path = location.pathname.replace('/', '') || 'index';
  navigate(path);
});
