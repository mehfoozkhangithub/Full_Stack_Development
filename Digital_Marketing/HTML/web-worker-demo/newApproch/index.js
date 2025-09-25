// Check if browser supports Web Workers
if (window.Worker) {
    let worker = new Worker('worker.js'); // Link to worker script

    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const countEl = document.getElementById('count');

    // Start worker
    startBtn.addEventListener('click', () => {
        worker.postMessage('start'); // send message to worker
    });

    // Stop worker
    stopBtn.addEventListener('click', () => {
        worker.postMessage('stop');
    });

    // Receive message from worker
    worker.onmessage = function (event) {
        console.log('🚀 ~ event:', event);
        countEl.innerText = event.data;
    };
} else {
    alert('Your browser does not support Web Workers.');
}




