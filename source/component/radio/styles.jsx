import styled from 'styled-components'

export const Container = styled.View`
  margin-top: 20%;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`

export const RadioOne = styled.View`
  background: ${(props) => props.value ? 'white' : '#0000004e'};
  width: ${(props) => props.value ? '32px' : '10px'};
  height: 10px;
  border-radius: 50px;
`

export const RadioTwo = styled.View`
  background: ${(props) => props.value ? 'white' : '#0000004e'};
  width: ${(props) => props.value ? '32px' : '10px'};
  height: 10px;
  border-radius: 50px;

`

export const RadioTree = styled.View`
  background: ${(props) => props.value ? 'white' : '#0000004e'};
  width: ${(props) => props.value ? '32px' : '10px'};
  height: 10px;
  border-radius: 50px;

`
