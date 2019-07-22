import React, { Component } from 'react';
import ResumeForm from './ResumeForm';
import { template } from 'handlebars';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData:'',
      data: [{
        id: 1,
        fullName: 'ABC',
        email: 'ABC@gmail.com',
        mNumber: '8899665442',
        careerObjective: 'Somthink about All details',
        mDegree: 'M.tech', mYear: '2018', mUni: 'CBSE', mPer: '70',
        bDegree: 'B.tech', bYear: '2014', bUni: 'CBSE', bPer: '76',
        address: '55,ABC ,Sect 20,Gurgoan',
        city: 'Gurgoan'
      },
      {
        id: 2,
        fullName: 'mcd',
        email: 'mcd@gmail.com',
        mNumber: '0899666542',
        careerObjective: 'Somthink about All details Somthink about All details Somthink about All detailsSomthink about All details',
        study: [{mDegree: 'M.tech', mYear: '2018', mUni: 'CBSE', mPer: '70'},
        {bDegree: 'B.tech', bYear: '2014', bUni: 'CBSE', bPer: '76'},],
        address: '44,ABC ,Sect 20,Gurgoan',
        city: 'Gurgoan'
      }]
    }
  }

  onSubmit = (id) => {
    // if (id) {
    var obj = this.state.data.filter(function (temp) {
      return temp.id == id;
    });
    console.log(obj);
    this.setState({ resumeData: obj })
  }
  // else
  // this.setState({data:""})


  // }

  render() {


    return (
      <div class="container">
        <div class="row align-items-start">

          <div class="col-2">
            <h3>Demo</h3>
            <img src='https://i.pinimg.com/originals/a2/52/86/a252867e1e5d31e3806b5adb54b5bdfd.jpg'
              alt='image load'
              style={{ width: '200px', paddingTop: '20px' }}
              onClick={()=>this.onSubmit(1)}
            />

            <img
              src='https://i.pinimg.com/originals/a2/52/86/a252867e1e5d31e3806b5adb54b5bdfd.jpg'
              alt='image load' style={{ width: '200px', paddingTop: '20px' }}
              onClick={()=>this.onSubmit(2)} />
          </div>
          <div class="col-10">
            {this.state.resumeData=="" ? null: <ResumeForm data={this.state.resumeData} />}
          </div>

        </div>
      </div>
    )
  }
}
export default App;
