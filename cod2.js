var peso  = (prompt("Digite seu peso: "))
var altura = (prompt("Digite a sua altura"))
var valor  = (peso / (altura * altura))
var m  = Math.round(valor)

if(m < 16)
{
    var i = 'BAIXO PESO MUITO GRAVE'
} else if (m > 16 && m < 17)
{
    var i = 'BAIXO PESO GRAVE'
} else if (m > 17 && m < 19)
{
    var i = 'BAIXO PESO '
} else if (m > 19 && m < 25.22)
{
    var i = 'BAIXO NORMAL'
} else if(m > 25 && m < 30)
{
    var i = 'SOBRE PESO'
} else if (m > 30 && m < 35)
{
    var i = 'OBSIDADE EM PRIMEIRO GRAU'
} else if (m > 35 && m < 40 )
{
    var i = 'OBSIDADE EM SEGUNDO GRAU'
} else if (  m > 40 )
{
    var i = 'OBSIDADE EM TERCEIRO GRAU'   
}
alert(m)
alert(i)
document.write( "MEU IMC É:  "+m+" SEU INDICE DE MASSA CORPORAL É: " + i)