import React from 'react';
import Header from "../Header/Header";

class App extends React.Component<any, any> {
    render() {
        return (
            <div className="App row cyan lighten-5">
                <Header/>
                <main className={"col s12"}>
                    <p>TEST</p>
                </main>
            </div>
        );
    }
}

export default App;
