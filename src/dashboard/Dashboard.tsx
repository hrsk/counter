import { NavLink as BaseNavLink } from "react-router-dom";
import styled from "styled-components";
import sprite from '../assets/images/sprite.svg'

export const Dashboard = () => {
    return (
        <Wrapper>
            <Title>Dashboard</Title>
            <LinksWrapper>
                <NavLink to={'/counter-with-settings'}>counter with settings</NavLink>
                <NavLink to={'/simple-counter'}>simple counter</NavLink>
            </LinksWrapper>
            <SocialMediaWrapper>
                <Text>
                    GitHub:
                </Text>
                <SocialMediaItemLink to={'https://github.com/hrsk/counter'}>
                    <SocialMediaItemIcon width={'24px'} height={'24px'} viewBox={'0 0 24 24'}>
                        <use xlinkHref={`${sprite}#${'github'}`} />
                    </SocialMediaItemIcon>
                </SocialMediaItemLink>
            </SocialMediaWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 350px;
    background: '';
    border-radius: 15px;

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
const NavLink = styled(BaseNavLink) <{ $textColor?: string }>`
    position: relative;
    width: 200px;
    height: 60px;

    border-radius: 34px;
    background: #fff;

    align-content: center;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;

    color: ${props => props.$textColor || "#7785ff"};
    font: Inter;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;

    &:active {
        color: ${props => props.$textColor || "#7785ff"};

        text-decoration: none;
    }

    &:visited {
        color: ${props => props.$textColor || "#7785ff"};

        text-decoration: none;
    }
    &:hover {
        color: ${props => props.$textColor || "#b279ff"};
    }

    &::before {
    content: "";
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background: linear-gradient(89.94deg, #51b9ff 0%, #7785ff 52.6%, #b279ff 73.96%, #ff81ed 100%);
    border-radius: 34px;
    z-index: -1;
    }
    
    &:hover::before {
    content: "";
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background: linear-gradient(89.94deg, #ff81ed 0%, #b279ff 52.6%, #7785ff 73.96%, #51b9ff 100%);
    border-radius: 34px;
    z-index: -1;    
}   
`;

const LinksWrapper = styled.div`
    margin-top: 40px;

    width: 280px;
    height: 70px;
    border-radius: 10px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Text = styled.span<{ $textColor?: string, $fontSize?: string }>`
color: ${props => props.$textColor || '#7785ff'};
font-size: ${props => props.$fontSize || '16px'};
`

const SocialMediaItemIcon = styled.svg<{
    viewBox?: string, width?: string, height?: string
}>`
`
const SocialMediaItemLink = styled(BaseNavLink)`
    ${SocialMediaItemIcon}:hover {
        transform: scale(1.5);
    }
`
const SocialMediaWrapper = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    bottom: 10px;
    gap: 10px;
`