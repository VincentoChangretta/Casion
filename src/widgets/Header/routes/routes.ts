export enum NavRoutes {
  CASINO_NON_AAMS = "/",
  SITI_NON_AAMS = "/siti-non-aams",
}

export interface HeaderRoutes {
  name: string;
  path: string;
}

export const HeaderRoutes: HeaderRoutes[] = [
  { name: "Casino non AAMS", path: NavRoutes.CASINO_NON_AAMS },
  { name: "Siti non AAMS", path: NavRoutes.SITI_NON_AAMS },
];
