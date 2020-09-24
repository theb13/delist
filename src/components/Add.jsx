import React, { Component } from 'react';
import MaskInput from 'react-maskinput';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add } from '../store/actions/devAction'

import { Link } from 'react-router-dom';
import './Add.css'
class Add extends Component {
   render() {
        return (
            <form className="form" onSubmit={v => this.props.add(v)}>
                <h2>Cadastrar Dev</h2>
                <div className="form-inputs">
                    <input type="text" name="name" placeholder="Nome" required minLength='5' />
                    <input type="email" name="email" placeholder="Email" required />
                    <MaskInput
                        mask={'00-000-0000'} size={20} maskChar="_"
                        name='contactMain' placeholder="Contacto principal" required />
                    <MaskInput
                        mask={'00-000-0000'} size={20} maskChar="_"
                        name='contactSecundary' placeholder="Contacto secundario" />
                    <textarea name="description" cols="" rows="3"
                     required  placeholder="Descricão do dev..." />
                </div>
                <div className="buttons">
                    <Link to='/'><button >Cancelar</button></Link>
                    <button type="submit" id='btnSubmit'>Registar</button>
                </div>
            </form>
        )
    }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({ add }, dispatch)
export default connect(null, mapDispatchToProps)(Add)