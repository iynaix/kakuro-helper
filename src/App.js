import React, { Component } from "react"
import filterSums from "./kakuro"

// bulmaswatch superhero theme for styling
import "./bulmaswatch.min.css"

const cleanNumberArray = numStr => {
    // strip anything that isnt a number
    numStr = numStr.replace(/[^1-9]/g, "")
    return numStr.split("").map(n => parseInt(n, 10))
}

const Input = ({ name, type = "text", ...props }) =>
    <div className="control">
        <input name={name} className="input" type={type} {...props} />
    </div>

const Result = ({ children, includes = "" }) => {
    // strip anything that isnt a number
    includes = includes.replace(/[^1-9]/g, "")

    // replace includes with greyed out versions
    return (
        <p className="is-size-3">
            {children.map(c =>
                <span style={includes.includes(c) ? { opacity: 0.2 } : {}}>{c}</span>
            )}
        </p>
    )
}

class App extends Component {
    state = { length: "", total: "", includes: "", excludes: "" }

    onHandleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onReset = e => {
        this.setState({ length: "", total: "", includes: "", excludes: "" })
    }

    render() {
        const { length, total, includes, excludes } = this.state
        // length and total are mandatory
        const result = length && total
            ? filterSums(parseInt(total, 10), parseInt(length, 10), {
                  includes: cleanNumberArray(includes),
                  excludes: cleanNumberArray(excludes),
              })
            : []

        return (
            <div>
                <section className="hero is-dark is-bold has-text-centered">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title is-uppercase">
                                <a onClick={this.onReset}>
                                    Kakuro Helper
                                </a>
                            </h1>
                        </div>
                    </div>
                </section>

                <section className="section columns">
                    <div className="column">
                        <div className="has-text-centered is-size-4 has-text-weight-bold">
                            Total
                        </div>
                        <Input
                            name="total"
                            type="number"
                            value={total}
                            min={1}
                            max={45}
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="column">
                        <div className="has-text-centered is-size-4 has-text-weight-bold">
                            Length
                        </div>
                        <Input
                            name="length"
                            type="number"
                            value={length}
                            min={1}
                            max={9}
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="column">
                        <div className="has-text-centered is-size-4 has-text-weight-bold">
                            Includes
                        </div>
                        <Input name="includes" value={includes} onChange={this.onHandleChange} />
                    </div>
                    <div className="column">
                        <div className="has-text-centered is-size-4 has-text-weight-bold">
                            Excludes
                        </div>
                        <Input name="excludes" value={excludes} onChange={this.onHandleChange} />
                    </div>
                </section>

                <section className="section columns">
                    <div className="column" />
                    <div className="column has-text-centered">
                        {result.length
                            ? result.map((a, i) => <Result key={i} includes={includes}>{a}</Result>)
                            : <p className="is-size-3">No results found.</p>}
                    </div>
                    <div className="column" />
                </section>
            </div>
        )
    }
}

export default App
