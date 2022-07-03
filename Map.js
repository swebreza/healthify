import * as React from 'react'
import MapView, { Polyline, Marker } from 'react-native-maps'
import { StyleSheet, Text, View, Dimensions, Linking } from 'react-native'
import FAB from './FAB'
import { TextInput } from 'react-native'

export default function Map() {
  const [result, setResult] = React.useState()
  const [Book, setBook] = React.useState('0')
  const [m, setm] = React.useState(720)
  const [ind, setind] = React.useState(0)
  const [i, seti] = React.useState(0)
  const book = () => {
    alert('Nearest Ambulance Booked')
    Linking.openURL(
      `https://www.google.com/maps/dir/${data[ind].lati},${data[ind].longi}/13.054052,77.761557/`
    )
    console.log(data[ind])
  }
  const data = [
    { lati: '13.071842', longi: '77.785228', time: 0 },
    { lati: '13.007647', longi: '71.583903', time: 0 },
    { lati: '13.053156', longi: '77.760664', time: 0 },
    { lati: '12.976201', longi: '70.6390064', time: 0 },
    { lati: '12.929993', longi: '40.505893', time: 0 },
    { lati: '13.084071', longi: '77.487712', time: 0 },
  ]
  const token = 'eb99c03b-f273-431e-8b5d-499761b72fa4'
  React.useEffect(() => {
    data.map((data, i) =>
      fetch(
        `https://apis.mapmyindia.com/advancedmaps/v1/${token}/route_adv/biking/${data.lati},${data.longi};19.0760,72.8777`,
        {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        }
      )
        .then((res) => res.json())
        .then((json) => {
          data.time = json.routes[0].duration
          if (m > data.time) {
            setind(i)
            setm(data.time)
          }
        })
    ),
      console.log(ind)
  }, [])
  const marker = data.map((data, iy) => (
    <Marker
      key={iy}
      coordinate={{
        latitude: parseFloat(data.lati),
        longitude: parseFloat(data.longi),
      }}
      pinColor={'#ffd1dc'}
    />
  ))
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {marker}
      </MapView>
      <FAB onPress={book} title='Book' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
