

const data = async () =>{
 const t = await new Promise<string>((res,_)=>{
    setTimeout(()=>{
      res('loaded')
    },2000)
  })
  
  return t
}


const User =  () => {
 
  
 return <div>
 <p>hhhhh</p>
    {
      
      home()
    }
 </div>
}

const home = async() => {
  const result = await data()
  console.log(result)
  return <div>{result}</div>
}

export default User