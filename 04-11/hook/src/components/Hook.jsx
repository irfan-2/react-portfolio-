import { useState } from "react";

export default function Hook(){
    const [count, setCount] = useState(0)
    return (
        <div >
            <span className="bg-purple-200 ">{count}</span>
            <button className="bg-green-600 rounded-md" onClick={() => setCount(count +1)}>Count+1</button>
            <button className="bg-red-600 rounded-md" onClick={() => setCount(count -1)}>Count -1</button>
            <button className="bg-white rounded-md ml-20 mt-40" onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}