import { EntityState } from '@reduxjs/toolkit';
import IPlayer from '../../../domain/entities/IPlayer';

export default interface PlayerState extends EntityState<IPlayer, number> {
    loading: boolean;
    refreshing: boolean;
    error: string | null | undefined;
}