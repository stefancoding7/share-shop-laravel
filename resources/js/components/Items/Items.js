import React, { Component } from 'react';
import { GiSlicedBread, GiCheckMark, GiBigEgg, GiChiliPepper, GiTomato, GiMilkCarton } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
const axios = require('axios').default;
import AddItems from './AddItems/AddItems';
import { hashHistory, Link, withRouter } from "react-router-dom";
import  config from '../../config/config';



class CardList extends Component {


    
       state = {
            id: 1,
            items: []
        }
    
    async componentDidMount() {
    let id = this.props.match.params.id;
    this.setState({
        id: id
    })
       await axios.get(`${config.apiBaseUrl}items/${id}`) 
        .then(data => {
            
            this.setState({ 
                items: data.data,
                
            })  

            console.log(`items: ${data}`);
                
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
      console.log(this.state.id);

        const mapedItems = items.map((item, index) => (
            <>
                <li  className="list-group-item d-flex ">
                    <div key={index}  className="p-2 w-100 bd-highlight">{item.tags}</div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="p-2 flex-shrink-1 bd-highlight">
                        <div className="btn-group">
                        <button type="submit" className="btn btn-light check-icon mr-3" ><GrClose /></button>
                            <button type="submit" className="btn btn-light check-icon" ><GiCheckMark /></button>
                        </div>
                            
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

export default withRouter(CardList);