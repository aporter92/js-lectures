let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};

//console.log("All data:", netflix);
//console.log("Season Info:", netflix.season1.seasonInfo);
//console.log("Episode name", netflix.season1.seasonInfo.episodeInfo[3]);

/*
CHALLENGE

! - Pick an episode to console.log
! - using dot notation, walk through the netflix object and print off both an episode number and an episode name.

*/

//console.log("Number:", netflix.season1.seasonInfo.episodeInfo[4].episode);
//console.log("Name:", netflix.season1.seasonInfo.episodeInfo[4].episodeName);

// ? JSON Objects
// ? JavaScript Object Notation

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}


console.log(Object.keys(spaceJam.toonSquad));

console.log(Object.keys(spaceJam.toonSquad.duck));

console.log(Object.values(spaceJam.toonSquad));


let testObj = {
    "Spaces Here": true,
    noSpaces: true
};

console.log(testObj["Spaces Here"]);