import Image from "next/image";
import {BubbleSort} from '../../stories/BubbleSort'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div >
        <BubbleSort />
      </div>
      <div >
        <BubbleSort initialArray={[6,8,3,7,5,4,1,2]}/>
      </div>
     

      
    </main>
  );
}
