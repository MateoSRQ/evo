import React from 'react';
import style from './index.module.css'
import log from 'loglevel';
import validate from 'validate.js';
import { Form, Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

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
        log.info('Form.Select:constructor reached');
        super(props);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            validateStatus: undefined,
            result: '',
            value: ''
        };
    }

    onBlur() {
        log.info('Form.Select:onBlur reached');
        if (this.props.validators) {
            let result = validate.single(this.state.value, this.props.validators);
            if (result == undefined ) {
                this.setState({result: result, validateStatus: 'success'});
            }
            else {
                this.setState({result: result, validateStatus: 'error'});
            }
        }
    }

    onChange(e: any) {
        log.info('Form.Select:onChange reached');
        this.setState({value: e});
        this.props.handleChange({
            name: this.props.name,
            value: e
        });
    }

    componentDidMount() {
        if (this.props.handleValidation) {
            this.props.handleValidation(this.onBlur());
        }
    }

    render() {
        log.info('Form.Select:constructor reached');
        let {name, label, handleBlur, handleValidation, handleSubmit, handleChange, ...props} = this.props;
        return (
            <Form.Item
                label={label?label:null}
                validateStatus={this.state.validateStatus}
                help={this.state.result}
                className={[style.component].join(' ')}
            >
                <Select
                    //name={name}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    value={this.state.value}
                    {...props}
                >
                    <Option value="china">China</Option>
                    <Option value="usa">U.S.A</Option>
                </Select>
            </Form.Item>
        )
    }
}
