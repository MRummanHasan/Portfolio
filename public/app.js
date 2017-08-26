console.log("READY");

var Person = {
    name : "Rumman",
    intro : "My name is Rumman Khan and I'm an front-End developer, with extensive practical experience in building small apps; devoted to Functional Programming and Information Architecture. Also a huge fan of semantics and futuristic interfaces.",
    photo : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgkAAAAJDI0YTYzZmE0LTdhZGMtNGZkOC05MzBjLWEzNGI2ZTkxZjgzZg.jpg",
    //education

    MatriculationInstitute : "<strong>Happy Home School</strong>",

    CertifiyingAuthority : "<strong>Mass Training Institute</strong>",
    CertificationName : "Full Stack Development",

    //socail link
    fb: "www.fb.com/mrummanhasan",
    linkedIn : "https://www.linkedin.com/in/mrummankhan",
    git : "https://github.com/MRummanHasan",
    twitter : "https://twitter.com/rumman_m",
}
//bio
document.getElementById("yourIntro").innerHTML = Person.intro;
document.getElementById("");
//education
document.getElementById("matric").innerHTML = Person.MatriculationInstitute;
document.getElementById("instituteName").innerHTML = Person.CertifiyingAuthority;
document.getElementById("certificateProg").innerHTML = Person.CertificationName;
//social
document.getElementById("git").href = Person.git;
document.getElementById("linkedIn").href = Person.linkedIn;
document.getElementById("twitter").href = Person.twitter;
document.getElementById("fb").href = Person.fb;