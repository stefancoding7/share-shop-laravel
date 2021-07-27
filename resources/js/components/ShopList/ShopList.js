import React, { Component } from 'react';
import { GiFoldedPaper, GiCheckMark } from "react-icons/gi";

class ShopList extends Component {


    state = {
        shopList: []
    }

    async componentDidMount() {
        await axios.get(`http://192.168.0.21:5000/api/shoplist`) 
         .then(data => {
             
             this.setState({ 
                shopList: data.data,
                 
             })  
 
             console.log(data.data);
                 
         }) 
         .catch(function (error) {
             // handle error
             console.log(error);
           })
   
           
       }

    render(){
        const { shopList } = this.state;
        console.log(`shopList: ${shopList}`);


        const mapedLists = shopList.map((list, index) => (
            <>
                <li className="list-group-item d-flex ">
                    <div  key={index} className="p-2 w-100 bd-highlight"><GiFoldedPaper /> {list.shopListName}</div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="p-2 flex-shrink-1 bd-highlight">
                            <button type="submit" className="btn btn-light check-icon" ><GiCheckMark /></button>
                        </div>  
                    </form>
                    
                </li>
            </>
        ))

        return(
            <>
                <div className="card shadow-lg" >
                    <div className="card-header">
                        <div className="row">
                            <div className="col-6">
                                <button className="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">New Shop List <b> +</b></button>
                            </div>
                            
                        </div>
                            
                        </div>
                    <ul className="list-group list-group-flush ">
                        {mapedLists}
                        
                        
                        
                    </ul>
                </div>
            </>
        )
    }
}

export default ShopList;