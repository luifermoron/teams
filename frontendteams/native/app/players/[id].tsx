import React, { useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native';
import LottieView from 'lottie-react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router'; 


import { useFetchPlayers, useOnRefresh } from '@/lib/controllers/players';
import { UseFetchPlayersResult } from '@/lib/controllers/players/UseFetchPlayersResult';

import IPlayer from '@/lib/domain/entities/IPlayer';
import { useAppDispatch } from '@/lib/infrastructure/redux';

import styles from '../../styles/Players.styles';

export default function PlayersScreen() {
  const { id, name } = useLocalSearchParams();
  const teamId = parseInt(id as string, 10);

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
            testID="lottie-view"
            source={require('@/assets/animations/ball-animation.json')}
            autoPlay
            loop
            style={styles.lottieAnimation}
          />
        </View>
      ) : (
        <FlatList
          testID="players-flatlist"
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
