import { useEffect, useState } from 'react';

export const Title = () => {
  const [visible, setVisible] = useState(true);

  const handleVisible = (e) => {
    setVisible(!visible);
  }

  console.log(visible)

  return (
    visible === true ? 
    <div className="absolute instructions" onClick={(e) => handleVisible()}>
      <div className='box'>
        <div className='title'>SandMine</div>
        <div className='controls'>
          <div className='calibration'>
            ** To calibrate click, place cursor on red crosshairs and click as close to the center as possible. To recalibrate, press ESC key and attempt again **
          </div>
          <ul>
            <li> W - Forward</li>
            <li> S - Back</li>
            <li> A - Left</li>
            <li> D - Right</li>
            <li> Spacebar - Jump</li>
            <li> Alt + Click - Delete Block</li>
            <li> Number Keys - Block Select</li>
            <li> Esc - Unlock Cursor</li>
          </ul>
          <button className='button2'>Play Now</button>
        </div>
      </div>
    </div>
    :
    <div className="absolute button">
      <button  onClick={(e) => handleVisible()}>Instructions</button>
    </div>
  )
}