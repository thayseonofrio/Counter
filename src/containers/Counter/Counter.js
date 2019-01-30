import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import Button from '../UI/Button/Button';

class Counter extends Component {

    render() {
        return(
            <div>
                <h1> Counter: {this.props.ctr}</h1>
                <Button clicked={this.props.onIncrementCounter} label="Increment"/>
                <Button clicked={this.props.onDecrementCounter} label="Decrement"/>
                <Button clicked={this.props.onAddCounter} label="Add"/>
                <Button clicked={this.props.onSubtractCounter} label="Subtract"/>
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}> Store Result </button>
                <ul>
                    {this.props.storedResults.map(
                        result =>  
                        (<li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>)
                    )}  
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        // prop: global state
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);