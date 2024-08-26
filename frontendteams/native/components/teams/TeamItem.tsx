import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ITeam from '@/lib/domain/entities/ITeam';
import { useRouter } from 'expo-router';
import styles from './TeamItem.styles';

interface TeamItemProps {
  team: ITeam;
}

const TeamItem: React.FC<TeamItemProps> = ({ team }) => {
  const router = useRouter();

  const handlePress = () => {
    const { id } = team;
    router.push({
      pathname: '/players/[id]',
      params: { id: id.toString() , name: team.name},  
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.teamContainer}>
        <Text style={styles.name}>{team.name}</Text>
        <Text style={styles.details}>Group: {team.group}</Text>
        <Text style={styles.details}>Coach: {team.coach}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TeamItem;
