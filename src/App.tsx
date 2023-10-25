
import './App.css'
import PianoKeyboard from './components/keyboard'

function App() {
  return (
    <main className='h-screen'>
      <div className="h-[75%] px-24">
        <h1 className="text-3xl text-center p-2 font-bold">Piano Keyboard</h1>

        <div className="bg-gray-200 p-4 rounded-xl flex gap-4">
          <div className="">
            <label htmlFor="tempo">Tempo (BPM): </label>
            <input className='border outline-none p-2 rounded-xl' type="number" value={130} min={1} max={300} />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="metronome">Metronome</label>
            <input
              className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="metronome" />
            
          </div>
          <div className="flex items-center ml-0 mr-auto w-fit">
            <label htmlFor="midi" className='text-white bg-black p-3 rounded-xl'>
              <span className=''>Upload MIDI File</span>
              <input id='midi' type="file" accept='.midi' hidden/>
            </label>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center">
          <PianoKeyboard />
        </div>
      </div>
    </main>
  )
}

export default App
