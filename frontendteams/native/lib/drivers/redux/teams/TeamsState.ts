import { EntityState } from '@reduxjs/toolkit';
import ITeam from '../../../domain/entities/ITeam';

export default interface TeamsState extends EntityState<ITeam, number> {
    loading: boolean;
    refreshing: boolean;
    error: string | null | undefined;
}