import React from 'react';
import style from './index.module.css';
import log from 'loglevel';
import axios from 'axios';


export default function withData(WrappedComponent: any) {
    interface Props {
        data: [any]
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
            for (let datum of this.props.data) {
                promiseData.push(
                    axios({
                        method: datum.method,
                        url: datum.url
                }));
                Promise.all(promiseData).then(values => {
                    this.setState({
                        data: values
                    });

                })
            }
        }

        componentWillUnmount() {
        }

        handleChange() {
        }

        render() {
            let {data, ...props} = this.props;
            return <WrappedComponent {...props} {...this.state} />;
        }
    };
}



