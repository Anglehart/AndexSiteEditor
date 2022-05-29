export default function getParser(url) {
    return fetch('http://localhost:3000/parse-page', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({url})
    })
    .then((response) => {
        return response.json();
    })
}
