// worker.js
self.onmessage = function (event) {
    let num = event.data;
    let result = 0;
    for (let i = 0; i < num; i++) {
        result += i;
    }
    self.postMessage(result); // send result back
};
