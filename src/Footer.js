import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="main-footer">
                    <strong>Feito por <a href="https://github.com/daviricardo011">Davi Ricardo</a>. 2021</strong>
                    Todos os direitos reservados.
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Versão</b> 0.0.0
                    </div>
                </footer>
            </div>

        )
    }
}
