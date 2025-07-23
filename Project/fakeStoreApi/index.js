const bodys = document.querySelector('body');

// api

const api = `https://fakestoreapi.com/products`

const ApiCall = async () => {
    /* 
    # sync
    fetch(api)
         .then((response) => response.json())
         .then((response) => console.log(response))
         .catch((err) => console.log(err)) 
    */
    try {
        let response = await fetch(api);
        let data = await response.json()
        UserInterFace(data);
    } catch (error) {
        console.error('-> ~ ApiCall ~ error:', error);
    }
}

// window.onload = ApiCall()

const UserInterFace = (value) => {
    const AllData = document.querySelector('#allData');
    value && value.forEach(element => {
        console.warn('-> ~ UserInterFace ~ element:', element);
        const div = document.createElement("div");
        const img = document.createElement("img");
        const id = document.createElement('h4');
        const description = document.createElement('h5');
        const category = document.createElement('h6');
        const price = document.createElement('p');
        const title = document.createElement('p');
        const rate = document.createElement('p');
        const count = document.createElement('p');


        div.className = 'card-div'
        // # we are putting the value on the elements tag's
        count.innerText = element.rating.count;

        img.src = element.image;

        id.innerText = element.id;

        description.innerText = element.description;

        category.innerText = element.category;

        price.innerText = element.price;

        title.innerText = element.title;

        rate.innerText = element.rating.rate;


        div.append(img, id, category, price, rate, count, title, description);

        AllData.append(div);
    });

}

bodys.addEventListener("load", ApiCall());
