const btns = [...document.querySelector("#relogio").children];
const p = document.querySelector("#timer");
let horaInterv,minInterv,seconInterv;
let relogio =  min = 0, hor = 0, second = 0,inicia = 0,pausa=0,zera=0;
btns.shift();
data = new Date();
console.log(data.getHours());


btns.map((elemento) => {
    elemento.addEventListener("click", (evento) => {
        console.log(evento.target.classList.contains("iniciar"))
        if (evento.target.classList.contains("iniciar") && inicia === 0) {
            p.style.color = "rgb(0, 255, 106)";
            p.classList.remove("pisca");
            inicia = 1;
            pausa = 0
            zera = 0
            iniciar();
            console.log(evento.target.textContent);

        }
        else if (evento.target.classList.contains("pausar") && pausa ===0) {
            p.style.color="#ff0800";
            p.classList.add("pisca");
            pausa = 1
            inicia = 0;
            zera = 0
            pausar();
            console.log(evento.target.textContent);


        }
        else if (evento.target.classList.contains("zerar") && zera ===0) {
            p.style.color="#003062";
            p.classList.remove("pisca");
            zera = 1
            inicia = 0
            pausa = 0;
            zerar();
            console.log(evento.target.textContent);

        }
    })
})



const iniciar = () => {
    seconInterv =  setInterval(() => {
        secon();
        exibe();
    },1000);
    
    
   minInterv =  setInterval(()=>{
            minutes();
            exibe();

    },(1000*60));
    
    // horaInterv = setInterval(()=>{
    //     hor();
    //     exibe();

    // },(60000*3600));
}

const pausar = ()=>{
        clearInterval(seconInterv);
        clearInterval(minInterv);
        // clearInterval(horaInterv);
}

const zerar = () =>{
        clearInterval(seconInterv);
        clearInterval(minInterv);
        // clearInterval(horaInterv);
        hor = 0
        min = 0;
        second =  0;
        p.textContent = "00:00:00";
}





const hora = ()=>{
    if(hor===24){
        hor = 0
        min = 0
        secon = 0;
    }
       
}

const minutes = ()=>{
        second = 0;
        min++;
        if(min===60){
            hor++;
            min = 0;
        }
        if(hor === 24){
            min = 0;
            hor = 0;
        }
}

const secon = ()=>{
    second++;

}

const exibe = ()=>{
    const hour0 = (hor < 10) ? `0${hor}:` : `${hor}:`;
    const min0 = (min < 10) ? `0${min}:` : `${min}:`;
    const second0 = (second < 10) ? `0${second}` : `${second}`;
    p.textContent = `${hour0}${min0}${second0}`;
}
