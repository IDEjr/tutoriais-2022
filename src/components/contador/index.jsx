import { useState } from "react";
import Box from './../box'

export default function Contador() {

    let [num, setNum] = useState(0)
  
    return (
        <Box vertical>
            <span style={{fontSize:'20vw'}}>{num}</span>
            <Box>
                <button className="button" 
                        style={{transform:'rotate(45deg)'}}
                        onClick={()=>setNum(num-1)}/>
                <button className="button"
                        style={{transform:'rotate(225deg)'}}
                        onClick={()=>setNum(num+1)}/>
            </Box>
        </Box>      
    );
  }