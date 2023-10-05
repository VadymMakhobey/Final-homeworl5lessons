class LoginPage {
    get username() { return $('#username')}

    async setUsernameInput(value){
        await this.username.addValue(value)
    }
}