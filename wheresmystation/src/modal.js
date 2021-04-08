import React from 'react';
import triangle from './images/triangle.png';

function MainModal() {

    const closeModal = () => {
        const modal = document.querySelector('.mainModal');
        modal.classList.add('closedModal');
    }

    const openModal = () => {
        const modal = document.querySelector('.mainModal');
        return modal.classList.contains('closedModal') ? modal.classList.remove('closeModal') : null;
    }

    return (
        <div className='mainModal' onClick={openModal}>
            <div className="welcomeMsg">International Space Station <span style={{color: "red"}}><br />GUI</span></div>
            <div className="btnWrapper" onClick={closeModal} style={{position: 'absolute', right: '0px', bottom: '0px', height: '140px', width: '140px'}}>
                    <img src={triangle} className="sbmtBtn"></img>
                    <div className="sbmtText">OK</div>
            </div>
        </div>
    )
}

export default MainModal;