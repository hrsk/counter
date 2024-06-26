import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink as BaseNavLink, useNavigate } from 'react-router-dom'
import { InitialStateType, setCounterValue, setMaxValue, setStartValue } from '../../reducers/counter-with-settings-reducer'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../store/store'

export const Settings = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const values = useSelector<AppStateType, InitialStateType>(state => state.counterWithSettings)
    const error = useSelector<AppStateType, string>(state => state.counterErrors.errors[0])

    const saveSettingsToLocalStorage = () => {
        dispatch(setCounterValue(values.startValue))
        localStorage.setItem('startValue', JSON.stringify(values.startValue))
        localStorage.setItem('maxValue', JSON.stringify(values.maxValue))


        if (values.startValue !== undefined) {
            navigate("/counter-with-settings");
        }
    }

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValue(+e.currentTarget.value))
    }
    const endValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValue(+e.currentTarget.value))
    }

    const saveDisabled = values.maxValue <= values.startValue || values.startValue < 0 || values.maxValue <= 0
    const incorrectValue = values.maxValue < values.startValue || values.startValue < 0 || values.maxValue < 0 || (values.startValue === values.maxValue && values.startValue !== 0 && values.maxValue !== 0)

    return (
        <Wrapper>
            <Title>Settings</Title>
            <InputValuesBlock>
                <Inputs>
                    <Text $textColor={incorrectValue ? 'crimson' : ''}>start value:</Text>
                    <Input $borderColor={incorrectValue ? 'crimson' : ''} type='number' value={values.startValue} onChange={startValueHandler} />
                    <Text $textColor={incorrectValue ? 'crimson' : ''}>max value:</Text>
                    <Input $borderColor={incorrectValue ? 'crimson' : ''} type='number' value={values.maxValue} onChange={endValueHandler} />
                </Inputs>
                <Text $textColor={error ? 'crimson' : ''} $fontSize={error ? '14px' : ''}>{error && error}</Text>
            </InputValuesBlock>
            <ButtonsWrapper>
                <Button onClick={saveSettingsToLocalStorage} disabled={saveDisabled}>Save</Button>
                <Button>
                    <NavLink to={'/'}>Dashboard</NavLink>
                </Button>
            </ButtonsWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 350px;
    border-radius: 34px;

    box-shadow: 0px 4px 20px 5px #0000003c;
`

const Title = styled.h3<{ $textColor?: string }>`
    position: sticky;
    width: 280px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 34px;
    background: linear-gradient(89.94deg, #51b9ff 0%, #7785ff 52.6%, #b279ff 73.96%, #ff81ed 100%);

    font: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    text-align: left;
    color: ${props => props.$textColor || "#FFFFFF"};
`

const ButtonsWrapper = styled.div`
    width: 280px;
    height: 70px;
    border-radius: 10px;
    gap: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const InputValuesBlock = styled.div<{ $textColor?: string }>`
    width: 280px;
    height: 120px;
    border-radius: 34px;
    background: 
        linear-gradient(#fff, #fff) padding-box,
        linear-gradient(60deg, #51b9ff 0%, #7785ff 52.6%, #b279ff 73.96%, #ff81ed 100%) border-box;
        border: 2px solid transparent;
        display: grid;
        align-items: center;
        justify-content: center;
`
const Inputs = styled.div`
    display: grid;
    grid-template-columns: 100px 150px;
    grid-template-rows: 25px 25px;
`

const Button = styled.button<{ $textColor?: string }>`
    width: 96px;
    height: 32px;

    background: 
        linear-gradient(#fff, #fff) padding-box,
        linear-gradient(60deg, #51b9ff 0%, #7785ff 52.6%, #b279ff 73.96%, #ff81ed 100%) border-box;
    border: 2px solid transparent;
    border-radius: 34px;

    color: ${props => props.$textColor || "#7785ff"};
    font: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;

    &:hover {
        color: ${props => props.$textColor || "#b279ff"};
        background: 
        linear-gradient(#fff, #fff) padding-box,
        linear-gradient(60deg, #ff81ed 0%, #b279ff 52.6%, #7785ff 73.96%, #51b9ff 100%) border-box;
    border: 2px solid transparent;
    border-radius: 34px;
    }

    &:disabled {    
    color: #cccaca;
    border: 2px solid #cccaca;
    border-radius: 34px;
    }
    &:disabled:hover {
        color: #cccaca
    }
`;

const Text = styled.span<{ $textColor?: string, $fontSize?: string }>`
color: ${props => props.$textColor || '#7785ff'};
font-size: ${props => props.$fontSize || '16px'};
text-align: center;
`
const NavLink = styled(BaseNavLink) <{ $textColor?: string }>`
    position: relative;
    width: 96px;
    height: 32px;

    border-radius: 34px;
    background: #fff;

    align-content: center;
    text-align: center;
    text-decoration: none;

    color: ${props => props.$textColor || "#7785ff"};
    font: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;

    &:active {
        text-decoration: none;
    }

    &:visited {
        text-decoration: none;
    }
    &:hover {
        color: ${props => props.$textColor || "#b279ff"};
    }
`;

const Input = styled.input<{ $borderColor?: string }>`
    border-color:  ${props => props.$borderColor};
    height: 16px;
`
