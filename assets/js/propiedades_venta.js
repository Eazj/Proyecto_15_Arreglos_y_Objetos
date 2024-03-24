const card = document.querySelector(".container_card");
const btn = document.querySelector(".btn");
let allcards = '';

const propiedades_venta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: ' 123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    bathroom: 4,
    costo: 5.000,
    smoke: false,
    pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: ' 789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        bathroom: 1,
        costo: 1.200,
        smoke: true,
        pets: true
        },
        {
            nombre: 'Penthouse de lujo con terraza panorámica',
            src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
            descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
            ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
            habitaciones: 3,
            bathroom: 3,
            costo: 4.500,
            smoke: false,
            pets: true
            },
            {
              nombre: 'Hermosa casa rural',
              src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20240217/3074159/n_wm_agentepropiedades_b_c1386u7882co45ac2f.webp',
              descripcion: 'Hermosa casa rural alejada de la ciudad con 5900m2 y llego de tranquilidad',
              ubicacion: 'KM 7,5 Camino a coihueco,Chillan',
              habitaciones: 3,
              bathroom: 3,
              costo: 290000,
              smoke: true,
              pets: true
              },
              {
                nombre: 'Centrico departamento en Santiago',
                src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20231029/2883238/n_wm_2023121957252300278.webp',
                descripcion: 'Centrico departamento a pasos de metro y de universidad',
                ubicacion: 'Arturo Prat 407,Santiago',
                habitaciones: 2,
                bathroom: 2,
                costo: 99600,
                smoke: false,
                pets: false
                },
                {
                  nombre: 'Casa ubicada en condominio las terrazas',
                  src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20230907/2793178/n_wm_vipgestioninmobiliaria_2025_101002025_1822237_1.webp',
                  descripcion: 'Condominio con ubicacion privilegiada en zona residencial y tranquila',
                  ubicacion: 'Av. Arturo Prat Chacón,Iquique',
                  habitaciones: 4,
                  bathroom: 3,
                  costo: 477860,
                  smoke: false,
                  pets: true
                  },
                  {
                    nombre: 'Edificio Altavista 3',
                    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20141027/294688/n_wm_2019030457485899943.webp',
                    descripcion: 'Hermoso departamente a solo 5 minutos del centro de viña del mar',
                    ubicacion: 'Av. Gregorio Marañon 2350,Viña del mar',
                    habitaciones: 1,
                    bathroom: 1,
                    costo: 68308,
                    smoke: false,
                    pets: true
                    },
    ];

    for (let index = 0; index < 3; index++) {
      allcards += `
        <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src="${propiedades_venta[index].src}"
            class="card-img-top"
            alt="Imagen del departamento"
          />
          <div class="card-body">
            <h5 class="card-title">
              ${propiedades_venta[index].nombre}
            </h5>
            <p class="card-text">
            ${propiedades_venta[index].descripcion}
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i> ${propiedades_venta[index].ubicacion}
            </p>
            <p>
              <i class="fas fa-bed"></i> ${propiedades_venta[index].habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${propiedades_venta[index].bathroom} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedades_venta[index].costo * 1000}</p>
            <div class="container-fumar">
            ${
              propiedades_venta[index].smoke
                ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
            }
            </div>
            <div class="container-mascotas">
            ${
              propiedades_venta[index].pets
                ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
            }
            </div>
          </div>
        </div>
      </div>
          `;
    }

    btn.addEventListener("click", ()=>{
      allcards = '';
      for (const venta of propiedades_venta) {
        allcards += `
        <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src="${venta.src}"
            class="card-img-top"
            alt="Imagen del departamento"
          />
          <div class="card-body">
            <h5 class="card-title">
              ${venta.nombre}
            </h5>
            <p class="card-text">
              ${venta.descripcion}
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}
            </p>
            <p>
              <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${venta.bathroom} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${venta.costo * 1000}</p>
            <div class="container-fumar">
              ${
                venta.smoke?`<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`:`<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
              }
            </div>
            <div class="container-mascotas">
            ${
              venta.pets?`<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`:`<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`
            }
            </div>
          </div>
        </div>
      </div>
          `
      }
      card.innerHTML = allcards;
    })
card.innerHTML=allcards;
