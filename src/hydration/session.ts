import { SessionInfo as ApiSession } from "frenzy-api";

import { Hydrate } from ".";

export type HydratedSession = {
  id: string;
  name: string;
};

export const sessionHydration: Hydrate<ApiSession, HydratedSession> = {
  keyMapping: {
    _id: "id",
  },
  functions: {
    id: (server) => server._id,
    name: (server) => server.name,
  },
  initialHydration: () => ({}),
};
