import React from 'react';
import style from './index.module.css';
import log from 'loglevel';
import axios from 'axios';

export default function withData(WrappedComponent: any) {
    interface Props {
        data: any
    }
    interface State {
        status: string,
        [x: string]: any
    }

    return class extends React.Component<Props, State> {
        constructor(props: Props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                status: 'loading',
                data: null
            };
        }

        componentDidMount() {
            log.info('Data:componentDidMount reached');
            let promiseData = [];
            let variables: string[] = [];
            for (let datum of this.props.data) {
                variables.push(datum.variable);
                promiseData.push(
                    axios({
                        method: datum.method,
                        url: datum.url
                }));
            }
            Promise.all(promiseData).then(values => {
                let vals: any = {};
                for (let value in values) {
                    let v: string = variables[value]
                    vals[v] = values[value]
                }
                this.setState({
                    status: 'loaded',
                    ...vals
                });
            })
        }

        componentWillUnmount() {
        }

        handleChange() {
        }

        render() {
            let {data, ...props} = this.props;
            console.log('WRAPPER STATE')
            console.log(this.state);
            return <WrappedComponent {...props} {...this.state} />;
        }
    };
}



