class Langing {
    dataBase = {}
    registerUser(){
        if(localStorage.getItem('userData') != null){
            this.getData()
        }
        let firstName = username.value
        let email = exampleInputEmail1.value
        let password = exampleInputPassword1.value

        if(firstName !== '' && email !== '' && password !==''){
            if(email in this.dataBase){
                alert(`${email} already exist`)
            }
            else{
                this.dataBase[email] = {
                    name : firstName,
                    email : email,
                    password : password
                }
                //save data
                this.saveData();
                alert("Registration successfull");
                //method to navigate to a new html page
                window.location = "login.html"
            }
        }else{
            alert('please enter valid values')
        }
    }
    getData(){
        this.dataBase = JSON.parse(localStorage.getItem("userData"))
    }
    saveData(){
        localStorage.setItem("userData",JSON.stringify(this.dataBase))
    }
    login(){
        let loggedEmail = userEmail.value
        let loggedPassword = userPassword.value
        this.getData();
        if(loggedEmail == '' || loggedPassword == ''){
            alert('Please enter value')
        }
        else{
            if(loggedEmail in this.dataBase){
                if(this.dataBase[loggedEmail].password === loggedPassword){
                    localStorage.setItem("firstname",this.dataBase[loggedEmail].name)
                    window.location= 'home.html'
                }
                else{
                    alert("Password mismatch")
                }
            }else{
                alert(`${loggedEmail} not found`)
            }
        }
    }
}

const obj = new Langing()

