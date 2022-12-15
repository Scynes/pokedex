const autocompleteData = {
    Bulbasaur: { id: '001', img: 'http://img.pokemondb.net/artwork/bulbasaur.jpg' },
    Ivysaur: { id: '002', img: 'http://img.pokemondb.net/artwork/ivysaur.jpg' },
    Venusaur: { id: '003', img: 'http://img.pokemondb.net/artwork/venusaur.jpg' },
    Charmander: { id: '004', img: 'http://img.pokemondb.net/artwork/charmander.jpg' },
    Charmeleon: { id: '005', img: 'http://img.pokemondb.net/artwork/charmeleon.jpg' },
    Charizard: { id: '006', img: 'http://img.pokemondb.net/artwork/charizard.jpg' },
    Squirtle: { id: '007', img: 'http://img.pokemondb.net/artwork/squirtle.jpg' },
    Wartortle: { id: '008', img: 'http://img.pokemondb.net/artwork/wartortle.jpg' },
    Blastoise: { id: '009', img: 'http://img.pokemondb.net/artwork/blastoise.jpg' },
    Caterpie: { id: '010', img: 'http://img.pokemondb.net/artwork/caterpie.jpg' },
    Metapod: { id: '011', img: 'http://img.pokemondb.net/artwork/metapod.jpg' },
    Butterfree: { id: '012', img: 'http://img.pokemondb.net/artwork/butterfree.jpg' },
    Weedle: { id: '013', img: 'http://img.pokemondb.net/artwork/weedle.jpg' },
    Kakuna: { id: '014', img: 'http://img.pokemondb.net/artwork/kakuna.jpg' },
    Beedrill: { id: '015', img: 'http://img.pokemondb.net/artwork/beedrill.jpg' },
    Pidgey: { id: '016', img: 'http://img.pokemondb.net/artwork/pidgey.jpg' },
    Pidgeotto: { id: '017', img: 'http://img.pokemondb.net/artwork/pidgeotto.jpg' },
    Pidgeot: { id: '018', img: 'http://img.pokemondb.net/artwork/pidgeot.jpg' },
    Rattata: { id: '019', img: 'http://img.pokemondb.net/artwork/rattata.jpg' },
    Raticate: { id: '020', img: 'http://img.pokemondb.net/artwork/raticate.jpg' },
    Spearow: { id: '021', img: 'http://img.pokemondb.net/artwork/spearow.jpg' },
    Fearow: { id: '022', img: 'http://img.pokemondb.net/artwork/fearow.jpg' },
    Ekans: { id: '023', img: 'http://img.pokemondb.net/artwork/ekans.jpg' },
    Arbok: { id: '024', img: 'http://img.pokemondb.net/artwork/arbok.jpg' },
    Pikachu: { id: '025', img: 'http://img.pokemondb.net/artwork/pikachu.jpg' },
    Raichu: { id: '026', img: 'http://img.pokemondb.net/artwork/raichu.jpg' },
    Sandshrew: { id: '027', img: 'http://img.pokemondb.net/artwork/sandshrew.jpg' },
    Sandslash: { id: '028', img: 'http://img.pokemondb.net/artwork/sandslash.jpg' },
    Nidoran: { id: '032', img: 'https://img.pokemondb.net/artwork/nidoran-m.jpg' },
    Nidorina: { id: '030', img: 'http://img.pokemondb.net/artwork/nidorina.jpg' },
    Nidoqueen: { id: '031', img: 'http://img.pokemondb.net/artwork/nidoqueen.jpg' },
    Nidorino: { id: '033', img: 'http://img.pokemondb.net/artwork/nidorino.jpg' },
    Nidoking: { id: '034', img: 'http://img.pokemondb.net/artwork/nidoking.jpg' },
    Clefairy: { id: '035', img: 'http://img.pokemondb.net/artwork/clefairy.jpg' },
    Clefable: { id: '036', img: 'http://img.pokemondb.net/artwork/clefable.jpg' },
    Vulpix: { id: '037', img: 'http://img.pokemondb.net/artwork/vulpix.jpg' },
    Ninetales: { id: '038', img: 'http://img.pokemondb.net/artwork/ninetales.jpg' },
    Jigglypuff: { id: '039', img: 'http://img.pokemondb.net/artwork/jigglypuff.jpg' },
    Wigglytuff: { id: '040', img: 'http://img.pokemondb.net/artwork/wigglytuff.jpg' },
    Zubat: { id: '041', img: 'http://img.pokemondb.net/artwork/zubat.jpg' },
    Golbat: { id: '042', img: 'http://img.pokemondb.net/artwork/golbat.jpg' },
    Oddish: { id: '043', img: 'http://img.pokemondb.net/artwork/oddish.jpg' },
    Gloom: { id: '044', img: 'http://img.pokemondb.net/artwork/gloom.jpg' },
    Vileplume: { id: '045', img: 'http://img.pokemondb.net/artwork/vileplume.jpg' },
    Paras: { id: '046', img: 'http://img.pokemondb.net/artwork/paras.jpg' },
    Parasect: { id: '047', img: 'http://img.pokemondb.net/artwork/parasect.jpg' },
    Venonat: { id: '048', img: 'http://img.pokemondb.net/artwork/venonat.jpg' },
    Venomoth: { id: '049', img: 'http://img.pokemondb.net/artwork/venomoth.jpg' },
    Diglett: { id: '050', img: 'http://img.pokemondb.net/artwork/diglett.jpg' },
    Dugtrio: { id: '051', img: 'http://img.pokemondb.net/artwork/dugtrio.jpg' },
    Meowth: { id: '052', img: 'http://img.pokemondb.net/artwork/meowth.jpg' },
    Persian: { id: '053', img: 'http://img.pokemondb.net/artwork/persian.jpg' },
    Psyduck: { id: '054', img: 'http://img.pokemondb.net/artwork/psyduck.jpg' },
    Golduck: { id: '055', img: 'http://img.pokemondb.net/artwork/golduck.jpg' },
    Mankey: { id: '056', img: 'http://img.pokemondb.net/artwork/mankey.jpg' },
    Primeape: { id: '057', img: 'http://img.pokemondb.net/artwork/primeape.jpg' },
    Growlithe: { id: '058', img: 'http://img.pokemondb.net/artwork/growlithe.jpg' },
    Arcanine: { id: '059', img: 'http://img.pokemondb.net/artwork/arcanine.jpg' },
    Poliwag: { id: '060', img: 'http://img.pokemondb.net/artwork/poliwag.jpg' },
    Poliwhirl: { id: '061', img: 'http://img.pokemondb.net/artwork/poliwhirl.jpg' },
    Poliwrath: { id: '062', img: 'http://img.pokemondb.net/artwork/poliwrath.jpg' },
    Abra: { id: '063', img: 'http://img.pokemondb.net/artwork/abra.jpg' },
    Kadabra: { id: '064', img: 'http://img.pokemondb.net/artwork/kadabra.jpg' },
    Alakazam: { id: '065', img: 'http://img.pokemondb.net/artwork/alakazam.jpg' },
    Machop: { id: '066', img: 'http://img.pokemondb.net/artwork/machop.jpg' },
    Machoke: { id: '067', img: 'http://img.pokemondb.net/artwork/machoke.jpg' },
    Machamp: { id: '068', img: 'http://img.pokemondb.net/artwork/machamp.jpg' },
    Bellsprout: { id: '069', img: 'http://img.pokemondb.net/artwork/bellsprout.jpg' },
    Weepinbell: { id: '070', img: 'http://img.pokemondb.net/artwork/weepinbell.jpg' },
    Victreebel: { id: '071', img: 'http://img.pokemondb.net/artwork/victreebel.jpg' },
    Tentacool: { id: '072', img: 'http://img.pokemondb.net/artwork/tentacool.jpg' },
    Tentacruel: { id: '073', img: 'http://img.pokemondb.net/artwork/tentacruel.jpg' },
    Geodude: { id: '074', img: 'http://img.pokemondb.net/artwork/geodude.jpg' },
    Graveler: { id: '075', img: 'http://img.pokemondb.net/artwork/graveler.jpg' },
    Golem: { id: '076', img: 'http://img.pokemondb.net/artwork/golem.jpg' },
    Ponyta: { id: '077', img: 'http://img.pokemondb.net/artwork/ponyta.jpg' },
    Rapidash: { id: '078', img: 'http://img.pokemondb.net/artwork/rapidash.jpg' },
    Slowpoke: { id: '079', img: 'http://img.pokemondb.net/artwork/slowpoke.jpg' },
    Slowbro: { id: '080', img: 'http://img.pokemondb.net/artwork/slowbro.jpg' },
    Magnemite: { id: '081', img: 'http://img.pokemondb.net/artwork/magnemite.jpg' },
    Magneton: { id: '082', img: 'http://img.pokemondb.net/artwork/magneton.jpg' },
    "Farfetch'd": { id: '083', img: 'http://img.pokemondb.net/artwork/farfetchd.jpg' },
    Doduo: { id: '084', img: 'http://img.pokemondb.net/artwork/doduo.jpg' },
    Dodrio: { id: '085', img: 'http://img.pokemondb.net/artwork/dodrio.jpg' },
    Seel: { id: '086', img: 'http://img.pokemondb.net/artwork/seel.jpg' },
    Dewgong: { id: '087', img: 'http://img.pokemondb.net/artwork/dewgong.jpg' },
    Grimer: { id: '088', img: 'http://img.pokemondb.net/artwork/grimer.jpg' },
    Muk: { id: '089', img: 'http://img.pokemondb.net/artwork/muk.jpg' },
    Shellder: { id: '090', img: 'http://img.pokemondb.net/artwork/shellder.jpg' },
    Cloyster: { id: '091', img: 'http://img.pokemondb.net/artwork/cloyster.jpg' },
    Gastly: { id: '092', img: 'http://img.pokemondb.net/artwork/gastly.jpg' },
    Haunter: { id: '093', img: 'http://img.pokemondb.net/artwork/haunter.jpg' },
    Gengar: { id: '094', img: 'http://img.pokemondb.net/artwork/gengar.jpg' },
    Onix: { id: '095', img: 'http://img.pokemondb.net/artwork/onix.jpg' },
    Drowzee: { id: '096', img: 'http://img.pokemondb.net/artwork/drowzee.jpg' },
    Hypno: { id: '097', img: 'http://img.pokemondb.net/artwork/hypno.jpg' },
    Krabby: { id: '098', img: 'http://img.pokemondb.net/artwork/krabby.jpg' },
    Kingler: { id: '099', img: 'http://img.pokemondb.net/artwork/kingler.jpg' },
    Voltorb: { id: '100', img: 'http://img.pokemondb.net/artwork/voltorb.jpg' },
    Electrode: { id: '101', img: 'http://img.pokemondb.net/artwork/electrode.jpg' },
    Exeggcute: { id: '102', img: 'http://img.pokemondb.net/artwork/exeggcute.jpg' },
    Exeggutor: { id: '103', img: 'http://img.pokemondb.net/artwork/exeggutor.jpg' },
    Cubone: { id: '104', img: 'http://img.pokemondb.net/artwork/cubone.jpg' },
    Marowak: { id: '105', img: 'http://img.pokemondb.net/artwork/marowak.jpg' },
    Hitmonlee: { id: '106', img: 'http://img.pokemondb.net/artwork/hitmonlee.jpg' },
    Hitmonchan: { id: '107', img: 'http://img.pokemondb.net/artwork/hitmonchan.jpg' },
    Lickitung: { id: '108', img: 'http://img.pokemondb.net/artwork/lickitung.jpg' },
    Koffing: { id: '109', img: 'http://img.pokemondb.net/artwork/koffing.jpg' },
    Weezing: { id: '110', img: 'http://img.pokemondb.net/artwork/weezing.jpg' },
    Rhyhorn: { id: '111', img: 'http://img.pokemondb.net/artwork/rhyhorn.jpg' },
    Rhydon: { id: '112', img: 'http://img.pokemondb.net/artwork/rhydon.jpg' },
    Chansey: { id: '113', img: 'http://img.pokemondb.net/artwork/chansey.jpg' },
    Tangela: { id: '114', img: 'http://img.pokemondb.net/artwork/tangela.jpg' },
    Kangaskhan: { id: '115', img: 'http://img.pokemondb.net/artwork/kangaskhan.jpg' },
    Horsea: { id: '116', img: 'http://img.pokemondb.net/artwork/horsea.jpg' },
    Seadra: { id: '117', img: 'http://img.pokemondb.net/artwork/seadra.jpg' },
    Goldeen: { id: '118', img: 'http://img.pokemondb.net/artwork/goldeen.jpg' },
    Seaking: { id: '119', img: 'http://img.pokemondb.net/artwork/seaking.jpg' },
    Staryu: { id: '120', img: 'http://img.pokemondb.net/artwork/staryu.jpg' },
    Starmie: { id: '121', img: 'http://img.pokemondb.net/artwork/starmie.jpg' },
    'Mr. Mime': { id: '122', img: 'https://img.pokemondb.net/artwork/mr-mime.jpg' },
    Scyther: { id: '123', img: 'http://img.pokemondb.net/artwork/scyther.jpg' },
    Jynx: { id: '124', img: 'http://img.pokemondb.net/artwork/jynx.jpg' },
    Electabuzz: { id: '125', img: 'http://img.pokemondb.net/artwork/electabuzz.jpg' },
    Magmar: { id: '126', img: 'http://img.pokemondb.net/artwork/magmar.jpg' },
    Pinsir: { id: '127', img: 'http://img.pokemondb.net/artwork/pinsir.jpg' },
    Tauros: { id: '128', img: 'http://img.pokemondb.net/artwork/tauros.jpg' },
    Magikarp: { id: '129', img: 'http://img.pokemondb.net/artwork/magikarp.jpg' },
    Gyarados: { id: '130', img: 'http://img.pokemondb.net/artwork/gyarados.jpg' },
    Lapras: { id: '131', img: 'http://img.pokemondb.net/artwork/lapras.jpg' },
    Ditto: { id: '132', img: 'http://img.pokemondb.net/artwork/ditto.jpg' },
    Eevee: { id: '133', img: 'http://img.pokemondb.net/artwork/eevee.jpg' },
    Vaporeon: { id: '134', img: 'http://img.pokemondb.net/artwork/vaporeon.jpg' },
    Jolteon: { id: '135', img: 'http://img.pokemondb.net/artwork/jolteon.jpg' },
    Flareon: { id: '136', img: 'http://img.pokemondb.net/artwork/flareon.jpg' },
    Porygon: { id: '137', img: 'http://img.pokemondb.net/artwork/porygon.jpg' },
    Omanyte: { id: '138', img: 'http://img.pokemondb.net/artwork/omanyte.jpg' },
    Omastar: { id: '139', img: 'http://img.pokemondb.net/artwork/omastar.jpg' },
    Kabuto: { id: '140', img: 'http://img.pokemondb.net/artwork/kabuto.jpg' },
    Kabutops: { id: '141', img: 'http://img.pokemondb.net/artwork/kabutops.jpg' },
    Aerodactyl: { id: '142', img: 'http://img.pokemondb.net/artwork/aerodactyl.jpg' },
    Snorlax: { id: '143', img: 'http://img.pokemondb.net/artwork/snorlax.jpg' },
    Articuno: { id: '144', img: 'http://img.pokemondb.net/artwork/articuno.jpg' },
    Zapdos: { id: '145', img: 'http://img.pokemondb.net/artwork/zapdos.jpg' },
    Moltres: { id: '146', img: 'http://img.pokemondb.net/artwork/moltres.jpg' },
    Dratini: { id: '147', img: 'http://img.pokemondb.net/artwork/dratini.jpg' },
    Dragonair: { id: '148', img: 'http://img.pokemondb.net/artwork/dragonair.jpg' },
    Dragonite: { id: '149', img: 'http://img.pokemondb.net/artwork/dragonite.jpg' },
    Mewtwo: { id: '150', img: 'http://img.pokemondb.net/artwork/mewtwo.jpg' },
    Mew: { id: '151', img: 'http://img.pokemondb.net/artwork/mew.jpg' }
}

const $selection = $('.selection');

$('input.poke-search-bar').keyup((event) => {
    const $input = $('input.poke-search-bar').val().toLowerCase();

    const validMatches = [];

    if ($input == '') { return }

    for (let pokemon in autocompleteData) {

        if (pokemon.toLowerCase().substring(0, $input.length) == $input) {

            validMatches.push({
              name: pokemon,
              data: autocompleteData[pokemon]
            })
        }
    }

    validMatches.length = validMatches.length > 6 ? 6 : validMatches.length;
    createDropDown(validMatches);
});

const createDropDown = (matches) => {

    let list = ''

    matches.forEach(element => {
      console.log(parseInt(element.data.id))
      list += `<li id="${element.data.id}" class="poke-list"><img class="poke-img" src="${element.data.img}"/>${element.name}</li>`;
    });

    $selection.html(`<ul>${list}</ul>`);

};


$('.selection').on('click', '.poke-list', (event) => {

  location.href = `/pokemon/${parseInt(event.target.id)-1}`;
})
