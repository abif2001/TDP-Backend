function displayData(records){
    console.log(records)
}

function processResponse(response){
    let p2 = response.json()
    p2.then(displayData)
}

let P = fetch('http://jsonplaceholder.typicode.com/comments')

P.then(processResponse)