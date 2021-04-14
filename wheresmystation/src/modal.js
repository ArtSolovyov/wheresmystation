import React, {useState} from 'react';
import triangle from './images/triangle.png';

function MainModal() {

    const closeModal = () => {
        document.querySelector('.mainModal').classList.add('closedModal');
    }

    const openModal = (e) => {
        if (e.target === document.querySelector('.mainModal') && document.querySelector('.mainModal').classList.contains('closedModal')) {
            document.querySelector('.mainModal').classList.remove('closedModal');
        }
    }

    const escListener = (e) => {
        if (e.key === 'Escape') {
            document.querySelector('.mainModal').classList.toggle('closedModal');
            console.log(1);
        }
    }

    document.removeEventListener('keydown', escListener);
    document.addEventListener('keydown', escListener);

    return (
        <>
        <div className='mainModal' onClick={(e) => openModal(e)}>
            <div className="welcomeMsg">International Space Station <span style={{color: "red"}}><br />GUI</span></div>
            <div className="btnWrapper" onClick={closeModal} style={{position: 'absolute', right: '0px', bottom: '0px', height: '140px', width: '140px'}}>
                    <img src={triangle} className="sbmtBtn" alt="triangle"></img>
                    <div className="sbmtText">CLOSE</div>
            </div>
        </div>
        <div className="overlay"></div>
        </>
    )
}

export default MainModal;