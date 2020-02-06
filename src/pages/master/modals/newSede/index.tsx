import React from 'react';
import style from './index.module.css'
import log from 'loglevel';
import { Button, Modal } from 'antd';
import { Form, Input } from '../../../../components/form';

import 'antd/dist/antd.css';
log.setLevel('warn');

interface Props {
    visible: boolean
}
interface State {
}

export default class Component extends React.Component<Props, State> {
    constructor(props: Props) {
        log.info('Master.modals.newSede:constructor reached');
        super(props);
    }

    handleSubmit (e: any) {
        log.info('Master.modals.newSede:handleSubmit reached');
        console.log(e)
    }

    render() {
        log.info('Master.modals.newSede:render reached');
        return (
            <div className={[style.component].join(' ')}>
                <Modal
                    title="Basic Modal"
                    visible={this.props.visible}
                    width={440}
                    // visible={this.state.visible}
                    // onOk={this.handleOk}
                    // onCancel={this.handleCancel}
                >
                    <Form handleSubmit={this.handleSubmit}>
                        <Input name='item1' label='Item 1'/>
                        <Input name='item2' label='Item 2'/>
                        <Input name='item3' label='Item 3'/>
                    </Form>
                </Modal>
            </div>
        );
    }
}



