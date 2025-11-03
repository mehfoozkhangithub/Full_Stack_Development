export const NavCom = (link_img) => {
  return `<div class="navbar">
        <div id="image">
            <img src=${link_img} alt="">
        </div>
        <div class="input">
            <input onchange="api_fetch()" type="text" placeholder="Search Shows and People" id="search-input">
            <div class="search_img">
                <!-- <img src="../TV_API/search.png" alt="serch"> -->
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>

        <div class="text">
            <h2 onclick="loginPage()">Login</h2>
            <h2>Register</h2>
        </div>
    </div>
    `;
};

export const LoginCom = (link_img) => {
  return `
    <div class="navbar">
        <div id="image">
            <img src=${link_img} alt="">
        </div>
        <div class="input">
            <input onchange="api_fetch()" type="text" placeholder="Search Shows and People" id="search-input">
            <div class="search_img">
                <!-- <img src="../TV_API/search.png" alt="serch"> -->
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>

        <div class="text">
            <h2 onclick="homePage()">Home</h2>
        </div>
    </div>
    `;
};
