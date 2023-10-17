import { useState } from "react";

const User = ({name}) =>{
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    return(
        <div className="user">
            <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>This is Akshay's Web series</h3>
            <h4>@nazil</h4>
        </div>
    )
}


export default User;