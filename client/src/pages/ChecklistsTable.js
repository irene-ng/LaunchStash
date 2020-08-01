import React from 'react'
import {Table} from 'react-bootstrap';
import Loading from './components/Loading'
import jsPDF from 'jspdf';

const ChecklistsTable = (props) => {

  const onClickItemHandle = (item) => {
    props.setClickedItem(item)
  }

  const onDeleteButton = async (item) => {
    const res = await fetch(`/user/my-checklist/${localStorage.getItem('myEmail')}/${item._id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'token-backend': localStorage.getItem('myToken'),
        'email-backend': localStorage.getItem('myEmail')
      }
    })

    if(res.status === 200) {
      const newChecklists = await res.json()
      props.setChecklists(newChecklists)
    }
  }


  //Export PDF
  const onExportPdf = (item) => {
    const step1 = item.step1.map((value, index) => (
      `<p>${value}</p>`
    ))
    const step2 = item.step2.map((value, index) => (
      `<p>${value}</p>`
    ))
    const step3 = item.step3.map((value, index) => (
      `<p>${value}</p>`
    ))
    const step4 = item.step4.map((value, index) => (
      `<p>${value}</p>`
    ))


    const doc = new jsPDF({
      orientation: 'p',
      unit: 'in',
      format: [612, 792]
    })
    doc.text(`STEP #1`, 0.5, 0.5)
    doc.fromHTML(
      `${step1}`, 0.5, 0.1
    )
    doc.text(`STEP #2`, 0.5, 0.8)
    doc.fromHTML(
      `${step2}`, 0.5, 0.1
    )
    doc.text(`STEP #3`, 0.5, 1.1)
    doc.fromHTML(
      `${step3}`, 0.5, 0.1
    )
    doc.text(`STEP #4`, 0.5, 1.4)
    doc.fromHTML(
      `${step4}`, 0.5, 0.1
    )

    doc.save(`TestPDF.pdf`)
  }



  const renderColumns = () => {
    console.log(props.checklists)
    return (
      <tbody>
          {props.checklists ?
            props.checklists.map((item) => (
                <tr key={item._id}>
                 <td className=''>1</td>
                  <td className=''>
                    <button className="btn btn-link text-danger" onClick={() => onClickItemHandle(item)} >{item.name}</button>
                  </td>
                  <td>
                    <button className="float-right badge-pill small btn-outline-secondary" onClick={() => onDeleteButton(item)}>Delete</button>
                  </td>
                  <td>
                    <button className="float-right badge-pill small btn-primary" onClick={() => onExportPdf(item)}>Export PDF</button>
                  </td>
                </tr>
            ))
          : null}
      </tbody>
    )
  }

  if(!props.checklists)
    return <Loading />



  return (
    <>
    <Table className='table-hover table-striped table-borderless'>
    <thead className='bg-gradient-gray-dark'>
      <tr className='text-white text-uppercase'>
        <th>#</th>
        <th>Checklists Name</th>
        <th></th>
        <th></th>

      </tr>
    </thead>
    {renderColumns()}
  </Table>
  </>
  )
}

export default ChecklistsTable
