import React, { Component } from 'react';
import { GiFoldedPaper, GiCheckMark } from "react-icons/gi";
import { BiBasket } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
import apiClient from '../Auth/apiClient/apiClient';
import  config from '../../config/config';

import {userContext} from '../../Context';



class ShopList extends Component {

   

    state = {
        shopList: [],
        user: this.props.context.authenticatedUser
       
    }

    

    removeShopList(id, index)  {
        console.log(`removed: ${id}`);
        axios.delete(`${config.apiBaseUrl}shoplistdelete/${id}`) 
         .then(response => {
           //window.location = '/';
           let array = [...this.state.shopList]; 
           if (index !== -1) {
            array.splice(index, 1);
            
            this.setState({shopList: array});
          }
           console.log(this.state.shopList);
           console.log(index);
             
         }) 
         .catch(function (error) {
             // handle error
             console.log(error);
           })
    }

    async componentDidMount() {
        await apiClient.get(`${config.apiBaseUrl}shoplist`) 
         .then(data => {
             
             this.setState({ 
                shopList: data.data.data,
                 
             })  
            // console.log(this.context.user);
            
                 
         }) 
         .catch(function (error) {
             // handle error
             console.log(error);
           })
           
          // console.log(this.props.context.authenticatedUser);
       }

       

    render(){
        const { shopList, user } = this.state;
        const { context } = this.props;
        
       
       console.log(context.loggedIn);

        const mapedLists = shopList.map((list, index) => (
            <>
                <li   className="list-group-item d-flex ">
                    <div key={index} className="p-2 w-100 bd-highlight "><span class="">{list.shopListName}</span></div>
                   
                        <div className="p-2 flex-shrink-1 bd-highlight">
                        <div className="btn-group">
                        <button className="btn btn-light" type="button" onClick={() => this.removeShopList(list.id, index)}><GrClose /></button>
                            <NavLink to={`/items/${list.id}`}>
                                
                                <button type="submit" className="btn btn-light check-icon" ><BiBasket /></button>
                            </NavLink>
                        </div>
                           
                            
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