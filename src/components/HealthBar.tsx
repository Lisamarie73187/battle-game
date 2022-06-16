import React from 'react';

interface IHealthBarProps {
    damage?: number
    method?: string
}

const HealthBar: React.FC<IHealthBarProps> = ({damage = 50, method = 'primal rage'}) => {

    const calculateWidth = () => {
      const percent = 100 - damage
        return {
            width: `${percent}`
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
