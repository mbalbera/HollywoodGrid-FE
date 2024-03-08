import React from 'react';

const GuessBox = ({selectBox, actorBox}) => {

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

    if(actorBox?.actor?.id){
      return (
        <div style={boxStyle}>
          <img src={actorBox.actor.imgUrl} alt={actorBox.actor.name}/>
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