import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

class ResumeForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: this.props.data[0].fullName ,
      email: this.props.data[0].email ||'',
      mNumber: this.props.data[0].mNumber||'',
      careerObjective: this.props.data[0].careerObjective||'',
      mDegree: this.props.data[0].mDegree||'', mYear: this.props.data[0].mYear||'', mUni: this.props.data[0].mUni ||'', mPer: this.props.data[0].mPer ||'',
      bDegree: this.props.data[0].bDegree||'', bYear:this.props.data[0].bYear|| '', bUni:this.props.data[0].bUni ||'', bPer: this.props.data[0].bPer||'',
      address: this.props.data[0].address || '',
      city: this.props.data[0].city||''
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const { mDegree, mYear, mUni, mPer,
      bDegree, bYear, bUni, bPer, address, city } = this.state


    var doc = new jsPDF({
      // orientation: 'landscape',
      unit: 'in',
      marginLeft: 10, marginRight: 10,

    })

    doc.text(`Resume`, 3.5, 0.5)
    doc.line(20, 20, 60, 20)
    // doc.setFontSize(16)
    doc.setFontSize(9)
    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.text(`Full Name: ${this.state.fullName}`, 0.5, 0.8)
    doc.text(`Email: ${this.state.email}`, 0.5, 1.0)
    doc.text(`MobileNo: ${this.state.mNumber}`, 0.5, 1.2)
    doc.setFontSize(15)
    doc.text(`Objective`, 0.5, 1.7)
    doc.setFontSize(9)
    doc.setLineWidth(3);
    doc.setFont("times");
    doc.setFontType("");
    doc.text(this.state.careerObjective, 0.5, 1.9, { margin: { left: 10, right: 10 } })
   
    // doc.text(`Message: ${this.state.pesan}`, 0.5, 1.4)
    doc.setDrawColor(255, 0, 0);
doc.line(35, 30, 100, 30);
    doc.setLineWidth(1.5)
    doc.line(20, 35, 60, 35)

    doc.autoTable({
      head: [['Name', 'Year', 'University', 'Percentage']],
      body: [
        [mDegree, mYear, mUni, mPer],
        [bDegree, bYear, bUni, bPer],

      ],
      margin: { top: 2 },
    });
    doc.text(`Address: ${address}`, 0.5, 4.2)
    doc.text(`City: ${city}`, 0.5, 4.4)
    doc.text('I hereby certify that the above information given are true and correct as to the best of my knowledge', 0.5, 7.4)
    doc.text(this.state.fullName, 0.5, 7.5  )



    doc.save(`${this.state.fullName}`)
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
console.log(this.props.data[0].fullName)
    return (
      <div class="container">
        <div class="row align-items-start">
         
          <h4>Resume</h4>
      <div style={{ margin: '40px', fontFamily: 'Roboto' }}>
        <div className="form-row">
          <div className="col">
            <p>Name
              <input type="text" className="form-control" placeholder="Full name" name='fullName'
               value={this.state.fullName} 
               onChange={this.onChangeHandler} />
            </p></div>
          <div className="col">
            <p>Email
             <input type="email" className="form-control" placeholder="Email" name='email' value={this.state.email} onChange={this.onChangeHandler} />
            </p></div>
          <div className="col">
            <p>Mobile
              <input type="number" className="form-control" placeholder="9999199292" name='mNumber'value={this.state.mNumber} onChange={this.onChangeHandler} />
            </p></div>
        </div>
        <p>My career objective
            <div className="form-row">
            <div className="col">
              <input type="text" className="form-control" placeholder="Career Objet" name='careerObjective' value={this.state.careerObjective} onChange={this.onChangeHandler} />
            </div>
          </div></p><br />
          
        <table className="table" id='my-table'>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Degree</th>
              <th scope="col">Year</th>
              <th scope="col">University</th>
              <th scope="col">Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td><input type="text" className="form-control" placeholder="Full name" name='mDegree' value={this.state.mDegree} onChange={this.onChangeHandler} /></td>
              <td><input type="number" className="form-control" placeholder="Year" name='mYear'  value={this.state.mYear} onChange={this.onChangeHandler} /></td>
              <td><input type="text" className="form-control" placeholder="exg. CBSE" name='mUni'  value={this.state.mUni} onChange={this.onChangeHandler} /></td>
              <td><input type="number" className="form-control" placeholder="22%" name='mPer'  value={this.state.mPer} onChange={this.onChangeHandler} /></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td> <input type="text" className="form-control" placeholder="Full name" name='bDegree'  value={this.state.bDegree} onChange={this.onChangeHandler} /></td>
              <td><input type="number" className="form-control" placeholder="Year" name='bYear'  value={this.state.bYear} onChange={this.onChangeHandler} /></td>
              <td><input type="text" className="form-control" placeholder="exg. CBSE" name='bUni'  value={this.state.bUni} onChange={this.onChangeHandler} /></td>
              <td><input type="number" className="form-control" placeholder="22%" name='bPer'  value={this.state.bPer} onChange={this.onChangeHandler} /></td>
            </tr>

          </tbody>
        </table>
        <p>Address
            <div className="form-row">
            <div className="col">
              <input type="text" className="form-control" placeholder="address" name='address'  value={this.state.address} onChange={this.onChangeHandler} />
            </div>
          </div></p><br />
        <p>City
            <div className="form-row">
            <div className="col">
              <input type="text" className="form-control" placeholder="City" name='city'  value={this.state.city} onChange={this.onChangeHandler} />
            </div>
          </div></p><br />

        <center>
          <Button onClick={this.onSubmit.bind(this)}
            variant="raised" color="secondary" style={{ margin: '5px' }}>
            Save PDF
        </Button>
        </center>

      </div>
      </div>
      </div>
    )
  }
}
export default ResumeForm;
