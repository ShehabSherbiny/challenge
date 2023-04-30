import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { App } from "./App/App"
import React from "react"

createRoot( document.querySelector( "#root" ) as HTMLElement )
  .render(  <StrictMode>
              <App />
            </StrictMode> )