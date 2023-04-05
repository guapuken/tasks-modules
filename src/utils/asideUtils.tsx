import React, { CSSProperties } from 'react';
//Importación de elementos auxiliares ----------------------------------------------------------------------
// componentes
import { IconDropdown } from '../components';
// types
import { onClickType } from '../types';
// funciones
import { cardH } from './functions/functions';
// archivos multimedia
import optionsIcon from '../img/opciones.svg';

/**
 * Componente que regresa el contenedor de los asides
 * @param children - any element, components etc...
 * @returns - contenedor que envuelve el aside de las cards
 */
export const AsideContainer = ({ children }: any) => {
	return (
		<div
			className="ContainerAsideCardTeamComponent"
			style={{ justifyContent: 'center', alignItems: 'center' }}
		>
			{children}
		</div>
	);
};

//Retorna un button con una imagen del tamaño de 3rem
interface AsideButtonItemProps {
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	src?: string;
	title?: string;
}
export const AsideButtonItem = (props: AsideButtonItemProps) => {
	const { onClick, src, title } = props;
	return (
		<button onClick={onClick} title={title}>
			<img src={src} alt={title} style={{ height: '3rem' }} />
		</button>
	);
};

/**
 * función que retorna el número de veces que cabe un número dentro de otro
 * Ejemplo 1: si tu proporcionas como número el 3 y como límite el 10 el resultado será 3 ya que la función genera un bucle
	en el que múltiplica el número por números consecutivos hasta llegar o pasarse al límite, en caso de pasar el límite le resta uno, esto sería lo que pasaría en la función
		3*1 = 3 ---- 3 < 10
		3*2 = 6 -----6 < 10
		3*3 = 9 -----9 < 10
		3*4 = 12 ----12 > 10
	entonces el resultado sería 4 pero como el resultado sobrepasa el límite le resta 1
	4 - 1 = 3 por consecuente el resultado de la función sería 3
 * @param {number} numero - Número a validar.
 * @param {number} limite - El límite que no tiene que sobrepasar nuestro número
 * @returns El número de veces que cabe el número dentro del número.
*/

function sizeLimit(numero: number, limite: number) {
	let resultado = numero;
	let i = 1;
	while (resultado < limite) {
		resultado *= i;
		i++;
	}
	return i * numero > limite ? i - 1 : i;
}

type Buttons = {
	img: string;
	titleToShow: string;
	onClick: onClickType;
};
/**
 * función que nos regresa un arreglo de botones según el número que quepan en la altura definida en el elemento
 *
 * Ejemplo si el elemento tiene una altura de 200 px y le queremos meter 10 botones de 50px cada uno validará cuántos botones caben en esa altura y los que no tengan espacio los colocará dentro de un componente que funciona como dropdown
 * @param {number} size - altura con la que cuenta el elemento
 * @param {Array<Buttons>} buttons - rederea los botones que se colocarán dentro del elemento
 * @returns componente con los botones distribuidos dependiendo los que caben en el elemento
 */
function sliceButtons(size: number, buttons?: any) {
	let maxButtons = sizeLimit(5, size);

	if (maxButtons * 5 === 0) {
		return (
			<IconDropdown
				icon={optionsIcon}
				title={'Más opciones...'}
				options={buttons?.map((e: any) => {
					return { title: e.titleToShow, onClick: e.onClick };
				})}
			/>
		);
	} else {
		if (buttons.length * 5 <= size) {
			// if (buttons.length * 5 <= size || maxButtons * 5 <= size) {
			return buttons?.map((e: any) => (
				<ButtonItem
					img={e.img}
					svg={e.svg}
					onClick={e.onClick}
					alt={e.titleToShow}
					title={e.titleToShow}
				/>
			));
		} else {
			return (
				<>
					{maxButtons - 1 > 0 &&
						buttons
							.slice(0, maxButtons - 1)
							.map((e: any) => (
								<ButtonItem
									img={e.img}
									svg={e.svg}
									onClick={e.onClick}
									alt={e.titleToShow}
									title={e.titleToShow}
								/>
							))}
					<IconDropdown
						icon={optionsIcon}
						title={'Más opciones...'}
						options={
							maxButtons === 1
								? buttons?.map((e: any) => {
										return { title: e.titleToShow, onClick: e.onClick };
								  })
								: buttons?.slice(maxButtons - 1).map((e: any) => {
										return { title: e.titleToShow, onClick: e.onClick };
								  })
						}
					/>
				</>
			);
		}
	}
}

interface buttonstypes {
	img?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	titleToShow?: string;
	svg?: any;
}
interface ButtonsArrayProps {
	vertical?: boolean;
	style?: any;
	buttons?: buttonstypes[];
	children?: any;
	size?: number;
}
export const ButtonsArray = (props: ButtonsArrayProps) => {
	const { vertical, style, buttons, children, size } = props;
	return (
		<div
			className={`buttonsArray`}
			style={{
				flexDirection: vertical ? 'column' : 'row',
				alignItems: vertical ? '' : 'center',
				justifyContent: vertical ? 'center' : '',
				height: size ? `${size + 10}px` : `${cardH() * 10 - 20}px`,
				...style,
			}}
		>
			{children ? children : sliceButtons(size ? size : cardH() - 2, buttons)}
		</div>
	);
};

interface ButtonItemProps {
	children?: any;
	img?: string;
	alt?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	style?: CSSProperties;
	styleImg?: CSSProperties;
	title?: string;
	svg?: any;
}
export const ButtonItem = (props: ButtonItemProps) => {
	const { children, img, alt, onClick, style, styleImg, title, svg } = props;
	return (
		<button
			style={{ width: 'auto', height: '30px', cursor: 'pointer', ...style }}
			onClick={onClick}
		>
			{img && (
				<img
					src={img}
					alt={alt}
					style={{ width: 'auto', height: '30px', ...styleImg }}
					title={title}
				/>
			)}
			{svg && svg}
			{children}
		</button>
	);
};
