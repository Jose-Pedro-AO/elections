export interface ElectionProps {
  election: {
    id: number;
    title: string;
    year: number;
    startDate: Date;
    endDate: Date;
  };
}
