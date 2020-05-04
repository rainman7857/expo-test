const wait = () => new Promise(resolve=>setTimeout(resolve, 1500))

export const getUsers = async () => {
  await wait()
  return [
  {
    "_id": 0,
    "first_name": "Margaret",
    "last_name": "Winters",
    "admin": false,
    "email": "abc@Booth.co.uk",
    "description": "Seaview Court Eckford Street Humboldt Street Corbin Place Thornton Street Veranda Place Clove Road Raleigh Place Madison Place Lorimer Street Lawrence Avenue Sunnyside Court Bayard Street Pershing Loop Newel Street Homecrest Court Lenox Road Lester Court Manhattan Court Quay Street Highland Place Jamison Lane Bushwick Avenue Classon Avenue Willoughby Street Ditmas Avenue Remsen Street Norfolk Street Saratoga Avenue Terrace Place Midwood Street Fane Court Reed Street Sumner Place Sumpter Street Creamer Street"
  },
  {
    "_id": 1,
    "first_name": "Yvonne",
    "last_name": "Beach",
    "admin": true,
    "email": "abc@Corinne.net",
    "description": "Revere Place Bliss Terrace Lee Avenue Lincoln Place Times Placez Kenilworth Place Hart Street Ingraham Street Hyman Court Cypress Court Glen Street Campus Place Dupont Street Battery Avenue Colonial Court Duryea Place Hicks Street Bridgewater Street Ferry Place Henry Street Chester Court Scott Avenue Roosevelt Court Clifton Place Fairview Place Rutledge Street Varanda Place Fayette Street Seagate Terrace Conway Street Channel Avenue Halleck Street Central Avenue Richardson Street Bradford Street Keap Street Dunne Court Debevoise Avenue Charles Place Highland Avenue Meeker Avenue Williams Avenue Chester Avenue Pierrepont Street Williams Court Applegate Court Shale Street Sullivan Street Schenectady Avenue"
  },
  {
    "_id": 2,
    "first_name": "Mejia",
    "last_name": "Finley",
    "admin": true,
    "email": "abc@Vicky.io",
    "description": "Oceanic Avenue Claver Place School Lane Crawford Avenue Beaumont Street Columbus Place Opal Court Olive Street Greenwood Avenue High Street"
  },
  {
    "_id": 3,
    "first_name": "House",
    "last_name": "Cote",
    "admin": true,
    "email": "abc@Pollard.com",
    "description": "Fleet Walk Woodruff Avenue Noll Street Cobek Court Meserole Street Bergen Court Williamsburg Street Bowne Street Elm Avenue Cooper Street Nolans Lane Temple Court Narrows Avenue Village Road Hastings Street Cook Street Wogan Terrace"
  },
  {
    "_id": 4,
    "first_name": "Ella",
    "last_name": "Chase",
    "admin": false,
    "email": "abc@Ingrid.tv",
    "description": "Court Street Tilden Avenue Powers Street Fenimore Street Hancock Street Rogers Avenue Village Court Clinton Avenue Grand Avenue Roosevelt Place Glendale Court Navy Walk Blake Court Dwight Street Varick Street Rugby Road Gotham Avenue Pine Street Pineapple Street Cypress Avenue Indiana Place Stockton Street Eldert Lane Bushwick Place Lloyd Street Baltic Street Macon Street"
  }
]
}

export const getPosts = async () => {
  await wait()
  return [
  {
    "_id": "5de1291b6c06b072df847f65",
    "title": "Bushwick Place",
    "user_id": 3,
    "type": 0,
    "picture": "https://via.placeholder.com/1000/100f56",
    "description": "Rochester Avenue Grafton Street Judge Street Mill Lane Pooles Lane Canarsie Road Portland Avenue Delmonico Place Thornton Street Montgomery Street Quentin Road Calyer Street Bliss Terrace Huntington Street Pacific Street Cyrus Avenue Abbey Court Cleveland Street Sharon Street Dwight Street Schenectady Avenue Vandervoort Avenue Lois Avenue Beverley Road Ocean Court Hinckley Place Louis Place Kenmore Terrace Kansas Place Polar Street Sunnyside Avenue John Street Fay Court Stockton Street Knapp Street"
  },
  {
    "_id": "5de1291b0c2ddd834d131953",
    "title": "Hyman Court",
    "user_id": 3,
    "type": 0,
    "picture": "https://via.placeholder.com/1000/1a7d39",
    "description": "Utica Avenue Elliott Walk Cypress Avenue Barbey Street Nichols Avenue Pine Street Harkness Avenue Colin Place Ainslie Street Windsor Place Leonora Court Troy Avenue Pierrepont Street Newkirk Avenue Lott Place Rewe Street Oriental Boulevard McKibbin Street"
  },
  {
    "_id": "5de1291b57c2c7dd0f4310c2",
    "title": "Canda Avenue",
    "user_id": 0,
    "type": 1,
    "picture": "https://via.placeholder.com/1000/d52345",
    "description": "Jay Street Brooklyn Avenue Ridgewood Place Glenwood Road Fair Street Brighton Court Wogan Terrace Gotham Avenue Kiely Place Dennett Place Winthrop Street Jackson Street Montauk Avenue Channel Avenue Farragut Road Schroeders Avenue Rogers Avenue Schenck Place Keap Street Albemarle Terrace Central Avenue Gallatin Place Ford Street Thames Street Monument Walk"
  },
  {
    "_id": "5de1291bfedaac7640dbf9e5",
    "title": "Ditmas Avenue",
    "user_id": 4,
    "type": 0,
    "picture": "https://via.placeholder.com/1000/c118ea",
    "description": "Bay Street Madison Street Woodbine Street Dekalb Avenue Gain Court Leonard Street Jamaica Avenue Seabring Street Lacon Court Huron Street Battery Avenue Lawton Street Story Court Agate Court Howard Place Gem Street Arlington Avenue Rock Street Stillwell Avenue Ridgecrest Terrace Celeste Court George Street Orient Avenue Brigham Street"
  },
  {
    "_id": "5de1291b16b7bb2868eb3e48",
    "title": "Laurel Avenue",
    "user_id": 3,
    "type": 0,
    "picture": "https://via.placeholder.com/1000/197a35",
    "description": "Lorimer Street Verona Street Nostrand Avenue Church Avenue Chase Court Chester Avenue Marconi Place Pleasant Place Garland Court Alabama Avenue Elton Street Belmont Avenue Schermerhorn Street Lawrence Avenue School Lane Jefferson Avenue Anthony Street Beverly Road Adler Place Chester Street Garden Street Dare Court Wyckoff Street Whitty Lane Aster Court Bowery Street Himrod Street Elliott Place Virginia Place Krier Place Cobek Court Hopkins Street Havens Place Desmond Court Rutland Road Cherry Street Russell Street Randolph Street Montauk Court Roosevelt Court Dekoven Court Temple Court Hanson Place Metrotech Courtr"
  },
  {
    "_id": "5de1291b5b84e355fe8b3604",
    "title": "Bokee Court",
    "user_id": 1,
    "type": 0,
    "picture": "https://via.placeholder.com/1000/e1a6bb",
    "description": "Hunts Lane Amity Street Sandford Street Ditmars Street Diamond Street Gerald Court Vernon Avenue Frost Street Bridge Street Neptune Avenue Mayfair Drive Gerry Street Woodrow Court Hegeman Avenue Townsend Street Bouck Court Veterans Avenue Etna Street Duryea Court"
  },
  {
    "_id": "5de1291b30d0ba9f7e2e4271",
    "title": "Ash Street",
    "user_id": 2,
    "type": 1,
    "picture": "https://via.placeholder.com/1000/e5f13c",
    "description": "Porter Avenue Stockholm Street Sackett Street Brightwater Court Fuller Place Hart Place Grattan Street Division Avenue Heyward Street Navy Street Louisa Street Aurelia Court Logan Street Fairview Place King Street Douglass Street McKibben Street Clarkson Avenue Frank Court Reed Street McKinley Avenue Canal Avenue Grant Avenue Veranda Place Wallabout Street Dictum Court Martense Street Arion Place Berriman Street Meadow Street Hendrix Street Gatling Place Richardson Street Eastern Parkway Allen Avenue Clinton Street Orange Street Ryder Avenue Denton Place Thomas Street Crawford Avenue Hazel Court Herzl Street Sackman Street Blake Avenue Kingsland Avenue Independence Avenue Sullivan Place"
  }
]
}