import React from 'react';
import style from './index.module.css';
import log from 'loglevel';

import { Scrollbars } from 'react-custom-scrollbars';

import { Collapse, Icon } from 'antd';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';

import {
    CollapsibleComponent,
    CollapsibleHead,
    CollapsibleContent
} from "react-collapsible-component";


import 'antd/dist/antd.css';
const { Panel } = Collapse;
const ButtonGroup = Button.Group;

interface State {
}

interface Props {
    key: string
}
export default class Component extends React.Component<Props, State> {

    constructor(props: Props) {
        log.info('Template:constructor reached');
        super(props);
        console.log('props')
        console.log(props)
    }


    render() {
        log.info('Template:render reached');
        return (
            <div className={[style.component].join(' ')} key={this.props.key}>
                <Card className={[style.card].join(' ')}>
                    <Row>
                        <Col span={18}>
                            <div className={[style.prefix].join(' ')}>SEDE</div>
                            <div className={[style.title].join(' ')}>Title of Item</div>
                            <div className={[style.subTitle].join(' ')}>This is a brief description</div>
                        </Col>
                        <Col span={6}>
                        </Col>
                    </Row>
                    <CollapsibleComponent>
                        <CollapsibleContent className={[style.collapsible].join(' ')}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex{" "}
                            </p>
                            <Row>
                                <Col span={8} className={[style.buttonHolder].join(' ')}>
                                    <Button className={[style.button].join(' ')} block size={'small'}>L</Button>
                                </Col>
                                <Col span={8} className={[style.buttonHolder].join(' ')}>
                                    <Button className={[style.button].join(' ')} block size={'small'}>L</Button>
                                </Col>
                                <Col span={8} className={[style.buttonHolder].join(' ')}>
                                    <Button className={[style.button].join(' ')} block size={'small'}>L</Button>
                                </Col>
                            </Row>
                        </CollapsibleContent>
                        <CollapsibleHead
                            isExpanded={true}
                            showContentAboveButton={true}
                            className={[style.centered].join(' ')}
                        >
                            <Icon type="caret-down" style={{color: 'black'}}/>
                        </CollapsibleHead>
                    </CollapsibleComponent>
                    {/*<Collapse*/}
                    {/*    bordered={false}*/}
                    {/*    expandIcon={({ isActive }) => <Icon type="caret-down" rotate={isActive ? 180 : 0} />}*/}
                    {/*>*/}
                    {/*    <Panel header="" key="1">*/}
                    {/*        <p>xxxx</p>*/}
                    {/*    </Panel>*/}
                    {/*</Collapse>*/}
                </Card>
            </div>
        );
    }
}



