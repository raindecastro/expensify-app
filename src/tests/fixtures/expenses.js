import moment from 'moment';

export default [{
    id:'1',
    description: 'Coffee',
    note: '',
    amount: 400,
    createdAt: 0
}, {
    id:'2',
    description: 'Date with Bubu',
    note: '',
    amount: 109500,
    createdAt: moment(0).add(4, 'days').valueOf()
}, {
    id:'3',
    description: 'Dabble expenses',
    note: '',
    amount: 999999,
    createdAt: moment(0).add(10, 'days').valueOf()
}];