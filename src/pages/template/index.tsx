import React from 'react';
import style from './index.module.css';
import log from 'loglevel';
import jsonpack from 'jsonpack';

import {Scrollbars} from 'react-custom-scrollbars';
import {Breadcrumb, Icon, Spin} from 'antd';

import 'antd/dist/antd.css';
import List from '../../components/list';
import ListItem from './listitem';
import Loader from '../../components/loader';

interface State {
    sedes: any
}

interface Props {
    status: string
    sedes: any
}

export default class Component extends React.Component<Props, State> {
    constructor(props: Props) {
        log.info('Template:constructor reached');
        super(props);
        console.log('XXX')
        console.log(this.props)
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        log.info('Template:componentDidUpdate reached');
        if (this.props !== prevProps) {
            console.log('TEMPLATE STATE')
            if (this.props.sedes?.data) {
                this.setState({sedes: jsonpack.unpack(this.props.sedes.data)})
                console.log(jsonpack.unpack(this.props.sedes.data))
            }

        }
    }

    render() {
        log.info('Template:render reached');
        console.log('render')
        let items = null;
        if (this.state?.sedes) {
            console.log('?')
            console.log(this.state.sedes)
            items = this.state.sedes.map((sede: any, index: number) => {
                console.log('sede');
                console.log(sede);
                return (
                    <div {...sede} key={sede._id}/>
                )

            })
        }

        return (
            <div className={[style.component].join(' ')}>
                <div className={[style.breadcrumb].join(' ')}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">Application Center</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">Application List</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>An Application</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className={[style.title].join(' ')}>Example Title of Template</div>
                <div className={[style.body].join(' ')}>
                    <Loader
                        loading={<Spin indicator={<Icon type="loading" style={{fontSize: 40}} spin/>}/>}
                        error={<Icon type="exclamation-circle" style={{fontSize: 40, color: '#b60005'}}/>}
                        status={this.props.status}
                    >
                        <List item={ListItem}>
                            {items}
                        </List>
                    </Loader>

                </div>
            </div>
        );
    }
}



