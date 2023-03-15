import { useState } from 'react';
import './App.css';
import ButtonSubmit from './components/ButtonSubmit';
import InputItem from './components/InputItem';
import StatusDropdown from './components/StatusDropdown';
import Table from './components/Table';

function App() {

// ========== save table ========
  const [store,setStore]    = useState([])

// ========= Get Index From Table =========
  const [getIndex,setIndex] = useState();



// ========== data table ========
  const [ data , setData ]  = useState({
    
    name    : "",
    age     : "",
    status  : ""

  });



// =========== Handle Delete =========
  const  handleDelete = (id) =>  {
    let index = store.splice(id,1)
    setData([...store,index])
    
  }



// ========== function change data  ==========
  const handleChange = (e) =>  {

    const value = e.target.value
    setData({
      ...data,[e.target.name] : value
      
    })


    
  }

// ========== Handle Change Edit ============
  const handleEdit = (id) => {
    
    let index = store.slice(id);
    index.map((item) => {

      setData({
        name    : item.name,
        age     : item.age,
        status  : item.status
      })
    })

    setIndex(id)

    
    
  }



// ============ Edit Form =========== 

  const editSubmit = (e) => {
    
    e.preventDefault()

    let newArr = [...store];

    const value = e.target.value
    setData({
      ...data,[e.target.name] : value
      
    })

    newArr.map((item,index) => {
      
      if(getIndex === index){
        item.name   = data.name
        item.age    = data.age
        item.status = data.status
      }

    })
    
  }




// ========== function store data ==========

const handeSubmit = (e) => {

    e.preventDefault()

    setStore([...store,data]);
    setData({
      name    : '',
      age     : '',
      status  : ''
    })

    console.log([...store,data]);

  }


  return (
    
    <div className="App">
        

            <form >
              
              {/* ######### Container Form ########### */}
              <section className='container-form'>
                <div>
                  <InputItem 
                    label     = 'NAME'  
                    name      = 'name'
                    value     = {data.name}
                    onChange  = {handleChange}
                  />
                  <InputItem 
                    label     = 'AGE' 
                    name      = 'age'
                    type      = 'number'
                    value     = {data.age}
                    onChange  = {handleChange}
                  />
                <select name = 'status' onChange={handleChange}>
                  <StatusDropdown
                    label = 'Active'
                    value = 'Active'
                  />
                  <StatusDropdown
                    label = 'Deactive'
                    value = 'Deactive'
                  />
                </select>
                </div>
              </section>
                  

              {/* ############ Container button submit ########## */}
              <section className = 'container-button'>
                
                <ButtonSubmit label = 'Submit' onSubmit={handeSubmit}/>
                <ButtonSubmit label = 'Edit' onSubmit={editSubmit}/>
                
              </section>



            </form>


              
            {/* ######### container table ########## */}
            <section className='container-table'>
              <Table
                data            = {store}

                handleEdit      = {handleEdit}
                handleDelete    = {handleDelete}
                
              />
            </section>

    </div>
  );
}

export default App;
