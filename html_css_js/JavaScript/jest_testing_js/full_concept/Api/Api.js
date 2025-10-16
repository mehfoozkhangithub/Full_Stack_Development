
export function apiCall(api_url) {
    let result = fetch(api_url)
        .then((res) => res.json())
        .then((res) => res)
        .catch((err) => {
            console.log(err);
        });
    return result;
}

// imaaag