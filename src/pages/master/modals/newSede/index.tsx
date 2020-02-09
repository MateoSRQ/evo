import React from 'react';
import style from './index.module.css'
import log from 'loglevel';
import { Button, Modal } from 'antd';
import _ from 'lodash';
import { Form, Input, Select } from '../../../../components/form';

import 'antd/dist/antd.css';
log.setLevel('warn');

interface Props {
    visible: boolean
    onCancel?: any
}
interface State {
    modalClass: any
}

export default class Component extends React.Component<Props, State> {
    protected values: any
    constructor(props: Props) {
        log.info('Master.modals.newSede:constructor reached');
        super(props);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.state = {
            modalClass: null
        }
    }

    handleSubmit() {

    }

    handleOk() {
        log.info('Master.modals.newSede:handleOk reached');
        if (_.find(this.values, (o: any) => { return o.result != undefined })) {
            this.setState({modalClass: style.wobblehorbottom})
            setTimeout(() => {
                this.setState({modalClass: null})
            }, 800);
            console.log(this.values);
        }
        else {
            console.log('ok');
            console.log(this.values);
        }
    }

    handleFormChange (e: any) {
        log.info('Master.modals.newSede:handleSubmit reached');
        console.log(e)
        this.values = e;
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
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    className={[style.component, this.state.modalClass].join(' ')}
                >
                    <Form
                        handleChange={this.handleFormChange}
                        handleSubmit={this.handleSubmit}
                        validators={{
                            nombre: { presence: {allowEmpty: false, message: 'Requerido' }},
                            prueba: { presence: {allowEmpty: false, message: 'Requerido' }}
                        }}
                    >
                        <Input name='nombre' label='Nombre' />
                        <Input name='codigo' label='Código' />
                        <Input name='descripcion' label='Descripción' />
                        <Select name="prueba" label='Prueba' />
                    </Form>
                </Modal>
            </div>
        );
    }
}



