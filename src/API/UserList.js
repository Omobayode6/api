import axios from 'axios'
import React, { Component } from 'react'

class UserList extends Component {
    constructor(props) {
       // the supper helps us to have access to the constructor
        super(props)

        this.state = {
            users: []
        }
    }
    //use it to update (Modify) the information in state
    componentDidMount(){
      //to fetch the data from the url
        axios.get('https://jsonplaceholder.typicode.com/users')
        //.then to await the respond
        .then(response => {
            this.setState({
                users: response.data
            })
            console.log(response.data)
        }) 
    }

    render() {
      const {users} = this.state
        return (
            <div>
                <h1>List  of Users</h1>
                {
                    users.map(user => <div key ={user.id}> {user.name} </div>)
                }
            </div>
        )
    }
}

export default UserList;