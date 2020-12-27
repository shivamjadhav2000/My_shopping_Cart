import React from 'react'
import './productList.css'

class Product extends React.Component{
    constructor() {
                super();
                this.state={
                    disabled:false
                };
                this.IncrhandleClick = this.IncrhandleClick.bind(this);
                this.DcrhandleClick = this.DcrhandleClick.bind(this); 
    }
    DcrhandleClick=()=>{
                if(this.props.items>0){
                    this.props.handleitemscounter(this.props.id,"-")
                this.setState({
                    disabled:false
                })}
                else{
                    this.setState({
                        disabled:true
                    })
                }
    }
    IncrhandleClick=()=>{
                
                this.props.handleitemscounter(this.props.id,"+")
                this.setState({
                    disabled:false
                })
    }
    render(){  
    return (
             <div className="productContainer">
                    <div className='Product'>
                            <img className='images' src={this.props.path} height="250" alt="" />
                            <p><strong>{this.props.name}</strong></p>
                            <h3>Price ${this.props.price}</h3>
                    
                    <div className="CartButton">
                            <button disabled={this.state.disabled} className='btn'
                            onClick={this.DcrhandleClick}>-</button>
                            {this.props.items}
                            <button className='btn'
                            onClick={this.IncrhandleClick}>
                            +
                            </button>
                    </div>
                    </div>
             </div>
    )
}}

export default Product