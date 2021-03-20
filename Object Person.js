var Person = function (firstAndLast) {

    let firstName
    let lastName


    this.setFirstName = function (first) {
        firstName = first
        console.log(firstName)
    }

    this.setLastName = function (last) {
        lastName = last
    }
    this.setFullName = function (firstAndLast) {
        const firstAndLastArr = firstAndLast.split(' ')

        firstName = firstAndLastArr[0]
        lastName = firstAndLastArr[1]

    }

    this.setFullName(firstAndLast)

    this.getFullName = function () {

        return firstName + ' ' + lastName;
    };

    this.getFirstName = function () {

        return firstName
    }
    this.getLastName = function () {
        return lastName
    }



};

var bob = new Person('Bob Ross');

bob.setFirstName("Haskell")
console.log(bob.getFullName())
