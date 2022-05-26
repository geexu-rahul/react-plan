import React from 'react'

export default function TodoItem(props) {

    return (
        <div className='mb-5'>
            <h5>  <span> No : {props.no} </span> Todos  {props.title} </h5>
            <button onClick={() => { props.onDelete(props) }} className='btn btn-sm btn-danger '> Delete </button>
        </div>
    )
}
