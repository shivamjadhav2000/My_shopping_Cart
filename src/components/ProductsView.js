import React from 'react'
import './Productview.css'
import Product from './Product'

class ProductView extends React.Component{
   render(){
    return (
        <div className='ProductView'>
        {this.props.data.map((item)=>{
            if(item.show===true){
            return <Product 
            name={item.name} 
            path={item.path} 
            price={item.price}
            id={item.id}
            items={item.items}
            handleitemscounter={this.props.handleitemscounter}
            
            />}
            else{
                return ""
            }
            
        })}
        </div>
    )
}}

export default ProductView