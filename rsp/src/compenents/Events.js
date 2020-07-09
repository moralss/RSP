import React ,{Component} from 'react';
import EventDetails from './EventDetails';

class Events extends Component {
    constructor(){
        super()
        this.state = {
            events : [
                {id:1, imgurl: "" , name : "CES", description : "lorem a keebs ksssjf boefls lorem a keebs ksssjf boefls", date : "1345/123"},
                {id:2, name : "PGA", description : " lorem a keebs ksssjf boefls", date : "1345/123"}   
            ],
            selectedEvent : { description : "" , date : ""} 
        }
    }

    
    selectEventToShow(eventId){
        const eventFound = this.state.events[eventId - 1];
        console.log(eventFound)
        this.setState({selectedEvent: eventFound})
    }

    render () {

        return (
          <div>
            <h1>Events</h1>             
            {this.state.events.map((event) => <h3 onClick={() => this.selectEventToShow(event.id)}>{event.name} </h3>)}
            <EventDetails event={this.state.selectedEvent}/>
        </div>
      )      
    }
  }


  export default Events;