export type TabsProps = {
  children?: React.ReactNode;
  tabs?: {
    title: string;
    id: string;
  }[];
  // selected?: number;
  // disabled?: boolean;
  onTabSelect?: (id: string) => void;
};
