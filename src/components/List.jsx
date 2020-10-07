import React, { Component } from 'react';
import './List.css'
import Loader from 'react-loader-spinner'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { get, getDev, searchDev, changeSearch } from '../store/actions/devAction'
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
        const isLoad = () => {
            if (this.props.loading)
                return <Loader type="ThreeDots" color="#e9d11b" height="100" width="100" />
        }

        return (
            <div className='list'>
                <div className="row">
                    <h2>Lista de devs</h2>
                    <div>
                        <input type="text" name='searchName' value={this.props.search} onChange={e => {
                            this.props.changeSearch(e.target.value)
                        }} />
                        <button onClick={_ => this.props.searchDev(this.props.search, this.props.list)}><i className="fa fa-search"></i></button>
                        <button onClick={_ => this.props.get()}><i className="fa fa-undo"></i></button>
                    </div>
                </div>
                
                <div className='loadDiv'>{isLoad()}</div>
                
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
const mapStateToProps = (state) => ({ list: state.devList.list, search: state.devList.search, loading: state.devList.loading })
const mapDispatchToProps = (dispatch) => bindActionCreators({ get, getDev, searchDev, changeSearch }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(List)