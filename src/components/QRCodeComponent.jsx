// v1;
// import React from 'react';
// import QRCode from 'qrcode.react';

// function QRCodeComponent(props) {
//   return <QRCode value={props.content}></QRCode>;
// }


// export default QRCodeComponent;
// ----------------------------------------------------------------------------------------------------------------
// v2;

// import React, { useState } from 'react';
// import QRCode from 'qrcode.react';

// function QRCodeComponent() {
//   const [value, setValue] = useState('');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   }

//   return (
//     <div>
//       <input type="text" value={value} onChange={handleChange} />
//       <br />
//       <br />
//       <QRCode value={value} size={boyut}/>
//     </div>
//   );
// }

// export default QRCodeComponent;

// ----------------------------------------------------------------------------------------------------------------
// v3;

import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function QRCodeComponent() {
  const [value, setValue] = useState('');
  const [qrSize, setQRSize] = useState(128);

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleQRSizeChange = (event) => {
    setQRSize(parseInt(event.target.value));
  };

  return (
    <div>
      <div className='input-group mb-3'>
      <label htmlFor="qr-value" className='input-group-text'>QR Kodu İçeriği:</label>
      <input
        type="text"
        id="qr-value"
        value={value}
        onChange={handleValueChange}
        className='form-control'
      />
      
      <br />
      
      <label htmlFor="qr-size" className='input-group-text'>QR Kodu Boyutu:</label>
      <input
        type="number"
        id="qr-size"
        min="32"
        max="512"
        value={qrSize}
        onChange={handleQRSizeChange}
        className='form-control'
      /></div>
      <br />
      <QRCode value={value} size={qrSize} />
    </div>
  );
}

export default QRCodeComponent;
