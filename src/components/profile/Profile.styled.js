import styled from "styled-components";

export const Container = styled.div`
margin: 15px;
border: 1px solid black;
border-radius: 4px;
box-shadow: 
        0px 1px 3px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 4px 4px;
`;

export const Wrapper = styled.div`
padding: 10px;
`;

export const Name = styled.p`
font-weight: 700;
font-size: 32px;
line-height: 1.31;
letter-spacing: 0.05em;
color: #000000;

text-align: center;
`;

export const Tag = styled.p`
font-weight: 400;
font-size: 20px;
line-height: 1.31;
letter-spacing: 0.05em;
color: #000000;

text-align: center;
`;

export const Located = styled.p`
font-weight: 400;
font-size: 20px;
line-height: 1.31;
letter-spacing: 0.05em;
color: #000000;

text-align: center;
`;

export const StatsList = styled.ul`
padding: 0, 10px;
list-style: none;

display: flex;
align-items: center;

background-color: #d1d1d1;
border: 1px solid grey;
`;

export const StatsItem = styled.li`
width: 100%;
border-right: 1px solid grey;
`;

export const Label = styled.span`
font-weight: 400;
font-size: 20px;
line-height: 1.31;
letter-spacing: 0.05em;
color: #000000;

text-align: center;
`;

export const Volume = styled.span`
display: block;

font-weight: 700;
font-size: 20px;
line-height: 1.31;
letter-spacing: 0.05em;
color: #000000;

text-align: center;
`;

export const AvatarImg = styled.img`
display: block;
margin: auto;
width: 120px;
height: 100px;
`;