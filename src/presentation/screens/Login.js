import React, { Component } from 'react'
const cinza = '#858585'


export default class Login extends Component {
    render() {
        return (
            <div className="hold-transition login-page">
                <h2> AdminLTE </h2>
                <div className="card">
                    <div className="card-body" style={{ padding: '20px', minWidth: '60px', maxWidth: '350px' }}>
                        <p style={{ textAlign: 'center', color: cinza }}>Faça Login para iniciar a sessão</p>

                        <form>
                            <div className="input-group mb-3">
                                <input className="form-control" type="email" placeholder="E-mail" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input className="form-control" type="password" placeholder="Senha" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-around">
                                <div>
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="checkLembrarDados" />
                                        <label className="form-check-label" for="checkLembrarDados" style={{ fontWeight: 'bold', color: cinza }}>Lembrar-me</label>
                                    </div>
                                </div>

                                <div>
                                    <button className="btn btn-primary" style={{ marginLeft: '90px', padding: '5px 20px' }}>Entrar</button>
                                </div>
                            </div>

                        </form>
                        <div className="text-center mb-3 ">
                            <p style={{ margin: '15px', color: cinza }}>- OR -</p>
                            <div className="justify-content-center">
                                <a href="#" className="btn btn-primary" style={{ marginBottom: '10px', width: '100%' }}><i className="fab fa-facebook mr-2" />Entrar usando o Facebook</a>
                                <a href="#" className="btn btn-danger" style={{ marginBottom: '10px', width: '100%' }} > <i className="fab fa-google-plus mr-2" />Entrar usando o Google+</a>
                            </div>
                        </div>



                        <div className="column" >
                            <div className="mb-1">
                                <a href="#">Esqueci minha senha</a>
                            </div>
                            <div className="mb-1">
                                <a href="#">Novo Cadastro</a>
                            </div>
                        </div>
                    </div>

                </div >
            </div >
        )
    }
}
