class webBuilding {
    constructor(manager, engineer, intern) {
        this.manager = manager;
        this.engineer = engineer;
        this.intern = intern;
    }

    webTest() {
        console.log(this.manager);
        console.log(this.engineer);
        console.log(this.intern);
    }
}

module.exports = webBuilding;