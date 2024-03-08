const checkAnswer = async({cat1, cat2, actorId}) => {
    // const body = {
    //     cat1,
    //     cat2,
    //     actorId
    // }
    // const resp = await fetch(`${API_URL}/check_answer`,{
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({body})
    // })
    // const data = resp.json()
    // if (data.status === 'success'){
        // return {status:'success', guessStatus: data.guessStatus, actor: data.actor}
    // }
    // else{
    //     return {status:data.status}
    // }
    return {status:'success', guessStatus: 'correct', actor: {name: 'Tom Cruise', id: 0}}
}
