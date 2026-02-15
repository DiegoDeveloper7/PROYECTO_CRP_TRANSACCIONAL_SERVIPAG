let cantNE = 33
let cantEP = 0
let cantE = 0

const clickedButtons = new Set();

function CRPLasCondes(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#lascondes').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;
        clickedButtons.add(buttonId); // no hace conflicto que sea el mismo buttonId para todos los bp en la funcion
        
        document.querySelector('#lascondes').classList.add('liOn')
        document.querySelector('#blascondes').classList.add('botonOn')

        localStorage.setItem('01','crp las condes') // guardado permanente
    }
}


function CRPSanBernardo(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#sanbernardo').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#sanbernardo').classList.add('liOn')
        document.querySelector('#bsanbernardo').classList.add('botonOn')

        localStorage.setItem('06','crp san bernardo') 
    }
}

function CRPvalparaiso(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#valparaiso').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#valparaiso').classList.add('liOn')
        document.querySelector('#bvalparaiso').classList.add('botonOn')

        localStorage.setItem('09','crp valparaiso') 
    }
}

function CRParica(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#arica').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#arica').classList.add('liOn')
        document.querySelector('#barica').classList.add('botonOn')

        localStorage.setItem('11','crp arica') 
    }
}

function CRPiquique(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#iquique').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#iquique').classList.add('liOn')
        document.querySelector('#biquique').classList.add('botonOn')

        localStorage.setItem('12','crp iquique') 
    }
}

function CRPlaserena(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#laserena').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#laserena').classList.add('liOn')
        document.querySelector('#blaserena').classList.add('botonOn')

        localStorage.setItem('13','crp la serena') 
    }
}

function CRPtemuco(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#temuco').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#temuco').classList.add('liOn')
        document.querySelector('#btemuco').classList.add('botonOn')

        localStorage.setItem('14','crp san temuco') 
    }
}

function CRPconcepcion(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#concepcion').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#concepcion').classList.add('liOn')
        document.querySelector('#bconcepcion').classList.add('botonOn')

        localStorage.setItem('15','crp concepcion') 
    }
}

function CRPtalca(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#talca').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#talca').classList.add('liOn')
        document.querySelector('#btalca').classList.add('botonOn')

        localStorage.setItem('16','crp talca') 
    }
}

function CRPrancagua(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#rancagua').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#rancagua').classList.add('liOn')
        document.querySelector('#brancagua').classList.add('botonOn')

        localStorage.setItem('17','crp rancagua') 
    }
}

function CRPcopiapo(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#copiapo').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#copiapo').classList.add('liOn')
        document.querySelector('#bcopiapo').classList.add('botonOn')

        localStorage.setItem('18','crp san copiapo') 
    }
}

function CRPantofagasta(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#antofagasta').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#antofagasta').classList.add('liOn')
        document.querySelector('#bantofagasta').classList.add('botonOn')

        localStorage.setItem('19','crp antofagasta') 
    }
}

function CRPosorno(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#osorno').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#osorno').classList.add('liOn')
        document.querySelector('#bosorno').classList.add('botonOn')

        localStorage.setItem('22','crp osorno') 
    }
}

function CRPcardenalcaro(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#cardenalcaro').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#cardenalcaro').classList.add('liOn')
        document.querySelector('#bcardenalcaro').classList.add('botonOn')

        localStorage.setItem('24','crp cardenal caro') 
    }
}

function CRPmaipu(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#maipu').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#maipu').classList.add('liOn')
        document.querySelector('#bmaipu').classList.add('botonOn')

        localStorage.setItem('31','crp maipu') 
    }
}

function CRPcurico(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#curico').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#curico').classList.add('liOn')
        document.querySelector('#bcurico').classList.add('botonOn')

        localStorage.setItem('32','crp curico') 
    }
}

function CRPvaldivia(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#valdivia').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#valdivia').classList.add('liOn')
        document.querySelector('#bvaldivia').classList.add('botonOn')

        localStorage.setItem('40','crp valdivia') 
    }
}

function CRPlosandes(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#losandes').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#losandes').classList.add('liOn')
        document.querySelector('#blosandes').classList.add('botonOn')

        localStorage.setItem('43','crp los andes') 
    }
}

function CRPpuertomontt(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#puertomontt').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#puertomontt').classList.add('liOn')
        document.querySelector('#bpuertomontt').classList.add('botonOn')

        localStorage.setItem('45','crp puerto montt') 
    }
}

function CRPsanfernando(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#sanfernando').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#sanfernando').classList.add('liOn')
        document.querySelector('#bsanfernando').classList.add('botonOn')

        localStorage.setItem('51','crp san fernando') 
    }
}

function CRPquilpoe(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#quilpoe').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#quilpoe').classList.add('liOn')
        document.querySelector('#bquilpoe').classList.add('botonOn')

        localStorage.setItem('52','crp quilpoe') 
    }
}

function CRPlinares(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#linares').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#linares').classList.add('liOn')
        document.querySelector('#blinares').classList.add('botonOn')

        localStorage.setItem('53','crp linares') 
    }
}

function CRPpuntaarenas(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#puntaarenas').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#puntaarenas').classList.add('liOn')
        document.querySelector('#bpuntaarenas').classList.add('botonOn')

        localStorage.setItem('55','crp punta arenas') 
    }
}

function CRPsanantonio(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#sanantonio').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#sanantonio').classList.add('liOn')
        document.querySelector('#bsanantonio').classList.add('botonOn')

        localStorage.setItem('56','crp san antonio') 
    }
}

function CRPlosangeles(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#losangeles').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#losangeles').classList.add('liOn')
        document.querySelector('#blosangeles').classList.add('botonOn')

        localStorage.setItem('57','crp los angeles') 
    }
}

function CRPcalama(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#calama').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#calama').classList.add('liOn')
        document.querySelector('#bcalama').classList.add('botonOn')

        localStorage.setItem('58','crp calama') 
    }
}

function CRPchillan(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#chillan').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#chillan').classList.add('liOn')
        document.querySelector('#bchillan').classList.add('botonOn')

        localStorage.setItem('62','crp chillan') 
    }
}

function CRPhuerfanos(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#huerfanos').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#huerfanos').classList.add('liOn')
        document.querySelector('#bhuerfanos').classList.add('botonOn')

        localStorage.setItem('64','crp huerfanos') 
    }
}

function CRPovalle(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#ovalle').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#ovalle').classList.add('liOn')
        document.querySelector('#bovalle').classList.add('botonOn')

        localStorage.setItem('68','crp ovalle') 
    }
}

function CRPquillota(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#quillota').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#quillota').classList.add('liOn')
        document.querySelector('#bquillota').classList.add('botonOn')

        localStorage.setItem('72','crp quillota') 
    }
}

function CRPmiraflores(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#miraflores').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#miraflores').classList.add('liOn')
        document.querySelector('#bmiraflores').classList.add('botonOn')

        localStorage.setItem('76','crp miraflores') 
    }
}

function CRPcastro(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#castro').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#castro').classList.add('liOn')
        document.querySelector('#bcastro').classList.add('botonOn')

        localStorage.setItem('79','crp castro') 
    }
}

function CRPvallenar(mensaje, buttonId) {
    if (!clickedButtons.has(buttonId)) {
        document.querySelector('#vallenar').textContent = mensaje;
        cantE++;
        cantNE--;
        document.querySelector('#cantidadEJ').textContent = cantE;
        document.querySelector('#cantidadNE').textContent = cantNE;

        clickedButtons.add(buttonId); 

        document.querySelector('#vallenar').classList.add('liOn') 
        document.querySelector('#bvallenar').classList.add('botonOn') 

        localStorage.setItem('80','crp vallenar') 
    }
}



document.querySelector('#crpalmacenados').addEventListener('click',()=>{
    recuperarCrpOrdenado()
})


function recuperarCrpOrdenado() {
  
    let crps = [];
    for (let x = 0; x < localStorage.length; x++) {
        const clave = localStorage.key(x);
        const valor = localStorage.getItem(clave);
        crps.push({ clave: parseInt(clave, 10), valor }); 
    }

    crps.sort((a, b) => a.clave - b.clave);

   
    let contenido = '';
    for (let item of crps) {
        contenido += `${item.clave}: ${item.valor}<br>`;
    }


    document.querySelector('#crpguardados').innerHTML = contenido;
}



const valoresOriginales = {
  lascondes: '1. CRP LAS CONDES - NO EJECUTADO',
  sanbernardo: '6. CRP SAN BERNARDO - NO EJECUTADO',
  valparaiso: '9. CRP VALPARAISO - NO EJECUTADO',
  arica: '11. CRP ARICA - NO EJECUTADO',
  iquique: '12. CRP IQUIQUE - NO EJECUTADO',
  laserena: '13. CRP LA SERENA - NO EJECUTADO',
  temuco: '14. CRP TEMUCO - NO EJECUTADO',
  concepcion: '15. CRP CONCEPCIÓN - NO EJECUTADO',
  talca: '16. CRP TALCA - NO EJECUTADO',
  rancagua: '17. CRP RANCAGUA - NO EJECUTADO',
  copiapo: '18. CRP COPIAPÓ - NO EJECUTADO',
  antofagasta: '19. CRP ANTOFAGASTA - NO EJECUTADO',
  osorno: '22. CRP OSORNO - NO EJECUTADO',
  cardenalcaro: '24. CRP CARDENAL CARO - NO EJECUTADO',
  maipu: '31. CRP MAIPU - NO EJECUTADO',
  curico: '32. CRP CURICÓ - NO EJECUTADO',
  valdivia: '40. CRP VALDIVIA - NO EJECUTADO',
  losandes: '43. CRP LOS ANDES - NO EJECUTADO',
  puertomontt: '45. CRP PUERTO MONTT - NO EJECUTADO',
  sanfernando: '51. CRP SAN FERNANDO - NO EJECUTADO',
  quilpoe: '52. CRP QUILPOÉ - NO EJECUTADO',
  linares: '53. CRP LINARES - NO EJECUTADO',
  puntaarenas: '55. CRP PUNTA ARENAS - NO EJECUTADO',
  sanantonio: '56. CRP SAN ANTONIO - NO EJECUTADO',
  losangeles: '57. CRP LOS ANGELES - NO EJECUTADO',
  calama: '58. CRP CALAMA - NO EJECUTADO',
  chillan: '62. CRP CHILLÁN - NO EJECUTADO',
  huerfanos: '64. CRP HUERFANOS - NO EJECUTADO',
  ovalle: '68. CRP OVALLE - NO EJECUTADO',
  quillota: '72. CRP QUILLOTA - NO EJECUTADO',
  miraflores: '76. CRP MIRAFLORES - NO EJECUTADO',
  castro: '79. CRP CASTRO - NO EJECUTADO',
  vallenar: '80. CRP VALLENAR - NO EJECUTADO'
};

document.querySelector('#clearStorage').addEventListener('click',()=>{
    limpiarStorageCRP()
})

function limpiarStorageCRP (){
    if (confirm('¿Estás seguro de que deseas eliminar toda la información de los CRP en esta sesión?')) {
        localStorage.clear();
        alert('Toda la información de los CRP en esta aplicación ha sido restaurada');
        
        cantE=0
        cantNE=33
        document.querySelector('#crpguardados').textContent='RECUPERACIÓN DE CRPS NO EJECUTADA'
        document.querySelector('#cantidadEJ').textContent=0
        document.querySelector('#cantidadEP').textContent=0
        document.querySelector('#cantidadNE').textContent=33



  const ulli1 = document.querySelector('#ulcrp1')
  const gli1 = ulli1.querySelectorAll('li')
  gli1.forEach(li => {
    li.classList.remove('liOn')
  })



  const divBotones1 = document.querySelector('#bpgrupo1');
  const botones1 = divBotones1.querySelectorAll('button');
  botones1.forEach(boton => {
    boton.classList.remove('botonOn');
  })


  const ulli2 = document.querySelector('#ulcrp2')
  const gli2 = ulli2.querySelectorAll('li')
  gli2.forEach(li => {
    li.classList.remove('liOn')
  })

  const divBotones2 = document.querySelector('#bpgrupo2');
  const botones2 = divBotones2.querySelectorAll('button');
  botones2.forEach(boton => {
    boton.classList.remove('botonOn');
  })
  
  const ulli3 = document.querySelector('#ulcrp3')
  const gli3 = ulli3.querySelectorAll('li')
  gli3.forEach(li => {
    li.classList.remove('liOn')
  })

  const divBotones3 = document.querySelector('#bpgrupo3');
  const botones3 = divBotones3.querySelectorAll('button');
  botones3.forEach(boton => {
    boton.classList.remove('botonOn');
  })
       
  clickedButtons.clear(); 



  for (const id in valoresOriginales) {
    const liElement = document.querySelector(`#${id}`);
    if (liElement) {
      liElement.textContent = valoresOriginales[id];
    }
  }

 

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
      checkbox.checked = false;  
    });

    }
}



const ck1 = document.querySelector('#clascondes')
ck1.addEventListener('change',()=>{
if(ck1.checked) {
    document.querySelector('#lascondes').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#lascondes').textContent='1. CRP LAS CONDES - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck2 = document.querySelector('#csanbernardo')
ck2.addEventListener('change',()=>{
if(ck2.checked) {
    document.querySelector('#sanbernardo').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#sanbernardo').textContent='6. CRP SAN BERNARDO - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck3 = document.querySelector('#cvalparaiso')
ck3.addEventListener('change',()=>{
if(ck3.checked) {
    document.querySelector('#valparaiso').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#valparaiso').textContent='9. CRP VALPARAISO - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck4 = document.querySelector('#carica')
ck4.addEventListener('change',()=>{
if(ck4.checked) {
    document.querySelector('#arica').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#arica').textContent='11. CRP ARICA - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck5 = document.querySelector('#ciquique')
ck5.addEventListener('change',()=>{
if(ck5.checked) {
    document.querySelector('#iquique').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#iquique').textContent='12. CRP IQUIQUE - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck6 = document.querySelector('#claserena')
ck6.addEventListener('change',()=>{
if(ck6.checked) {
    document.querySelector('#laserena').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#laserena').textContent='13. CRP LA SERENA - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck7 = document.querySelector('#ctemuco')
ck7.addEventListener('change',()=>{
if(ck7.checked) {
    document.querySelector('#temuco').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#temuco').textContent='14. CRP TEMUCO - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck8 = document.querySelector('#cconcepcion')
ck8.addEventListener('change',()=>{
if(ck8.checked) {
    document.querySelector('#concepcion').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#concepcion').textContent='15. CRP CONCEPCIÓN - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck9 = document.querySelector('#ctalca')
ck9.addEventListener('change',()=>{
if(ck9.checked) {
    document.querySelector('#talca').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#talca').textContent='16. CRP TALCA - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck10 = document.querySelector('#crancagua')
ck10.addEventListener('change',()=>{
if(ck10.checked) {
    document.querySelector('#rancagua').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#rancagua').textContent='17. CRP RANCAGUA - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck11 = document.querySelector('#ccopiapo')
ck11.addEventListener('change',()=>{
if(ck11.checked) {
    document.querySelector('#copiapo').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#copiapo').textContent='18. CRP COPIAPÓ - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck12 = document.querySelector('#cantofagasta')
ck12.addEventListener('change',()=>{
if(ck12.checked) {
    document.querySelector('#antofagasta').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#antofagasta').textContent='19. CRP ANTOFAGASTA - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck13 = document.querySelector('#cosorno')
ck13.addEventListener('change',()=>{
if(ck13.checked) {
    document.querySelector('#osorno').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#osorno').textContent='22. CRP OSORNO - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck14 = document.querySelector('#ccardenalcaro')
ck14.addEventListener('change',()=>{
if(ck14.checked) {
    document.querySelector('#cardenalcaro').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#cardenalcaro').textContent='24. CRP CARDENALCARO - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck15 = document.querySelector('#cmaipu')
ck15.addEventListener('change',()=>{
if(ck15.checked) {
    document.querySelector('#maipu').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#maipu').textContent='31. CRP MAIPU - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck16 = document.querySelector('#ccurico')
ck16.addEventListener('change',()=>{
if(ck16.checked) {
    document.querySelector('#curico').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#curico').textContent='32. CRP CURICÓ - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck17 = document.querySelector('#cvaldivia')
ck17.addEventListener('change',()=>{
if(ck17.checked) {
    document.querySelector('#valdivia').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#valdivia').textContent='40. CRP VALDIVIA - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck18 = document.querySelector('#closandes')
ck18.addEventListener('change',()=>{
if(ck18.checked) {
    document.querySelector('#losandes').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#losandes').textContent='43. CRP LOS ANDES - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck19 = document.querySelector('#cpuertomontt')
ck19.addEventListener('change',()=>{
if(ck19.checked) {
    document.querySelector('#puertomontt').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#puertomontt').textContent='45. CRP PUERTO MONTT - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck20 = document.querySelector('#csanfernando')
ck20.addEventListener('change',()=>{
if(ck20.checked) {
    document.querySelector('#sanfernando').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#sanfernando').textContent='51. CRP SAN FERNANDO - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck21 = document.querySelector('#cquilpoe')
ck21.addEventListener('change',()=>{
if(ck21.checked) {
    document.querySelector('#quilpoe').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#quilpoe').textContent='52. CRP QUILPOE - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck22 = document.querySelector('#clinares')
ck22.addEventListener('change',()=>{
if(ck22.checked) {
    document.querySelector('#linares').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#linares').textContent='53. CRP LINARES - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck23 = document.querySelector('#cpuntaarenas')
ck23.addEventListener('change',()=>{
if(ck23.checked) {
    document.querySelector('#puntaarenas').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#puntaarenas').textContent='55. CRP PUNTA ARENAS - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})


const ck24 = document.querySelector('#csanantonio')
ck24.addEventListener('change',()=>{
if(ck24.checked) {
    document.querySelector('#sanantonio').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#sanantonio').textContent='56. CRP SAN ANTONIO - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck25 = document.querySelector('#closangeles')
ck25.addEventListener('change',()=>{
if(ck25.checked) {
    document.querySelector('#losangeles').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#losangeles').textContent='57. CRP LOS ANGELES - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck26 = document.querySelector('#ccalama')
ck26.addEventListener('change',()=>{
if(ck26.checked) {
    document.querySelector('#calama').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#calama').textContent='58. CRP CALAMA - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck27 = document.querySelector('#cchillan')
ck27.addEventListener('change',()=>{
if(ck27.checked) {
    document.querySelector('#chillan').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#chillan').textContent='62. CRP CHILLAN - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck28 = document.querySelector('#chuerfanos')
ck28.addEventListener('change',()=>{
if(ck28.checked) {
    document.querySelector('#huerfanos').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#huerfanos').textContent='64. CRP HUERFANOS - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck29 = document.querySelector('#covalle')
ck29.addEventListener('change',()=>{
if(ck29.checked) {
    document.querySelector('#ovalle').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#ovalle').textContent='68. CRP OVALLE - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck30 = document.querySelector('#cquillota')
ck30.addEventListener('change',()=>{
if(ck30.checked) {
    document.querySelector('#quillota').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#quillota').textContent='72. CRP QUILLOTA - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck31 = document.querySelector('#cmiraflores')
ck31.addEventListener('change',()=>{
if(ck31.checked) {
    document.querySelector('#miraflores').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#miraflores').textContent='76. CRP MIRAFRLORES - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck32 = document.querySelector('#ccastro')
ck32.addEventListener('change',()=>{
if(ck32.checked) {
    document.querySelector('#castro').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#castro').textContent='79. CRP CASTRO - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})

const ck33 = document.querySelector('#cvallenar')
ck33.addEventListener('change',()=>{
if(ck33.checked) {
    document.querySelector('#vallenar').textContent='EN ESPERA'
    cantEP++
    document.querySelector('#cantidadEP').textContent = cantEP;
} else {
    document.querySelector('#vallenar').textContent='80. CRP VALLENAR - EJECUTADO'
    cantEP--
    document.querySelector('#cantidadEP').textContent = cantEP;
}
})




let horas = 0, minutos = 0, segundos = 0;
let intervalo = null;
let pausado = false;

const tiempo = document.querySelector('#tiempo');
const btnIniciar = document.querySelector('#iniciar');
const btnPausar = document.querySelector('#pausar');
const btnDetener = document.querySelector('#detener');

function formatearTiempo(h, m, s) {
  return (
    String(h).padStart(2, '0') + ':' +
    String(m).padStart(2, '0') + ':' +
    String(s).padStart(2, '0')
  );
}


function actualizarTiempo() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos === 60) {
    minutos = 0;
    horas++;
  }
  tiempo.textContent = formatearTiempo(horas, minutos, segundos);
}


btnIniciar.addEventListener('click', () => {
  if (!intervalo) {
    intervalo = setInterval(actualizarTiempo, 1000);
    pausado = false;
    btnPausar.disabled = false;
    btnDetener.disabled = false;
  }
});


btnPausar.addEventListener('click', () => {
  if (!pausado) {
    clearInterval(intervalo);
    intervalo = null;
    pausado = true;
    btnIniciar.textContent = 'Reanudar';
  } else {
    intervalo = setInterval(actualizarTiempo, 1000);
    pausado = false;
    btnIniciar.textContent = 'Iniciar';
  }
});


btnDetener.addEventListener('click', () => {
  clearInterval(intervalo);
  intervalo = null;
  horas = 0;
  minutos = 0;
  segundos = 0;
  tiempo.textContent = formatearTiempo(horas, minutos, segundos);
  btnIniciar.textContent = 'Iniciar';
  btnPausar.disabled = true;
  btnDetener.disabled = true;
});



const anunciosvp = '¡ HAZLO SIMPLE HAZLO SERVIPAG !'
const mensajesvp = document.querySelector('#mensajesvp')
let cantidadm = 1

let tiempom = setInterval(()=>{
    mostrarMensajeanimado()
},100)

function mostrarMensajeanimado() {
   const textosvp = anunciosvp.slice(0,cantidadm)
   mensajesvp.textContent=textosvp
   if(cantidadm>anunciosvp.length) {
    clearInterval(tiempom)
    setTimeout(()=>{
        mensajesvp.textContent=''
        cantidadm=1
        tiempom= setInterval(()=>{
            mostrarMensajeanimado()
        },100)
    },3000)
   }
  cantidadm++
}