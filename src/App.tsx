import React, { useState, useEffect } from "react";
import "./App.css";

function App(): JSX.Element {
    const [selectedTab, setSelectedTab] = useState(1);

    //Get the time and set as a variable
    const [time, setTime] = useState(
        new Date().toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        })
    );

    // Update the time every second
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(
                new Date().toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                })
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    //Tab Number 1-3
    const selectTab = (tabNumber: number) => {
        setSelectedTab(tabNumber);
    };

    return (
        <div className="App">
            <div className="Clock">{time}</div>

            <div className="upper-tab-container">
                <div className="starter-shell-container">
                    <div className="starter-tab-shell-outer"></div>
                    <div
                        className="starter-tab-shell-inner"
                        //If selected tab === 1, set to white, else black.
                        style={{
                            backgroundColor:
                                selectedTab === 1 ? "white" : "black"
                        }}
                    ></div>
                    <div
                        className="starter-tab-button"
                        onClick={() => selectTab(1)}
                    >
                        Button
                    </div>
                </div>

                <div className="follower-shell-container">
                    <div className="follower-tab-shell-outer"></div>
                    <div
                        className="follower-tab-shell-inner"
                        style={{
                            backgroundColor:
                                selectedTab === 2 ? "white" : "black"
                        }}
                    ></div>
                    <div
                        className="follower-tab-button"
                        onClick={() => selectTab(2)}
                    >
                        Button
                    </div>
                </div>

                <div className="follower-shell-container">
                    <div className="follower-tab-shell-outer"></div>
                    <div
                        className="follower-tab-shell-inner"
                        style={{
                            backgroundColor:
                                selectedTab === 3 ? "white" : "black"
                        }}
                    ></div>
                    <div
                        className="follower-tab-button"
                        onClick={() => selectTab(3)}
                    >
                        Button
                    </div>
                </div>
            </div>
            <header className="App-header">Nathan C</header>
        </div>
    );
}

export default App;
