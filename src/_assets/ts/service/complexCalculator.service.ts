import { Logger } from "./logger";

export abstract class ComplexCalculator{
    protected logger: Logger;
    constructor(logger: Logger){
        this.logger = logger;
    }
}