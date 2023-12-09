import User from "../components/Helpers/User";
import UserClass from "../components/Helpers/UserClass";

const Help = () =>{
    return (
        <>
            <h1>This is Help Page</h1>
            {/* <User name={"Nazil Dhalwala (fucntion)"}/> */}
            <UserClass name={"Class based Components"}/>
        </>
    )
}

export default Help;