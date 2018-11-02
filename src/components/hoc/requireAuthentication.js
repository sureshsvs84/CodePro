import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import authService from '../../authService';

export default function (ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            if (authService.isAccessTokenExpired()) {
                if (authService.isRefreshTokenExpired()) {
                    this.props.history.push('/');
                }
            }
        }

        componentWillUpdate(nextProps) {
            if (authService.isAccessTokenExpired()) {
                if (authService.isRefreshTokenExpired()) {
                    this.props.history.push('/');
                }
            }
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.loginReducer.isAuthenticated };
    }

    return connect(mapStateToProps)(Authentication);
}