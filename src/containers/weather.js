import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Weather extends Component {
  static propTypes = {
    data: PropTypes.array
  }

  render() {
    return (
      <div>
        hello
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)



// import React, { Component } from 'react';
// // import PropTypes from 'prop-types'
// import { connect } from 'react-redux';
// import {fetchData} from '../actions/weather-action';
// import Input from '../components/input'

// export class Weather extends Component {
//   constructor(props){
//       super(props);
//   }

//   makeUrl(){
//      return `https://api.openweathermap.org/data/2.5/weather?q=${this.inputref.value}&units=imperial&APPID=b9d5fbc6b5a1c8b4ee5f715112d129df`;
//   }

//   keyUpFunc(e){
    
//       if(e.keyCode === 13 ){
//         let url = this.makeUrl();
//         console.log(url);
//         this.props.fetchdata(url);
//       }
//   }
  
//   render() {
//     const { data } = this.props;
//     return(
//         <div>
//             <Input 
//             inputRef={(input)=> { this.inputref = input }}
//             keyUp = {(e)=> this.keyUpFunc(e)}
//             />
//             <span>{data.main ? data.main.temp: ''}</span>
//         </div>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//     data : state.data
//   })

// const mapDispatchToProps = {
//   fetchdata: fetchData
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Weather);
