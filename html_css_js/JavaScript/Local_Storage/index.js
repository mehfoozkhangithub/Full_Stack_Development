let dataBase = JSON.parse(localStorage.getItem('formData')) || []// json -> object -> parse
console.warn('-> ~ dataBase:', dataBase);

// [{},{}]
function formFunctions(e) {
    e.preventDefault()

    let name = document.querySelector('#userName').value;
    let email = document.querySelector('#userEmail').value;
    let pass = document.querySelector('#userPass').value;
    if (name.length === 0 || email.length === 0 || pass.length === 0) {
        alert("please fill inputs!!!!!");
        return
    };
    //  try with session storage

    let personData = {
        id: Date.now(),
        name,
        email,
        pass,
    }
    dataBase.push(personData)

    localStorage.setItem("formData", JSON.stringify(dataBase))// object to json -> stringify
    UI()

}


function UI() {
    const mainDiv = document.querySelector("#infoTable");
    mainDiv.innerHTML = '';

    let table = document.createElement('table');
    let tHead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr')
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let th4 = document.createElement("th");
    let th5 = document.createElement("th");
    let th6 = document.createElement("th");

    th1.innerText = 's.no';
    th2.innerText = 'id';
    th3.innerText = 'name';
    th4.innerText = 'email';
    th5.innerText = 'pass';
    th6.innerText = 'buttons';

    dataBase.map((el, i) => {
        // # table data creating

        let tr2 = document.createElement('tr')
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');

        td1.innerText = i + 1;
        td2.innerText = el.id;
        td3.innerText = el.name;
        td4.innerText = el.email;
        td5.innerText = el.pass;
        editBtn.innerText = `edit`;
        deleteBtn.innerText = `delete`;

        editBtn.classList.add('edit-btn')
        deleteBtn.classList.add('delete-btn')

        td6.classList.add('td-6')


        td6.append(editBtn, deleteBtn)

        tr.append(th1, th2, th3, th4, th5, th6);
        tHead.append(tr)
        tr2.append(td1, td2, td3, td4, td5, td6);
        tbody.append(tr2)
        table.append(tHead, tbody);

        mainDiv.append(table);
    })

    /* 
    serial number
    id
    name
    email
    pss
    
    */




}



/* let dataBase = [
    { id: 1, name: 'khushi', age: 99, location: 'dubai' },
    { id: 2, name: 'hetuk', age: 99, location: 'londan' },
    { id: 3, name: 'sai', age: 99, location: 'china' },
    { id: 4, name: 'siraj', age: 99, location: 'india' },
]
console.log(dataBase[0]) */