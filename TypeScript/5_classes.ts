class TypeScript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}] Typescript version is ${this.version}`;
  }
}

// class Car {
//   readonly model: string;
//   readonly numberOfWheels: number = 4;

//   constructor(theModel: string) {
//       this.model = theModel // edit readonly only constructor inside
//   }
// }

class Car {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}

//======================================

class Animal {
  protected voise: string = "";
  public color: string = "black";

  private go() {
    console.log("go");
  }
}

class Cat extends Animal {
  public setVoise(voise: string): void {
    this.voise = voise;
  }
}

const cat = new Cat();
cat.setVoise("gav");
console.log(cat.color);
// cat.voise -- err

// =====================================

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("Component on render");
  }

  info(): string {
    return "this is info";
  }
}
