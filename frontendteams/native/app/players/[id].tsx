import React, { useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native';
import LottieView from 'lottie-react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router'; 


import { useFetchPlayers, useOnRefresh } from '@/lib/controllers/players';
import { UseFetchPlayersResult } from '@/lib/controllers/players/UseFetchPlayersResult';

import IPlayer from '@/lib/domain/entities/IPlayer';
import { useAppDispatch } from '@/lib/drivers/redux';



export default function PlayersScreen() {
  const { id, name } = useLocalSearchParams();
  const teamId = parseInt(id, 10);

  const dispatch = useAppDispatch();
  const onRefresh = useOnRefresh(dispatch, teamId);
  const { players, loading, refreshing }: UseFetchPlayersResult  = useFetchPlayers(teamId);
  const navigation = useNavigation(); 


  useLayoutEffect(() => { //TODO: avoid using uselayouteffect
    navigation.setOptions({
      title: name,
      headerBackTitle: 'Back',
    });
  }, [navigation, name]);

  const renderPlayerItem= ({ item }: { item: IPlayer }) => (
    <View style={styles.playerItem}>
        <Text style={styles.playerName}>{item.name}</Text>
        <Text style={styles.playerDetail}>Position: {item.position}</Text>
        <Text style={styles.playerDetail}>Age: {item.age}</Text>
        <Text style={styles.playerDetail}>Nationality: {item.nationality}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <LottieView
            source={require('@/assets/animations/ball-animation.json')}
            autoPlay
            loop
            style={styles.lottieAnimation}
          />
        </View>
      ) : (
        <FlatList
          data={players}
          renderItem={renderPlayerItem}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  playerDetail: {
    fontSize: 14,
    color: '#555',
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
