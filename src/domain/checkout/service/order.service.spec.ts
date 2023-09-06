import Customer from "../../customer/entity/customer"
import Order from "../entity/order"
import OrderItem from "../entity/order_item"
import OrderService from "./order_service"

describe("Product service unit test", () => {

    it("should get total price of orders", () => {

        const item1 = new OrderItem("1", "p1", "Product 1", 100, 1)
        const item2 = new OrderItem("2", "p2", "Product 2", 200, 2)
        const items = [item1, item2]

        const order1 = new Order("o1","c1", [item1])
        const order2 = new Order("o1","c1", [item2])

        const total = OrderService.total([order1, order2])

        expect(total).toBe(500)

    })

    it("should reward customer", () => {

        const customer = new Customer("c1", "Customer 1")
        const item = new OrderItem("1", "p1", "Item 1", 10, 1)

        const order = OrderService.placeOrder(customer, [item])

        expect(customer.rewardPoints).toBe(5)
        expect(order.total()).toBe(10)
    })

})