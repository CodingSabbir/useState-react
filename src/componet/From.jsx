// import { useState } from "react";



// const From = () => {
//     const [formObj,setObj]=useState({
//         fName:'',
//         lName:'',
//         city:'',
//         gender:'',
//     })

//     const changeInput=(property,value)=>{
//       setObj(prevObj =>({
//         ...prevObj,
//         [property]:value
//       }))

//     }


//     const formSubmit=(e)=>{
//       e.preventDefault()
//       console.log(formObj)
//     }



//     return (
//         <>
            
// <form onSubmit={formSubmit} className="mt-20 px-20 py-5">
//   <div classNameName="mb-6">
//     <label for="fname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
//     <input onChange={(e)=>{changeInput("fName",e.target.value)}} value={formObj.fName} type="name" id="fname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
//   </div>
//   <div >
//     <label for="lname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name </label>
//     <input onChange={(e)=>{changeInput("lName",e.target.value)}} value={formObj.lName} type="name" id="lname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
//   </div>
//         <div className="py-5">
//         <select onChange={(e)=>{changeInput("city",e.target.value)}} value={formObj.city} className="rounded-md w-full">
//             <option value="">Choose City</option>
//             <option value="Bogura">Bogura</option>
//             <option value="Dhaka">Dhaka</option>
//             <option value="Feni">Feni</option>
//         </select>
//         </div>
//     <div className="flex gap-5">
//         <input onChange={()=>{changeInput("gender","Male")}} checked={formObj.gender==='Male'} type="radio" name="gander"/>Male
//         <input onChange={()=>{changeInput("gender","Male")}} checked={formObj.gender==='Female'} type="radio" name="gander"/>Female
//     </div>
//   <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
// </form>
  


//         </>
//     );
// };

// export default From;


import { useState } from "react";



const From = () => {
const [fromObj,setObj]=useState({
  fName:'',
  lName:'',
  city:'',
  gender:'',

})

const changeInput=(property,value)=>{
  setObj(prevObj=>({
    ...prevObj,
    [property]:value
  }))
}

const fromSubmit=(event)=>{
  event.preventDefault()
  alert(JSON.stringify(fromObj))
}

    return (
        <>
            
<form onSubmit={fromSubmit} className="mt-20 px-20 py-5">
  <div classNameName="mb-6">
    <label for="fname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
    <input onChange={(e)=>{changeInput('fName',e.target.value)}} value={fromObj.fName} type="name" id="fname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  <div >
    <label for="lname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name </label>
    <input  onChange={(e)=>{changeInput('lName',e.target.value)}} value={fromObj.lName} type="name" id="lname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
        <div className="py-5">
        <select  onChange={(e)=>{changeInput('city',e.target.value)}} value={fromObj.city} className="rounded-md w-full">
            <option value="">Choose City</option>
            <option value="Bogura">Bogura</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Feni">Feni</option>
        </select>
        </div>
    <div className="flex gap-5">
        <input  onChange={()=>{changeInput('gender','Male')}} checked={fromObj.gender==='Male'} type="radio" name="gander"/>Male
        <input onChange={()=>{changeInput('gender','Female')}} checked={fromObj.gender==='Female'} type="radio" name="gander"/>Female
    </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
  


        </>
    );
};

export default From;



