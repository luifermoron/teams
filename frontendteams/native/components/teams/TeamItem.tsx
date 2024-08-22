import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ITeam from '@/lib/domain/entities/ITeam';
import { useRouter } from 'expo-router';

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
      <View style={styles.container}>
        <Text style={styles.name}>{team.name}</Text>
        <Text style={styles.details}>Group: {team.group}</Text>
        <Text style={styles.details}>Coach: {team.coach}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
});

export default TeamItem;
