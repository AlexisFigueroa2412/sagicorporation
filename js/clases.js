	var contador =1;
	function CambiarClase(){
		if (contador == 1) {
			document.getElementById('elemento').className = 'MoveUp';
			contador = 2;

		}
		else{
			document.getElementById('elemento').className = '';
			contador = 1;
		}
	}
	document.getElementById('accion').onclick = CambiarClase;
