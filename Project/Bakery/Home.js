const api = `http://localhost:3000/products`;

/* 
/products?q=nike

/products?category=shoes

/products?title=Nike Shoes

*/


// let Api = `http://localhost:3000/product?_page=4&_limit=5`;


const storage = JSON.parse(sessionStorage.getItem('category'));

const countCategory = () => {

    let filterSelect = document.querySelector("#filter");

    Object.keys(storage).map((key) => {
        let options = document.createElement('option');
        options.value = key;
        options.innerText = key;
        filterSelect.append(options);
    });


}

countCategory();

const ApiCall = () => {
    fetch(api)
        .then((res) => res.json())
        .then((res) => {
            let category = res.map((el) => el.category)
            const countCategory = category.reduce((acc, fruit) => {
                acc[fruit] = (acc[fruit] || 0) + 1;
                return acc;
            }, {});

            sessionStorage.setItem('category', JSON.stringify(countCategory))
            appendsFunc(res);
        })
        .catch((err) => console.log(err));
};

const appendsFunc = (data) => {
    let dataShow = document.getElementById('info');
    dataShow.innerHTML = ''
    data.forEach((element) => {
        let cardDiv = document.createElement('div');
        let title = document.createElement('h4');
        let price = document.createElement('h3');
        let description = document.createElement('h6');
        let category = document.createElement('h3');
        let img = document.createElement('img');
        let rating = document.createElement('div');
        let rate = document.createElement('h3')
        let count = document.createElement('h3');
        let id = document.createElement('h3');


        cardDiv.className = 'card_div';
        description.className = "text_div";
        title.className = "title_div";
        rating.className = "reating_1"

        img.src = element.image;
        title.innerText = element.title;
        price.innerText = ` price : ${element.price}`;
        category.innerText = `category : ${element.category}`;
        description.innerText = element.description;
        rate.innerText = `Rate : ${element.rating.rate}`;
        count.innerText = `count : ${element.rating.count}`;
        id.innerText = `id : ${element.id}`;

        rating.append(rate, count);
        cardDiv.append(img, id, title, price, category, description, rating);

        dataShow.append(cardDiv);
    });

};

const searchFunc = async () => {
    console.log('🚀 ~ i am invoked :');

    let search = document.querySelector("#search").value;
    console.log('🚀 ~ search:', search);
    try {
        let res = await fetch(api);
        let data = await res.json()
        let searchArr = data.filter((el) => {
            return search === el.category || search === el.title;
        })
        console.log('🚀 ~ searchArr:', searchArr);
        appendsFunc(searchArr)
    } catch (error) {
        console.log('🚀 ~ error:', error);

    }
}
