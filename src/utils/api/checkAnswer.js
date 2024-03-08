import apiHelper from "./apiHelper"
const checkAnswer = async({cat1, cat2, actorId}) => {
    // const body = {
    //     cat1,
    //     cat2,
    //     actorId
    // }
    // return apiHelper('/api/check-answer', 'POST', body, true)
    return {status:'success', guessStatus: 'correct', actor: {name: 'Tom Cruise', id: 0}}
}
export default checkAnswer
