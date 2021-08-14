import React, {Component} from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peopleInSpace : []}
    }
    render() {
        return(
        <div>{this.state.peopleInSpace.map(person => person.name)}</div>
        )
    }
/*      componentDidMount = () => {
        fetch ('http://api.open-notify.org/astros.json')
        .then(response=>response.json())
        .then(data=> {this.setState(
            {peopleInSpace : data.people}
        )})}  */

        componentDidMount = async () => {
            const response = await fetch('http://api.open-notify.org/astros.json')
            const data = await response.json()
        
            this.setState(
                {peopleInSpace : data.people})
          }

            
        

}