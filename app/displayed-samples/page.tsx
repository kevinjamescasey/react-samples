import Image from "next/image";
import {BubbleSort} from '../../components/BubbleSort'
import { InsertionSort } from "@/components/InsertionSort";
import _ from 'lodash'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-start p-24 gap-10">
      <div className="flex flex-row gap-10">
        <BubbleSort />
        <BubbleSort initialArray={_.shuffle(_.range(1,100))} heightMultiplier={2} stepDelayMs={100}/>
      </div>
      <div className="flex flex-row gap-10">
        <InsertionSort />
        <InsertionSort initialArray={_.shuffle(_.range(1,100))} heightMultiplier={2} stepDelayMs={100}/>
      </div>
     </main>
  );
}
