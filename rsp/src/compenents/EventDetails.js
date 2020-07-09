import React ,{Component} from 'react';
import Form from './Form'

class EventsDetails extends Component {
    constructor(){
        super()
        this.state = {

    }
}

   
    render () {
        console.log("props" , this.props.event.description)
        return (
          <div>
            {this.props.event.description}
            <br/>
            {this.props.event.date}
            {this.props.event.description != "" ? <Form/> : null} 
        </div>
      )      
    }
  }



  export default EventsDetails;