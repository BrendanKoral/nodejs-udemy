const yargs = require('yargs')

const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address for which to fetch weather',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv

console.log(argv)


