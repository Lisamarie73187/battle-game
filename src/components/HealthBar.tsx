import React from 'react';

interface IHealthBarProps {
    damage?: number
    method?: string
}

const HealthBar: React.FC<IHealthBarProps> = ({damage, method}) => {

    const calculateWidth = () => {
        return {
            width: '30vw'
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
