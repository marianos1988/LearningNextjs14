"use client"
import { useState } from "react"
//Si el layout.tsx usa el useState y me paso a password registrar y login mantiene el valor del useState y omparte en las 3 rutas
//Si el template.tsx usa eluseState y me paso a password registrar y login no mantiene el valor del useState y no comparte en las 3 rutas



export default function ProfileLayout({ children }: { children: React.ReactNode }) {
const [input, setInput] = useState(""); 
    return(
      <>
        <h2>Rutas relativas a la cuenta del usuario</h2>
        {children}
        <input 
          type="text" 
          value={input} 
          onChange={(e)=>{setInput(e.target.value)}} 
        />
      </>
    )
}