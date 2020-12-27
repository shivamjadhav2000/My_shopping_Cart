import React from 'react'
import './productList.css'
class ProductList extends React.Component{
    state={
      Hide:true
    }
 
   handleClick=()=>{
     
       if(this.props.price>0){
           this.setState({
               Hide:false
           })
       }
   }
   render(){
    return (
        <div className='ProductList'>
            {this.props.data.map((i)=>{
                if (i.items>0){
                return (
                    <div className="summary">
                        <img src={i.path} width="100" height="100"/> 
                        <h3>items {i.items}</h3>
                        <h2>{i.price}$</h2>
                    </div>
                )
                }
            })}
       
            <h4>Total Items {this.props.items}</h4>
            <h4>Total Price {this.props.price}</h4>
            
     
            <div><button className="cout" onClick={()=>{this.props.handleTransition("ProductView")}}>Back</button>
            <button className="CheckOut" onClick={this.handleClick}>Checkout</button>  
            </div>
            <div className={this.state.Hide===true?"hide":""}>
                <p className="FinalAmount"> Amount to be paid is  ${this.props.price}</p>
            </div>
        </div>
    )}
    componentDidMount(){
        this.myInterval=setInterval(()=>{
            this.setState({
                Hide:true
            })
        },4000)
   
    }
}

export default ProductList