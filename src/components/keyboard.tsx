import { useEffect, useState } from "react"
import { playNote } from "../utils/piano"
import * as Tone from 'tone'

const PianoKeyboard = () => {

    const synth = new Tone.Synth({
        oscillator: {
            type: 'triangle8'
        },
        envelope: {
            attack: 2,
            decay: 1,
            sustain: 0.4,
            release: 4
        }
    }).toDestination();

    const [activeNote, setActiveNote] = useState<string|null>(null);


    const handleKeyPress = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, note:string) => {
        synth.triggerAttack(note);
        setActiveNote(note);
    }

    const handleKeyRelease = () => {
        synth.triggerRelease('+0')
        console.log(activeNote)
        if (activeNote) {
            synth.triggerRelease();
            setActiveNote(null);
        }
    }

    const handleKeyUp = (e: KeyboardEvent) => {

    }

    const handleKeyDown = (e: KeyboardEvent) => {

    }

    useEffect(()=>{

        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

        return(()=>{
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        })

    }, [])

    return (
        <div className="flex items-center">
            <div className="flex items-center relative">
                <div onMouseUp={handleKeyRelease} onMouseDown={(e)=>handleKeyPress(e, 'C4')} className="C h-[8rem] relative z-0 rounded-b w-12 border-2 border-gray-600 bg-white active:brightness-[.9] active:scale-[.99]">
                    <p className="mt-[6rem] text-center active:brightness-[.9] active:scale-[.99]">C</p>
                </div>
                <div className="Cb absolute z-10 w-9 rounded-b h-[5rem] bg-black top-0 left-[1.8rem] active:brightness-[.9] active:scale-[.99]">
                    <p className="mt-2 text-center text-white active:brightness-[.9] active:scale-[.99]">C#</p>
                </div>

                <div className="D h-[8rem] relative z-0 rounded-b w-12 border-2 border-gray-600 bg-white active:brightness-[.9] active:scale-[.99]">
                    <p className="mt-[6rem] text-center active:brightness-[.9] active:scale-[.99]">D</p>
                </div>
                <div  className="Cb absolute z-10 w-9 rounded-b h-[5rem] bg-black top-0 left-[4.9rem] active:brightness-[.9] active:scale-[.99]">
                    <p className="mt-2 text-center text-white active:brightness-[.9] active:scale-[.99]">D#</p>
                </div>

                <div className="D h-[8rem] relative z-0 rounded-b w-12 border-2 border-gray-600 bg-white active:brightness-[.9] active:scale-[.99]">
                    <p className="mt-[6rem] text-center active:brightness-[.9] active:scale-[.99]">E</p>
                </div>

                <div className="D h-[8rem] relative z-0 rounded-b w-12 border-2 border-gray-600 bg-white active:brightness-[.9] active:scale-[.99]">
                    <p className="mt-[6rem] text-center active:brightness-[.9] active:scale-[.99]">F</p>
                </div>
                <div  className="Cb absolute z-10 w-9 rounded-b h-[5rem] bg-black top-0 left-[10.9rem] active:brightness-[.9] active:scale-[.99]">
                    <p className="mt-2 text-center text-white active:brightness-[.9] active:scale-[.99]">F#</p>
                </div>

                <div className="D h-[8rem] relative z-0 rounded-b w-12 border-2 border-gray-600 bg-white active:brightness-[.9] active:scale-[.99]">
                    <p className="mt-[6rem] text-center active:brightness-[.9] active:scale-[.99]">G</p>
                </div>
                <div  className="Cb absolute z-10 w-9 rounded-b h-[5rem] bg-black top-0 left-[13.9rem] active:brightness-[.9] active:scale-[.99]">
                    <p className="mt-2 text-center text-white active:brightness-[.9] active:scale-[.99]">G#</p>
                </div>

                <div className="D h-[8rem] relative z-0 rounded-b w-12 border-2 border-gray-600 bg-white active:brightness-[.9] active:scale-[.99]">
                    <p className="mt-[6rem] text-center active:brightness-[.9] active:scale-[.99]">A</p>
                </div>
                <div  className="Cb absolute z-10 w-9 rounded-b h-[5rem] bg-black top-0 left-[16.9rem] active:brightness-[.9] active:scale-[.99]">
                    <p className="mt-2 text-center text-white active:brightness-[.9] active:scale-[.99]">A#</p>
                </div>

                <div className="D h-[8rem] relative z-0 rounded-b w-12 border-2 border-gray-600 bg-white active:brightness-[.9] active:scale-[.99]">
                    <p className="mt-[6rem] text-center active:brightness-[.9] active:scale-[.99]">B</p>
                </div>

            </div>
        </div>
    )

}

export default PianoKeyboard