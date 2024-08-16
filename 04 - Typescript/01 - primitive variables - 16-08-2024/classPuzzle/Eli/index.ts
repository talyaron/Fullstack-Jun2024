let first_name: string | null;
let last_name: string | null;
let phon_num: number | null;
let email: string | null;

first_name = prompt("please enter first name");
last_name = prompt("please enter last name");
phon_num = Number(prompt("please enter first name"));
email = prompt("please enter your Email adress");

document.write(
  `hello, my name is ${first_name} ${last_name} . You can call me at ${phon_num} or email me at ${email}`
);
