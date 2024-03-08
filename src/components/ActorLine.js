import React from 'react';

const ActorLine = ({ actor, submitGuess, incorrectGuesses }) => {
    
    const showButton = () => {
        const alreadyGuessed = incorrectGuesses?.includes(actor.id)
        if(alreadyGuessed){
            return <button style={{ padding:10,backgroundColor: 'red', color:'white' }}>Wrong</button>
        }
        else{
            return <button onClick={()=>submitGuess()} style={{ padding:10,backgroundColor: 'green', color:'white', cursor:'pointer', border:'none', borderRadius:5  }}>Guess</button>
        }
    }

    return (
        <div>
            <div style={{display:'flex', justifyContent:'space-between', marginBottom:10, width:'100%', alignItems:'center'}}>
                <span>{actor.name}</span>
                {showButton()}
            </div>
            <hr/>
        </div>

    );
};

export default ActorLine;
