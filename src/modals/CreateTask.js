import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const CreateTask = ({modal, toggle,save}) => {
    const[taskname,settaskname]=useState('')
    const[description,setdescription]=useState('')

    const handlechange=(e)=>{
            // const name=e.target.name
            // const value=e.target.value

            const{name,value}=e.target

            if(name==="taskname"){
                settaskname(value)
            }
            else{
                setdescription(value)
            }
    }

    const handlesave=()=>{
        let taskobj={}
        taskobj["Name"]=taskname
        taskobj["Description"]=description
        save(taskobj)
    }
  return (
   <>
   
   <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
        <form>
         <div className="form-group">
            <label>Task Name</label>
           <input type="text" className='form-control my-3' value={taskname} onChange={handlechange} name='taskname'/>
         </div>
         <div className="form-group">
         <label >Description</label>
            <textarea rows="5" className='form-control' value={description} onChange={handlechange} name='description'></textarea>
            </div>
        </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handlesave} >
            Create 
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      
      </>
  )
}

export default CreateTask