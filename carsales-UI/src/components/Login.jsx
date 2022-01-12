import React, { useState } from 'react'
import styled from 'styled-components'
import { FormControl, Input, InputLabel, Button, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'
import Logo from '../assets/img/logo.png'
import BackGroundPicture from '../assets/img/backroundpicture.jpg'
import { useHistory } from 'react-router'

export default function Login() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    // TODO: Wait for login endpoint and implement login with routing to dashboard
    const history = useHistory()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            // const loginResponse = await login(email, password)
            // if (loginResponse){
            // }

            history.push('/dashboard')
            console.log('logged in')
        } catch (e) {
            console.log('e: ', e)
        }
    }

    return (
        <StyledBody>
            <SplitImage img={BackGroundPicture} />
            <LoginWrapper>
                <StyledForm action="submit">
                    <StyledLogo src={Logo} />

                    <CredentialWrapper>
                        <StyledHeader variant="h3" component="div" gutterBottom>
                            Autentificare
                        </StyledHeader>
                        <FormControl>
                            <StyledInputLabel htmlFor="my-input">
                                <PersonIcon />
                                <span>Utilizator</span>
                            </StyledInputLabel>
                            <Input onChange={(e) => setCredentials({ email: e.target.value, ...credentials })} />
                        </FormControl>
                        <FormControl>
                            <StyledInputLabel htmlFor="my-input">
                                <LockIcon />
                                <span>Parolă</span>
                            </StyledInputLabel>
                            <Input type="password" onChange={(e) => setCredentials({ ...credentials, password: e.target })} />
                        </FormControl>
                        <StyledButton variant="contained" color="primary" onClick={(e) => handleLogin(e)}>
                            Autentificare
                        </StyledButton>
                    </CredentialWrapper>
                </StyledForm>
            </LoginWrapper>
        </StyledBody>
    )
}

const StyledBody = styled.div`
    display: flex;
    height: 100vh;
`
const SplitImage = styled.div`
    flex: 2;
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.2);
    background-blend-mode: darken;
`
const LoginWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: rgba(100, 150, 150, 0.2);
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 400px;
    padding: 30px;
    justify-content: center;
    gap: 230px;
    border-radius: 20px;
    margin: 0 auto;
`
const StyledLogo = styled.img`
    height: 60px;
    width: 300px;
    margin-top: 50px;
    /* position: relative; */
`
const StyledHeader = styled(Typography)`
    && {
        padding: 0;
        margin: 0;
        margin-top: -20%;

}`
const CredentialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    width: 400px;
`
const StyledInputLabel = styled(InputLabel)`
    && {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
`
const StyledButton = styled(Button)`
    && {
        width: 70%;
        height: 50px;
        margin: 20px auto;
        border-radius: 15px;
        background-color: rgba(0, 128, 120, 1);
        padding: 30px;
        transition: all 0.5s;
        &:hover {
            background-color: rgba(18, 76, 72, 1);
        }
        > * {
            gap: 10px;
        }
    }
`
