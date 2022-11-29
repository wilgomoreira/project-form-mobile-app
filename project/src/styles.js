import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    padding-top: 10px;
`;

export const Logo = styled.Text`
	font-size: 30px;
	color: #000;
    font-weight: bold;
    text-align: center;
    color: #f6a265;
    margin-top: 20px;
`;

export const FormArea = styled.View`
   flex-direction: column;
   margin: 10px;
`;

export const Title = styled.Text`
	font-size: 20px;
    font-weight: bold;
	color: #f7d1b5;
    margin: 10px;
    text-align: center;
`;

export const TextInput= styled.TextInput.attrs({
    placeholderTextColor: '#bbbb'
})`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 3px;
  background: papayawhip;

`;

export const SexArea = styled.View`
   flex-direction: row;
   margin-left: 10px;
   align-items: center;
   margin-top: 10px;
   margin-bottom: 30px;
`;

export const TextPicker = styled.Text`
	font-size: 18px;
	background-color: papayawhip;
    padding: 5px;
    color: #000;
    width: 60px;
    height: 40px;
    border-radius: 3px;
`;

export const SalaryArea = styled.View`
   flex-direction: row;
   margin-left: 10px;
   align-items: center;
   margin-bottom: 10px;
`;

export const TextNameSalary = styled.Text`
	font-size: 18px;
	background-color: papayawhip;
    padding: 5px;
    color: #000;
    width: 80px;
    height: 40px;
    border-radius: 3px;
`;

export const TextSalary = styled.Text`
	font-size: 18px;
    font-weight: bold;
	background-color: papayawhip;
    padding: 5px;
    color: #000;
    width: 100px;
    height: 40px;
    margin-left: 20px;
    text-align: center;
`;

export const IsManagerArea = styled.View`
   display: flex;
   justify-content: space-around;
   flex-direction: row;
   margin-left: 10px;
   align-items: center;
   margin-bottom: 10px;
   margin-top: 20px;
`;

export const TextManager = styled.Text`
	font-size: 18px;
	background-color: papayawhip;
    padding: 5px;
    color: #000;
    width: 100px;
    height: 40px;
    border-radius: 3px;
    margin-left: -55px;
`;

export const ButtonArea = styled.View`
   display: flex;
   justify-content: space-around;
   flex-direction: row;
   align-items: center;
   margin-bottom: 10px;
   margin-top: 10px;
`;


export const ModalArea = styled.View`
   display: flex;
   flex: 1;
   justify-content: center;
   align-items: center;
   margin-bottom: 10px;
   margin-top: 10px;
`;




