import React, { useState } from 'react';
require('./additems.css')
import { GiSlicedBread, GiCheckMark, GiBigEgg, GiChiliPepper, GiTomato, GiMilkCarton } from "react-icons/gi";
const axios = require('axios').default;

const AddItems = () => {
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
            setError('Your item already in list');
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
            setError('Your item already in list');
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

    return(
        <>
        <div class="canvas-body">
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Select Items</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                    {error ? <div class="alert alert-primary" role="alert">
                        This item is already on your list.
                    </div>
                    :
                    ''
                    }
                    
                        <div className="input-items">
                            <div className="input-group mb-3">
                                <input 
                                value={input}
                                onKeyDown={onKeyDown}
                                onChange={onChange}
                                onKeyUp={onKeyUp}
                                type="text" className="form-control" placeholder="Add items (Milk, Bread, Beer)" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button onClick={clickedItems} className="btn btn-secondary" type="button" id="button-addon2">Add</button>
                            </div>
                        </div>
                        <div className="tag-container">
                            
                            {tags.map((tag, index) => <div className="badge rounded-pill bg-light text-dark shadow mr-2">{tag} <button onClick={() => deleteTag(index)}>x</button></div>)}

                        </div>
                        <hr></hr>
                        <div className="most-shopped-items-container">
                        <h3>Offten Shopped Items</h3>
                        <br></br>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Bread
                                </label>
                            
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Milk
                                </label>
                            
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Butter
                                </label>
                            
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Pepper
                                </label>
                            
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Cola
                                </label>
                            
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Doritos
                                </label>
                            
                            </div>
                        </div>
                        
                    </div>
                    <div className="update-items m-3">
                            <button type="button" class="btn btn-secondary">Add items</button>
                    </div>
                    
                </div>
        </div>
            
        </>
    )
}

export default AddItems;