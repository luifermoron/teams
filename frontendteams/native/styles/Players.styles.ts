import { StyleSheet } from 'react-native';

  export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
      },
      playerItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      playerName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ff0000',
      },
      playerDetail: {
        fontSize: 14,
        color: '#003366',
        marginTop: 4,
      },
      loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      lottieAnimation: {
        width: 200,
        height: 200,
      },
  });