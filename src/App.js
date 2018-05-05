import React from 'react';
import './App.css';

const peopleList = [
  {name: 'Alex', dateOfBirth: '09/01/1980'},
  {name: 'Laura', dateOfBirth: '07/06/1990'},
  {name: 'Val', dateOfBirth: '15/12/1995'},
  {name: 'Bhavik', dateOfBirth: '26/02/2009'},
  {name: 'Rakhi', dateOfBirth: '18/07/2000'},
 ]
 
 const App = () =>
  <div>
    <Title />
    <TableContainer />
  </div>
 
 const Title = () =>
  <h1>PeopleSort</h1>
 
 const RadioButton = ({sortBy, onChange}) => {
  return (
    <form>
      <label>Sort By Name
        <input type="radio" value="name" onChange={onChange} checked={sortBy === 'name'} />
      </label>
      <label>Sort By Birth Date
        <input type="radio" value="dateOfBirth" onChange={onChange} checked={sortBy === 'dateOfBirth'} />
      </label>
    </form>
  )
 }
 
 const Table = ({people}) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Person</th><th>Date of Birth</th>
        </tr>
        {
          people.map((person, index) =>
          <tr key={index}>
            <td>{person.name}</td>
            <td>{person.dateOfBirth}</td>
          </tr>)
        }
      </tbody>
    </table>
  )
 }
  
 
 class TableContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortBy: 'name',
      people: []
    }
  }
  
  componentWillMount() {
    this.setState({people: peopleList})
  }
  
  handleSortByChange = (event) => {
    this.setState({sortBy: event.target.value})
  }
  
  sortPeople = (people) => {
    if (this.state.sortBy === 'dateOfBirth') {
      return people.sort((a, b) => {
        return a.dateOfBirth > b.dateOfBirth ? 1 : a.dateOfBirth < b.dateOfBirth ? -1 : 0
      })
    }
    return people.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
  }
  
  render() {
    return (
      <div>
        <RadioButton sortBy={this.state.sortBy} onChange={this.handleSortByChange} />
        <Table people={this.sortPeople(this.state.people)}/>
      </div>
    )
  }
 }

export default App;