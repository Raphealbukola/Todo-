import {useState} from 'react'

const Todo = () => {
 const [todoName, setTodoName] = useState("")   
 const [allTodo, setAlltodo] = useState([]) 
 const [editedIndex, seteditedIndex] = useState(0) 
 const [count, setCount] = useState("no") 
  const addTodo=()=>{
    let newTodo ={todoName}
  if (todoName){
    setAlltodo([...allTodo,newTodo])
    setCount(allTodo.length+1)
    // console.log(allTodo);
    setTodoName("")

  }else{
    alert("enter your toddo")
  }
   
  }  

  const delTodo=(index)=>{
let newAlltodo=[...allTodo]
let filterTodo=newAlltodo.filter((ourTodo,ind)=>index!=ind)
setAlltodo(filterTodo)
 setCount(allTodo.length-1)

  }

  const editTodo=(index)=>{
    seteditedIndex(index)
  }
  const updateDetails =()=>{
    let updatedDetails = [...allTodo]
    updatedDetails[editedIndex] = {todoName}
    setAlltodo(updatedDetails)
    setTodoName("")
  }
  return (
    <>
   <div className='container'>
<div className='row'>
<div className='col-7 mx-auto shadow'>
<h1>My Todo</h1>
    <input type="text" placeholder="Enter Your Todo" className="form-control my-2" onChange={(e)=>setTodoName(e.target.value)} value={todoName}/>
        <button className="btn btn-warning w-100" onClick={addTodo}>Add Todo</button>
</div>
</div>
   </div>

   <div className='col-5 mx-auto  justify-content-center'>

     <div className='fs-3'> You have {count} pending task(s)</div>
     {
        allTodo.map((today,index)=>(
            <>
            <div className=' my-2 py-2 d-flex'>
                <h6 className='col-5 mt-1'>{today.todoName}</h6>
                <div className='col-6'>
                  <button className='btn bg-danger mx-1' onClick={()=>delTodo(index)}>Delete</button>
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                  className="btn btn-warning mx-2" onClick={()=>editTodo(index)}>Edit</button>
                </div>
            </div>
           
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <input type="text"  className="form-control my-2"  placeholder={allTodo[editedIndex].todoName} onChange={(e)=>setTodoName(e.target.value)} value={todoName}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" data-bs-dismiss="modal" class="btn btn-primary" onClick={updateDetails}>Save changes</button>
      </div>
    </div>
  </div>
</div>


            
            </>
        ))



      }
    
   </div>
   
    </>
  )
}

export default Todo