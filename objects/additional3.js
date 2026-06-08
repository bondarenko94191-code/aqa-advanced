// 3. Фільтрація замовлень
// Опис:

// Є масив замовлень. Приклад:

// const orders = [
// {
//   id:1,
//   price: 255,
//   isPaid: true
// },
// {
//   id:2,
//   price: 1000,
//   isPaid: false
// },
// {
//   id:3,
//   price: 100,
//   isPaid: true
// },
// {
//   id:4,
//   price: 550,
//   isPaid: true
// }
// ]

// Потрібно написати функцію, яка поверне об'єкт, в якому будуть:

// ID оплачених замовлень
// загальна сума замовлень
// сума оплачених замовлень
// Приклад результату:

// {
//   paidOrderIds: [1, 3, 4],
//   totalSum: 1905,
//   paidSum: 905
// }

const orders = [
    {
        id: 1,
        price: 255,
        isPaid: true
    },
    {
        id: 2,
        price: 1000,
        isPaid: false
    },
    {
        id: 3,
        price: 100,
        isPaid: true
    },
    {
        id: 4,
        price: 550,
        isPaid: true
    }
]
function orderResult() {
    const paidOrders = orders.filter((orders) => orders.isPaid === true);
    const paidOrdersIds = paidOrders.map(orders => orders.id);
    const totalSum = orders.reduce((accumulator, orders) => accumulator + orders.price, 0);
    let paidSum = paidOrders.reduce((acc, orders) => acc + orders.price, 0);


    return {
        paidOrdersIds, totalSum, paidSum

    };
}
console.log(orderResult());

