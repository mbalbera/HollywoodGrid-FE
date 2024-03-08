const getActorList = async(string) => {
    // const body = {
    //     string
    // }
    // const resp = await fetch(`${API_URL}/get_actor`,{
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({body})
    // })
    // const data = resp.json()
    // if (data.status === 'success'){
    //     return {status:'success', result: data.result}
    // }
    // else{
    //     return {status:data.status}
    // }
    const fake_response = {
        "status": "success",
        "result": [
            {name: "Tom Cruise", id: 0},
            {name: "Tom Hanks", id: 1},
            {name: "Tom Hardy", id: 2},
            {name: "Tom Holland", id: 3},
            {name: "Tom Selleck", id: 4},
            {name: "Tom Arnold", id: 5},
            {name: "Tom Berenger", id: 6},
            {name: "Tom Green", id: 7},
            {name: "Tom Skerritt", id: 8},
            {name: "Tom Welling", id: 9}
        ]
    }
    return fake_response.result
}

export default getActorList
