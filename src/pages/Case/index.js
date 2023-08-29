import React from 'react';
import { useParams } from 'react-router-dom';

const Case = () => {
    const { caseId } = useParams();

    console.log(caseId)

    return (
        <div>
                test
        </div>
    );
};

export default Case;
