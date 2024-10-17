import { useState } from 'react'
import './App.css'

function App() {
  // useState : hooks (state = verileri tutmak için kullandıgımız hooks)

  const [firstName , setfirstName] = useState("Halil") //state sayesinde firstName değikeninin başlangıç değerini veriyoruz
  const [lastName , setlastName] = useState("Uysal")
  // firstName değişkenini, setfirstName fonksiyonu sayesinde değiştirebiliyoruz
  
  const changeFunct =()=>{
    setlastName("Demiröz")
  }


  const[names , setnames] = useState(["Aykut","Ferit","Yasin","Kamil"])//Array örneği
  console.log(names)

  
  const [userInfo , setuserInfo] = useState({userName:"gorkewm", password:" 4578"}) // Obje örneği


  const[show, setShow] = useState(false)


  const[count, setCount] = useState(0)


  const arttir =() =>{
    setCount (count+1)
  }
  
  const azalt =() =>{
    setCount(count -1)
  }
  return (
    <div>
      <div>{firstName}</div>
      <div>
        <button onClick={() =>{setfirstName("Görkem")}}>Change first name</button>
      </div>

      <hr />

      <div>{lastName}</div>
      <div>
        <button onClick={changeFunct}>Change last name</button>
      </div>
       
       <hr />

      <div>
        {names.map((isim , index)=>
         <div key={index}>{isim}</div>
        )}
      </div>
 

      <hr />

      <div>
        {userInfo.userName}{userInfo.password}  
      </div>    

      
      <hr />
    
      <div>
        {show ? <div>{userInfo.userName} {userInfo.password}</div> : <div>bilgileri gösterme</div>}
      </div>

      <hr />

      <div>
        {count}
      </div>
      <div>
        <button onClick={arttir}>Arttir</button>
      </div>

      <hr />

      <div>
        <button onClick={azalt}>Azalt</button>
      </div>
    </div>
 
  )
}

export default App
