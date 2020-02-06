import React from 'react';
import style from './index.module.css'
import log from 'loglevel';
import { Form } from 'antd';
import validate from 'validate.js';
import _ from 'lodash';

import Input from './input';


import 'antd/dist/antd.css';
log.setLevel('warn');

interface Props {
    children?: any,
    handleChange?: any,
    handleSubmit?: any,
    validators?: any
}

interface State {
    validateStatus?: string
    //values: any
}

class Component extends React.Component<Props, State> {
    protected values: {[index: string]:any};

    constructor(props: Props) {
        log.info('Form:constructor reached');
        super(props);
        console.log('PROPS');
        console.log(this.props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.values = {};
        this.state = {
            validateStatus: ''
        };
    }

    handleChange(e: {name: string, value: any}): void {
        log.info('Form:handleChange reached');
        this.values[e.name] = e.value;
        if (this.props.handleChange) this.props.handleChange(this.values);
    }

    handleSubmit(e: any)  {
        e.preventDefault();
        this.props?.handleSubmit(e);
    };

    handleBlur(e: any): void {
        log.info('Form:handleBlur reached');
        console.log(this.props.validators)
        if (this.props.validators && this.props.validators[e.currentTarget.name]) {
            console.log('oooo');
            let result = validate.single(e.currentTarget.value, this.props.validators[e.currentTarget.name]);
        }
    }

    render() {
        log.info('Form:render reached');
        let children = null;

        if (this.props.children) {
            children = (Array.isArray(this.props.children))?this.props.children:[this.props.children];
            children = children.map((child: any) => {
                let elem = React.cloneElement(child, {
                    key: child.props.name,
                    handleChange: this.handleChange,
                    handleBlur: this.handleBlur,
                    validators: (this.props.validators && this.props.validators[child.props.name])?this.props.validators[child.props.name]:null
                })
                return elem;
            })
        }

        return (
            <div className={[style.component].join(' ')}>
                <Form
                    layout='vertical'
                    onSubmit={this.handleSubmit}
                >
                    {children}
                </Form>
            </div>
        );
    }
}

export {Input, Component as Form };

