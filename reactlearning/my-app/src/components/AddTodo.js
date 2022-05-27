import React, { useState } from 'react'

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title) {
            console.log("Title Should not be blank ")
        } else {


            props.atd(title)

        }


    }
    return (
        <div className='p-5'>
            <form onSubmit={submit}>
                <div className="form-group">
                    <h4> Add Todos </h4>
                    <label htmlFor="exampleInputEmail1">{title}</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
