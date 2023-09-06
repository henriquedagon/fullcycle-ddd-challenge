import Address from "../value-object/address"
import Customer from "./customer"

describe("Customer unit tests", () => {

    it("should throw an error when id is empty", () => {

        expect(() => {
            let customer = new Customer("", "John Jones")
        }).toThrowError("Id is required")

    })

    it("should throw an error when name is empty", () => {

        expect(() => {
            let customer = new Customer("123", "")
        }).toThrowError("Name is required")

    })

    it("should change name", () => {

        // Arrange
        let customer = new Customer("123", "John Jones")

        // Act
        customer.changeName("John Salen")

        //Assert
        expect(customer.name).toBe("John Salen")
        
    })

    it("should activate customer", () => {

        // Arrange
        let customer = new Customer("123", "John Jones")
        const address = new Address("Rua 1", 10, "12345", "Rio de Janeiro")
        customer.setAddress(address)

        // Act
        customer.activate()

        //Assert
        expect(customer.isActive()).toBe(true)
        
    })

    it("should deactivate customer", () => {

        // Arrange
        let customer = new Customer("123", "John Jones")

        // Act
        customer.deactivate()

        //Assert
        expect(customer.isActive()).toBe(false)
        
    })

    it("should throw an error when you activate a custumer without address", () => {

        expect(() => {
            let customer = new Customer("123", "John Jones")
            customer.activate()
        }).toThrowError("Address is mandatory to activate customer")
        
    })

    it("should add reward points", () => {

        const customer = new Customer("1", "Customer 1")
        expect(customer.rewardPoints).toBe(0)

        customer.addRewardPoint(10)
        expect(customer.rewardPoints).toBe(10)

        customer.addRewardPoint(10)
        expect(customer.rewardPoints).toBe(20)
    })

})