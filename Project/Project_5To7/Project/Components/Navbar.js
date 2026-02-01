const heroLogo = new URL('../UTILS/logo.webp', import.meta.url).href;

const footer_svg_logo = new URL(
  '../UTILS/temp/footer_Logo.svg',
  import.meta.url,
).href;
const facebook_logo = new URL(
  '../UTILS/temp/facebook-logo.png',
  import.meta.url,
).href;
const github_logo = new URL('../UTILS/temp/github-logo.png', import.meta.url)
  .href;
const google_logo = new URL('../UTILS/temp/google.png', import.meta.url).href;
const youtube_logo = new URL('../UTILS/temp/youtube.png', import.meta.url).href;
const linkdin_logo = new URL('../UTILS/temp/linkdin.png', import.meta.url).href;

export const Navbar = () => {
  return `        
        <section class="logo">
            <img src=${heroLogo} alt="">
        </section>
        <section class="page_route">
            <ul>
                <li><a data-route="index" name="home" href="#">home</a></li>
                <li><a data-route="about" name="about" href="#">about</a></li>
                <li><a data-route="contact" name="contact" href="#">contact</a></li>
                <li><a data-route="help" name="help" href="#">help</a></li>
            </ul>
        </section>
        <section class="btn_sign_login">
            <button data-route="login" name="login" class="login">login</button>
            <button data-route="signup"  name="signup" class="signup">signup</button>
        </section>

    `;
};

export const Footer = () => {
  return `
    <section class="footer">
        <section class="footer_logos">
            <img src="${footer_svg_logo}" alt="footer-logo">
        </section>
        <section class="footer_text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, illo.adipisicing
            elit. Saepe, illo.adipisicing elit. Saepe, illo.
        </section>
        <section class="social_logo">
            <img src="${facebook_logo}" alt="facebook-logo">
            <img src="${github_logo}">
            <img src="${google_logo}" alt="google">
            <img src="${youtube_logo}" alt="youtube-logo">
            <img src="${linkdin_logo}" alt="linkdin">
        </section>
    </section>
    `;
};
