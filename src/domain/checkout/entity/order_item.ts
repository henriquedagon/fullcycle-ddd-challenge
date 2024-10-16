export default class OrderItem {

    private _id: string
    private _productId: string
    private _name: string
    private _price: number
    private _quantity: number

    constructor(id: string, productId: string, name: string, price:number, quantity: number){
        this._id = id
        this._productId = productId
        this._name = name
        this._price = price
        this._quantity = quantity
    }

    get id(): string {
        return this._id
    }

    get productId(): string {
        return this._productId
    }

    get name(): string {
        return this._name
    }

    get quantity(): number {
        return this._quantity
    }

    get price(): number {
        return this._price
    }

    orderItemTotal(): number {
        return this._price * this._quantity
    }

    validate(): boolean {
        if (this._price <= 0){
            throw new Error("Price must be positive")
        }
        if (this._quantity <= 0){
            throw new Error("Quantity must be positive")
        }
        return true
    }

}