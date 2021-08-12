import React from 'react'
import TextField from '../../components/admin/TextField'
import './Admin.css'


function Admin() {
    return (
        <div className="admin">
            <div className="content">
                <TextField
                    label="Project Name"
                    placeholder="Type your project name"
                />
                <TextField
                    label="Github Link"
                    placeholder="Type your github project link"
                />
                <TextField
                    label="Live Link"
                    placeholder="Type your live project link"
                />
                <div className="dropzone">
                    <h1>Image of Project</h1>
                    <div className="upload_btn">
                        <label for="file"
                            className="file_label" >Upload File</label>
                        <input id="file" className="actual_file" type="file" />
                    </div>
                    <span>Drop and Drop Here</span>
                    <h5>Max file size is 20mb</h5>
                </div>
                <button className = "submit" >Submit Info</button>
            </div>
        </div>
    )
}

export default Admin
