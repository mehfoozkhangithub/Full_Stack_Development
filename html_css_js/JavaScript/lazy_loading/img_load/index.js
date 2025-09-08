
let product = [
    {
        image: "https://cdn.pixabay.com/photo/2019/11/03/11/25/macaron-4598410_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2019/12/06/08/24/gingerbread-4676903_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2021/12/09/14/22/christmas-6858261_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2018/05/21/20/55/sweet-3419470_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2016/01/07/10/23/cookie-1125527_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2019/12/15/17/06/chocolate-4697591_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2019/01/06/21/54/cookies-3918049_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2023/10/18/19/30/pastries-8324971_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2018/03/11/09/08/cookie-3216243_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/12/19/10/11/cardamom-snow-hugs-3027724_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2014/12/27/17/41/gingerbread-house-581300_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/12/10/18/58/christmas-cookies-3010597_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2016/11/28/10/27/christmas-cookies-1864668_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2021/12/08/12/42/christmas-cookies-6855639_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2013/02/12/22/51/bear-paws-80914_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2016/10/17/07/36/cookie-1747112_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2019/11/25/17/06/pastries-4652546_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2015/11/27/17/21/cookie-1065893_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2013/12/22/02/41/christmas-cookies-232095_1280.jpg",
    },
    {
        image: "https://cdn.pixabay.com/photo/2020/02/21/22/22/bake-4868916_1280.jpg",
    }
];


product.map((element) => {
    let mainDiv = document.querySelector(".container")
    let img = document.createElement('img');
    img.src = element.image;
    img.loading = "lazy";
    mainDiv.append(img)
})





