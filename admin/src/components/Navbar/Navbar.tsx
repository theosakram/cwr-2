import React, { useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const Navbar: React.FC = () => {
    const [description, setDescription] = useState<boolean>(false);
    const [showSetting, setShowSetting] = useState<boolean>(false);

    const [descriptionAppear, setDescriptionAppear] = useState<string>("");
    const [settingAppear, setSettingAppear] = useState<string>("");

    const history = useHistory();

    const handleDescription = (): void => {
        if (!descriptionAppear) {
            setDescriptionAppear("open");
            setDescription(true);
            setSettingAppear("");
            setTimeout(() => {
                setShowSetting(false);
            }, 300);
        } else {
            setDescriptionAppear("");
            setTimeout(() => {
                setDescription(false);
            }, 300);
        }
    };

    const handleSetting = (): void => {
        if (!settingAppear) {
            setSettingAppear("open");
            setShowSetting(true);
            setDescriptionAppear("");
            setTimeout(() => {
                setDescription(false);
            }, 300);
        } else {
            setSettingAppear("");
            setTimeout(() => {
                setShowSetting(false);
            }, 300);
        }
    };

    const toLogin = (e: React.SyntheticEvent) => {
        e.preventDefault();
        history.push("/");
    };

    return (
        <main className="navbar">
            <section className="icons">
                <a
                    onClick={() => handleDescription()}
                    style={{ color: descriptionAppear ? "#f9ca24" : "white" }}
                >
                    <i className="fas fa-angle-double-right icon"></i>
                </a>
                <a>
                    <i className="fas fa-cubes icon"></i>
                </a>
                <a>
                    <i className="fas fa-store icon"></i>
                </a>
                <a>
                    <i className="fas fa-money-bill-wave icon"></i>
                </a>
                <a>
                    <i className="fas fa-calendar-alt icon"></i>
                </a>
                <a>
                    <i className="fas fa-handshake icon"></i>
                </a>
                <a
                    onClick={() => handleSetting()}
                    style={{ color: settingAppear ? "#f9ca24" : "white" }}
                >
                    <i className="fas fa-cogs icon"></i>
                </a>
            </section>
            {description && (
                <motion.div
                    className="tags"
                    initial="start"
                    animate={descriptionAppear ? "appear" : "disappear"}
                    variants={{
                        start: {
                            position: "absolute",
                            left: 0,
                            opacity: 0,
                        },
                        appear: {
                            left: "50px",
                            position: "absolute",
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                            },
                        },
                        disappear: {
                            left: "-100px",
                            position: "absolute",
                            transition: {
                                duration: 0.3,
                            },
                        },
                    }}
                >
                    <span>CWR</span>
                    <span>Stocks</span>
                    <span>Sellers</span>
                    <span>Revenue</span>
                    <span>Events</span>
                    <span>Investors</span>
                    <span onClick={() => handleSetting()}>Setting</span>
                </motion.div>
            )}
            {showSetting && (
                <motion.div
                    className="settings"
                    initial="start"
                    animate={settingAppear ? "appear" : "disappear"}
                    variants={{
                        start: {
                            position: "absolute",
                            left: 0,
                            opacity: 0,
                        },
                        appear: {
                            left: "50px",
                            position: "absolute",
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                            },
                        },
                        disappear: {
                            left: "-100px",
                            position: "absolute",
                            transition: {
                                duration: 0.3,
                            },
                        },
                    }}
                >
                    <span>Change Theme</span>
                    <span onClick={(e: React.SyntheticEvent) => toLogin(e)}>
                        Log Out
                    </span>
                </motion.div>
            )}
        </main>
    );
};

export default Navbar;
