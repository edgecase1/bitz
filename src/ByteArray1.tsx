import Byte from './Byte';

function ByteArray1({ bytes, setBytes }) {
  function setByteByIndex(index, value) {
    const newBytes = bytes.map((byte, i) => {
      if (i === index) {
        return value;
      } else {
        return byte;
      }
    });
    setBytes(newBytes);
  }

  return (
    <>
      {bytes.map((b, i) => (
        <Byte index={i} value={b} setByteByIndex={setByteByIndex} />
      ))}
    </>
  );
}

export default ByteArray1;
