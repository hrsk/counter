import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSimpleValue } from '../reducers/simple-counter-reducer'
import { styled } from 'styled-components'
import { useEffect } from 'react'
import { AppStateType } from '../store/store'

export const SimpleCounter = () => {

    useEffect(() => {
        dispatch(setSimpleValue(0))
    }, [])

    const counterValue = useSelector<AppStateType, number>((state) => state.simpleCounter.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const incrementHandler = () => {
        dispatch(setSimpleValue(counterValue + 1))
        if (counterValue >= 10) {
            dispatch(setSimpleValue(0))
            return navigate('/')
        }
    }

    const decrementHandler = () => {
        dispatch(setSimpleValue(counterValue - 1))
    }

    const disabled = counterValue === 0

    return (
        <Wrapper>
            <Title>Simple Counter</Title>
            <DisplayCounterValue>
                <Text>{counterValue}</Text>
            </DisplayCounterValue>
            <ButtonsWrapper>
                <Button onClick={incrementHandler}>INC</Button>
                <Button onClick={decrementHandler}
                    disabled={disabled}>DEC</Button>
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
const DisplayCounterValue = styled.div<{ $textColor?: string }>`
    width: 280px;
    height: 120px;
    border-radius: 34px;
    background: 
        linear-gradient(#fff, #fff) padding-box,
        linear-gradient(60deg, #51b9ff 0%, #7785ff 52.6%, #b279ff 73.96%, #ff81ed 100%) border-box;
        border: 2px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
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
`

const Text = styled.span<{ $textColor?: string, $fontSize?: string }>`
color: ${props => props.$textColor || '#7785ff'};
font-size: ${props => props.$fontSize || '16px'};
`
