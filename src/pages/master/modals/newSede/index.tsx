import React from 'react';
import style from './index.module.css'
import log from 'loglevel';
import { Button, Modal } from 'antd';
import { Form, Input } from '../../../../components/form';

import 'antd/dist/antd.css';
log.setLevel('warn');

interface Props {
    visible: boolean
    onCancel?: any
}
interface State {
}

export default class Component extends React.Component<Props, State> {
    constructor(props: Props) {
        log.info('Master.modals.newSede:constructor reached');
        super(props);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleFormChange (e: any) {
        log.info('Master.modals.newSede:handleSubmit reached');
        console.log('xoxoxoxoox');
        console.log(e)
    }

    handleCancel() {
        log.info('Master.modals.newSede:handleCancel reached');
        this.props?.onCancel();
    }

    render() {
        log.info('Master.modals.newSede:render reached');
        return (
            <div className={[style.component].join(' ')}>
                <Modal
                    title="Basic Modal"
                    width={440}
                    visible={this.props.visible}
                    // onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form
                        handleChange={this.handleFormChange}
                        validators={{
                            nombre: { presence: {allowEmpty: false, message: 'Requerido' }}
                        }}
                    >
                        <Input name='nombre' label='Nombre' />
                        <Input name='codigo' label='Código'/>
                        <Input name='descripcion' label='Descripción'/>
                    </Form>
                </Modal>
            </div>
        );
    }
}



