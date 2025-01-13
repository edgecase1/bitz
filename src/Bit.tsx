import './Bit.css';

function Bit({ pos, value, setBitByPos }) {
  function handleFlipClick(i) {
    if (value == 0) {
      value = 1;
    } else {
      value = 0;
    }
    setBitByPos(i, value);
  }

  return (
    <>
      <div className={`bit state${value ? "1" : "0"}`}
        onClick={() => {
          handleFlipClick(pos);
        }}
        title={8 - pos}
      >
        {value}
      </div>
    </>
  );
}

export default Bit;
