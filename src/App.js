import React from 'react';

import './App.css';
import Nav from './components/Nav.js'
import ProductList from './components/productList.js'
import ProductView from './components/ProductsView'
import Foot from './components/Footer.js'
import {BounceLoader} from 'react-spinners'
import {css } from '@emotion/core'
class App extends React.Component{
  constructor(){
    super();
  this.state={
    items:{},
    Total_price:0,
    Titems:0,
    loader:false,
    TransitionState:"ProductView",
    data:[
      {name:"nike Revolt",path:"p1.jpg",price:"90",id:"A1",show:true,items:0},
      {name:"Revolution 5 Lace-Up Sports Shoe",path:"p2.jpg",price:"70",id:"A2",show:true,items:0},
      {name:"nike PrestoTube AIR MAX 270",path:"p3.jpeg",price:"99",id:"A3",show:true,items:0},
      {name:"nike Downshifter",path:"p4.jpeg",price:"100",id:"A4",show:true,items:0},
      {name:"kobe nike",path:"kobe nike.jpg",price:"220",id:"A5",show:true,items:0},
      {name:"mamba black",path:"mamba black.jpg",price:"189",id:"A6",show:true,items:0},
      {name:"nike lebron 2",path:"nike lebron 2.jpg",price:"199",id:"A7",show:true,items:0},
      {name:"nike lebron",path:"nike lebron.jpg",price:"150",id:"A8",show:true,items:0},
      {name:"nike lebron men black",path:"nike lebron men black.jpg",price:"146",id:"A9",show:true,items:0},
      {name:"kyrie 14",path:"kyrie 14.jpg",price:"255",id:"A10",show:true,items:0},
      {name:"under armour blue",path:"underarmour blue.jpg",price:"170",id:"A11",show:true,items:0}
       ]
  };
 
  this.handleLoader=this.handleLoader.bind(this)
  this.handleitemscounter=this.handleitemscounter.bind(this)
  this.handledisplay=this.handledisplay.bind(this)
  this.handleTransition=this.handleTransition.bind(this)
}
   handleTransition=(Switch)=>{
    this.setState({
      TransitionState:Switch
    })
    console.log(this.state.TransitionState)
   }
   handleitemscounter=(id,op)=>{
     let totalitems=0;
     let total_price=0;
     let tempdata=[];
     if (op==="+"){
                this.state.data.forEach(i=>{  
                if(i.id===id){
                   i.items=i.items+1
                   tempdata.push(i)
                }
                else tempdata.push(i)
                    
                })

    }
    else {
                tempdata=[]
                this.state.data.forEach(i=>{
                if(i.id===id){
                    i.items=i.items-1
                    tempdata.push(i)
                }
               else tempdata.push(i)
        
                })
          }

   this.setState({
              data:tempdata
   })
   tempdata.forEach(i=>{
     totalitems+=i.items
     total_price+=i.items*i.price
   })
   this.setState({
    Titems:totalitems,
    Total_price:total_price
   })
}
   handledisplay=(newdata=this.state.data)=>{
                 this.setState({
                 data:newdata,
                  })
  }
  
  handleLoader=(Loader)=>{
    this.setState({loader:Loader})
   }
 
  render(){
    const loaderCSS=css`
    loading:false;
    margin-left:50%;
    margin-right:45%;
    `
    
  return (
         <div className="App">
             <Nav 
             items={this.state.Titems}
             handledisplay={this.handledisplay} 
             handleLoader={this.handleLoader} 
             handleTransition={this.handleTransition} 
             data={this.state.data} 
             />
             <div className={this.state.loader?"activeLoader":"loader"}>   
                   <BounceLoader css={loaderCSS} color="blue" />
                   <h4>Searching items...  taking so long check your input.</h4>
             </div> 
             <div className="headr">
                  <h1 >My Shopping Store</h1>
             </div>
        <div className="cont">
            <div className={this.state.TransitionState!=="ProductList" && "hideContainer"}>
            <ProductList
                  data={this.state.data}
                  items={this.state.Titems}
                  price={this.state.Total_price}
                  handleTransition={this.handleTransition}
             />
            </div>
            <div className={this.state.TransitionState!=="ProductView" && "hideContainer"}>
            <ProductView
                  handleitemscounter={this.handleitemscounter}
                  data={this.state.data}
            />
            </div>
            
         </div>

        <Foot />
  </div>
  );
  }
}

export default App;
