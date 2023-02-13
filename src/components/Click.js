import React, { useEffect, useState } from "react";

export default function Click() {
  const [num , setNum]=useState (0);
  const [nums , setNums]=useState (0);
  
useEffect(()=> {
    alert('i am clicked')
  
},[num])


return( 
  <>
  <button  onClick={ () => { setNum(num + 1);
}}
>
Click me {num}
 </button> 

 <br />

 <button  onClick={ () => { setNums(nums + 1);
 }}
 >
 
 Click me {nums}
  </button> 
  </> 
);
};
