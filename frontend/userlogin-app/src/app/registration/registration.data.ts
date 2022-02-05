export const registration = [
    { variable:"firstName", label:"FirstName",type:"text",pattern:"[a-zA-Z]+"},
    { variable:"lastName",label:"LastName",type:"text",pattern:"[a-zA-Z]+"},
    { variable:"email",label:"Email",type:"text",pattern:".+\@.+\..+"},
    { variable:"password",label:"Password",type:"password",pattern:".{8,}"},
    { variable:"checkPassword",label:"Confirm Password",type:"password",pattern:""},
    { variable:"gender",label: "Gender",type:"dropdown",values:["Male","Female","Other"],pattern:""},
  ];