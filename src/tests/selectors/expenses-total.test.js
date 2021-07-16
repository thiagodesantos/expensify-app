import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Deveria returnar 0 se não tiver despesas cadastradas', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('Deveria returnar o valor da despesa cadastrada', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('Deveria returnar o valor somado de multiplas despesas cadadastra', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195);
});