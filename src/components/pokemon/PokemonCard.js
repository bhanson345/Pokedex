import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../pokemon/spinner.gif'
const Sprite = styled.img
    `width:5em;
    height:5em;
    display:none
`;

export default class pokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: ''
    }
    componentDidMount() {
        const { name, url } = this.props;
        const pokemonIndex = url.split("/")[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeApi/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

        this.setState({
            name,
            imageUrl,
            pokemonIndex,
            imageLoading: true,
            tooManyRequests: false
        });

    }
    render() {


        return (
            <div className='col-md-3 col-sm-6 mb-5'>
                <Link to={`pokemon/${this.state.pokemonIndex}`}>
                    <div className="card">

                        <h5 className="card-header">{this.state.pokemonIndex}</h5>
                        {this.state.imageLoading ? (<img src={Spinner} style={{ width: '5em', height: '5em' }} className="card-img-top rounded mx-auto d-block mt-2" />) : null}
                        <Sprite className="card-img-top rounded mx-auto mt-2"
                            onLoad={() => this.setState({ imageLoading: false })}
                            onError={() => this.setState({ tooManyRequests: true })}

                            src={this.state.imageUrl}
                            style={
                                this.state.tooManyRequests ? { display: "none" } : this.state.imageLoading ? null : { display: "block" }
                            }
                        />
                        {this.state.tooManyRequests ? (<h6 className="mx-auto"><span className=" badge badge-danger mt-2">Too Many Requests</span></h6>) : null}


                        <div className="card-body mx-auto">
                            <h6 className="card-title">{this.state.name}</h6>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
