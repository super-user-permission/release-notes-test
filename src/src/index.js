import { render } from '@testing-library/react';
import React, { useState } from 'react';

function ReactNewComponent() {
    const [data, setData] = useState('');

    return (
        <div>
            <span>New data</span>
        </div>
    )
}