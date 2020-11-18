$(document).ready(function()
{
	$("#btnCalcular").click(function()
	{
		tipo = $("#tipo").val();
		nElementos = parseInt($("#nElementos").val());
		nGrupos = parseInt($("#nGrupos").val());
		resultado; 
		switch (tipo)
		{
			case "as":
			resultado = arranjoSimples(nElementos, nGrupos);
			break;
			case "ar":
			resultado = arranjoRepeticao(nElementos, nGrupos);
			break;
			case "p":
			resultado = permutacao(nElementos);
			break;
			case "cs":
			resultado = combinacaoSimples(nElementos, nGrupos);
			break;
			case "cr":
			resultado = combinacaoRepeticao(nElementos, nGrupos);
			break;
		}
		$("#resultado").text(numberFormat((resultado).toFixed(2)));
	});
});