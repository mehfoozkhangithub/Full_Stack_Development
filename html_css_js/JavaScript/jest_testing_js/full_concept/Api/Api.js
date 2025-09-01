
export function apiCall(api) {
    let result = fetch(api)
        .then((res) => res.json())
        .then((res) => res)
        .catch((err) => {
            console.log(err);
        });
    return result;
}

// imaaag