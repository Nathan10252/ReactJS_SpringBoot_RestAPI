import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';

function CountryIndex() {
    return (
        <>
            <Helmet>
                <title>Country management</title>
            </Helmet>
            country index screen
        </>
    );
}

export default memo(CountryIndex);