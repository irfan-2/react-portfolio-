import { useState } from "react"

export default function Hook(){
    const [count, setCount] = useState(0)
    // count -> value, setcout -> setter , usestate(0) -> 0 is the starting value
    return (
        <div>
            <button onClick={() => setCount((prev) => prev +1)} className="bg-blue-300 m-2 p-2" >counter +1</button>
            <span className="m-2 p-2 bg-amber-300">{count}</span>
            <br />
            <button onClick={() => setCount(count +1)}  className="bg-blue-300 m-2 p-2">couter +1</button>
            <span className="m-2 p-2 bg-amber-300">{count}</span>
        </div>
    )
}