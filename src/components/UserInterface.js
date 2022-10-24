import { useEffect, useState } from "react";

export const Title = () => {
  const [visible, setVisible] = useState(true);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    if (!visible) {
      const showTipTimeout = setTimeout(() => {
        setShowTip(false);
      }, 5000);
      setShowTip(true);
      return () => clearTimeout(showTipTimeout);
    }
  }, [visible]);

  console.log(showTip);

  const handleShowTip = () => {
    if(showTip)
    return (
      <div className="absolute centered controls box3 text2">
      <div className="text2">
        <h2>--- To Calibrate Mouse --- </h2>
      <div className="text3">
        <p>Press ESC Key to Unlock Cursor</p>
        <p>Center Cursor On Red Crosshairs And Click</p>
      </div>
      </div>
      </div>)
  };

  const handleVisible = (e) => {
    setVisible(!visible);
  };

  return visible === true ? (
    <div>
      <div className="absolute centered">
      <div className="title">SandMine</div>
        <div className="box controls">
          <div>
            <h1 className="text">Controls:</h1>
            <div className="text">
              <table>
                <tr>
                  <th>Key</th>
                  <th>Actioin</th>
                </tr>
                <tr>
                  <td>W</td>
                  <td>Move Forward</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>Move Backward</td>
                </tr>
                <tr>
                  <td>A</td>
                  <td>Move Left</td>
                </tr>
                <tr>
                  <td>D</td>
                  <td>Move Right</td>
                </tr>
                <tr>
                  <td>Spacebar</td>
                  <td>Jump</td>
                </tr>
                <tr>
                  <td>Click</td>
                  <td>Place Block</td>
                </tr>
                <tr>
                  <td>Alt + Click</td>
                  <td>Delete Block</td>
                </tr>
                <tr>
                  <td>Numbers</td>
                  <td>Block Select</td>
                </tr>
                <tr>
                  <td>ESC</td>
                  <td>Unlock Cursor</td>
                </tr>
              </table>
            </div>
            <div className=" box text2">Press ESC Key to Unlock Cursor then Click Button
            </div>
            <button className="button text" onClick={(e) => handleVisible()}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="absolute instructions">
        <button className="text" onClick={(e) => handleVisible()}>
          Controls
        </button>
    </div>
      <div>
        {handleShowTip()}
      </div>
      <div className="absolute centered cursor">+</div>
    </div>

  );
}
