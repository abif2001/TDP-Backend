import {useState} from 'react';

function DataFromWeb(){
    let[records, serRecords]=useState([])

    function getDataFromResponse(Data){
        setRecords(Data)
    }
    function processResponse(response){
        let jsonPromise= response.json()
        jsonPromise.then(getDataFromResponse)
    }

    let responsePromise = fetch('http://jsonplaceholder.typicode.com/comments')
    responsePromise.then(processResponse)

    return(
        <>
            <h1> Hello Web</h1>
            <table>
                {
                    records.map((rec) =>
                    <tr>
                        <td> {rec.name} </td>
                    </tr>
                    )
                }
            </table>
        </>
    )
}

export default DataFromWeb