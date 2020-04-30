import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import Auth from '../Auth/Auth';
import styles from './Modal.module.scss';

export default class Modal extends Component {
    constructor(props) {
        super(props);
    }
    UNSAFE_componentWillMount() {
        document.querySelector('.body').classList.add('open-modal');
        this.rootModal = document.createElement('div');
        this.rootModal.id = 'Modal'
        document.body.appendChild(this.rootModal);
    }
    componentWillUnmount() {
        document.querySelector('.body').classList.remove('open-modal');
        document.body.removeChild(this.rootModal);
    }

    render() {
        const { closeModal, nameModal } = this.props;
        let content = null;
        if (nameModal === 'auth') {
            content = (
                <Auth
                    closeModal={closeModal} />
            )
        }
        // if (nameModal === 'logout') {
        //     content = (
        //         <Logout
        //             closeModal={closeModal} />
        //     )
        // }
        return createPortal(
            <div className={styles.modal}>
                <div className={styles.modal__wrapper}>
                    <button type='button' aria-label="Close modal" className={styles.modal__close}
                        onClick={closeModal}>
                        <div className={styles.modal__close_icon}></div>
                    </button>
                    <div className={styles.modal__content}>
                        {content}
                    </div>
                </div>
            </div>, this.rootModal
        );
    }
}