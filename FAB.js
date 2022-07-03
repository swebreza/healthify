import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Button } from 'native-base'

const FAB = (props) => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </Pressable>
  )
}

export default FAB

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    bottom: 30,
    // right: 40,
    backgroundColor: 'red',
    paddingHorizontal: 70,
    paddingVertical: 15,
  },
  title: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold',
  },
})
