// Ambil nama
let nama =  document.getElementById("nama");
nama.innerHTML="halo";


const ambil1 = () => {
    fetch("https://api.github.com/users/RafliMagangs")
    .then((respon1) => respon1.json())
    .then((hasil1) => nama.innerHTML=hasil1.login)
    .catch((error1) => console.log(error1, "hubungi pihak berwenang"));
};

ambil1();
// ------------------------------------------- ==== --------------------------------

// Ambil id
let id =  document.getElementById("id");

const ambil2 = () => {
    fetch("https://api.github.com/users/RafliMagangs")
    .then((respon2) => respon2.json())
    .then((hasil2) => id.innerHTML="My id   : " + hasil2.id)
    .catch((error2) => console.log(error2, "hubungi pihak berwenang"));
};

ambil2();
// ------------------------------------------- ==== --------------------------------

// Ambil foto
let foto =  document.getElementById("fot");

const ambil3 = () => {
    fetch("https://api.github.com/users/RafliMagangs")
    .then((respon3) => respon3.json())
    .then((hasil3) => fot.src=hasil3.avatar_url)
    .catch((error3) => console.log(error3, "hubungi pihak berwenang"));
};

ambil3();
// ------------------------------------------- ==== --------------------------------

// Ambil link
let link =  document.getElementById("lnkgh");

const ambil4 = () => {
    fetch("https://api.github.com/users/RafliMagangs")
    .then((respon4) => respon4.json())
    .then((hasil4) => link.href=hasil4.html_url)
    .catch((error4) => console.log(error4, "hubungi pihak berwenang"));
};

ambil4();
// ------------------------------------------- ==== --------------------------------

// Ambil link2
let link2 =  document.getElementById("link");

const ambil5 = () => {
    fetch("https://api.github.com/users/RafliMagangs")
    .then((respon5) => respon5.json())
    .then((hasil5) => link2.innerHTML=hasil5.html_url)
    .catch((error5) => console.log(error5, "hubungi pihak berwenang"));
};

ambil5();
// ------------------------------------------- ==== --------------------------------

// Ambil dibuat
let buat =  document.getElementById("buat");

const ambil6 = () => {
    fetch("https://api.github.com/users/RafliMagangs")
    .then((respon6) => respon6.json())
    .then((hasil6) => buat.innerHTML="I Create It At : "+hasil6.created_at)
    .catch((error6) => console.log(error6, "hubungi pihak berwenang"));
};

ambil6();
// ------------------------------------------- ==== --------------------------------

// Ambil following
let foling =  document.getElementById("follow1");

const ambil7 = () => {
    fetch("https://api.github.com/users/RafliMagangs")
    .then((respon7) => respon7.json())
    .then((hasil7) => foling.innerHTML="My Following Is At : "+hasil7.following)
    .catch((error7) => console.log(error7, "hubungi pihak berwenang"));
};

ambil7();
// ------------------------------------------- ==== --------------------------------

// Ambil follower
let foler =  document.getElementById("follow2");

const ambil8 = () => {
    fetch("https://api.github.com/users/RafliMagangs")
    .then((respon8) => respon8.json())
    .then((hasil8) => foler.innerHTML="My Follower Is At : "+hasil8.followers)
    .catch((error8) => console.log(error8, "hubungi pihak berwenang"));
};

ambil8();
// ------------------------------------------- ==== --------------------------------