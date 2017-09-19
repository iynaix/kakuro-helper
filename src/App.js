import React, { Component } from "react"
import filterSums from "./kakuro"

// bulmaswatch superhero theme for styling
import "./bulmaswatch.min.css"

const Input = ({ type = "text", ...inputAttrs }) =>
    <div className="control">
        <input className="input" type={type} {...inputAttrs} />
    </div>

class App extends Component {
    render() {
        const result = filterSums({
            length: 3,
            total: 20,
            excludes: [3, 4],
        })

        return (
            <div>
                <section className="hero is-dark is-bold has-text-centered">
                    <div className="hero-body">
                        <div className="container">

                            <h1 className="title is-uppercase">Kakuro Helper</h1>
                        </div>
                    </div>
                </section>

                <section className="section columns">
                    <div className="column">
                        <div className="has-text-centered is-size-4 has-text-weight-bold">
                            Length
                        </div>
                        <Input type="number" min={1} max={9} />
                    </div>
                    <div className="column">
                        <div className="has-text-centered is-size-4 has-text-weight-bold">
                            Total
                        </div>
                        <Input type="number" min={1} max={45} />
                    </div>
                    <div className="column">
                        <div className="has-text-centered is-size-4 has-text-weight-bold">
                            Includes
                        </div>
                        <Input />
                    </div>
                    <div className="column">
                        <div className="has-text-centered is-size-4 has-text-weight-bold">
                            Excludes
                        </div>
                        <Input />
                    </div>
                </section>

                <section className="section columns">
                    <div className="column" />
                    <div className="column">
                        {result.map((a, i) =>
                            <p key={i} className="is-size-3">
                                {a.join("")}
                            </p>
                        )}
                    </div>
                    <div className="column" />
                </section>
            </div>
        )
    }
}

export default App
