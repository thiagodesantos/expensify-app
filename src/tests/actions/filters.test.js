import moment from "moment";
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from "../../actions/filters";

test('Deveria setar uma data de começo no start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Deveria setar uma data de fim no end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Deveria setar o texto do filter object com texto', () => {
    const text = 'Algo'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('Deveria setar o texto fo filter object com o valor default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Deveria setar o action object para ordenar por data', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'})
});

test('Deveria setar o action object para ordenar por quantidade', () => {
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'})
});