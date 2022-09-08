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
<div className='mt-3'>
<h1 className='text-light'>To-Do List</h1>
<div className='col-lg-5 col-sm-8 mx-auto d-flex bg-light py-2 px-3 shadow fool align-items-center'>
    <input type="text" placeholder="Enter Your Todo" className="form-control my-2" onChange={(e)=>setTodoName(e.target.value)} value={todoName}/>
        <button className="btn w-25 bt text-light ms-2" onClick={addTodo}>ADD</button>
</div>
</div>
</div>
   

     <div className='fs-4 text-light'> You have {count} pending task(s)</div>
   <div className='col-lg-6 mx-auto  justify-content-center bg-light py-3 px-5  mt-4 disp'>

     {
        allTodo.map((today,index)=>(
            <>
            <div className=' my-3 d-flex justify-content-between id '>
                <h6 className='mt-1'>{today.todoName}</h6>
                <div className=''>
                  <i class="fa fa-trash me-2 fs-4 text-danger" aria-hidden="true" onClick={()=>delTodo(index)}></i>
                  <i className="fa fa-pencil ms-2 fs-4" type="button" aria-hidden="true" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>editTodo(index)}></i>
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
   </div>
    </>
  )
}

export default Todo