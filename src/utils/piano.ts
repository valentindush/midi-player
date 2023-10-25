import * as Tone from 'tone'

export const playNote = (note: string, duration:string='8n') => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, duration);
}