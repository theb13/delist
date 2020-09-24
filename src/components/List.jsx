import React, { Component } from 'react';
import './List.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { get, getDev } from '../store/actions/devAction'
import { Link } from 'react-router-dom';
class List extends Component {

    componentDidMount() {
        this.props.get()
    }
    render() {
        const renderRows = () => {
            const list = this.props.list || []
            return list.map(row => (
                <tr key={row._id}>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.contactMain}</td>
                    <td> <Link to='view'><button onClick={_ => this.props.getDev(row)}> <i className='fa fa-info' ></i></button></Link></td>
                </tr>
            ))
        }

        return (
            <div className='list'>
                <div className="row">
                    <h2>Lista de devs</h2>
                    <button onClick={_=>this.props.get()}><i className="fa fa-undo"></i></button>
                </div>
                <div className="table-scroll">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Contacto</th>
                                <th>...</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderRows()}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({ list: state.devList.list })
const mapDispatchToProps = (dispatch) => bindActionCreators({ get, getDev }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(List)