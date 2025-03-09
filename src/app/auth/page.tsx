'use client'
import {Suspense} from 'react'
import Chart from 'react-apexcharts'


//import User from './Users.tsx'
const Auth = () => {
  
  return <div>
    hello new screem
    
    <Suspense fallback={<p>Loading......</p>}>
  <div>ffffggg</div>
    </Suspense>
    
    <div className="relative grid  grid-cols-6 grid-rows-6 overflow-auto  h-[200px]  gap-2 border border-amber-100" >
    
      <p className=" w-full bg-amber-600">hello</p>
      <p className="w-full bg-amber-600">hello</p>
<p className="w-fu bg-amber-600">hello</p>

      <p className=" w-full bg-amber-600">hello</p>
      <p className=" w-full bg-amber-600">hello</p>
      
            <p className=" w-full bg-amber-600">hello</p>
      <p className="col-start-4 w-full bg-amber-600">hello</p>
<p className=" w-full bg-amber-600">hello</p>

<p className=" col-span-6 w-full bg-amber-600">hello</p>
<p className=" col-span-6 w-full bg-amber-600">hello</p>


      
            
    </div>
    
    
    <div>
    <Chart series={[{
      
      data:[18,20,18,25]
    },{
      
      data:[20,25,20 ,26]
      }]} options={{
    
      dataLabels:{
        enabled:false
      },
      legend:{
        show:false
      },
      
      grid:{
        show:false
      },
      colors:['orange','chocolate'],
      stroke:{
        curve:'smooth',
        width:1
      },

        
      fill:{
        type:'gradient',
        gradient:{
          shadeIntensity:0.3,
          opacityFrom:0.7,
          opacityTo:0.9,
          stops:[90]
        },
        
      }
    }} type="area" height={350}/>
    </div>
   
    
  </div>
}


export default Auth