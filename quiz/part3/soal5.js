// Problem buatlah bintang seperti berikut
let input = 5

//hasilnya
//*
//**
//***
//****
//*****

for (let i = 1; i <= input; i++) {
    let stars = "";
    for (let j = 0; j < i; j++) {
        stars += "*";
    }
    console.log(stars);
}
