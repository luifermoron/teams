import React from 'react';
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native';
import LottieView from 'lottie-react-native';

import { useFetchTeams, useOnRefresh } from '@/lib/controllers/teams';
import { UseFetchTeamsResult } from '@/lib/controllers/teams/UseFetchTeamsResult';

import ITeam from '@/lib/domain/entities/ITeam';
import { useAppDispatch } from '@/lib/infraestructure/redux';
import TeamItem from '@/components/teams/TeamItem';


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
            source={require('@/assets/animations/ball-animation.json')}
            autoPlay
            loop
            style={styles.lottieAnimation}
          />
        </View>
      ) : (
        <FlatList
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  teamItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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

