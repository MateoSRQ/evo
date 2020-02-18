import React from 'react';
import style from './index.module.css'
import log from 'loglevel';

import 'antd/dist/antd.css';
import { Button, Form } from 'antd';
import { Spin, Icon } from 'antd';

log.setLevel('warn');

interface Props {
    children?: any,
    loading?: any,
    error?: any,
    status?: string
};

interface State {
    status: string
}

export default class Component extends React.Component<Props, State> {
    constructor(props: Props) {
        log.info('Loader:constructor reached');
        super(props);
        this.state = {
            status: this.props.status?this.props.status:'loaded'
        };
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        log.info('Loader:componentDidUpdate reached');
        if (this.props !== prevProps) {
            this.setState({
                status: this.props.status?this.props.status:'loaded'
            })
        }
    }

    render() {
        log.info('Loader:render reached');
        let loading =  <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />;
        let error   =  <Icon type="exclamation-circle" style={{ fontSize: 24, color: '#b60005' }} />
        if (this.props.loading) loading = this.props.loading;
        if (this.props.error) error = this.props.error;

        let load = null;

        switch (this.state.status) {
            case 'loaded':
                load = <div className={[style.leaving].join(' ')}>{loading}</div>
                break;
            case 'loading':
                load = <div className={[style.loader].join(' ')}>{loading}</div>;
                break;
            case 'error':
                load =<div className={[style.loader].join(' ')}>{error}</div>
                break;
        };

        return (
            <div className={[style.component].join(' ')}>
                <div className={[style.container].join(' ')}>
                    {this.props.children}
                </div>
                {load}
            </div>
        );
    }
}



