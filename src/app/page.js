"use client"
import React, { useEffect, useState } from 'react';
import Grid from '@/components/Grid';
import getCategories from '@/utils/api/getCategories';
import GuessModal from '@/components/GuessModal';
import checkAnswer from '@/utils/api/checkAnswer';

export default function Home() {
  const [categories, setCategories] = useState([])
  const [selectedBox, setSelectedBox] = useState(-1)
  const [actors, setActors] = useState([]);
  const [totalGuesses, setTotalGuesses] = useState(0)

  const createGrid = async() => {
    fillActors()
    let categories = await getCategories()
    setCategories(categories.categories)
  }

  const selectBox = (idx) => {
    setSelectedBox(idx)
  }

  const closeModal = () => {
    setSelectedBox(-1)
  }
  
  const fillActors = () => {
    let actors = []
    for(let i = 0; i < 9; i++){
      actors.push({actor: {}, incorrectGuesses: []})
    }
    setActors(actors)
  }

  const handleGuess = async (actorId) => {
    setTotalGuesses(totalGuesses + 1)
    const answer = await checkAnswer(actorId)
    if (answer.guessStatus === 'correct') {
      let newActors = actors.map((actorBox, idx) => {
        if (idx === selectedBox) {
          actorBox.actor = answer.actor
        }
        return actorBox
      })
      setActors(newActors)
    }
    else {
      let newActors = actors.map((actorBox, idx) => {
        if (idx === selectedBox) {
          actorBox.incorrectGuesses.push(actorId)
        }
        return actorBox
      })
      setActors(newActors)
    }
    return answer.guessStatus
  }

  useEffect(() => {
    createGrid()
    return 
  }, [])

  const getIncorrectGuesses = () => {
    if(selectBox !== -1){
      return actors.incorrectGuesses
    }
    else{
      return []
    }
  }
  return (
    <div>
      <div>
        <h1 style={{textAlign:'center'}}>Hollywood Grid</h1>
        <h3 style={{textAlign:'center'}}>Guesses used: {totalGuesses}/{9-totalGuesses}</h3>
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div style={{height:600}}>
          <Grid categories={categories} selectBox={selectBox} actors={actors}/>
        </div>
        {selectedBox >= 0 && <GuessModal 
                          incorrectGuesses={getIncorrectGuesses()}
                          handleGuess={handleGuess} 
                          closeModal={closeModal}
                        />
        }
      </div>
    </div>
  );
}