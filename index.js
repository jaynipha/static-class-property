//Create a class that has class/static properties and methods. Show how to use/access them.

class Nigeria {
	//  the static properties
	static state = 'Lagos';
	static zone = 'south-west';
	static capital = 'Ikeja';

	// the static method
	static getProperty() {
		return 'Welcome to lagos';
	}
}

// let's access the static properties
console.log(Nigeria.state);
console.log(Nigeria.zone);
console.log(Nigeria.capital);

// let's access the static methods
console.log(Nigeria.getProperty());
