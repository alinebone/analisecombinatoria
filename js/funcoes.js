// Funções Combinatórias

// formatar números
function numberFormat(n)
{
    var parts = n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (parts[1] ? "," + parts[1] : "");
}

function fatorial(n)
{
	fat = 1;
	for (i = n; i > 1; i--)
	{
		fat = fat * i;
	}
	return fat;
}

function arranjoSimples(e, g)
{
	as = fatorial(e) / fatorial(e-g);
	return as;
}

function arranjoRepeticao(e, g)
{
	ar = Math.pow(e, g);
	return ar;
}

function permutacao(e)
{
	p = fatorial(e);
	return p;
}

function combinacaoSimples(e, g)
{
	cs = fatorial(e) / (fatorial(e-g) * fatorial(g));
	return cs;
}

function combinacaoRepeticao(e, g)
{
	cr = combinacaoSimples(e+g-1,g);
	return cr;
}