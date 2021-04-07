import React, {useState} from 'react';

function MainModal() {
    
    const [classes, setClasses] = useState('closedModal');

    
    return (
        <div className={classes + ' mainModal'}>
            
        </div>
    )    
}