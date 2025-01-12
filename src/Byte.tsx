import { useState } from 'react';
import './Byte.css';
import Bit from './Bit';

function toInt(somebits) {
  return somebits.reduce((accumulator, bit, index) => {
    return (accumulator << 1) | bit;
  }, 0);
}

function toHex(someint) {
  return '0x' + someint.toString(16).toUpperCase().padStart(2, '0');
}

function Byte({ index, value, setByteByIndex }) {
  let bitarray = [0, 0, 0, 0, 0, 0, 0, 0];
  bitarray = [...Array(8)].map((x, i) => (value >> i) & 1).reverse();
  //const [bits, setBits] = useState(bitarray);

  function setBitByPos(pos, val) {
    let bitarray = [...Array(8)].map((x, i) => (value >> i) & 1).reverse();
    let newBits = bitarray.map((c, i) => {
      if (i === pos) {
        return val;
      } else {
        return c;
      }
    });
    let intValue = newBits.reduce((accumulator, bit, i) => {
      return (accumulator << 1) | bit;
    }, 0);
    setByteByIndex(index, intValue);
  }

  function showByte() {
    return (
      <div>
        {/*bits.map((bit, i) => (
          <span>{bit}</span>
        ))*/}
        {toHex(value)}
      </div>
    );
  }

  return (
    <>
      <div className="byte">
        <div className="bitrow">
          {bitarray.map((x, i) => (
            <Bit pos={i} value={x} setBitByPos={setBitByPos} />
          ))}
        </div>
        <div className="byteDisplay">{showByte()}</div>
      </div>
    </>
  );
}

export default Byte;
