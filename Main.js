import Map from './Map'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

const Menu = () => {
  return (
    <View style-={styles.container}>
      <Map />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
export default Menu
