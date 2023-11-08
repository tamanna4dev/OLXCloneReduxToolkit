import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigation from './src/AppNavigator'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import Add from './src/screen/tabs/Add'

const App = () => {
  return (
<Provider store={store}>
{/* <AppNavigation/> */}
<Add/>
</Provider>
  )
}

export default App

const styles = StyleSheet.create({})
