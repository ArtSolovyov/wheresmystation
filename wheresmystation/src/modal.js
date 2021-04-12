import React, {useState} from 'react';
import triangle from './images/triangle.png';

function MainModal({getModalState}) {

    const closeModal = () => {
        getModalState(false);
        const modal = document.querySelector('.mainModal');
        modal.classList.add('closedModal');
    }

    const openModal = (e) => {
        const modal = document.querySelector('.mainModal');
        if (e.target === modal && modal.classList.contains('closedModal')) {
         modal.classList.remove('closedModal');
         getModalState(true);
        }
    }

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