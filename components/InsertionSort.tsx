'use client'

import React, {useState, useEffect} from 'react';
import './bubbleSort.css'


const swap = (a: number[], j: number) => {
    //Mutating the argument worked in Storybook, but in NextJS it appeared to do double swaps every time. Returning a mutated copy works in both.
    console.log(`swapping ${a[j]} and ${a[j+1]} indexes ${j} and ${j+1}`)
    return [...a.slice(0,j),a[j+1],a[j],...a.slice(j+2)]
}

export const InsertionSort = ({initialArray = [5,4,3,2,1], heightMultiplier = 20, stepDelayMs = 500}) => {
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

        if (j> 0 && a[j - 1]  > a[j]) {
            a = swap(s.a, j - 1)
            j--
        } else {
            if(i < a.length){
                i++
                j=i
            } 
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
            style={{height: e * heightMultiplier, ...(i===s.j && s.i < s.a.length && {borderLeftColor: 'yellow'}) }}/>)}
        <div>
            Insertion Sort
            <button type="button" onClick={step}>Step</button>
            <button type="button" onClick={() => setIsRunning(!isRunning)}>{isRunning? 'Stop' : 'Go'}</button>
        </div>
        </>
    )
}