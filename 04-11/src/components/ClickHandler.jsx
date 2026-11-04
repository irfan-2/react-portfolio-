export default function ClickHandler(){
    function greet(){
        alert("hello, you clicked the blue button")
    }
    function greenGreet(){
        console.log("you clicked the blue button");
        
    }
    return (
        <div>
            <button onClick={greet} className="bg-green-300">Click</button>
            <button onClick={greenGreet} className="bg-blue-300">dont click me</button>
        </div>
    )
}