function waiting_msg_promis() {

    return new Promise((res, rej) => {
        setTimeout(() => {
            res("goatch you???")
        }, 2000)
    });
}

const async_await_show_msg_promis = async () => {

    console.log("start the task????");

    let msg = await waiting_msg_promis();

    console.log('🚀 ~ msg:', msg);

    console.log("finish the task!!!");

}

async_await_show_msg_promis();