import React, { Component } from 'react'
import CenteredGrid from "./SearchParamsMatterial"
import playersTable from '../../_containers/pickSquad/playersTable'
export default class Search extends Component {
    render() {
        return (
            <div>
                <CenteredGrid/>
                {/* <PlayersTable /> */}
            </div>
        )
    }
}
