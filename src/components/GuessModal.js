import React, { useEffect } from 'react';
import { useState } from 'react';
import getActorList from '../utils/api/getActorList';
import ActorLine from './ActorLine';
import Modal from './Modal';

function GuessModal({handleGuess, closeModal}) {

    const [guess, setGuess] = useState('')
    const [actorList, setActorList] = useState([])

    const callActorList = async () => {
        const list = await getActorList(guess)
        setActorList(list)
    }

    useEffect(() => {
        if (guess.length > 2) {
          callActorList()
        }
        if(guess.length === 0){
          setActorList([])
        }
    }, [guess])

    const showList = () => {
        if(actorList.length > 0){
            let actorLines = []
            actorList.forEach((actor, idx) => actorLines.push(
                <ActorLine actor={actor} key={idx} submitGuess={()=>submitGuess(actor.id)}/>
            ))
            return <div style={{ height: '400px', overflowY: 'auto'}}>{actorLines}</div>
        }
    }
    const submitGuess = async (id) => {
       const result = await handleGuess(id)
       if(result === 'correct'){
         closeModal()
       }
    }
  return (
      <Modal closeModal={closeModal} title={'Enter Guess'}>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <input style={{width:'100%', marginBottom: guess > 2 ? 15:0, padding:5}} placeholder='enter actor or actress name' type="text" value={guess} onChange={(e)=>setGuess(e.target.value)}/>
            <div style={{width:'100%', marginTop:10}}>
              {actorList.length > 0 && showList()}
            </div>
          </div>
      </Modal>
  );
}

export default GuessModal;