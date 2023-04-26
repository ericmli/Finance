import React from 'react'
import { View, TextInput, TextError, TextTopInput, IconAdd, ContainerIcon } from './styles'
import { Controller } from 'react-hook-form'

export function Input({ name, nameTop, errors, inputRef, control, onSubmitEditing, placeholder }) {
  return (
    <View>
      <TextTopInput>{nameTop}</TextTopInput>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            ref={inputRef}
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}

          />
        )}
      />
      {errors[name] && <TextError>{errors[name].message}</TextError>}
    </View>
  )
}

export function Password({ name, nameTop, errors, inputRef, control, onSubmitEditing, placeholder }) {
  const [hide, setHide] = React.useState(true)
  return (
    <View>
      <TextTopInput>{nameTop}</TextTopInput>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            ref={inputRef}
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}
            secureTextEntry={hide}
          />
        )}
      />
      <ContainerIcon onPress={() => setHide(!hide)}>
        { hide ? <IconAdd name='eye'/> : <IconAdd name='eye-slash'/> }
      </ContainerIcon>
      {errors[name] && <TextError>{errors[name].message}</TextError>}
    </View>
  )
}
