/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Square from './Square'

function Board() {

const [state, setState] =useState(Array(9).fill(null));
const [isXTurn,setIsXTurn] =useState(true);


const CheckWinner = ()=>{
    const winner=[
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let logic of winner){
        const [a,b,c] = logic;
        if( state[a]!== null && state[a] === state[b] && state[a]===state[c]){
            return state[a];
        }
    }
    return false;
}


const isWinner = CheckWinner();


const handleClick = (index)=>{
   if(state[index] !== null){
    return;
   } 
   const copyState = [...state];
   copyState[index] = isXTurn ? 'X' : 'O'
   setState(copyState)
   setIsXTurn(!isXTurn);
}

const handleReset =()=>{
    setState(Array(9).fill(null));
}

  return (
<>
<h3 className=' flex justify-center items-center ml-96 mt-20 h-6 bg-zinc-800 rounded-md p-10 w-40 font-semibold text-orange-600'>{isXTurn ? "X" : "O"}: Its your Turn</h3>

    <div className='flex justify-center items-center  mt-28'>
{isWinner ? (
    <div>
      <div className='bg-orange-500 w-32 p-6 font-bold text-white'>  {isWinner}:won the game  </div>
        
         <button 
   
    onClick={handleReset}></button> </div>
):
    (
        <>



         <div className='board-row'>
            <Square onClick={()=> handleClick(0)} value={state[0]} />
            <Square onClick={()=>handleClick(1)} value={state[1]} />
            <Square onClick={()=>handleClick(2)} value={state[2]}/>
        </div>
        <div className='board-row'>
         <Square onClick={()=>handleClick(3)} value={state[3]} />
            <Square onClick={()=>handleClick(4)} value={state[4]} />
            <Square onClick={()=>handleClick(5)} value={state[5]} />
        </div>
        <div className='board-row'>
        <Square onClick={()=>handleClick(6)} value={state[6]} />
            <Square onClick={()=>handleClick(7)} value={state[7]} />
            <Square onClick={()=>handleClick(8)} value={state[8]} />
        </div>
        </>
    )}

       
      
    </div>
   

<button 
    className='h-12 w-44 bg-green-700 rounded-xl font-bold text-white ml-96'
    onClick={handleReset}>Reset Game</button>
    </>
  )
}

export default Board
