import React, { useRef } from "react"
import { useCallback } from "react"
import { Weather } from "../components/Weather"


import type { FC } from "react"

import "./app.css"

export const App: FC = () => {

    const [theme, setTheme] = React.useState('dark');

    const [input, setInput] =
        React.useState(null as unknown as string)

    const [city, setCity] =
        React.useState(null as unknown as string)

    const doStuff = (event: any) =>
        setInput(event.target.value)

    function toggleTheme() {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    console.log(input)

    return <>
        <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>

            <div >
                <button id="themeSwitcher" onClick={toggleTheme}>
                    Switch theme
                </button>
            </div>
            <div id="form">
                <input
                    role="search"
                    type="text"
                    value={input as unknown as string}
                    onChange={doStuff} />


                <button id="weather" onClick={() => setCity(input)} >
                    Show Weather
                </button>

                < Weather city={city} />
            </div>
        </div>

    </>
}

// export const App: FC = () => {
//     const inputRef = React.useRef<HTMLInputElement>(null)
//     const [ input, setInput ] =
//         React.useState( null as unknown as string )

//     const [ city, setCity ] =
//         React.useState( null as unknown as string )

//     const doStuff = (  ) => {
//     if(inputRef.current != null)
//       setCity(inputRef.current.value )
//     }




//     console.log( input )

//     return  <>
//                 <input

//                     role="search"
//                     type="text"
//                     ref={inputRef}
//                     /*onSubmit={ doStuff }*/  />

//                 <button onClick={ () =>  doStuff    } >
//                     Show Weather
//                 </button>

//                 < Weather city={ city } />
//             </> }

