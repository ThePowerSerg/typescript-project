// hoisting: greeter2 can be called before its definition
greeter2("called before definition");

function greeter2(a: string){
    console.log(a);
}

const greeter3 = (a: string) => console.log(a);

greeter3("East Bound")