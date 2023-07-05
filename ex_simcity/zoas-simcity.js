function Game() {
    this.db = {
        xp: 1138,
        nickname: 'sdAlbano',
        money: 34000,
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

    this.init = () => {
        // load
        console.log('\ncarregando...\n')
        // welcome
        const welcome = `\nBem vindo de volta Sr Djrogerinho\n`
        setTimeout(() => {
            console.log(welcome)
            this.initNav()
        }, 1000)
    }

    this.initNav = () => {
        // show user info
        const user = this.readData().user
        const city = this.readData().city
        let user_info = `| ${user.nickname} | Nv ${user.nv} - ${user.xp}XP | Money in Bank: R$${user.money} | Criminality: ${city.criminality}`
        console.log(`${user_info}\n`)
        console.log('(1) Acessar Cidade')
        console.log('(2) Construir novos Estabelecimentos')
        console.log('(3) Ver Perfil')

        console.log('\n(0) Voltar ao Menu Principal')
        let input = prompt('Digite para navegar: ')
        // this.showLands(data)
    }

    this.showEstablishments = data => {
        console.log('Informações sobre a Cidade:')
        (data.lands).map( (e, i) => {
            console.log(`(${i+1}) - ${e.name}: ${e.profit_description}`)
        });
        console.log('\n Voltar (0)')
    }

    this.readData = () => {
        let user = {
            nickname: this.db.nickname,
            xp: this.db.xp,
            money: this.db.money,
            nv: (this.db.xp > 999) ? this.db.xp.toString()[0] : 0,
        }
        let city = {
            establishments: this.db.city.establishments,
            criminality: this.db.city.criminality,
        }
        return {
            user,
            city
        }
    }
}

const game = new Game()

game.init()
