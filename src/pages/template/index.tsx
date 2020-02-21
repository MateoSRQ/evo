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
    examenes: any
}

interface Props {
    status: string
    sedes: any
    examenes: any
}

export default class Component extends React.Component<Props, State> {
    constructor(props: Props) {
        log.info('Template:constructor reached');
        super(props);
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        log.info('Template:componentDidUpdate reached');
        if (this.props !== prevProps) {
            if (this.props.sedes?.data && this.props.examenes?.data) {
                this.setState({
                    sedes: jsonpack.unpack(this.props.sedes.data),
                    examenes: this.props.examenes.data
                });
            }
        }
    }

    render() {
        log.info('Template:render reached');
        let items = null;
        let examenes = null;

        if (this.state?.sedes && this.state?.examenes) {
            items = this.state.sedes.map((sede: any, index: number) => {
                return (
                    <div {...sede} key={index} />
                )
            })
            examenes = this.state.examenes
        }

        return (
            <div className={[style.component].join(' ')}>
                <div className={[style.breadcrumb].join(' ')}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Inicio</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">Administración</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className={[style.title].join(' ')}>Esquema de Administración de Sedes</div>
                <div className={[style.body].join(' ')}>
                    <Loader
                        loading={<Spin indicator={<Icon type="loading" style={{fontSize: 40}} spin/>}/>}
                        error={<Icon type="exclamation-circle" style={{fontSize: 40, color: '#b60005'}}/>}
                        status={this.props.status}
                    >
                        <List item={ListItem} data={examenes}>
                            {items}
                        </List>
                    </Loader>
                </div>
            </div>
        );
    }
}



