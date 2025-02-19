import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    fontSize: 20,
    backgroundColor:'#ECD2E0',
  },
  title: {
    fontSize: 20,
    letterSpacing: 2,
  },
  text: {
    fontSize: 16,
    color: '#352273',
  },
  textDone: {
    fontSize: 16,
    color: '#352273',
    textDecorationLine: 'line-through', 
  },
  whiteText: {
    color: '#fff',
    fontSize: 16,
  },
  TextInput: {
    borderColor: '#352273',
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.6,
    borderRadius: 15,
    paddingLeft: 10,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButtom: {
    backgroundColor: '#A7ABDE',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.25,
    borderRadius: 15,

  },
  scrollContainer: {
    marginTop: 20,
  },
  itemContainer: {
    paddingVertical: 20,
    borderBottomColor:'#352273',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  deleteButton: {
    backgroundColor: '#A7ABDE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 15,
  }
});

export default styles;