export interface CandidateProps {
  image: any;
  name: string;
  party: string;
  votes: number;
  selected: boolean;
  selectedName: string;
  onSelect: (candidateName: string) => void;
}
