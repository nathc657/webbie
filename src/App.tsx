import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <div className="Clock">12:00:00</div>

            <div className="upper-tab-container">
                <div className="starter-shell-container">
                    <div className="starter-tab-shell-outer"></div>
                    <div className="starter-tab-shell-inner"></div>
                </div>

                <div className="follower-shell-container">
                    <div className="follower-tab-shell-outer"></div>
                    <div className="follower-tab-shell-inner"></div>
                </div>

                <div className="follower-shell-container">
                    <div className="follower-tab-shell-outer"></div>
                    <div className="follower-tab-shell-inner"></div>
                </div>
            </div>
            <header className="App-header">Nathan C</header>
        </div>
    );
}
//Edit src/App.tsx and save. This page will automatically reload.
export default App;
