import React from 'react';
import style from './index.module.css'
import log from 'loglevel';

import 'antd/dist/antd.css';
import {Scrollbars} from "react-custom-scrollbars";
import { Button, Form } from 'antd';
import ModalNuevaSede from '../modals/newSede';

log.setLevel('warn');

interface Props {}
interface State {
    modalNuevaSede_visible: boolean
}

export default class Component extends React.Component<Props, State> {
    constructor(props: Props) {
        log.info('Master.sidebar:constructor reached');
        super(props);
        this.state = {
            modalNuevaSede_visible: false
        };
    }

    handleClick (e: string) {
        log.info('Master.sidebar:constructor reached');
        switch (e) {
            case 'nuevaSede':
                console.log('nuevaSede');
                this.setState({
                    modalNuevaSede_visible: true
                });
                break;
        }
    }

    render() {
        log.info('Master.sidebar:render reached');
        return (
            <div className={[style.component].join(' ')}>
                <div className={[style.subContainer, style.subContainerTitle].join(' ')}>
                    FILTROS
                </div>
                <Scrollbars className={[style.subContainer, style.subContainerBody].join(' ')}>
                    <div className={[style.scroller].join(' ')}>
                        <div className={[style.item].join(' ')}>
                            <Button type="primary" block onClick={() => {this.handleClick('nuevaSede') }}>Nueva sede</Button>
                        </div>
                        <div className={[style.item].join(' ')}>
                            <Button type="primary" block onClick={() => {this.handleClick('nuevaSede') }}>Primary</Button>
                        </div>
                    </div>
                </Scrollbars>
                <ModalNuevaSede
                    visible={this.state.modalNuevaSede_visible}
                    onCancel={() => {this.setState({modalNuevaSede_visible: false})}}
                />
            </div>
        );
    }
}



