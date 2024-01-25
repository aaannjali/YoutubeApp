import React from 'react';
import Buttton from './Buttton';

const ButtonList = () => {
  const allButtonNames = ["All", "Live", "Songs", "Live", "Mixs", "Cricket", "Valentines", "Cooking", "News", "Gaming","computer science", "javascript","story","history","play","movies"];

  return (
    <div className='flex flex-wrap'>
      {allButtonNames.map((buttonName, index) => (
        <Buttton key={index} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
