export class DateChecker {
    constructor() {
        this.date = new Date();
    }
    getTodayDate() {
        return this.date.toISOString().split("T")[0];
    }
    setDate(newDate) {
        this.date = new Date(newDate);
    }
    getYear() {
        return this.date.getFullYear();
    }
}