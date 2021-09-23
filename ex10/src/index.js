function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Saint Jhn",
            title: "Trap",
            release_year: 2021,
            formats: {
                1: "MP3",
                2: "AAC",
                3: "FLAC"
            },
        },
    };
}
myFunction()[2];
module.exports = myFunction;