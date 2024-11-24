/*
Computer
   PC
      Case
      Motherboard
      CPU
   Laptop
      Asus ROG
      Lenovo Thinkpad
   Peripheral
      HDD
         Seagate 1TB
         WD 1TB
      SSD
      RAM
         DDR3
         DDR4
      Keyboard
         Mechanical
            Keychron K2
            Ducky One 2
         Standard
            Logitech K120
            Dell KB216
*/

class Category {
	name: string;
	children: any[] = [];

	constructor(name: string) {
		this.name = name;
	}
}

const computer = new Category('Computer');
// console.log(computer);

computer.children = [(new Category('PC').children = [new Category('Case'), new Category('Motherboard'), new Category('CPU')]), (new Category('Laptop').children = [new Category('Asus ROG'), new Category('Lenovo Thinkpad')])];

console.log(computer);
