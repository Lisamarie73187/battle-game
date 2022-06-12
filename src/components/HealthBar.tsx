import React, { FC, useState } from 'react';

interface IHealthBarProps {
    damage?: number
    method?: string
}

const HealthBar: FC<IHealthBarProps> = ({damage, method}) => {

    const calculateWidth = () => {
        return {
            width: '100%'
        }
    }


  return (
    <div className='healthBarWrapper'>
        <h4>Health</h4>
       <div style={calculateWidth()}/>
    </div>
  );
}

export default HealthBar;
