import React from 'react'

const Table = ({
                  data,
                  handleDelete,
                  handleEdit
                }) => {

                  
                  const style = {
                    display         : 'flex',
                    justifyContent  : 'space-around'
                  }





  return (
    <table>
      <tbody>
        
        <tr>
          <th></th>
          <th>NAME</th>
          <th>AGE</th>
          <th>STATUS</th>
          <th>Action</th>
        </tr>

        {
          
          data.map((item,i) => 
          
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.status}</td>
                <td style={style}>
                  <button onClick={ () => handleEdit(i)}>Edit</button>
                  <button onClick={ () => handleDelete(i)}>Delete</button>
                </td>
              </tr>
          
          
          )
        }
      </tbody>
  
</table>
  )
}

export default Table