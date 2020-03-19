
import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import CountryPage from '../components/country-page'
import 'bulma/css/bulma.css'
import '../styles/custom.css'


// Need to actually make it dynamically determine the date
const CountryTemplate = ({pathContext}) => {
    return ( 
        <StaticQuery
        query={graphql`
            query {
                countries: allCountriesJson(sort: {order: ASC, fields: country_name}, filter: {highest_confirmed: {gte: 1}, population: {gte: 1000000}}) {
                nodes {
                    country_name
                    id
                    time_series {
                        date
                        confirmed
                        confirmed_per_mil
                        deaths
                        deaths_per_mil
                        recovered
                        recovered_per_mil
                    }
                    highest_confirmed
                    population
                }
            }
            }
            `}
            render={ data => (
                <CountryPage selected_country={pathContext.country} countries={data.countries.nodes} />
            )}
        
        
        />)       

}
export default CountryTemplate