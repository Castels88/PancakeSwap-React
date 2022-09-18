import { useState } from "react"
export default function SwitchComponent(){
    const [Switch, SetSwitch] = useState(false)
    return(
        

        
        <div>
            <input type="checkbox" onChange={(event)=>{SetSwitch(event.target.checked)}} value={"checked"}/>
            <p>switch is {Switch ? "on" : "off"}</p>
        </div>
    )
}