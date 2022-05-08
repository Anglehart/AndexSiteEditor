export default function getProductsList(offset, limit) {
    console.log(offset, limit)
    const params = {
        offset: offset,
        limit: limit,
    };

    return fetch('http://localhost:3000/get-products-list', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(params)
    })
    .then((response) => {
        return response.json();
    })
}
