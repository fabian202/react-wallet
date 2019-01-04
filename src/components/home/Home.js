import React , { Component } from 'react';
import ListMovement from '../movement/ListMovement';
import TotalMovement from '../movement/TotalMovement';
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        const { movements } = this.props;
        console.log(movements);
        return(
            <div className="container">
            <div className="row">
                <div className="col s12 m4 l3">
                    <TotalMovement />
                </div>
                <div className="col s12 m8 l9">
                    <ListMovement movements={movements} />
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movements: state.movement.movements
    }
}

export default connect(mapStateToProps)(Home);