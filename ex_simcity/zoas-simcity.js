// configurando prompt pelo terminal
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// simcity
function Game() {
    this.init = datas => {
        // função para iniciar o jogo
        this.readData(datas)
        console.log('\nCARREGANDO...')
        const welcome = `\nBem vindo de volta ${datas.user.nickname}`
        setTimeout(() => {
            console.log(welcome)
            this.initNav()
        }, 500)
    }

    this.initNav = () => {
        console.log(`\n${this.showUserInfo(this.user, this.city)}\n`)
        let main_menu = [
            {
                title: 'Acessar Cidade',
                message: '\nAcessando Cidade...\n',
                function() {
                    console.log('...Acessando Cidade')
                },
            },  
            {
                title: 'Construir novos Estabelecimentos',
                message: '\nConstruindo...\n',
                function(){
                    console.log('...Construindo')
                },
            }, 
            {
                title: 'Ver Perfil',
                message: '\nPerfil...\n',
                func: function(){
                    console.log('...Perfil')
                },
            }, 
            {
                title: 'Voltar ao Menu Principal',
                message: '\nVoltando...\n',
                function() {
                    console.log('...Voltando')
                },
            }
        ]
        this.navegate(main_menu)
    }

    this.navegate = (agrs) => {
        // função para navegar entre as opções
        agrs.map( (agr, i) => {
            console.log(`(${i}) ${agr.title}`)
        })
        
        rl.question('\nDigite para navegar: ', (input) => {
            input = parseInt(input)
            console.log(`\n${agrs[input].message}`)
            setTimeout(() => {
                agrs[input].function()
            }, 500)
        })
    }
    
    // mostrar informações do usuário
    this.showUserInfo = (user, city) => `| ${user.nickname} | Nv ${user.nv} - ${user.xp}XP | Money in Bank: R$${user.money} | Criminality: ${city.criminality}`

    // this.showCity = () => {
    //     console.log('Informações sobre a Cidade:')
    //     console.log(`Nome: ${this.city.name}`)
    //     console.log(`Criminalidade: ${this.city.criminality}`)
    //     console.log(`Estabelecimentos:`)
    //     this.city.establishments.map((e, i) => {
    //         console.log(`(${i}) ${e.name} - Nv ${e.required_nv} - ${e.profit_description}`)
    //     })
    //     console.log('\n(0) Voltar ')
    // }

    this.readData = datas => {
        // carregar info    rmações do banco de dados
        this.user = {
            nickname: datas.user.nickname,
            xp: datas.user.xp,
            money: datas.user.money,
            nv: (datas.user.xp > 999) ? datas.user.xp.toString()[0] : 0,
        }
        this.city = {
            name: datas.city.name,
            establishments: datas.city.establishments,
            criminality: datas.city.criminality,
        }
    }
}

// banco de dados
const db = {
    user: {
        xp: 1138,
        nickname: 'sdAlbano',
        money: 34000,
    },
    city: {
        name: 'AlbanoCity',
        criminality: 30,
        establishments: [
            {
                name: 'Escola Municipal AlbanoCity',
                required_nv: 1,
                profit_description: 'R$ 3000/s',
                value: 150000,
            },
            {
                name: 'Loja de Materiais de Construção',
                required_nv: 1,
                profit_description: 'R$ 3000/s',
                value: 150000,
            },
            {
                name: 'Policia',
                required_nv: 3,
                profit_description: 'Diminui em 60% a taxa de criminalidade ',
                criminality: -60,
                value: 400000,
            },
            {
                name: 'Imobiliária',
                required_nv: 2,
                profit: 15000,
                profit_description: 'R$ 15000/s',
                value: 600000,
            },
            {
                name: 'Policia',
                required_nv: 3,
                profit_description: 'Diminui em 15% a taxa de criminalidade ',
                criminality: -15,
                value: 600000,
            }
        ]
    }
}

// instanciar o jogo
const game = new Game()

// iniciar o jogo
game.init(db)




