//Exportación de types que se pueden repetir en múltiples archivos

//Definición de funciones
export type Modo = 'Dark' | 'Light';
// export type statusTask = 'onTime' | 'delayed' | 'outOfTime';
export type statusTask = 'onTime' | 'delayed' | 'outOfTime' | 1 | 2 | 3;
export type onClickType = (e: React.MouseEvent<HTMLElement>) => void;
export type onChangeType = (e: React.FormEvent<HTMLInputElement>) => void;
export type onBlurType = (e: React.FocusEvent<HTMLInputElement>) => void;
