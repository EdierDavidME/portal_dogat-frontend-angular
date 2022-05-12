export class Usuarios {
    constructor(
        public id: number = 0,
		public cedula_Nit: string = '',
		public nombre: string = '',
		public correo: string = '',
		public contrasena: string = '',
		public planActivoId: number = 0,
		public fechaVencimiento: Date = new Date(0,0,0),
		public publicacionesRestantes: number = 0,
		public rol: number = 0, // 1: Admin, 2: Cliente
    ) {}
}
