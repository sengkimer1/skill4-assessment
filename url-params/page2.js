function getURLParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        fullname: params.get('fullname'),
        age: params.get('age')
    };
}


window.onload = function() {
    const params = getURLParams();
    if (params.fullname && params.age) {
        document.getElementById('info').innerHTML = `Fullname: ${params.fullname}, Age: ${params.age}`;
    } else {
        document.getElementById('info').innerHTML = 'No data available';
    }
};