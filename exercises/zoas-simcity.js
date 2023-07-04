
function Game() {
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
        const data = this.readData()
        let user_info = data.user
        let lands_info = data.lands
        console.log(`${user_info}\n`)
        console.log('Informações sobre a Cidade:')
        lands_info.map( (e, i) => {
            console.log(`(${i+1}) - ${e.name}: ${e.profit_description}`)
        });
        console.log('\n Voltar (0)')
    }
    this.readData = () => {
        let user = `(*) | ${'djrogerinho'} | Nv ${4} - ${4789}XP | Money in Bank: R$${620100} |`
        let lands = [
            {
                name: 'Loja de Materiais de Construção',
                required_nv: 1,
                profit: 3000,
                profit_description: 'R$ 3000/s',
                value: 150000,
            },
            {
                name: 'Policia',
                required_nv: 3,
                profit: '-60%',
                profit_description: 'Diminui em 60% a taxa de criminalidade ',
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
                profit_description: '-15%',
                profit_description: 'Diminui em 15% a taxa de criminalidade ',
                value: 600000,
            }
        ]
        return {
            user,
            lands
        }
    }
}

const game = new Game()

game.init()