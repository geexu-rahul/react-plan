import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {

    return (
        <>
            <div className='container '>
                <h3> Todos List </h3>
              
                { 
                props.todos.length == 0 ? `All Record Deleted` : 
                    props.todos.map((item) => {
                        return (<TodoItem onDelete={props.onDelete} key={item.sno} no={item.sno} title={item.title} />)
                    })
                }

            </div>

        </>
    )
}
