var NomeDoPokemon = prompt("Qual é o nome deste Pokemon?")

if (NomeDoPokemon == "Lunala")
{
  
  document.write("<h2>"+"<img src=\"https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/4233289e-fa06-4b0d-8206-85a272a4daaa.jpg\"/\>" + "</h2>")
  
} else if (NomeDoPokemon != "Lunala") {
  document.write("<h2>"+"<img src=\"https://i.pinimg.com/564x/5e/3f/25/5e3f250033a3ccb543d029ecd4e5599d.jpg\"/\>" + "</h2>")
}
