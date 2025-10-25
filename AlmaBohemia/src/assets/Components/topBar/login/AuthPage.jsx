import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Authform ( { type ,  onSubmit }){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   


    const handleSubmit = (e)=>{
        e.preventDefault()
        onSubmit(email, password)
    }

    return(
        <form 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-3 p-4 border rounded-xl w-3/4 mx-auto mt-4 shadow-xl bg-[#bb853878]">
            <h2 className="italic text-xl font-bold text-center">
                {type === "loguin" ? "Iniciar Sesion" : "Crear Cuenta"}
            </h2>

            <input 
            type="email" 
            placeholder="Correo"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="border border-gray-700 focus:border-pink-950 rounded p-2"
            />

            <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="focus:border-amber-700" 
            />

            <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                {type === "loguin" ? "Entrar" : "Registrarse"}
            </button>
        </form>
    )
}


const AuthPage = () => {
    const [mode, setMode] = useState("loguin")
     const navigate = useNavigate()

    const handleSubmit = (email, password)=>{
        console.log(`modo: ${mode}`, {email, password})

        if(email === "admin@email.com" && password === "123456"){
            navigate("/PanelAdmin")
        }else{
            navigate("/")
        }
    }
  return (
    <div className="m-4 ">
        <div className="flex justify-center items-center gap-4">
            <button
            onClick={()=> setMode("loguin")}
            className="bg-black text-white rounded py-2 px-4 hover:bg-gray-900"
            >
                Loguin
            </button>
            <button
            onClick={()=> setMode("register")}
            className="bg-black text-white rounded py-2 px-4 hover:bg-gray-900"
            >
                Reguistrarse
            </button>
        </div>
        <Authform type={mode} onSubmit={handleSubmit}/>
    </div>
  )
}

export default AuthPage