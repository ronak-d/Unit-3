// calling others skill to impress others.

let Amar = {
    live: "goa",
    skill: 'singer',
    AmarS(input){
        console.log(`Amar has a skill of ${this.skill} `)
    },
}

let Akbar = {
    live: "Mumbai",
    skill: 'chef',
    AkbarS(input){
        console.log(`Akbar has a skill of ${this.skill} `)
    },
}

let Anthony = {
    live: 'Kashmir',
    skill: 'Magician',
    AkhbarS(){
        console.log(`Anthony has a skill of ${this.skill}`)
    },
}

Anthony.AkhbarS.call(Amar)
Amar.AmarS.call(Anthony)
Anthony.AkhbarS.call(Amar)






