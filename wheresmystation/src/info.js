import React, {useState} from 'react';
import Api from './apiService';

const Info = () => {

    const [info, setinfo] = useState({});

    const getPeople = () => {
        Api.getInfo().then(src => setinfo(src))
    }

    if (!info.message) {
        getPeople();
    }

    const createBlock = () => {

        if (info.message) {
            let names = info.people.map(i => {
                return (
                    <li>{i.name}</li>
                )
            })

            return (
                <div>
                    <p style={{marginLeft: 'auto'}}>
                        Current crew: {info.number} astronauts:
                    </p>
                    <ol>
                        {names}
                    </ol>
                </div>
            )
        } else {
            return 'still loading';
        }
    }

    const block = createBlock();

    return (
        <div className='infoPanel'>
            <div className='info'>
                {block}
            </div>
        </div>
    )
}

export default Info;