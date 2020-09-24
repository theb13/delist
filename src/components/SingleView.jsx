import React, { Component } from 'react';
// import './List.css'
import './SingleView.css'

import { connect } from 'react-redux'
import MaskInput from 'react-maskinput/lib';
import { Link, Redirect } from 'react-router-dom';
class SingleView extends Component {

    render() {
        if (this.props.row=== null ) { return <Redirect to='/' /> }
        const row = this.props.row || {}
        const firstName=row.name.split(" ")

        return (
            <div className="form">
                <h2>Desenvolvedor(a) : {firstName[0]}</h2>
                <div className="view-inputs">
                    <div className="form-group">
                        <label htmlFor="">Nome</label>
                        <input type="text" value={row.name} placeholder="Nome" readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" value={row.email} placeholder="Email" readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Contacto</label>
                        <MaskInput
                            showMask value={row.contactMain}
                            mask={'00-000-0000'} size={20} maskChar="*"
                            readOnly placeholder="Contacto principal" />
                        <MaskInput
                            showMask value={row.contactSecundary}
                            mask={'00-000-0000'} size={20} maskChar="*"
                            placeholder="Contacto secundario" />
                    </div>
                <div>
                    <label htmlFor="">Descrição</label>
                    <textarea value={row.description} readOnly cols="" rows="5" placeholder="Descricão do dev..." />
                </div>
                </div>
                <div className="buttons">
                    <Link to="*"><button>Voltar</button></Link>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({ row: state.devList.row })
export default connect(mapStateToProps, null)(SingleView)