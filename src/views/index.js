import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getData} from "../redux/action"

export class index extends Component {

    componentDidMount(){
        this.props.getData();
    }
    render() {
        return (
            <div>
                {this.props.moviespopular}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({moviespopular:state.moviespopular
    
})

//const mapDispatchToProps = {
//    this.props.getDataSuccess}

export default connect(mapStateToProps, {getData})(index)
