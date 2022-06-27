import React, { useState } from "react";
import ReactDOM from "react-dom";

// https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks

function Input(props) {

    const [owner, setOwner] = useState('');

    function handleInputChange(e){
        setOwner(e.target.value)
    }

    const RenderView = () => {
        return owner.length >= 1 ? <Nfts owner={owner}/> : <Public />
    }

    return (
        <div className="content">
            {/* based on input renderView */}
            <input value={owner} onChange={e => handleInputChange(e)}/>
            {/* <button onClick={() => handleInputChange}>login</button> */}
            <RenderView />
        </div>
    );
        
}

export default Input
