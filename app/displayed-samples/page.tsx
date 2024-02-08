import Image from "next/image";
import {BubbleSort} from '../../components/BubbleSort'
import { InsertionSort } from "@/components/InsertionSort";
import _ from 'lodash'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div >
        <BubbleSort />
      </div>
      <div >
        <BubbleSort initialArray={_.shuffle(_.range(1,100))} heightMultiplier={2} stepDelayMs={100}/>
      </div>
      <div>
        <InsertionSort />
      </div>
      <div >
        <InsertionSort initialArray={_.shuffle(_.range(1,100))} heightMultiplier={2} stepDelayMs={100}/>
      </div>

      
    </main>
  );
}
