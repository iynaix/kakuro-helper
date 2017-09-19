import React, { Component } from "react"
import filterSums, { printSums } from "./kakuro"

import "./App.css"

class App extends Component {
    render() {
        console.log(
            printSums(
                filterSums({
                    length: 3,
                    total: 20,
                    excludes: [3, 4],
                })
            )
        )

        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        )
    }
}

export default App
