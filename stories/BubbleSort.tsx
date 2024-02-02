import React, {useState} from 'react';
import './bubbleSort.css'



const genSwap = (j:number) => {
    return (array:number[]) => {
        console.log(`swapping ${j}th`)
        const a = [...array]
        const temp = a[j]
        a[j] = a[j + 1]
        a[j + 1] = temp
        return a
    }
}

const swap = (a: number[], j: number) => {
    const temp = a[j]
    a[j] = a[j + 1]
    a[j + 1] = temp
    return a
}

const stepState = (swapIndex: number, i: number, j: number) => {
    return (s: {a:number[]; i:number; j:number}) => ({
        i, j, a: swapIndex ==-1 ? s.a : swap(s.a, swapIndex)
    })
}

export const BubbleSort = ({initialArray = [3,2,1]}) => {
    const [s, setS] = useState({a:initialArray, i:0, j:0})
    const step = () => {
        let {a,j,i} = s
        console.log(`step i=${i} j=${j} a=${a}`)
        let swapIndex = -1
        if (a[j] > a[j+1]) {
            swapIndex = j
        }
        if(j < a.length - 2 - i){
            j++
        } else {
            if(i < a.length){
                i++
                j=0
            }
        }
        setS(stepState(swapIndex,i,j))
    }
    return (
        <>
        {s.a.map((e,i) => <div className="v1" 
            key={i}
            style={{height: e*50, ...(i===s.j && s.i < s.a.length && {borderLeftColor: 'yellow'}) }}/>)}
        <button type="button" onClick={step}>Step</button>
        </>
    )
}