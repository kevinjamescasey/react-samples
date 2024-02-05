'use client'

import React, {useState} from 'react';
import './bubbleSort.css'



// const genSwap = (j:number) => {
//     return (array:number[]) => {
//         console.log(`swapping ${j}th`)
//         const a = [...array]
//         const temp = a[j]
//         a[j] = a[j + 1]
//         a[j + 1] = temp
//         return a
//     }
// }

const swap = (a: number[], j: number) => {
    //Mutating the argument worked in Storybook, but in NextJS it appeared to do double swaps every time. Returning a mutated copy works in both.
    console.log(`swapping ${a[j]} and ${a[j+1]} indexes ${j} and ${j+1}`)
    return [...a.slice(0,j),a[j+1],a[j],...a.slice(j+2)]
}

export const BubbleSort = ({initialArray = [3,2,1]}) => {
    const [s, setS] = useState({a:initialArray, i:0, j:0})
    const step = () => {
        let {a,j,i} = s
        console.log(`step i=${i} j=${j} a=${a}`)

        if (a[j] > a[j+1]) {
            a = swap(s.a, j)
        }
        if(j < a.length - 2 - i){
            j++
        } else {
            if(i < a.length - 1){
                i++
                j=0
            } 
        }

        setS({i, j, a})

    }
    return (
        <>
        {s.a.map((e,i) => <div className="v1" 
            key={i}
            style={{height: e*50, ...(i===s.j && s.i < s.a.length - 1 && {borderLeftColor: 'yellow'}) }}/>)}
        <button type="button" onClick={step}>Step</button>
        </>
    )
}