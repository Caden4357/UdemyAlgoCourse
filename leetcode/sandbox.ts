class ParkingSystem {
    big:number;
    medium:number;
    small:number;
    
    constructor(big: number, medium: number, small: number) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    }

    addCar(carType: number): boolean {
        switch (carType) {
            case 1:
                if (this.big >= 1) {
                    this.big--;
                    return true;
                }
            case 2:
                if (this.medium >= 1) {
                    this.medium--;
                    return true;
                }
            case 3:
                if (this.small >= 1) {
                    this.small--;
                    return true;
                }
            default:
                return false;
        }
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */