const btn_Add = document.querySelector(".add_btn");

const api = `http://localhost:3000/todo`; // # api_base_UI...


/* 

    get - done
    post - done
    put 
    patch 
    delete 

*/

btn_Add.addEventListener("click", async () => {
    const value_todo = document.querySelector("#todoVal").value;

    const dataObj = {
        id: Date.now(),
        todo: value_todo,
        isEdits: false,
        isCompleted: false
    }

    try {
        let res = await fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataObj)
        })
        read_Todo();
    } catch (error) {
        console.log('🚀 ~ error:', error);
    }
    document.querySelector("#todoVal").value = "";
})


const read_Todo = (store) => {
    console.log('🚀 ~ store:', store);
    const mainDiv = document.querySelector("#todo_list");

    mainDiv.innerHTML = "";

    store.forEach((el) => {
        const todoDiv = document.createElement("div");
        const textTodo = document.createElement("h4");
        const input_is_completes = document.createElement("input");
        const btn_edits = document.createElement("button");
        const btn_delete = document.createElement("button");

        // this is edit elements start 

        const inputEdit = document.createElement('input');
        const btn_cancel = document.createElement("button");
        const btn_confirm = document.createElement("button");

        inputEdit.value = el.todo;
        inputEdit.name = "change_edit_input"


        btn_cancel.innerText = "cancel"
        btn_confirm.innerText = "confirm"


        // this is edit elements end 


        // actual code 
        textTodo.innerText = el.todo;

        input_is_completes.type = "checkbox";
        input_is_completes.name = "complete_input";

        todoDiv.className = "todo_divs";

        btn_delete.innerText = "delete";
        btn_delete.className = "btn_isDelete";

        // delete functionality

        btn_delete.addEventListener('click', () => {
            deleteFunction(el.id);
        })

        btn_edits.innerText = "edit";
        btn_edits.className = "btn_isEdit";

        btn_cancel.addEventListener("click", () => {
            cancelHandel(el.id);
        });

        // logic to hide.

        textTodo.className = el.isEdits ? "hideData" : "showData";
        inputEdit.className = el.isEdits ? "showData" : "hideData";

        // btn logic

        btn_edits.className = el.isEdits ? "hideData" : "showData btn_isEdit";
        btn_cancel.className = el.isEdits ? "showData btn_isDelete" : "hideData";

        btn_delete.className = el.isEdits ? "hideData" : "showData btn_isDelete";
        btn_confirm.className = el.isEdits ? "showData btn_isEdit" : "hideData";


        btn_edits.addEventListener('click', () => {
            editFunction(el.id);
        })

        todoDiv.append(input_is_completes, textTodo, inputEdit, btn_edits, btn_delete, btn_cancel, btn_confirm);
        mainDiv.append(todoDiv);
    });

}

const cancelHandel = (id) => {
    const editData = store.map((el) => {
        return el.id === id ? { ...el, isEdits: false } : el

    })
    store = editData;
    localStorage.setItem("todos", JSON.stringify(store));
    read_Todo();
}


const editFunction = (id) => {
    // console.log('🚀 ~ id:', id);
    const editData = store.map((el) => {
        return el.id === id ? { ...el, isEdits: true } : el;
    })
    // console.log('🚀 ~ editData:', editData);
    store = editData;
    localStorage.setItem("todos", JSON.stringify(store));
    read_Todo();

}

const deleteFunction = (id) => {
    const updateDel = store.filter((el) => el.id !== id);

    store = updateDel;
    localStorage.setItem("todos", JSON.stringify(store))
    read_Todo();
    // console.log('🚀 ~ updateDel:', updateDel);
}

window.onload = async () => {
    try {
        let res = await fetch(api);
        let data = await res.json();
        read_Todo(data);
    } catch (error) {
        console.log('🚀 ~ error_onload:', error);
    }
}