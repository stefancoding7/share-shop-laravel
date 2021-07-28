import React, { Component } from 'react';
import { GiFoldedPaper, GiCheckMark } from "react-icons/gi";
import { BiBasket } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

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
                <li key={index}  className="list-group-item d-flex ">
                    <div  className="p-2 w-100 bd-highlight "><span class="">{list.shopListName}</span></div>
                   
                        <div className="p-2 flex-shrink-1 bd-highlight">
                            <NavLink to="/items">
                                <button type="submit" className="btn btn-light check-icon" ><BiBasket /></button>
                            </NavLink>
                            
                        </div>  
                   
                    
                </li>
            </>
        ))

        return(
            <>
                <div className="card shadow-lg" >
                    <div className="card-header">
                        <div className="row">
                            <div className="col-6">
                                <NavLink to="/add-shop-list">
                                    <button className="btn btn-light" type="button" >New Shop List <b> +</b></button>
                                </NavLink>
                                
                            </div>
                            
                        </div>
                            
                        </div>
                    <ul className="list-group list-group-flush list-inline">
                        {mapedLists}
                        
                        
                        
                    </ul>
                </div>
            </>
        )
    }
}

export default ShopList;