
import {Component} from "react"
import "./index.css"


const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component{
  state={activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital=(event)=>{
    this.setState({activeCapitalId: event.target.value})

  }

  getCountry=()=>{
    const {activeCapitalId}= this.state
    const activeCountryAndcapital = countryAndCapitalsList.find(each=> each.id === activeCapitalId)
    return activeCountryAndcapital.country
  }


  render(){
    const {activeCapitalId} = this.state
    const {country} = this.getCountry(activeCapitalId)


    return(
      <div className="bg-container">
        <div className="app-container">
          <h1 className="title">Countries And Capitals</h1>
          <div className="select-container">
            <select className="search-capital"
            onChange={this.onChangeCapital}
            value={activeCapitalId}
            >
              {countryAndCapitalsList.map(each=>(
                <option className="option " key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>


              ))}

            </select>
            <p className="description">is capital of which city?</p>

          </div>
          <p className="country">{country}</p>


        </div>

      </div>
    )
  }
}
export default Capitals