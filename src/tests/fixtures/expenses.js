import moment from 'moment'

export default [{
    id: '1',
    description: 'Balas',
    note: '',
    amount: 195,
    createdAt: 0 
}, {
    id: '2',
    description: 'Aluguel',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf() 
}, {
    id: '3',
    description: 'Cartão de credito',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf() 
}];