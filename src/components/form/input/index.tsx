import React from 'react';
import style from './index.module.css'
import log from 'loglevel';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import validate from 'validate.js';

import 'antd/dist/antd.css';
log.setLevel('warn');

interface Props {
    form?: any,
    name: string,
    placeholder?: string,
    [x: string]: any
}
interface State {
    validateStatus?: any
    result?: string,
    value: string
}

export default class Component extends React.Component<Props, State> {
    constructor(props: Props) {
        log.info('Form.Input:constructor reached');
        super(props);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            validateStatus: undefined,
            result: '',
            value: ''
        };
    }

    onBlur(e: any) {
        log.info('Form.Input:onBlur reached');
        if (this.props.validators) {
            let result = validate.single(e.target.value, this.props.validators);
            if (result == undefined ) {
                this.setState({result: result, validateStatus: 'success'});
            }
            else {
                this.setState({result: result, validateStatus: 'error'});
            }
        }
    }

    onChange(e: any) {
        log.info('Form.Input:onChange reached');
        this.setState({value: e.target.value});
        this.props.handleChange({
            name: this.props.name,
            value: e.target.value
        });
    }

    render() {
        log.info('Form.Input:constructor reached');
        let {name, label, handleBlur, handleChange, ...props} = this.props;
        return (
            <Form.Item
                label={label?label:null}
                validateStatus={this.state.validateStatus}
                help={this.state.result}
            >
                <Input
                    name={name}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    value={this.state.value}
                    {...props}
                />
            </Form.Item>
        )
    }
}
