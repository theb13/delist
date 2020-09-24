import React, { Component } from 'react';
import Footer from './Footer';
import './Home.css'
import { BrowserRouter, Link } from 'react-router-dom'
import Router from '../config/Routes';
class Home extends Component {
    onclick(value) {
        const listar = document.querySelector('#listar')
        const add = document.querySelector('#add')
        if (value === 'listar') {
            listar.classList.add('active')
            add.classList.remove('active')
        } else {
            add.classList.add('active')
            listar.classList.remove('active')
        }
    }
    render() {

        return (
            <BrowserRouter>
                <div className="flex-container">
                    <div className="content-left">
                        <h2 >Bem vindo!
                        <br />DEV
                    </h2>
                        <ul>
                            <Link id='listar' to='/' id="listar" onClick={_ => this.onclick('listar')} className='active'>
                                <li>Listar</li>
                            </Link>
                            <Link to='add' id="add" onClick={_ => this.onclick('add')}>
                                <li>Cadastrar</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="content-rigth">

                        <Router />
                        <Footer />

                    </div>
                </div>
            </BrowserRouter>

        )
    }
}

export default Home