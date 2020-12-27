import react from "react"
class search extends react.Component{
    constructor(){
        super()
        this.state={
            data:[
                {name:"nike Revolt",path:"p1.jpg",price:"90",id:"A1"},
                {name:"Revolution 5 Lace-Up Sports Shoe",path:"p2.jpg",price:"70",id:"A2"},
                {name:"nike PrestoTube AIR MAX 270",path:"p3.jpeg",price:"99",id:"A3"},
                {name:"nike Downshifter",path:"p4.jpeg",price:"100",id:"A4"},
                {name:"nike Revolt",path:"p1.jpg",price:"90",id:"A5"},
                {name:"Revolution 5 Lace-Up Sports Shoe",path:"p2.jpg",price:"70",id:"A6"},
                {name:"nike PrestoTube AIR MAX 270",path:"p3.jpeg",price:"99",id:"A7"},
                {name:"nike Downshifter",path:"p4.jpeg",price:"100",id:"A8"},
                ],
            searchdata:[]
                 }
    this.searchItem=this.searchItem.bind(this)
    }
    searchItem(event){
        this.state.data.map((item)=>{
            if(event.target.value in item.name){

            }

        })

    }
}
