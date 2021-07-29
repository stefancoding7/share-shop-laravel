import React, { Component } from 'react';
import { GiSlicedBread, GiCheckMark, GiBigEgg, GiChiliPepper, GiTomato, GiMilkCarton } from "react-icons/gi";
const axios = require('axios').default;
import AddItems from './AddItems/AddItems';


class CardList extends Component {


    state = {
        items: []
    }
    async componentDidMount() {
       await axios.get(`http://192.168.0.21:5000/api/items`) 
        .then(data => {
            
            this.setState({ 
                items: data.data.items,
                
            })  

            console.log(data.data);
                
        }) 
        .catch(function (error) {
            // handle error
            console.log(error);
          })
  
          
      }

    handleSubmit(e){
        e.preventDefault();
        console.log('clicked');
    }
    render() {
       const { items } = this.state;
      console.log(`items: ${items}`)
      

        const mapedItems = items.map((item, index) => (
            <>
                <li className="list-group-item d-flex ">
                    <div  key={index} className="p-2 w-100 bd-highlight">{item}</div>
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
             <div className="container mt-2">
                <div className="card shadow-lg" >
                        <div className="card-header">
                            <div className="row">
                                <div className="col-5">
                                    <button className="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add items<b>+</b></button>
                                </div>
                                
                            </div>
                                
                            </div>
                        <ul className="list-group list-group-flush ">
                            
                            {mapedItems}
                            
                            
                        </ul>
                    </div>
                    <AddItems />

             </div>
                
                
            </>
        )
    }
    
}

export default CardList;