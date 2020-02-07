import React from 'react';
import style from './index.module.css'
import log from 'loglevel';
import { Button, Modal } from 'antd';
import _ from 'lodash';
import { Form, Input } from '../../../../components/form';

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

        console.log('XXX')
        console.log(style)

        this.state = {
            modalClass: null
        }
    }

    handleOk() {
        log.info('Master.modals.newSede:handleOk reached');
        if (_.find(this.values, (o: any) => { return o.result != undefined })) {
            console.log('nok');
            this.setState({modalClass: style.wobblehorbottom})
            setTimeout(() => {
                this.setState({modalClass: null})
            }, 1000);
        }
        else {
            console.log('ok');
        }
    }

    handleFormChange (e: any) {
        log.info('Master.modals.newSede:handleSubmit reached');
        this.values = e;
    }

    handleCancel() {
        log.info('Master.modals.newSede:handleCancel reached');
        this.props?.onCancel();
    }

    render() {
        log.info('Master.modals.newSede:render reached');
        console.log('YYY')
        console.log(this.state)

        return (
            <div className={[style.component].join(' ')}>
                <Modal
                    title="Basic Modal"
                    width={440}
                    visible={this.props.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    className={[this.state.modalClass].join(' ')}
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



