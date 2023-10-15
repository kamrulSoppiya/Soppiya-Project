/**
 * dynamic classNames execute
 */
type ClassObject = {
    [key: string]: boolean;
};
type ClassesArrayType = Array<string | ClassObject>;
type ClassesType = Array<string | ClassObject | ClassesArrayType>;
export default function classNames(...classes: ClassesType): string;
export {};
