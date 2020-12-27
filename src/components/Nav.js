import React from 'react'
import './NavStyle.css';
class Nav extends React.Component{
    constructor(){
        super()
        this.state={
            inputdata:"",
            
        }
    }
    searchItem=(event)=>{
        this.setState({
            inputdata:event.target.value
        })
        let foundElements=0
        let newdata=[]
        let val=event.target.value.trim()
       if (val.length===0){

            
            this.props.handledisplay(null)
            this.props.data.forEach(i=>{
                let currentitem=i;
                currentitem.show=true
                newdata.push(currentitem)
            })
            this.props.handledisplay(newdata)
            this.props.handleLoader(false)
            newdata=[]
        }
        else{
            this.props.handledisplay()
            this.props.data.forEach((item)=>{
            let currentitem=item
            if(item.name.toLowerCase().includes(event.target.value.toLowerCase())){
                currentitem.show=true
                newdata.push(currentitem)
                foundElements++;
            }
            else{
                currentitem.show=false
                newdata.push(currentitem)
            }
         })
         if(this.state.inputdata.length && foundElements===0){
            this.props.handleLoader(true)
        }else{
            this.props.handleLoader(false)
        }
        this.props.handledisplay(newdata)
        //this.props.handleLoader()
        }
        
       
    }
    render(){
    return (
             <div className='Navbar' >
                 <span ><button className="logo" >SJ STORE</button></span>
                 <span>
                 <input 
                   onChange={this.searchItem}
                   className='Search' 
                   type="text" 
                   placeholder="serch items" 
                   value={this.state.inputdata}
                   
                   /> 
                 </span>
                 <span >
                     <button 
                     className="CartIcon" 
                     onClick={()=>{this.props.handleTransition("ProductList")}}
                     >
                     <img className="cartItems" src="cart.png"   width="50" />
                     {this.props.items===0?"":this.props.items}
                     </button>
                 </span>
 
            </div>
           )
           }
}

export default Nav