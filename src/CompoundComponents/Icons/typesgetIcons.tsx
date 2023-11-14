type iconsType =
	| 'pautar'
	| 'minimizar'
	| 'orientar'
	| 'trafico'
	| 'sitios'
	| 'urbanos'
	| 'outdoors'
	| 'indoors'
	| 'vallas'
	| 'dashboard'
	| 'cotizador'
	| 'bloqueado'
	| 'desbloqueado'
	| 'implementaciones'
	| 'carrito'
	| 'carritoForbidden'
	| 'edit'
	| 'map'
	| 'share'
	| 'pdf'
	| 'download'
	| 'excel'
	| 'kml'
	| 'save'
	| 'delete'
	| 'previsualizar'
	| 'noVisualizar'
	| 'boards'
	| 'conIluminacion'
	| 'sinIluminacion'
	| 'iluminacionIndiferente'
	| 'vistaNatural'
	| 'vistaCruzada'
	| 'sinPreferenciasVistas'
	| 'categoria'
	| 'circuloPersonalizado'
	| 'busqueda'
	| 'clave'
	| 'coordenadas'
	| 'reordernar'
	| 'puntosSupensivos'
	| 'direccion'
	| 'filtrar'
	| 'aeropuerto'
	| 'centrosComerciales'
	| 'maximizarCampos'
	| 'plazasInteres'
	| 'tipoExhibicion'
	| 'logout'
	| 'noPerifoneo'
	| 'conPerifoneo'
	| 'ubicacion'
	| 'flechas'
	| 'timeline';
export interface getIconsInterface {
	children?: any;
	size?: number | string;
	fill?: string;
	icon?: iconsType;
	title?: string;
}
export interface iconsInterface {
	icon?: iconsType;
	fill?: string;
}
