import React from 'react'
import { Table, ToastHeader, ToastBody } from 'reactstrap'
import { Toast } from 'bootstrap'

import { useState } from 'react'
const NewTable = (data) => {
    // console.log(props);
    // console.log(props.data);
    const [click, setClick] = useState(false);

    const handleclick = () => {
        setClick(true);
    }
    return (
        <div>
            <h1>This is table page</h1>
            <div className='flex w-full justify-center'>

                <div>
                    <Table bordered responsive hover>
                        <thead >MY Table </thead>
                        <tbody>
                            <tr className='table-primary'>
                                <td scope='row'>Name</td>
                                <td>Descreption</td>
                            </tr>
                            {data.data.map((value) => {
                                return (
                                    <tr onClick={()=>handleclick()} className='table-danger' key={value.id} >
                                        <td >{value.name}</td>
                                        <td>{value.Desription}</td>
                                    </tr>

                                );

                            }
                            )}
                        </tbody>

                    </Table>

                </div>
               
            </div>
            {click ? <div className="p-3 my-2 rounded" style={{
      background: 'yellow'
    }}>
                    <new Toast>
                        <ToastHeader>
                            EDIT
                        </ToastHeader>
                        <ToastBody>
                            Are you want to Edit this detail!
                        </ToastBody>
                    </new>    
                    
                </div> : ''}


        </div>
    )
}

export default NewTable
