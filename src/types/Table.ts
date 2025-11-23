export interface PanelDetail {
  id: number;
  mbSn: string;
  gender: string | null;
  ageBand: string | null;
  maritalStatus: string | null;
  jobField: string | null;
  carOwnership: boolean | null;
}

export interface PanelTableProps {
  panelDetails: PanelDetail[] | undefined | null;
}
