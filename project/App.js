import React, { useState } from 'react'
import { Switch, Modal } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { Slider } from '@miblanchard/react-native-slider';
import Feather from 'react-native-vector-icons/Feather';

import ListOfEmployees from './src/ListOfEmployees/'

import {
  Container, Logo, FormArea, Title, TextInput, SexArea, TextPicker, SalaryArea, TextSalary,
  TextNameSalary, IsManagerArea, TextManager, ButtonArea, ModalArea
} from './src/styles'

import firebase from './src/service/FirebaseConnection'


export default function App() {

  const [employees, setEmployees] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [salary, setSalary] = useState(1000);
  const [isManager, setIsManager] = useState(false);
  const [sex, setSex] = useState(0);         // 0 - Man / 1 - Woman
  const [sexOptions, setSexOptions] = useState([
    { sexName: 'Masculine', value: 1 },
    { sexName: 'Feminine', value: 2 },
  ]);

  let sexItems = sexOptions.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.sexName} />
  });

  function currencyFormat(num) {
    return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  function handleRegister() {
    if (!name) {
      return alert('Name is empty!')
    }

    const data = {
      name,
      tel,
      salary,
      isManager,
      sex,
    }

    salveDatabase(data)
    setName('')
    setTel('')
    setSalary(1000)
    setIsManager(false)
    setSex(0)
  }

  async function salveDatabase({ name, tel, salary, isManager, sex }) {

    let employees = await firebase.database().ref('employees');
    let id = employees.push().key;

    employees.child(id).set({
      name,
      tel,
      salary: salary[0],
      isManager,
      sex
    })

    alert('Registered in Database!')
  }

  async function getListOfEmployees() {
    setEmployees([])
    await firebase.database().ref('employees').once('value', snapshot => {
      snapshot?.forEach(childItem => {
        let data = {
          name: childItem.val().name,
          tel: childItem.val().tel,
          salary: childItem.val().salary,
          isManager: childItem.val().isManager,
          sex: childItem.val().sex,
        }
        setEmployees(oldValues => [...oldValues, data])
      })})
    
    openModal()
  }

  function openModal() {
    setModalVisible(true)
  }

  function closeModal() {
    setModalVisible(false)
  }

  return (
    <Container>
      <Logo> Maximo Restaurant </Logo>

      <FormArea>
        <Title> Employee Registration </Title>
        <TextInput type="text" placeholder="Name" value={name} onChangeText={text => setName(text)} />
        <TextInput type="text" placeholder="Telephone" keyboardType="phone-pad" maxLength={10} width={200} value={tel} onChangeText={text => setTel(text)} />

        <SexArea>
          <TextPicker> Sex: </TextPicker>
          <Picker style={{ flex: 1 }} selectedValue={sex} onValueChange={(itemValue, itemIndex) => setSex(itemValue)}>
            {sexItems}
          </Picker>
        </SexArea>

        <SalaryArea>
          <TextNameSalary> Salary: </TextNameSalary>
          <TextSalary> {currencyFormat(Number(salary))} </TextSalary>
        </SalaryArea>

        <Slider
          step={200}
          minimumValue={1000}
          maximumValue={5000}
          value={salary}
          onValueChange={number => setSalary(number)}
        />
        <IsManagerArea>
          <TextManager> Manager: </TextManager>
          <Switch
            style={{ paddingTop: 15 }}
            trackColor={{ false: '#121212', true: '#f6a265' }}
            value={isManager}
            onValueChange={(value) => setIsManager(value)}
          />
        </IsManagerArea>
      </FormArea>

      <ButtonArea>
        <Feather.Button name='upload' size={20} backgroundColor='#f6a265' onPress={handleRegister}>
          Register
        </Feather.Button>

        <Feather.Button name='align-justify' size={20} backgroundColor='#f6a265' onPress={getListOfEmployees}>
          List of Employees
        </Feather.Button>
      </ButtonArea>

      <ModalArea>
        <Modal visible={modalVisible} animationType='slide' transparent={true}>
          <ListOfEmployees close={closeModal} employees={employees} />
        </Modal>
      </ModalArea>
    </Container>
  )
}
