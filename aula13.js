var idade 
idade = prompt ("digite a idade : ")
if(idade > 15 && idade < 18 || idade > 70)
{
  document.write("O voto opcionaal")
}
else if(idade < 16)
{
    document.write("Não pode votar")
}
else
{
    document.write("Você poderá votar")
}