export default function getProductsList(offset, limit) {
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
        .catch(() => {
            return mock;
        })
}

const mock = [
    {"id":1,"name":"Штатив алюминиевый S6-2","price":"0.000000","image":"243.jpg"},
    {"id":2,"name":"Штатив алюминиевый SJA50","price":"0.000000","image":"1_11.jpg"},
    {"id":3,"name":"Штатив алюминиевый SJA60","price":"0.000000","image":"3_1.jpg"},
    {"id":4,"name":"Штатив деревянный SJW60","price":"0.000000","image":"1_SJW60.jpg"},
    {"id":5,"name":"Штатив фиберглассовый SJW50","price":"0.000000","image":"1_SJW50.jpg"},
    {"id":6,"name":"Штатив деревянный SJW30","price":"0.000000","image":"1_SJW30.jpg"},
    {"id":7,"name":"Отражатель однопризменный Optima (AK-18)","price":"0.000000","image":"Optima-1-min.jpg"},
    {"id":8,"name":"Минипризма с минивехой HDmini104 (EXTRA-GM)","price":"0.000000","image":"2_hdmini104.jpg"},
    {"id":9,"name":"Минипризма с минивехой HDmini103","price":"0.000000","image":"hdmini-103-03.jpg"},
    {"id":10,"name":"Отражатель пленочный ОП15-30","price":"0.000000","image":"1_____-15.jpg"},
    {"id":11,"name":"Отражатель пленочный ОП25-50","price":"0.000000","image":"1_____-25.jpg"},
    {"id":12,"name":"Отражатель пленочный ОП30","price":"0.000000","image":"1_____-30.jpg"},
    {"id":13,"name":"Отражатель пленочный ОП45-90","price":"0.000000","image":"1_____-45.jpg"},
    {"id":14,"name":"Отражатель пленочный ОП50","price":"0.000000","image":"1_____-50.jpg"},
    {"id":15,"name":"Отражатель пленочный ОП90","price":"0.000000","image":"1_____-90.jpg"},
    {"id":16,"name":"Тахеометр Leica TS06 plus R500 (снят с производства)","price":"0.000000","image":"42_Leica_TS06.jpg"},
    {"id":17,"name":"Тахеометр Leica TS06 plus R1000 (снят с производства)","price":"0.000000","image":"42_Leica_TS061.jpg"},
    {"id":18,"name":"Тахеометр Nikon DTM-322+ 5\" (снят с производства)","price":"0.000000","image":"7_Nikon_DTM-322.jpg"},
    {"id":19,"name":"Тахеометр Nikon DTM-322+ 2\" (снят с производства)","price":"0.000000","image":"7_Nikon_DTM-3221.jpg"},
    {"id":20,"name":"Тахеометр Nikon NPL-322+ 5\" (снят с производства)","price":"0.000000","image":"Nikon_NPL-322_20.jpg"}
]
