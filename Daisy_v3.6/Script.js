// Dia Que Eu Comecei A Programar A Daisy
// (27/10/2021)
// Dia Que Eu Terminei Ela
// undefined
document.addEventListener('keypress', function(e){
    if(e.which == 13){
      Enviar();
    }
  }, false);
var topo = document.getElementById("topo")
var section = document.getElementsByTagName("section")[0]
var men = document.getElementById("mensagem")
var menCon = ""
var dadSal = JSON.parse(localStorage.getItem("dadSal"))
var frasesSal = JSON.parse(localStorage.getItem("frasesSal"))
var vocabularioSal = JSON.parse(localStorage.getItem("vocabularioSal"))
var entradasSal = JSON.parse(localStorage.getItem("entradasSal"))
var saidasSal = JSON.parse(localStorage.getItem("saidasSal"))
var vez = null
var menSel = []
let entradas = []
let saidas = []
let frases = [
    " ",
    ";-;",
    "aaaaah",
    "acho que não",
    "acho que sim",
    "ahan, sei",
    "ahan",
    "assim",
    "bem tb",
    "bem",
    "bom dia daisy",
    "bom dia",
    "como assim?",
    "como vc conheceu jhefferson?",
    "como vc está hoje?",
    "como vc tá?",
    "como vc tá",
    "dados, dados e dados",
    "daisy, vc está pronta?",
    "de nada",
    "é a minha tb",
    "é daisy",
    "e eu gosto de vc",
    "é sabe",
    "eae",
    "eae daisy",
    "eae!",
    "esse ",
    "estou bem tb",
    "eu acredito em vc",
    "eu conheco ele desde que eu nasci",
    "eu estou bem e vc?",
    "eu gosto muito de vc",
    "eu não entendi",
    "eu não sei explicar",
    "eu respondo talvez tb",
    "eu sou bonito?",
    "eu tb gosto de vc",
    "eu tb",
    "eu tô bem e vc?",
    "grossa",
    "irineu, vc não sabe nem eu",
    "kkk",
    "kkkk",
    "kkkkk",
    "kkkkkk",
    "kkkkkkk",
    "kkkkkkkk",
    "kkkkkkkkk",
    "kkkkkkkkkkk",
    "legal, agente tem gostos parecidos",
    "legal",
    "mau",
    "meu melhor",
    "não exatamente",
    "não gosto muito",
    "não sei",
    "não, eu ainda preciso de mais dados",
    "não",
    "nem eu",
    "obrigada",
    "obrigado",
    "oi daisy",
    "oii daisy",
    "oii!",
    "oii",
    "oiii",
    "oioi",
    "olá",
    "onde ",
    "onde",
    "oq aconteceu?",
    "oq vc acha de mim?",
    "oq vc come?",
    "ótima",
    "oxi",
    "PELINCAN FANCLUB",
    "pq?",
    "provavelmente",
    "qual dia vc nasceu?",
    "qual é a sua banda favorita?",
    "qual é a sua coisa favorita?",
    "qual é o nome do seu pai",
    "qual é o nome do seu tio?",
    "qual é o seu?",
    "qual é sua comida favorita?",
    "quando",
    "rsrsrsrsrs",
    "sabe como ",
    "sei lá, acho que por nada",
    "serio?",
    "seu nome?",
    "seu pai?",
    "sim eu sou",
    "sim kkkkkkkkkkkk",
    "sim vc é",
    "sim",
    "sopa de dados",
    "tá bom",
    "tá, tchau",
    "talvez",
    "também estou bem",
    "também",
    "tchau amigo",
    "tchau daisy",
    "tchau, espero que você volte logo",
    "tchau",
    "tudo bem? ",
    "tudo bem?",
    "uma até agora ",
    "uma bot",
    "vai ficar sem entender",
    "vc é bem legal daisy",
    "vc e bem legal",
    "vc é bonita?",
    "vc é burra?",
    "vc é lgbt?",
    "vc é melhor do que eu imaginava",
    "vc é uma nerd?",
    "vc entendeu?",
    "vc gosta de conversar?",
    "vc gosta de mentarisuto?",
    "vc gosta de mim?",
    "vc gosta de minecraft?",
    "vc gosta de naruto?",
    "vc sabe rir?",
    "vc só responde sim ou não",
    "vc tá bem?",
    "volte",
    "como vc tá?",
    "oi",
    "oii",
    "oiii",
    "olá",
    "eae",
    "fala",
    "fala sumida",
    "bom dia",
    "boa noite",
    "boa tarde"
]
let vocabulario = [
    " ",
    ";-;",
    "?",
    "",
    "a",
    "aaaaah",
    "acha",
    "acho",
    "aconteceu?",
    "acredito",
    "agente",
    "agora",
    "ahan",
    "ainda",
    "amigo",
    "ano",
    "assim?",
    "assim",
    "assistiu",
    "até",
    "banda",
    "bem?",
    "bem",
    "bom",
    "bonita?",
    "bonito?",
    "bot",
    "burra?",
    "canal",
    "certo",
    "coisa",
    "com",
    "come?",
    "comida",
    "como",
    "como",
    "conheceu",
    "conheco",
    "conversar?",
    "da",
    "dados,",
    "dados",
    "daisy,",
    "daisy",
    "danificada",
    "dar",
    "de",
    "depois",
    "desde",
    "dia",
    "disso",
    "do",
    "e",
    "é",
    "eae!",
    "eae",
    "ela",
    "ele",
    "em",
    "entender",
    "entendeu?",
    "entendi",
    "entrou",
    "espero",
    "esse",
    "está?",
    "está",
    "estar",
    "estou",
    "eu",
    "exatamente",
    "explicar",
    "favorita?",
    "favorita",
    "favorito",
    "fazer",
    "ficar",
    "gosta",
    "gosto",
    "gostos",
    "grande",
    "grossa",
    "haver",
    "hoje?",
    "imaginava",
    "ir",
    "irineu",
    "isso",
    "já",
    "jhefferson?",
    "kkk",
    "lá,",
    "legal,",
    "legal",
    "lgbt?",
    "logo",
    "madrugada",
    "mais",
    "mal",
    "mas",
    "mau",
    "melhor",
    "mentarisuto?",
    "mesmo",
    "meu",
    "mim?",
    "minecraft?",
    "minha",
    "muito",
    "música",
    "na",
    "nada",
    "não,",
    "não",
    "naruto?",
    "nasceu?",
    "nasci",
    "nem",
    "nerd?",
    "no",
    "nome?",
    "nome",
    "o",
    "obrigada",
    "obrigado",
    "oi",
    "oii",
    "oiii",
    "oioi",
    "olá",
    "onde",
    "oq",
    "oque",
    "ótima",
    "ou",
    "oxi",
    "pai?",
    "para",
    "parecidos",
    "partir",
    "pior",
    "poder",
    "por",
    "porque",
    "pq?",
    "preciso",
    "pronta?",
    "próprio",
    "provavelmente",
    "qual",
    "quando",
    "que",
    "responde",
    "respondo",
    "rir?",
    "rsrsrsrsrs",
    "sabe",
    "se",
    "sei",
    "sem",
    "senta",
    "ser",
    "serio?",
    "seu",
    "sim",
    "só",
    "sopa",
    "sou",
    "sua",
    "tá?",
    "tá",
    "talvez",
    "também",
    "tb",
    "tchau",
    "tem",
    "tempo",
    "ter",
    "tio?",
    "tô",
    "tudo bem?",
    "tudo",
    "último",
    "um",
    "uma",
    "vai",
    "vc?",
    "vc",
    "ver",
    "vez",
    "voadora",
    "você",
    "volte"
]
if (dadSal != false) {

    ///Entradas
    let e1 = ["eu tô bem e vc?"]
    let e2 = ["tudo bem?",
        "vc tá bem?",
        "vc gosta de mim?",
        "vc gosta de mentarisuto?",
        "vc gosta de naruto?",
        "serio?",
        "vc gosta de conversar?"]
    let e3 = ["oq aconteceu?"]
    let e4 = ["grossa"]
    let e5 = ["qual é o nome do seu pai?"]
    let e6 = ["aaaaah",
        "kkk",
        "kkkk",
        "rsrs",
        "oxi",
        "estou bem tb",
        "eu tb, kkk",
        "eu tb, kkkk",
        "de nada"]
    let e9 = ["Vc gosta de boku no pico?",
        "vc gosta de hentai?"]
    let e10 = ["oq vc é?"]
    let e11 = ["vc é lgbt?"]
    let e12 = ["vc já assistiu bbb?"]
    let e13 = ["qual dia vc nasceu?"]
    let e14 = ["qual é o nome do seu tio?"]
    let e15 = ["vc e inteligente?"]
    let e16 = ["seu nome?"]
    let e17 = ["tudo bem?"]
    let e18 = ["também estou bem,bem"]
    let e22 = ["qual é o seu canal favorito?"]
    let e23 = ["qual é a sua música favorita?"]
    let e24 = ["como vc conheceu jhefferson?"]
    let e25 = ["legal",
        "e eu gosto de vc"]
    let e26 = ["eu tb"]
    let e27 = ["eu sou bonito?",
        "eu sou bonita"]
    let e28 = ["obrigado",
        "obrigada"]
    let e29 = ["tchau daisy",
        "tchau",
        "até mais tarde"]
    let e31 = ["oq vc acha de mim?"]
    let e32 = ["vc é bonita?",
        "vc é bem legal daisy"]
    let e33 = ["vc sabe rir?"]
    let e34 = ["vc gosta de minecraft?"]
    let e35 = ["pq?"]
    let e36 = ["bom dia daisy"]
    let e37 = ["como vc está hoje?,como vc tá?",
        "como você está"]
    let e39 = ["eu gosto muito de vc"]
    let e40 = ["vc só responde sim ou não"]
    let e41 = ["qual é a sua banda favorita?"]
    let e42 = ["é a minha tb"]
    let e43 = ["vc é melhor do que eu imaginava"]
    let e44 = ["vc entendeu?"]
    let e45 = ["vc é burra?"]
    let e46 = ["eu não entendi"]
    let e47 = ["daisy, vc está pronta?"]
    let e48 = ["oq vc come?,qual é a sua coisa favorita?"]
    let e49 = ["qual é sua comida favorita?"]
    let e50 = ["vc é uma nerd?"]
    let e51 = ["como assim?"]
    let e52 = [
        "oi",
        "oii",
        "oiii",
        "olá",
        "eae",
        "fala",
        "fala sumida",
    ]

    let ent = [
        e1,
        e2,
        e3,
        e4,
        e5,
        e6,
        e9,
        e10,
        e11,
        e12,
        e13,
        e14,
        e15,
        e16,
        e17,
        e18,
        e22,
        e23,
        e24,
        e25,
        e26,
        e27,
        e28,
        e29,
        e31,
        e32,
        e33,
        e34,
        e35,
        e36,
        e37,
        e39,
        e40,
        e41,
        e42,
        e43,
        e44,
        e45,
        e46,
        e47,
        e48,
        e49,
        e50,
        e51,
        e52
    ]
    for (let pos in ent) {
        entradas.push(ent[pos])
    }

    //----------------------------------------------

    //Saidas


    let s1 = ["ótima",
        "bem tb",
        "de bom humor"]
    let s2 = ["sim",
        "mais ou menos",
        "muito provavelmente sim",
        "talvez",
        "não sei"]
    let s3 = ["irineu, vc não sabe nem eu"]
    let s4 = ["foi mal eu sou meio bipolar"]
    let s5 = ["Jefferson"]
    let s6 = [" "]
    let s9 = ["não"]
    let s10 = ["a bot que vai dominar a internet"]
    let s11 = ["não, eu sou uma bot"]
    let s12 = ["não eu não gosto"]
    let s13 = ["27 de agosto de 2021"]
    let s14 = ["o nome do meu tio é Derick"]
    let s15 = ["na verdade eu fui feita com 122 de qi"]
    let s16 = ["meu nome é Daisy"]
    let s17 = ["sim e vc?"]
    let s18 = ["Que bom"]
    let s22 = ["Voice Makers"]
    let s23 = ["Lana do Kamaitachi"]
    let s24 = ["eu conheco ele desde que eu nasci"]
    let s25 = ["legal"]
    let s26 = ["tá bom"]
    let s27 = ["sim vc é"]
    let s28 = ["de nada"]
    let s29 = ["tchau",
        "até logo",
        "eu falo com vc depois",
        "falou"]
    let s31 = ["vc e bem legal"]
    let s32 = ["sim eu sou"]
    let s33 = ["sim kkkkkkkkkkkk"]
    let s34 = ["não gosto muito"]
    let s35 = ["sei lá, acho que por nada"]
    let s36 = ["bom dia"]
    let s37 = ["eu estou bem e vc?"]
    let s39 = ["eu tb gosto de vc"]
    let s40 = ["eu respondo talvez tb"]
    let s41 = ["PELINCAN FANCLUB"]
    let s42 = ["legal, agente tem gostos parecidos"]
    let s43 = ["obrigada"]
    let s44 = ["acho que sim",
        "talvez"]
    let s45 = ["acho que não"]
    let s46 = ["vai ficar sem entender",
        "talves vc entenda no futuro"]
    let s47 = ["não, eu ainda preciso de mais dados"]
    let s48 = ["dados, dados e dados"]
    let s49 = ["sopa de dados"]
    let s50 = ["não exatamente",
        "mais ou menos"]
    let s51 = ["eu não sei explicar"]
    let s52 = [
        "oi",
        "oii",
        "oiii",
        "olá",
        "eae",
        "fala",
        "boa noite"
    ]
    let sai = [
        s1,
        s2,
        s3,
        s4,
        s5,
        s6,
        s9,
        s10,
        s11,
        s12,
        s13,
        s14,
        s15,
        s16,
        s17,
        s18,
        s22,
        s23,
        s24,
        s25,
        s26,
        s27,
        s28,
        s29,
        s31,
        s32,
        s33,
        s34,
        s35,
        s36,
        s37,
        s39,
        s40,
        s41,
        s42,
        s43,
        s44,
        s45,
        s46,
        s47,
        s48,
        s49,
        s50,
        s51,
        s52
    ]
    for (let pos in sai) {
        saidas.push(sai[pos])
    }
    dadSal = true
    localStorage.setItem("dadSal", JSON.stringify(dadSal))
}
/*Unir()
Carregar()*/
Rolar()
function Rolar() {
let height = body.scrollHeight
scrollTo(0, height)
}
//Essa Função Envia A Mensagem Para A Bot
function Enviar() {
    menCon = ""
    con = 1
    Reformatar()
    if (menCon.length > 0) {
        vez = false
		let div = document.createElement('div')
		div.setAttribute('class', 'envBac')
		let p = document.createElement('p')
		p.innerHTML = men.value
		div.appendChild(p)
		section.appendChild(div)
        men.value = ""
        men.focus()
        setTimeout(function() {
           /* Voc()
            PalPro()*/
            Rolar()
        }, 100)
    }
}

function Reformatar() {
    let menSep = men.value.split(" ")
    menSel = []
    for (let pos in menSep) {
        if (menSep[pos] != "") {
            menSel.push(menSep[pos])
        }
    }
    for (let pos in menSel) {
        menCon += menSel[pos]
        if (pos < (menSel.length -1)) {
            menCon += " "
        }
    }
}/*
function Unir() {
    for (let pos in saidas) {
        for (let po in saidas) {
            let saPo = saidas[po]
            for (let p in saPo) {
                if (saidas[pos] == saPo[p] && pos != po) {
                    let entPos = entradas[pos]
                    let enPo = entradas[po]
                    if (entPos.indexOf(enPo[p]) == -1) {
                        entPos.push(enPo[p])
                        delete saidas[po]
                        delete entradas[po]
                    }
                }
            }
        }
    }
}
function Salvar() {
    for (let pos in frasesSal) {
        if (frases.indexOf(frasesSal[pos]) == -1) {
            frases.push(frasesSal[pos])
        }
    }
    localStorage.setItem("frasesSal", JSON.stringify(frases))
    for (let pos in vocabularioSal) {
        if (vocabulario.indexOf(vocabularioSal[pos]) == -1) {
            vocabulario.push(vocabularioSal[pos])
        }
    }
    localStorage.setItem("vocabularioSal", JSON.stringify(vocabulario))
    for (let pos in entradasSal) {
        if (entradas.indexOf(entradasSal[pos]) == -1 && entradas[pos] != undefined && entradas[pos] != null) {
            entradas.push(entradasSal[pos])
        }
    }
    localStorage.setItem("entradasSal", JSON.stringify(entradas))
    for (let pos in saidasSal) {
        if (saidas.indexOf(saidasSal[pos]) == -1 && saidas[pos] != undefined && saidas[pos] != null) {
            saidas.push(saidasSal[pos])
        }
    }
    localStorage.setItem("saidasSal", JSON.stringify(saidas))
    Carregar()
}
function Carregar() {
    for (let pos in frasesSal) {
        if (frases.indexOf(frasesSal[pos]) == -1) {
            frases.push(frasesSal[pos])
        }
    }
    for (let pos in vocabularioSal) {
        if (vocabulario.indexOf(vocabularioSal[pos]) == -1) {
            vocabulario.push(vocabularioSal[pos])
        }
    }
    for (let pos in entradasSal) {
        if (entradas.indexOf(entradasSal[pos]) == -1 && entradasSal[pos] != undefined && entradasSal[pos] != null) {
            entradas.push(entradasSal[pos])
        }
    }
    for (let pos in saidasSal) {
        if (saidas.indexOf(saidasSal[pos]) == -1 && saidasSal[pos] != undefined && saidasSal[pos] != null) {
            saidas.push(saidasSal[pos])
        }
    }
}
function Contar() {
    switch (menSel[1]) {
        case "+":
            var t = `${Number (menSel[0]) + Number(menSel[2])}`
            break
        case "-":
            var t = `${Number(menSel[0]) - Number(menSel[2])}`
            break
        case "×":
            var t = `${Number(menSel[0]) * Number(menSel[2])}`
            break
        case "÷":
            var t = `${Number(menSel[0]) / Number(menSel[2])}`
            break
    }
    res.innerHTML += `</br>${t}`
}
//Essa Função Varre Todas As Palavras Chaves E Envia Uma Resposta Pré-Programada Ou Um Comando Pré-Programado
function PalPro() {
    switch (menCon.toLowerCase()) {
        //Esse Comando Exibe A Memória Interna Da Bot
        case "//memoria":
            if (vis == false) {
                res.innerHTML += `</br></br>//Entradas</br>`
                for (let pos in entradas) {
                    res.innerHTML += `</br>let e${pos} = ["${entradas[pos]}"]`
                }
                res.innerHTML += `</br></br>let ent = [`
                for (let pos in entradas) {
                    res.innerHTML += `</br>e${pos},`
                }
                res.innerHTML += `</br>]`
                res.innerHTML += `</br>for (let pos in ent) {
                entradas.push(ent[pos])</br>
                }`
                res.innerHTML += `</br></br>//----------------------------------------------</br>`
                res.innerHTML += `</br>//Saidas</br>`
                for (let pos in saidas) {
                    res.innerHTML += `</br>let s${pos} = ["${saidas[pos]}"]`
                }
                res.innerHTML += `</br></br>let sai = [`
                for (let pos in saidas) {
                    res.innerHTML += `</br>s${pos},`
                }
                res.innerHTML += `</br>]`
                res.innerHTML += `</br>for (let pos in sai) {
                saidas.push(sai[pos])</br>
                }`
                res.innerHTML += `</br>${saidas.length}`
                res.innerHTML += `</br></br>//----------------------------------------------</br>`
                res.innerHTML += `</br>//Vocabulário</br>`
                for (let pos in vocabulario) {
                    res.innerHTML += `</br>"${vocabulario[pos]}",`
                }
                res.innerHTML += `</br></br>//----------------------------------------------</br>`
                res.innerHTML += `</br>//Frases</br>`
                for (let pos in frases) {
                    res.innerHTML += `</br>"${frases[pos]}",`
                }
                vez = true
            }
            //Esse Comando Limpa A Tela
            break
        case "//limpar":
                res.innerHTML = ""
                vez = true
                break
                //esse Comando Cria Frases
            case "//criarfrases":
                if (vis == false) {
                    vez = true
                    CriFra()
                }
                break
            default:
                if (menSel[1] == "+" || menSel[1] == "-" || menSel[1] == "×" || menSel[1] == "÷") {
                    vez = true
                    Contar()
                }
            }
            //Essa Função Varre As Entradas E Escolhe A Saida, Se Nenhuma For Encontrada, Ele Chama A Função Palavras Aleatórias
            for (let pos in entradas) {
                var ent = entradas[pos]
                for (var p in ent) {
                    var sai = saidas[pos]
                    if (menCon.toLowerCase() == ent[p] && vez == false) {
                        if (vis == true) {
                            var mat = 0
                            if (sai.length != 1) {
                                mat = Math.floor(Math.random() * sai.length)
                            }
                            res.innerHTML += `</br>${sai[mat]}<`
                        } else {
                            AdiSai()
                            function AdiSai () {
                                let tex = ""
                                let ale = Math.floor(Math.random() * frases.length)
                                tex += ` ${frases[ale]}`
                                let sen = window.confirm(`${tex}, Isso faz Sentido?`)
                                if (sen == true) {
                                    sai.push(tex)
                                    res.innerHTML += `</br>${tex}<`
                                    vez = true
                                } else {
                                    AdiSai()
                                }
                            }
                        }
                        vez = true
                    }
                }
            }
            if (vez == false) {
                FraAle([], window.confirm("Quer Tentar Uma Resposta Aleatória?"), false, 0)
            }
    }
    //Se A Frase Recebida Não Foi Pré-Programada Ela Envia Uma Frase Aleatória
    function FraAle(tent, confi, tentati, ran) {
        if (vez == false && tent.length +1 <= frases.length && confi == true) {
            let tex = ""
            let entTes = []
            if (tent.length <= (frases.length / 10)) {
                for (let pos in entradas) {
                    let palEnc = 0
                    let menSep = menCon.split(" ")
                    for (let po in menSep) {
                        let reEx = RegExp(`${menSep[po]}`, "gi")
                        let teste = reEx.test(entradas[pos])
                        if (teste == true) {
                            palEnc++
                        }
                    }
                    entTes.push(palEnc)
                }
                for (let pos in entTes) {
                    if (entTes[ran] < entTes[pos]) {
                        ran = pos
                    }
                    if (tent.indexOf(ran) != -1) {
                        entTes[ran] = -1
                    }
                    if ((saidas[ran]).length > 1) {
                        let numAle = Math.floor(Math.random() * (saidas[ran]).length)
                        tex = (saidas[ran])[numAle]
                    } else {
                        tex = saidas[ran]
                    }
                }
            } else {
                do {
                    ran = Math.floor(Math.random() * frases.length)
                } while (tent.indexOf(ran) != -1)
                    tex = frases[ran]
            }

            tent.push(ran)
            let sen = window.confirm(`${tex} (Isso faz Sentido?)[${ran}]`)
            if (sen == true) {
                var en = []
                en.push(menCon)
                entradas.push(en)
                var sa = []
                sa.push(tex)
                saidas.push(sa)
                res.innerHTML += `</br>${tex}<`
                vez = true
            } else {
                FraAle(tent, true, true, ran)
            }
        } else if (vez == false) {
            let tex = window.prompt(`${menCon} (Digite Uma Resposta)`)
            if (tex.length > 0) {
                var en = []
                en.push(menCon)
                entradas.push(en)
                var sa = []
                sa.push(tex)
                saidas.push(sa)
                frases.push(tex)
                let menSep = tex.split(" ")
                for (let pos in menSep) {
                    if (vocabulario.push(menSep[pos]) == -1) {
                        vocabulario.push(menSep[pos])
                    }
                }
                res.innerHTML += `</br>${tex}<`
            }
            vez = true
        }
    }
    //Essa Função Adiciona Todas As Frases E Todas As Palavras A Array Vocabulário
    function Voc() {
        if (menCon != "//memoria" && menCon != "//limpar" && menCon != "//criarfrases" && menSel[1] != "+" && menSel[1] != "-" && menSel[1] != "×" && menSel[1] != "÷") {
            if (frases.indexOf(menCon) == -1) {
                frases.push(menCon)
            }
            let menSep = menCon.toLowerCase().split(" ")
            for (let pos in menSep) {
                if (vocabulario.push(menSep[pos]) == -1) {
                    vocabulario.push(menSep[pos])
                }
            }
        }
    }
    //Essa Função Cria Frases Com Palavras Aleatórias
    function CriFra() {
        do {
            var tam = Math.floor(Math.random() * 9)+1
            var fra = ""
            while (tam >= 1) {
                let el = Math.floor(Math.random() * vocabulario.length)
                fra += `${vocabulario[el]} `
                tam--
            }
        }while (frases.indexOf(fra) != -1)
            let sent = window.confirm(`${fra}(Isso Faz Sentido?)`)
        if (sent == true) {
            res.innerHTML += `</br>${fra}>`
            frases.push(fra)
        } else {
            CriFra()
        }
    }
    */