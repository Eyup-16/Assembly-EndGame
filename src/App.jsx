import {useState} from "react"
import Header from "./components/Header"
import Eliminations from "./components/Eliminations"
import Letters from "./components/Letters"
import Board from "./components/Board"

export default function Hangman() {
    return (
        <main>
            <Header/>
            <Eliminations/>
            <Letters/>
            <Board/>
        </main>
    )
}
/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: 
 * 1. Save a "currentWord" in state. Initialize as "react".
 * 2. Map over the letters of the word (you'll need to turn 
 *    the string into an array of letters first) and display
 *    each one as a <span>. Capitalize the letters when
 *    displaying them.
 * 3. Style to look like the design. You can get the underline 
 *    effect on the box using `border-bottom`.
 */
