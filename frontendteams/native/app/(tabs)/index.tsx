import React from 'react';
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native';
import LottieView from 'lottie-react-native';

import { useFetchTeams, useOnRefresh } from '@/lib/controllers/teams';
import { UseFetchTeamsResult } from '@/lib/controllers/teams/UseFetchTeamsResult';

import ITeam from '@/lib/domain/entities/ITeam';
import { useAppDispatch } from '@/lib/infrastructure/redux';
import TeamItem from '@/components/teams/TeamItem';

import styles from '../../styles/Home.styles';


export default function App() {
  
  const dispatch = useAppDispatch();
  const onRefresh = useOnRefresh(dispatch);
  const { teams, loading, refreshing }: UseFetchTeamsResult  = useFetchTeams();


  const renderTeamItem = ({ item }: { item: ITeam }) => (
    <TeamItem team={item}/>
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
          testID="teams-flatlist"
          data={teams}
          renderItem={renderTeamItem}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
}

