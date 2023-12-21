import React from 'react';
import './Choice.css';

interface ChoiceProps {
  choice: any;
  handleClick: (choice: any) => void;
}

function Choice({ choice, handleClick }: ChoiceProps) {
  return (
    <div className='choice' onClick={() => handleClick(choice)}>
      {choice}
    </div>
  );
}

export default Choice;
