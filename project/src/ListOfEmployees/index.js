import React from "react";
import { Container, TextModal, IconArea, ItemStyle, ItemDescription } from './styles'
import Feather from 'react-native-vector-icons/Feather';


export default function ListOfEmployees({ close, employees }) {

    function currencyFormat(num) {
        return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

    return (
        <Container >
            <IconArea>
                <Feather.Button name='x' size={20} backgroundColor='#f6a265' onPress={close}> Close </Feather.Button>
            </IconArea>
            <TextModal> List of Employees </TextModal>

            {
                employees?.map((item, index) => (
                    <ItemStyle key={index}> 
                        <ItemDescription>{index+1}. </ItemDescription>
                        <ItemDescription>Name: </ItemDescription>{item?.name} 
                        <ItemDescription>  Tel: </ItemDescription>{item?.tel} 
                        <ItemDescription>  Sex: </ItemDescription>{item?.sex === 0 ? 'Masculine': 'Feminine'} 
                        <ItemDescription>  Salary: </ItemDescription> {currencyFormat(Number(item?.salary))} 
                        <ItemDescription>  Manager: </ItemDescription>{item?.isManager ? 'Yes': 'No'} 
                    </ItemStyle>
                )
                )
            }
        </Container>
    );
}