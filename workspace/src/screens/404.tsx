import React, { CSSProperties } from "react"
import {Row, Col} from 'antd'

const themeStyle : CSSProperties = {
    textAlign: 'center',
    fontSize: 20,
    fontFamily:'Arial'
}
export const NotFound = () =>{
    return(
        <Row>
            <Col span={24} style={themeStyle}>This page is not found</Col>
        </Row>
    )
}