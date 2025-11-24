export interface PanelModalProps {
  panelId: number;
  id: string;
}

export interface PanelData {
  intro?: string;
  qaPairs: [
    {
      question: string;
      answer: string;
    },
  ];
}
