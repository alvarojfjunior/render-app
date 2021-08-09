//Este irá impedir a renderização desnecessária, caso suas props não mudem.
import { memo } from 'react';

function Compoent1({setValue, value, name, color}) {
  console.log(name + ' was rendered.')
  return (
    <button style={{ color: '#fff', backgroundColor: color }} onClick={setValue}> {name} - {value} </button>
  );
}

export default memo(Compoent1);
