import Order from "./order"
import OrderItem from "./order_item"

describe("Order unit tests", () => {

    it("should throw an error when id is empty", () => {

        expect(() => {
            let order = new Order("", "1", [])
        }).toThrowError("Id is required")

    })


    it("should throw an error when customer id is empty", () => {

        expect(() => {
            let order = new Order("123", "", [])
        }).toThrowError("CustomerId is required")

    })


    it("should throw an error when items are empty", () => {

        expect(() => {
            let order = new Order("123", "1", [])
        }).toThrowError("Items are required")

    })

    
    it("should calculate total", () => {

        // Arrange
        let item1 = new OrderItem("1", "P1", "Item 1", 100, 2)
        let item2 = new OrderItem("2", "P2", "Item 2", 200, 2)

        // Act
        let order1 = new Order("1", "1", [item1])

        //Assert
        expect(order1.total()).toBe(200)
        
        // Act
        let order2 = new Order("2", "1", [item1, item2])

        //Assert
        expect(order2.total()).toBe(600)
        
    })

})