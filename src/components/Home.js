import React, { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/Logo_ML.png"
import search from "../assets/ic_Search.png"

function Home() {
    const [buscar, setBuscar] = useState('');
    const navigate = useNavigate();

    const handleInputChange = e => {
        setBuscar(e.target.value)
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/items/' + buscar);
    }
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="col-1"></div>
                    <div className="col-1">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="col-9">
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nunca dejes de buscar"
                                        name="buscar"
                                        onChange={handleInputChange}
                                    />
                                    <span onClick={handleSubmit} className="input-group-text search" ><img src={search} alt="" /></span>
                            </div>
                        </form>
                    </div>
                    <div className="col-1"></div>
                </div>
            </nav>
        </Fragment>
    )
}
export default Home;