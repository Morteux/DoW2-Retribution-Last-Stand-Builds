var heroes_panel = ["farseer_panel", "mekboy_panel", "captain_panel", "tyranid_panel", "sorcerer_panel", "general_panel", "commander_panel", "overlord_panel"];
var builds = [buildsFarseer, buildsMekboy, buildsCaptain, buildsTyranid, buildsSorcerer, buildsGeneral, buildsCommander, buildsOverlord];

addEventListener("DOMContentLoaded", (event) => {
    fillBuildsSelects();

    changeHero("farseer_panel");
    changeBuild(buildsFarseer, 'images/farseer/', "Manipuladora de la batalla");
});

function fillBuildsSelects() {
    fillBuildsSelect(buildsFarseer, "farseer_select");
    fillBuildsSelect(buildsMekboy, "mekboy_select");
    fillBuildsSelect(buildsCaptain, "captain_select");
    fillBuildsSelect(buildsTyranid, "tyranid_select");
    fillBuildsSelect(buildsSorcerer, "sorcerer_select");
    fillBuildsSelect(buildsGeneral, "general_select");
    fillBuildsSelect(buildsCommander, "commander_select");
    fillBuildsSelect(buildsOverlord, "overlord_select");
}

function fillBuildsSelect(builds, select_id) {
    for (const key in builds) {
        document.getElementById(select_id).innerHTML += `<option value="${key}">${key}</option>`;
    }
}

function changeHero(panel_id) {
    for (let i = 0; i < heroes_panel.length; i++) {
        document.getElementById(heroes_panel[i]).style.display = "none";
    }

    document.getElementById(panel_id).style.display = "";
}

function changeBuild(builds, image_path, key) {
    if (key === undefined) {
        key = Object.keys(builds)[0];
    }

    // document.getElementById("build_title").innerHTML = key;
    document.getElementById("build_role").innerHTML = builds[key].rol;
    document.getElementById("build_description").innerHTML = builds[key].descripcion;
    document.getElementById("hero_image").src = image_path + builds[key].imagen;
}

// Image configuration: from a 1920x1080 image, crop to 1060x980 and shift -625px left


var buildsFarseer = {
    "Manipuladora de la batalla": {
        "rol": "Apoyo - Retaguardia",
        "descripcion": "La Vidente se centra en apoyar a sus aliados. Deja de lado su propia capacidad de infligir daño para confundir al enemigo y proteger a sus aliados.",
        "imagen": "manipuladora_de_la_batalla.webp"
    }
};

var buildsMekboy = {
    "TELEPORTA!": {
        "rol": "Agresivo - Explosivo - Fuego aliado",
        "descripcion": "Abraza la teknologia orka y el caos de la batalla para avasallar al enemigo con explosiones por todas partes.",
        "imagen": "teleporta.webp"
    }
};

var buildsCaptain = {
    "Vanguardia": {
        "rol": "Tanque - Control de masas",
        "descripcion": "Resistente a ataques ligeros y con gran capacidad de control de masas, el Capitán en Vanguardia lidera la carga y mantiene a raya a los enemigos que intentan flanquear y perseguir a sus aliados más frágiles con su habilidad de provocar.",
        "imagen": "vanguardia.webp"
    },
    "Bombardeo Orbital": {
        "rol": "Mixto - Control de masas",
        "descripcion": "Resistente a ataques ligeros y con gran capacidad de control de masas, el Capitán mantiene a raya a los enemigos que intentan flanquear y perseguir a sus aliados más frágiles con su habilidad de provocar. Se apoya de su Bombardeo Orbital para acabar con grandes oleadas de enemigos ligeros preapuntando en los puntos de aparición.",
        "imagen": "bombardeo_orbital.webp"
    }
};

var buildsTyranid = {
    "Invencible": {
        "rol": "Tanque - Superpesado",
        "descripcion": "Cada vez que un esbirro muere, el Tiránido se vuelve invencible durante un corto periodo de tiempo. Con el bajo coste de energía para invocar a sus esbirros, la coordinación es clave para mantener al 100% la invencibilidad activada. Puedes forzar la muerte de un esbirro volviendolo a invocar o invocándolo cerca de un enemigo para que muera rápidamente.",
        "imagen": "invencible.webp"
    }
};

var buildsSorcerer = {
    "Rayo de disformidad": {
        "rol": "Agresivo - Guerrilla - Entrar y salir",
        "descripcion": "Mezcla el daño en área del fuego de disformidad invocado con su teletransporte para entrar, invocar su Rayo de la Muerte en corta distancia y salir rápidamente a una zona segura. La clave está en usar el Rayo de la Muerte lo suficientemente cerca del Hechicero para crear una explosión de daño en un corto peeriodo de tiempo.",
        "imagen": "rayo_de_disformidad.webp"
    }
};

var buildsGeneral = {
    "Marcador de bombardeo": {
        "rol": "Larga distancia - Retaguardia - Control de puntos de aparición",
        "descripcion": "Mantente seguro detrás de tus aliados a la mayor distancia posible y aprovecha el Bombardeo con Cohetes para controlar los puntos de aparición y acabar con grandes oleadas de enemigos. El Marcador de Bombardeo puede mantener casi al 100% el tiempo de activación del Bombardeo con Cohetes si no gasta demasiada energía en huir y volver a invocar a tus Tropas de Asalto",
        "imagen": "marcador_de_bombardeo.webp"
    }
};

var buildsCommander = {
    "Derriteblindaje": {
        "rol": "Larga distancia - Antitanque",
        "descripcion": "El Comandante Derriteblindaje aprovecha su alta movilidad, sus armas con perforación de armadura y sus misiles antiblindaje para hostigar con fácilidad a los enemigos más pesados desde una distancia segura. Aunque su baja resistencia le hace débil a los ataques a distancia y cuerpo a cuerpo por igual.",
        "imagen": "derriteblindaje.webp"
    },
    "Marcador Mont'ka Shas": {
        "rol": "Larga distancia - Apoyo - Control de masas",
        "descripcion": "El Comandante Marcador Mont'ka Shas se especializa en debilitar a los enemigos con su habilidad de marcado. La habilidad de marcado NO tiene coste, así que puedes marcar a tantos objetivos como haga falta. Marcar un objetivo no solo aumenta el daño que recibe a distancia, sino que permite activar el Bombardeo Mont'ka Shas cuando hayan suficientes enemigos marcados para acabar rápidamente con la mayoría de enemigos ligeros.",
        "imagen": "marcador.webp"
    }
};

var buildsOverlord = {
    "Dominador del C'Tan": {
        "rol": "Agresivo - Control de puntos de aparición",
        "descripcion": "El Erradicador aprovecha el coste reducido, así como el tiempo reducido de enfriamiento para su habilidad de comandante 'Laberinto del Portador de la Noche'. Su arma a distancia y su teletransporte de bajo coste te permite reducir aún más el enfriamiento por cada impacto que hagas con tu arma principal. La clave está en controlar los puntos de aparición para preapuntar con el Portador de la Noche, que permite limpiar grandes cantidades de enemigos, ya sean pesados o ligeros.",
        "imagen": "dominador_del_ctan.webp"
    }
};