import React from "react";
import { Form } from "../../components";
import { motion, AnimatePresence } from "framer-motion";

const Login: React.FC = () => {
    return (
        <AnimatePresence>
            <motion.div
                className="login"
                initial="start"
                animate="animation"
                exit="pageExit"
                variants={{
                    start: {
                        opacity: 0,
                    },
                    animation: {
                        opacity: 1,
                        transition: {
                            duration: 0.3,
                        },
                    },
                    pageExit: {
                        opacity: 0,
                        transition: {
                            duration: 0.3,
                        },
                    },
                }}
            >
                <div className="color-white"></div>
                <Form />
            </motion.div>
        </AnimatePresence>
    );
};

export default Login;
