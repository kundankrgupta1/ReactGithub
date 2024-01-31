import { useEffect, useState } from 'react';
function Timer(){
    const num = 12;
    const [count, setCount] = useState(num);
    const [pause, setPause] = useState(true);
    function handlePause(){
        setPause(false);
    }
    function handleStart(){
        setPause(true);
        if(count===0){
            setCount(num);
        }
    }
    function handleReset(){
        setCount(num);
    }
    useEffect(()=>{
        let interval;
        if(pause){
            interval = setInterval(()=>{
                setCount((prev)=>{
                    if(prev <=1){
                        setPause(false)
                        return 0;
                    }
                    return prev - 1;
                })
            }, 1000)
        }
        return()=>{
            clearInterval(interval);
        }
    }, [pause])
    return (
        <>
            <div style={{border: "2px solid red", borderRadius: "10px", padding: "25px"}}>
                <h2>Stopwatch</h2>
                <h1>{count}</h1>
                <div style={{display: "flex", gap: "10px"}}>
                    <button onClick={handlePause}
                        disabled={count===0}
                        style={count===0 ? {cursor: "not-allowed"} : {cursor: "pointer"}}
                    >Stop</button>
                    <button onClick={handleStart}
                        disabled={pause}
                        style={pause ? {cursor: "not-allowed"} : {cursor: "pointer"}}
                    >Start</button>
                    <button onClick={handleReset}
                        disabled={count===0}
                        style={count===0 ? {cursor: "not-allowed"} : {cursor: "pointer"}}
                    >Reset</button>
                </div>
            </div>
            <br />
            <br />
        </>
    );
}
export default Timer;

