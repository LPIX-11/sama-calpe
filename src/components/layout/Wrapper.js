import React from 'react';
import { Container, Content } from 'native-base';

export default Wrapper = ({ children }) => {
    return (
        <Container>
            <Content style={{ backgroundColor: '#F4F2F2' }}>
                {children}
            </Content>
        </Container>
    )
}
