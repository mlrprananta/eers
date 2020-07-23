import React from 'react'
import axios from 'axios'

import { Container } from 'react-bootstrap'

export const Callback: React.FC = () => {
    const [isLoggedIn, setLoggedIn] = useState(false)

    return (
        <Container>
            <h1>Callback</h1>
        </Container>
    )
}
