import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "../Modal";

const Form: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [modalType, setModalType] = useState<string>("");
    const [showModal, setShowModal] = useState<boolean>(false);

    const history = useHistory();

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (!email && !password) {
            setModalType("empty");
            setShowModal(true);
            setTimeout(() => {
                setModalType("");
            }, 2000);
        } else {
            history.push("./products");
        }
    };

    useEffect(() => {
        if (!modalType) {
            setTimeout(() => {
                setShowModal(false);
            }, 300);
        }
    }, [modalType]);

    return (
        <>
            {showModal && <Modal type={modalType} />}
            <main
                className="form"
                onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}
            >
                <span>
                    <i className="fas fa-pen-fancy"></i>
                </span>
                <span>CWR</span>
                <form>
                    <section className="email">
                        <i className="fas fa-envelope icon"></i>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                        />
                    </section>
                    <section className="password">
                        <i className="fas fa-lock icon"></i>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                        />
                    </section>
                    <button type="submit">Login</button>
                </form>
            </main>
        </>
    );
};

export default Form;
