import React from 'react';
import style from './index.module.css'
import log from 'loglevel';
import { Form } from 'antd';
import validate from 'validate.js';
import _ from 'lodash';

import Input from './input';
import Select from './select';

import 'antd/dist/antd.css';
log.setLevel('warn');

interface Props {
    children?: any,
    handleChange?: any,
    handleSubmit?: any,
    validators?: any,
    [x: string]: any
}

interface State {
}

class Component extends React.Component<Props, State> {
    protected values: {[index: string]:any};

    constructor(props: Props) {
        log.info('Form:constructor reached');
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.values = {};
        for (let child of this.props.children) {
            let result = undefined;
            if (this.props.validators && this.props.validators[child.props.name]) {
                result = validate.single(child.props.value, this.props.validators[child.props.name]);
            }
            this.values[child.props.name] = {value: child.props.value, result: result};
        }
        if (this.props.handleChange) {
            this.props.handleChange(this.values);
        }
    }
    handleChange(e: {name: string, value: any}): void {
        log.info('Form:handleChange reached');
        let result = undefined;
        if (this.props.validators && this.props.validators[e.name]) {
            result = validate.single(e.value, this.props.validators[e.name]);
        }
        this.values[e.name] = {value: e.value, result: result};
        if (this.props.handleChange) {
            this.props.handleChange(this.values);
        }
    }


    render() {
        log.info('Form:render reached');
        let {handleChange, validators, children, ...props} = this.props;
            if (this.props.children) {
            children = (Array.isArray(this.props.children))?this.props.children:[this.props.children];
            children = children.map((child: any) => {
                let elem = React.cloneElement(child, {
                    key: child.props.name,
                    handleChange: this.handleChange,
                    handleValidation: this.props?.handleSubmit,
                    //validators: (this.props.validators && this.props.validators[child.props.name])?this.props.validators[child.props.name]:null,
                    validators: this.props?.validators?.[child.props.name],
                    ...props
                })
                return elem;
            })
        }

        return (
            <div className={[style.component].join(' ')}>
                <Form
                    layout='vertical'
                >
                    {children}
                </Form>
            </div>
        );
    }
}

export {Input, Select, Component as Form };

