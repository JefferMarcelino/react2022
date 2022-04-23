import { useState } from "react";

const Data = props => {
    const [ likes, setLikes ] = useState(0)

    return (
        <div className="about">
            <h2>{ props.name }</h2>
            <p>{ props.about }</p>
            <div>
                <span>{ likes } Likes</span>
                <button
                onClick={ () => {
                    setLikes(likes+1)
                } }
                >Like</button>
            </div>
        </div>
    );
}

export default Data;