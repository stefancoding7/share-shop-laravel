import React, { useState } from 'react';
require('./addshoplist.scss');
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const AddShopList = () => {
    const [input, setInput] = useState('');
    const[tags, setTags] = useState([]);
    const [error, setError] = useState('');
    const [isKeyReleased, setIsKeyReleased] = useState(false);
    
    const onChange = (e) => {
        const { value } = e.target;
        setInput(value);
        console.log(input)
      };

      const clickedItems = (e) => {
        e.preventDefault();
        const { key } = e;
        const trimmedInput = input.trim();
        if(tags.includes(trimmedInput)) {
            setError('Your item is already on your list');
        }
        if (trimmedInput.length && !tags.includes(trimmedInput)) {
          e.preventDefault();
          setTags(prevState => [...prevState, trimmedInput]);
          setInput('');
          
        }
      }

      const onKeyDown = (e) => {
        const { key } = e;
        const trimmedInput = input.trim();
        if(tags.includes(trimmedInput)) {
            setError('Your item is already on your list');
        }
        if (key === ',' || key === '.' && trimmedInput.length && !tags.includes(trimmedInput)) {
          e.preventDefault();
          setTags(prevState => [...prevState, trimmedInput]);
          setInput('');
          
        }

        if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
            e.preventDefault();
            const tagsCopy = [...tags];
            const poppedTag = tagsCopy.pop();
        
            setTags(tagsCopy);
            setInput(poppedTag);
          }
          setIsKeyReleased(false);
      };

      const onKeyUp = () => {
        setIsKeyReleased(true);
      }

      const deleteTag = (index) => {
        setTags(prevState => prevState.filter((tag, i) => i !== index))
      }

      //post functions
      const handleSubmit = (e) => {
          const listName = e.target.shopListName.value
          e.preventDefault();

          axios.post(`http://192.168.0.21:5000/api/shoplist`, {
            shopListName: listName,
            slug: 'gfdg',
            tags: tags
          }) 
         .then(response => {
            window.location = '/';
                 
         }) 
         .catch(function (error) {
             // handle error
             console.log(error);
           })
        
          
      }


    return(
        <>
            <div className="add-shop-list-container m-2">
                <div className="header-shop-list">
                    <h2 className="shop-list-title">Create Shop list</h2>
                </div>
                <hr></hr>
                <form onSubmit={handleSubmit}>
                    <div className="list-container">
                        <div class="input-group mb-3">
                            
                            <input type="text" class="form-control" name="shopListName" placeholder="List Name" />
                        </div>
                    </div>
                   
                
               

                <div className="input-items">
                    <div className="input-group  mb-3">
                        <input 
                        value={input}
                        onKeyDown={onKeyDown}
                        onChange={onChange}
                        onKeyUp={onKeyUp}
                        type="text" className="form-control" placeholder="Add items (Milk, Bread, Beer)" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button onClick={clickedItems} className="btn btn-secondary" type="button" id="button-addon2">Add</button>
                    </div>
                  </div>
                  <button className="btn btn-secondary" type="submit">Create</button>
                </form>
                <div className="tag-container">
                
                {tags.map((tag, index) => <div key={index} className="badge rounded-pill bg-light text-dark shadow mr-2">{tag} <button onClick={() => deleteTag(index)}>x</button></div>)}

                </div>
            </div>

        </>
    )
}

export default AddShopList;
