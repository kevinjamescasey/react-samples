'use client'

import React, {useState, useEffect} from 'react';
import './bubbleSort.css'


const swap = (a: number[], j: number) => {
    //Mutating the argument worked in Storybook, but in NextJS it appeared to do double swaps every time. Returning a mutated copy works in both.
    console.log(`swapping ${a[j]} and ${a[j+1]} indexes ${j} and ${j+1}`)
    return [...a.slice(0,j),a[j+1],a[j],...a.slice(j+2)]
}

export const BubbleSort = ({initialArray = [5,4,3,2,1], heightMultiplier = 20, stepDelayMs = 500}) => {
    const [s, setS] = useState({a:initialArray, i:0, j:0})
    const [isRunning, setIsRunning] = useState(false)
    useEffect(() => {
        if(isRunning){
            setTimeout(step, stepDelayMs)
        }
    })
    
    const step = () => {
        let {a,j,i} = s
        console.log(`step i=${i} j=${j} a=${a}`)

        if (a[j] > a[j+1]) {
            a = swap(s.a, j)
        }
        if(j < a.length - 2 - i){
            j++
        } else if(i < a.length - 1){
                i++
                j=0
        } else {
            setIsRunning(false)
        }
        

        setS({i, j, a})
    }

    const beginAutoSort = () => {
        step()
        setTimeout(beginAutoSort, 1000 )
    }

    return (
        <>
        {s.a.map((e,i) => <div className="v1" 
            key={i}
            style={{height: e * heightMultiplier, ...(i===s.j && s.i < s.a.length - 1 && {borderLeftColor: 'yellow'}) }}/>)}
        <div className="container mx-auto px-4">
            Bubble Sort
            <button type="button" onClick={step} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Step</button>
            <button type="button" onClick={() => setIsRunning(!isRunning)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{isRunning? 'Stop' : 'Go'}</button>
        </div>
        </>
    )
}