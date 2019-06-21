import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  allBands = () => {
    return this.props.bands.map(band => {
      return <Band key={band.id} id={band.id} band={band.name} deleteBand={this.props.deleteBand} />
    })
  }
  render() {
    return (
      <div>
        <BandInput
          addBand={this.props.addBand}/>
        <ul>
          {this.allBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: text => dispatch({ type: "ADD_BAND", text }),

  deleteBand: id => dispatch({
    type: "DELETE_BAND",
    id
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
