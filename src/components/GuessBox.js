import React from 'react';

const GuessBox = ({selectBox, actor}) => {

    const boxStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid black',
      borderRadius: '5px',
      height: '100px',
      width: '100px',
      cursor: 'pointer',
      marginBotton: '10px'
    }

    if(actor?.filled){
      return (
        <div style={boxStyle}>
          <img src={actor.actor.image} alt={actor.actor.name}/>
        </div>
      );
    }
    else{
        return (
          <div style={boxStyle} onClick={()=>selectBox()}>
            <h2>?</h2>
          </div>
        );
    }
  };

export default GuessBox;