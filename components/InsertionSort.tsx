'use client'

import React, { useState, useEffect } from 'react';
import './bubbleSort.css'


const swap = (a: number[], j: number) => {
    //Mutating the argument worked in Storybook, but in NextJS it appeared to do double swaps every time. Returning a mutated copy works in both.
    console.log(`swapping ${a[j]} and ${a[j + 1]} indexes ${j} and ${j + 1}`)
    return [...a.slice(0, j), a[j + 1], a[j], ...a.slice(j + 2)]
}

export const InsertionSort = ({ initialArray = [5, 4, 3, 2, 1], heightMultiplier = 20, stepDelayMs = 500 }) => {
    const [s, setS] = useState({ a: initialArray, i: 0, j: 0 })
    const [isRunning, setIsRunning] = useState(false)
    useEffect(() => {
        if (isRunning) {
            setTimeout(step, stepDelayMs)
        }
    })

    const step = () => {
        let { a, j, i } = s
        console.log(`step i=${i} j=${j} a=${a}`)

        if (j > 0 && a[j - 1] > a[j]) {
            a = swap(s.a, j - 1)
            j--
        } else if (i < a.length) {
            i++
            j = i
        } else {
            setIsRunning(false)
        }

        setS({ i, j, a })
    }

    const beginAutoSort = () => {
        step()
        setTimeout(beginAutoSort, 1000)
    }

    return (
        <div className="flex flex-row gap-5">

            <div className="flex flex-col space-y-1 justify-end">
                <button type="button" onClick={step} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-20 h-8">Step</button>
                <button type="button" onClick={() => setIsRunning(!isRunning)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-20 h-8">{isRunning ? 'Stop' : 'Go'}</button>
                <div className="pt-5 flex flex-col justify-end">
                    <span className="inline-block">Insertion Sort</span>
                </div>
            </div>
            <div className="flex items-end">
                {s.a.map((e, i) => <div className="v1"
                    key={i}
                    style={{ height: e * heightMultiplier, ...(i === s.j && s.i < s.a.length && { borderLeftColor: 'yellow' }) }} />)}
            </div>

        </div>
    )
}