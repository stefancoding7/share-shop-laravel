import React, { Component } from 'react';
import { GiSlicedBread, GiCheckMark, GiBigEgg, GiChiliPepper, GiTomato, GiMilkCarton } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { GoCircleSlash } from "react-icons/go";
require ('./items.scss');
const axios = require('axios').default;
import AddItems from './AddItems/AddItems';
import { hashHistory, Link, withRouter } from "react-router-dom";
import  config from '../../config/config';



class CardList extends Component {


    
       state = {
           
            items: []
        }
    
    async componentDidMount() {
    let id = this.props.match.params.id;
   
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

    deleteItem(id, index){
        axios.delete(`${config.apiBaseUrl}itemdelete/${id}`) 
        .then(response => {
          //window.location = '/';
          let array = [...this.state.items]; 
          if (index !== -1) {
           array.splice(index, 1);
           this.setState({items: array});
         }
         
            
        }) 
        .catch(function (error) {
            // handle error
            console.log(error);
          })
    }

    complete(id, index){
        axios.put(`${config.apiBaseUrl}itemcomplete/${id}`) 
        .then(response => {
        //   //window.location = '/';
          let array = [...this.state.items]; 
          if (index !== -1) {
              let spliced = [];
           spliced = array.splice(index, 1);
           spliced[0].completed == 1 ? spliced[0].completed = 0 : spliced[0].completed = 1;
          
           array.push(spliced[0]);
           this.setState({items: array});
         }
         
            
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
                <li key={index}  className={`list-group-item d-flex ${item.completed == 0 ? '' : 'completed' }`}>
                    <div key={index}  className={`p-2 w-100 bd-highlight ${item.completed == 0 ? '' : 'completed-text' }`}>{item.tags}</div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="p-2 flex-shrink-1 bd-highlight">
                        <div className="btn-group">
                            <button type="submit" className="btn btn-light check-icon mr-3" onClick={() => this.deleteItem(item.id, index)}><GrClose /></button>
                            <button  type="submit" className="btn btn-light check-icon" onClick={() => this.complete(item.id, index)}>{item.completed == 0 ? <GiCheckMark /> : <GoCircleSlash/>}</button>
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