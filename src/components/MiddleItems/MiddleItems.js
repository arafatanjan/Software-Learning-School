import React, { useEffect, useState } from 'react';

const MiddleItems = () => {
    const [programs, setPrograms] = useState([]);
    useEffect(() => {
        fetch('program.JSON')
            .then(res => res.json())
            .then(data => console.log(data.slice(0, 4)));
    }, [])

    return (
        <div>
            {/* <h2>Our Services:{programs.length}</h2> */}
        </div>
    );
};

export default MiddleItems;