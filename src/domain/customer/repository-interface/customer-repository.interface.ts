import Customer from "../entity/customer";
import RepositoryInterface from "../../@shared/repository-interface/repository-interface";

export default  interface ProductRepositoryInterface 
    extends RepositoryInterface<Customer>{}