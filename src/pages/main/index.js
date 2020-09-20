import React, {Component} from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import './styles.css'

export default class Main extends Component {
    state = { //toda a variável no stado o render fica escutando
        products: [],
        productInfo: {},
        page: 1,
    }

    componentDidMount(){ // componente executado assim que ele aparecer na tela
        this.loadProducts();
    }

    loadProducts = async(page = 1) => { //pega o valor do array
        const response = await api.get(`/products?page=${page}`);
        const { docs, ... productInfo } = response.data;
        this.setState({ products: docs, productInfo, page }); //atualiza, faz o relowd com as novas informações de cd variável
    };

    prevPage = () => {
        const{page, productInfo} = this.state;
        if(page === 1) return; //verifica se a pg atual é a primeira

        const pageNumber = page - 1; // volta uma pg
        this.loadProducts(pageNumber);
    }
    
    nextPage = () => {
        const{page, productInfo} = this.state;
        if(page === productInfo.pages) return; //verifica se a pg atual é a ultima

        const pageNumber = page + 1; //joga para a próxima pg
        this.loadProducts(pageNumber);

    }


    render(){
        const {products, page, productInfo} = this.state; //puxando as variáveis
        return ( 
        //percorre todo o array e escreve o titulo
            <div className="product-list"> 
                {products.map(product =>(
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.page} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
    );    
    }
}