import React from "react";
import CategoryBox from "./CategoryBox";
import GuessBox from "./GuessBox";

const Grid = ({categories, selectBox, actors}) => {

    const gridStyles = {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
    }

    return (
      <div style={gridStyles}>
        <div>
          {categories[0] && <CategoryBox category={categories[0]} /> } {/* This is the general category */}
          {categories[1] && <CategoryBox category={categories[1]} /> } {/* This is the specific category */}
          {categories[2] && <CategoryBox category={categories[2]} /> } {/* This is the specific category */}
          {categories[3] && <CategoryBox category={categories[3]} /> } {/* This is the specific category */}
        </div>
        <div>
          {categories[4] && <CategoryBox category={categories[4]} /> } {/* This is the specific category */}
          <GuessBox actor={actors[0]} selectBox={()=>selectBox(0)}/>
          <GuessBox actor={actors[1]} selectBox={()=>selectBox(1)}/>
          <GuessBox actor={actors[2]} selectBox={()=>selectBox(2)}/>
        </div>
        <div>
          {categories[5] && <CategoryBox category={categories[5]} /> } {/* This is the specific category */}
          <GuessBox actor={actors[3]} selectBox={()=>selectBox(3)}/>
          <GuessBox actor={actors[4]} selectBox={()=>selectBox(4)}/>
          <GuessBox actor={actors[5]} selectBox={()=>selectBox(5)}/>
        </div>
        <div>
          {categories[6] && <CategoryBox category={categories[6]} /> } {/* This is the specific category */}
          <GuessBox actor={actors[6]} selectBox={()=>selectBox(6)}/>
          <GuessBox actor={actors[7]} selectBox={()=>selectBox(7)}/>
          <GuessBox actor={actors[8]} selectBox={()=>selectBox(8)}/>
        </div>
      </div>
    );
  };
  
  export default Grid;