/// <reference types="react" />
export type TabsProps = {
    children?: React.ReactNode;
    tabs?: {
        title: string;
        id: string;
    }[];
    onTabSelect?: (id: string) => void;
};
