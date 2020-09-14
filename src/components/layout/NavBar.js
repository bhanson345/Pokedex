import React, { Component } from 'react'




export default class NavBar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a href="https://bhanson-pokedex-app.herokuapp.com/" className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">Pokedex</a>
                    

                </nav>
            </header>
        )
    }
}
