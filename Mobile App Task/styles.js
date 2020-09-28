import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCenter: {
    width: 100,
    height: 100,
  },
  text: {
    color: 'black',
    fontSize: 18,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  textSmall: {
    color: '#00128c',
    fontWeight: 'bold',
    paddingTop: 10,
    fontSize: 16,
    padding: 12,
    margin: 5,
    textAlign: 'center',
  },
  circularItems: {
    width: 40,
    height: 40,
  },
  inlinePic: {
    width: 30,
    height: 30,
  },
  fixSize: {
    width: 80,
  },
  selected: {
    backgroundColor: '#00128c',
    color: 'white',
  },
  containOptions: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  center: {
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  outline: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#00128c',
    // alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // flex: 3,
  },
  spaceBetweenRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
});
export default styles;
