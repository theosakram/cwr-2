import React from "react";
import { motion } from "framer-motion";

interface Props {
    type: string;
}

const Modal: React.FC<Props> = ({ type }) => {
    const modalType = type;

    const initial = {
        top: "-15%",
        opacity: 0,
    };

    const open = {
        top: "2.5%",
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    };

    const close = {
        top: "-15%",
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    };

    return (
        <motion.div
            className="modal"
            initial={initial}
            animate={modalType ? open : close}
        >
            <i className="fas fa-exclamation icon"></i>
            <section className="message">
                <span>Warning</span>
                <span>Tolong lengkapi data</span>
            </section>
        </motion.div>
    );
};

export default Modal;
