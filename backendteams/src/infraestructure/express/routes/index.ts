import teamsRouter from './teams';
import playersRouter from './players';

import { Express } from 'express';

export default function routes(app: Express) {
    app.use('/api/teams', teamsRouter());
    app.use('/api/players', playersRouter());
}
