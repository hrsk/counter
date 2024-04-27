import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { setCounterValue } from '../reducers/counter-with-settings-reducer'
import { AppStateType } from '../store/store'

type PropsType = {
    counterValue: number | undefined
    startValue: number
    maxValue: number
}

export const CounterWithSettings = (props: PropsType) => {

    const dispatch = useDispatch()
    const error = useSelector<AppStateType, string>(state => state.counterErrors.errors[0])
    const navigate = useNavigate();


    const increment = () => {
        if (props.counterValue !== undefined) {
            dispatch(setCounterValue(props.counterValue + 1))
        }
    }

    const reset = () => {
        dispatch(setCounterValue(props.startValue))
    }

    const onClickSettingsHandler = () => {
        dispatch(setCounterValue(0));
        navigate('/settings')
    }

    const incorrectValue = props.maxValue < props.startValue || props.startValue < 0 || props.maxValue < 0 || props.startValue === props.maxValue
    const incrementDisabled = props.counterValue === props.maxValue || props.startValue < 0 || props.startValue >= props.maxValue || !!error
    const resetDisabled = (props.counterValue !== undefined && props.counterValue < props.maxValue) || !!error

    const counterValueIsMax = props.counterValue === props.maxValue

    return (
        <Wrapper>
            <Title>Counter</Title>
            <DisplayCounterValue>
                {
                    error
                        ? <Text $textColor={error ? 'crimson' : ''}>{error}</Text>
                        : <Text $textColor={counterValueIsMax ? '#543fbe ' : ''} $fontSize={counterValueIsMax ? '48px' : ''}>{props.counterValue}</Text>
                }
            </DisplayCounterValue>
            <ButtonsWrapper>
                <Button
                    onClick={increment}
                    disabled={incrementDisabled || incorrectValue}
                >Increment</Button>
                <Button
                    onClick={reset}
                    disabled={resetDisabled}
                >Reset</Button>
                <Button onClick={onClickSettingsHandler}>Settings</Button>
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
`;

const Text = styled.span<{ $textColor?: string, $fontSize?: string }>`
color: ${props => props.$textColor || '#7785ff'};
font-size: ${props => props.$fontSize || '16px'};
`
