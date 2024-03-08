import React from 'react';

const CategoryBox = ({category}) => {
  const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid black',
    borderRadius: '5px',
    height: '100px',
    width: '100px',
    cursor: 'pointer',
  }

    return (
      <div style={boxStyle}>
        <p style={{textAlign:'center'}}>{category?.title}</p>
      </div>
    );
  };

export default CategoryBox;
