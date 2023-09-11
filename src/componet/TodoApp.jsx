import { useState } from "react";


const TodoApp = () => {
    const [list,setList]=useState([])
    const [item,setItem]=useState('')

    const addLis=()=>{
        console.log(list.push(item))
        setList([...list])
    }
    const removeBtn=(i)=>{
        list.splice(i,1)
        setList([...list])
    }
    return (
        <>
           <table>
            <tbody>
                {
                   list.length!==0?(
                    list.map((element,i)=>{
                return(
                    <tr>
                        <td>{element}</td>
                        <td><button className="bg-black text-white" onClick={()=>{removeBtn(i)}}>Remove</button></td>
                    </tr>
                       )
                       
                    })
                   ):(<td></td>)
                }
            </tbody>
           </table>
        <input className="border-2 border-gray-950" type="text" onChange={(event)=>setItem(event.target.value)}/>
        <button onClick={addLis}>Add</button>
        </>
    );
};

export default TodoApp;