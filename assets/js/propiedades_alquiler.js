const card = document.querySelector(".container_card");
const btn = document.querySelector(".btn");
let allcards = "";

const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    bathroom: 2,
    costo: 2.0,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    bathroom: 3,
    costo: 2.5,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    bathroom: 2,
    costo: 2.2,
    smoke: false,
    pets: false,
  },
  {
    nombre: "CENTRICO DEPARTAMENTO STUDIO",
    src: "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20240323/3139923/n_wm_511901a217a5017b5d4bcbd2fd239d8f5dc28ded.webp",
    descripcion:
      "MODERNO DEPARTAMENTO STUDIO EN CENTRO DE CHILLÁN",
    ubicacion: "18 de Septiembre esquina Vega de Saldías, Chillán.",
    habitaciones: 1,
    bathroom: 1,
    costo: 300.000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Departamento a pasos del Mall Plaza Vespucio",
    src: "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20230402/2488217/n_wm_easyprop_33934_202033934_2869110_1.webp",
    descripcion:
      "Hemoso departamento en la florida a pasos del mall",
    ubicacion: "Las Acacias 7664,La Florida",
    habitaciones: 3,
    bathroom: 2,
    costo: 560.000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Hermosa vista frente al mar",
    src: "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20240228/3092056/n_wm_altamira_6189_202006189_1840216_1.webp",
    descripcion:
      "Edificio Delos dentro de condominio Mar Egeo con hermosa vista frente al mar",
    ubicacion: "Av. Arturo Prat Chacón 1670,Iquique",
    habitaciones: 2,
    bathroom: 2,
    costo: 800.000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Hermoso Departamento amoblado",
    src: "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20230824/2765875/n_wm_easyprop_43633_202043633_2614319_1.webp",
    descripcion:
      "Ubicado a pasos del central park de reñaca alto",
    ubicacion: "Avenida Edmundo Eluchans 2145,Viña del mar",
    habitaciones: 1,
    bathroom: 1,
    costo: 410.000,
    smoke: false,
    pets: false,
  },
];

for (let index = 0; index < 3; index++) {
  allcards += `
    <div class="col-md-4 mb-4">
    <div class="card">
      <img
        src="${propiedades_alquiler[index].src}"
        class="card-img-top"
        alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">
          ${propiedades_alquiler[index].nombre}
        </h5>
        <p class="card-text">
        ${propiedades_alquiler[index].descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${propiedades_alquiler[index].ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${propiedades_alquiler[index].habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${propiedades_alquiler[index].bathroom} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedades_alquiler[index].costo * 1000}</p>
        <div class="container-fumar">
        ${
          propiedades_alquiler[index].smoke
            ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
            : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
        }
        </div>
        <div class="container-mascotas">
        ${
          propiedades_alquiler[index].pets
            ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
            : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
        }
        </div>
      </div>
    </div>
  </div>
      `;
}


btn.addEventListener("click",()=>{
  allcards = '';
    for (const alquiler of propiedades_alquiler) {
        allcards += `
              <div class="col-md-4 mb-4">
              <div class="card">
                <img
                  src="${alquiler.src}"
                  class="card-img-top"
                  alt="Imagen del departamento"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    ${alquiler.nombre}
                  </h5>
                  <p class="card-text">
                  ${alquiler.descripcion}
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}
                  </p>
                  <p>
                    <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${alquiler.bathroom} Baños
                  </p>
                  <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo * 1000}</p>
                  <div class="container-fumar">
                  ${
                    alquiler.smoke
                      ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                      : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
                  }
                  </div>
                  <div class="container-mascotas">
                  ${
                    alquiler.pets
                      ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                      : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
                  }
                  </div>
                </div>
              </div>
            </div>
                `;
      }
      
      card.innerHTML = allcards;
})

card.innerHTML = allcards;