import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

export type ContainerTypes = {
    children?: ReactNode,
    size?: ContainerSizeTypes;
    padding?: number;
    customStyles?: CSSProperties,
}
export type ContainerSizeTypes =  'xs' | 'sm' | 'md' | 'lg' | 'xl';