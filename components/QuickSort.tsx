'use client'

import React, { useState, useEffect } from 'react';
import './bubbleSort.css'


const swap = (a: number[], i: number, j: number) => {
    //Mutating the argument worked in Storybook, but in NextJS it appeared to do double swaps every time. Returning a mutated copy works in both.
    console.log(`swapping ${a[i]} and ${a[j]} indexes ${i} and ${j}`)
    return [...a.slice(0, i), a[j], ...a.slice(i + 1, j), a[i], ...a.slice(j + 1)]
}

const getPivotValue = (a: number[], lo: number, hi: number) => {
    let pivotValue
    const x = a[lo]
    const y = a[Math.floor((hi + lo)/2) ]
    const z = a[hi]
    pivotValue = y //choose the middle value because it looks nice

    //chosing the first, last, or a random one also works

    // //chose median of first, middle, last
    // if(x < z){
    //     if(y < x){
    //         pivotValue = x
    //     } else if( z < y){
    //         pivotValue = z
    //     } else {
    //         pivotValue = y
    //     }
    // } else {
    //     // z < x
    //     if(y < z){
    //         pivotValue = z
    //     } else if (x < y){
    //         pivotValue = x
    //     } else {
    //         pivotValue = y
    //     }
    // }

    // console.log(`chose pivot value ${pivotValue} from x=${x} y=${y} z=${z}`)
    return pivotValue
}

export const QuickSort = ({ initialArray = [5, 4, 3, 2, 1], heightMultiplier = 20, stepDelayMs = 500 }) => {
    const initialPartitionQueue: number[][] = []
    const initialLo = 0
    const initialHi = initialArray.length - 1

    const [s, setS] = useState(()=>({
        a: initialArray,
        i: initialLo, j: initialHi,
        lo: initialLo, hi: initialHi,
        pivotValue: getPivotValue(initialArray, initialLo, initialHi),
        partitionStack: initialPartitionQueue
    }))
    const [isRunning, setIsRunning] = useState(false)
    useEffect(() => {
        if (isRunning) {
            setTimeout(step, stepDelayMs)
        }
    })

    const step = () => {
        let { a, j, i, lo, hi, pivotValue, partitionStack: partitioStack } = s

        if (i >= j) {
            const pivotIndex = j
            if (pivotIndex + 1 < hi) {
                partitioStack.push([pivotIndex + 1, hi])
            }
            if (lo < pivotIndex) {
                partitioStack.push([lo, pivotIndex])
            }
            if (partitioStack.length) {
                const nextPartition = partitioStack.pop() as number[]
                [lo, hi] = nextPartition
                pivotValue = getPivotValue(a, lo, hi)
                i = lo
                j = hi
                console.log(`next partition i=${i} j=${j} pivotValue=${pivotValue} previousPivotIndex=${pivotIndex} lo=${lo} hi=${hi} a=${a} patitiionStack=${partitioStack}`)
            } else {
                pivotValue = -1
                lo = -1
                hi = -1
                i = -1
                j = -1
                setIsRunning(false)
            }
        } else if (a[i] >= pivotValue && a[j] <= pivotValue) {
            a = swap(a, i, j)
        } else {
            // it is rare to see both i and j change in the same step 
            if (a[i] < pivotValue) {
                i += 1
            }
            if (a[j] > pivotValue) {
                j -= 1
            }
        }

        setS({ a, i, j, lo, hi, pivotValue, partitionStack: partitioStack })
    }

    const beginAutoSort = () => {
        step()
        setTimeout(beginAutoSort, 1000)
    }

    return (
        <div className="flex flex-row gap-5">
            <div className="flex flex-col space-y-1 justify-end" >
                <button type="button" onClick={step} className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-20 h-8 rounded">Step</button>
                <button type="button" onClick={() => setIsRunning(!isRunning)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-20 h-8 rounded">{isRunning ? 'Stop' : 'Go'}</button>
                <div className="pt-5 flex flex-col justify-end">
                    <span className="">Quick Sort</span>
                </div>
            </div>

            <div className="flex items-end">
                {s.a.map((e, i) => <div className="v1"
                    key={i}
                    style={{
                        height: e * heightMultiplier,
                        ...(i >= s.lo && i <= s.hi && { borderLeftColor: 'blue' }),
                        ...((i === s.i || i === s.j) && { borderLeftColor: 'yellow' }),
                        ...(e === s.pivotValue && { borderLeftColor: 'red' })
                    }} />)}
            </div>
        </div>
    )
}