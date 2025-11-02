let count = 0;
let interval;

onmessage = function (event) {
    if (event.data === 'start') {
        // Start counting
        interval = setInterval(() => {
            count++;
            postMessage(count); // send count back to main thread
        }, 500); // every 500ms
    } else if (event.data === 'stop') {
        clearInterval(interval); // stop counting
    }
};

