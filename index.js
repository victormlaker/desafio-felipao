let nomeHeroi = "Ban"
let XPHeroi = 10000
let nivel = ""


    if(XPHeroi <= 1000)
    {
        nivel = "Ferro"
    }

    else if (XPHeroi >= 1001 && XPHeroi <= 2000 )
    {
        nivel = "Bronze"
    }
    
    else if (XPHeroi >= 2001 && XPHeroi <= 5000)
    {
        nivel = "Prata"
    }
    else if(XPHeroi >= 5001 && XPHeroi <= 7.000)
    {
        nivel = "Ouro"
    }

    else if (XPHeroi >= 7001 && XPHeroi <= 9000)
    {
        nivel = "Ascendente"
    }


    else if(XPHeroi >= 9.001 && XPHeroi <= 10.000)
    {
        nivel = "Imortal"
    }
    
    else
    {
        nivel = "Radiante"
    }

const mensagemHeroi = console.log("O Heroi de nome " + nomeHeroi + " está no nível de um " + nivel) 
