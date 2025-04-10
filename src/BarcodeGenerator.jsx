
import React, { useState } from 'react';
import Barcode from 'react-barcode';

const BarcodeGenerator = () => {
    const [value, setValue] = useState('123456789012');

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Barcode Generator</h2>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter barcode value"
            />
            <div style={{ marginTop: '20px' }}>
                <Barcode value={value} />
            </div>
        </div>
    );
};

export default BarcodeGenerator;
