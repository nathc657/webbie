import React, { useState } from "react";
import "./App.css";

function App(): JSX.Element {
    const [selectedTab, setSelectedTab] = useState(1);

    const selectTab = (tabNumber: number) => {
        setSelectedTab(tabNumber);
    };

    return (
        <div className="App">
            <div className="Clock">12:00:00</div>

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
