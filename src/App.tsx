import { useState } from 'react';
import './App.css';
import ByteArray1 from './ByteArray1';

function hex(val) {
  return val.toString(16).toUpperCase().padStart(2, '0');
}

function App() {
  let ba = [0x1f, 0x6b, 0x3c];
  const [bytes, setBytes] = useState(ba);

  function addByte() {
    const newBa = [...bytes, 0x11];
    setBytes(newBa);
  }

  return (
    <>
      <div>
        <div className="controls"><img src="add.svg" onClick={addByte} /></div>
        <div className="byteContainer">
          <ByteArray1 bytes={bytes} setBytes={setBytes} />
        </div>
        <div>
          {bytes.map((b) => {
            return ' ' + hex(b);
          })}
        </div>
      </div>
    </>
  );
}
//<Bit value={1} pos={0} setBitByPos={xxx} />
//<Byte index={0} value={0xfa} setByteByIndex={xxx} />
//<ByteArray1 count={5} />

export default App;
