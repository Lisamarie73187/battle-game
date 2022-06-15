import React, { FC, useState } from 'react';

interface IHealthBarProps {
    damage?: number
    method?: string
}

const HealthBar: FC<IHealthBarProps> = ({damage, method}) => {
  const [characterDead, setCharacterDead] = useState(false)

    const calculateWidth = () => {
      let percent = 100
      if(damage){
        percent = 100 - damage
      }
        return {
            width: `${percent}%`
        }
    }


  return (
       <div>
              <h4>Health</h4>
              <div className='healthBarWrapper'>
       <div style={calculateWidth()}/>
    </div>

    </div>
    
  );
}

export default HealthBar;
