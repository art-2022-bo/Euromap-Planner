var museumData = { 
    Tirana: {
        country: "Albania",
        history:[
            {name : "National History Museum" , 
              description: "Albania’s main history museum." , 
              link: "https://www.mhk.gov.al/en/homeen/",
              generalOpening : null, // will be populated dynamically from API
              image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Museum_Tirana_2018.jpg",
              today: null,     // will be filled dynamically
              externalApiId: "GOOGLE_PLACE_ID_1" ,
              latitude:41.3293   ,
              longitude:19.8189 },  // actual Google Place ID
              
              {name:"Bunk’Art 1" ,
                 description: "Cold-war bunker and Albanian history.",
                link: "https://www.bunkart.al/",
                image: "https://eia476h758b.exactdn.com/wp-content/uploads/2023/07/Bunkart-1.jpeg?strip=all&lossy=1&ssl=1"},

                {name: "Bunk’Art 2",
                    description: "Sigurimi / Communist-era museum.",
                    link: "https://www.bunkart.al/",
                    generalOpening : null,
                    image: "https://cdn.getyourguide.com/img/location/60299f4477bce-wide.jpeg/99.jpg",
                    today: null,
                    externalApiId:null,
                    latitude:41.3517,
                    longitude:19.8606
                },

                {name:"Museum of Secret Surveillance",
                    description: "Surveillance and secret police history.",
                    link: "https://muzeugjethi.gov.al/?lang=en",
                    generalOpening : "",
                    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Muzeu_Komb%C3%ABtar_i_P%C3%ABrgjimeve%2C_%E2%80%9CSht%C3%ABpia_me_Gjethe%E2%80%9D.jpg/330px-Muzeu_Komb%C3%ABtar_i_P%C3%ABrgjimeve%2C_%E2%80%9CSht%C3%ABpia_me_Gjethe%E2%80%9D.jpg",
                    today: null,
                    externalApiId:null,
                    latitude: 41.32647,
                    longitude: 19.81633

                }
             ],
             
        art: [
            {name:"National Art Gallery" , 
                description: "Albania’s main art collection.",
                link: null,
                generalOpening : null,
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/80/18/7d/national-gallery-of-figurative.jpg?w=1200&h=-1&s=1",
                today: null,
                externalApiId:null,
                latitude: 41.3256,
                longitude: 19.82025

            },
            {name: "National Museum of Fine Arts " , 
                description: "Collection of Albanian artists.",
                link :null,
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Galeria_Komb%C3%ABtare_e_Arteve_n%C3%AB_Tiran%C3%AB._Galleria_Nazionale_delle_Arti_a_Tirana._National_Arts_Gallery_in_Tirana._Foto_by_Dritan_Mardodaj..jpg/330px-Galeria_Komb%C3%ABtare_e_Arteve_n%C3%AB_Tiran%C3%AB._Galleria_Nazionale_delle_Arti_a_Tirana._National_Arts_Gallery_in_Tirana._Foto_by_Dritan_Mardodaj..jpg",
                today: null,
                externalApiId:null,
                latitude:41.3256,
                longitude:19.82025
            }, 
            
        ]

    },
    Andora_la_Vella: {
        country: "Andorra" ,
        history: [
            {name : "Casa de la Vall" , 
                description: "Historic parliament building from the 16th century." , 
                link: "https://www.casadelavall.ad/en/visites",
                generalOpening : null, // will be populated dynamically from API
                image: "https://www.casadelavall.ad/slideshow_images/slide1.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 42.50663,
                longitude: 1.52051

            },
            {name : "Museu Nacional de l’Automòbil",
                description:"National automobile history collection.",
                link:"https://www.museus.ad/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Andorra_Encamp_Museumsgeb%C3%A4ude.JPG",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 42.5332,
                longitude: 1.5780

            }

        ],
        art: [{name : "Perfum Museum",
            description:"Permanent collection of perfumes.",
            link:null,
            generalOpening : null, // will be populated dynamically from API
            image: "https://www.turisandorra.com/Images/hoteles/Hotel-Prisma.jpg",
            today: null,     // will be filled dynamically
            externalApiId: null,
            latitude: 42.50839,
            longitude: 1.53483

        },
        {name:"Miniature Museum",
            description:"Permanent miniature art collection.",
            link: null,
            generalOpening : null, // will be populated dynamically from API
            image: "https://www.visitordino.com/activitats/museu-de-la-miniatura/@@images/image/large",
            today: null,     // will be filled dynamically
            externalApiId: null,
            latitude: 42.59,
            longitude: 1.53  

        }

        ]
    },
    Yerevan: {
        country:"Armenia",
        history:[
            {name:"Matenadaran",
                description:"Ancient manuscripts and historical texts.",
                link:"https://matenadaran.am/en/matenadaran/museum-and-gallery/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/%D5%84%D5%A1%D5%BF%D5%A5%D5%B6%D5%A1%D5%A4%D5%A1%D6%80%D5%A1%D5%B6_04_%28Gor_Navoyan%29.jpg/1200px-%D5%84%D5%A1%D5%BF%D5%A5%D5%B6%D5%A1%D5%A4%D5%A1%D6%80%D5%A1%D5%B6_04_%28Gor_Navoyan%29.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 40.1919,
                longitude: 44.5207 
            },
            {name:"Armenian Genocide Museum-Institute",
                description:"Memorial and museum on 1915 genocide. ",
                link:"https://www.genocide-museum.am/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://genocide-museum.am/eng/img/mphoto001.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 40.1857,
                longitude: 44.4892
            },
            {name: "History Museum of Armenia ",
                description:"National history artifacts.",
                link:"https://www.historymuseum.am/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://traveltoarmenia.am/wp-content/uploads/2019/04/History-Museum-of-Armenia-1.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 40.1787,
                longitude: 44.5142
            },
            
        ],
        art:[
            {name:"	Cafesjian Center for the Arts",
                description:"Contemporary and permanent art collections.",
                link:"https://www.cmf.am/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/2014_Erywa%C5%84%2C_Park_przy_Kaskadach_%2817%29.jpg/1200px-2014_Erywa%C5%84%2C_Park_przy_Kaskadach_%2817%29.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 40.1915,
                longitude: 44.5156 
            },
            {name:"National Art Galleries",
                description:"Armenian art collections across multiple venues.",
                link:null,
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Plaza_de_la_Rep%C3%BAblica%2C_Erev%C3%A1n%2C_Armenia%2C_2016-10-02%2C_DD_113-114_HDR.jpg/330px-Plaza_de_la_Rep%C3%BAblica%2C_Erev%C3%A1n%2C_Armenia%2C_2016-10-02%2C_DD_113-114_HDR.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 40.1788,
                longitude: 44.5142
            }

        ]
    },
    Vienna:{
        country:"austria",
        history:[
            {name:"Kunsthistorisches Museum",
                description:"Imperial art & historical collections.",
                link:"https://www.khm.at/en/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Maria-Theresien-Platz_Kunsthistorisches_Museum_Wien_2010.jpg/330px-Maria-Theresien-Platz_Kunsthistorisches_Museum_Wien_2010.jpg",
                today: null,
                externalApiId: null,
                latitude: 48.2038,
                longitude: 16.3618  
            },
            {name:"Naturhistorisches Museum",
                description:"Natural history & archaeology.",
                link:"https://www.nhm-wien.ac.at/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Wien_-_Naturhistorisches_Museum_%281%29.JPG",
                today: null,
                externalApiId: null,
                latitude: 48.2051,
                longitude: 16.3594
            },
            {name:"Belvedere Palace",
                description:"Historical palace with state rooms.",
                link:"https://www.belvedere.at/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Palacio_Belvedere%2C_Viena%2C_Austria%2C_2020-02-01%2C_DD_93-95_HDR.jpg/1200px-Palacio_Belvedere%2C_Viena%2C_Austria%2C_2020-02-01%2C_DD_93-95_HDR.jpg",
                today: null,
                externalApiId: null,
                latitude: 48.1916,
                longitude: 16.3809 
            },
            {name:"Heeresgeschichtliches Museum",
                description:"Austrian military history from 16th century to today.",
                link:"https://www.hgm.at/en/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Arsenal_Heeresgeschichtliches_Museum_Mittelbau-DSC_8010w.jpg/250px-Arsenal_Heeresgeschichtliches_Museum_Mittelbau-DSC_8010w.jpg",
                today: null,
                externalApiId: null,
                latitude: 48.1915,
                longitude: 16.4020
            },
            {name:"Hofmobiliendepot – Museum of Furniture",
                description:"Imperial furniture and interior history.",
                link:"https://www.hofmobiliendepot.at/en/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Hofmobiliendepot-Moebel-Museum-Wien_aussen.jpg",
                today: null,
                externalApiId: null,
                latitude: 48.1975,
                longitude: 16.3471
            }
        ],
        art:[
            {name:"Hofburg Museums",
                description:"Austrian art including Klimt’s “The Kiss.”",
                link:"https://www.belvedere.at/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Wien_-_Neue_Hofburg.JPG",
                today: null,
                externalApiId: null,
                latitude: 48.2065,
                longitude: 16.3661
            },
            {name:"Albertina",
                description:"Prints and modern art.",
                link:"https://www.albertina.at/en/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Wien_-_Albertina_%28b%29.JPG",
                today: null,
                externalApiId: null,
                latitude: 48.2046,
                longitude: 16.3683
            },
            {name:"Leopold Museum",
                description:"Austrian modernism and expressionism.",
                link:"https://www.leopoldmuseum.org/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Wien_07_Leopold_Museum_a.jpg",
                today: null,
                externalApiId: null,
                latitude: 48.2026,
                longitude: 16.3591
            },
            {name:"MAK – Museum of Applied Arts",
                description:"Applied arts and contemporary design.",
                link:"https://www.mak.at/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Wien_01_Museum_f%C3%BCr_angewandte_Kunst_a.jpg",
                today: null,
                externalApiId: null,
                latitude: 48.2077,
                longitude: 16.3814 
            },
            {name:"Museum Moderner Kunst Stiftung Ludwig Wien (MUMOK)",
                description:"Modern and contemporary art from 20th century onwards.",
                link:"https://www.mumok.at/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Wien_Muzeum_Sztuki_Nowoczesnej.jpg",
                today: null,
                externalApiId: null,
                latitude: 48.2032,
                longitude: 16.3615 
            }
        ]
    },
    Baku:{
        country:"Azerbaijan",
        history:[
            {name:"National Museum of History of Azerbaijan ",
                description:"Country history from ancient to modern. ",
                link:"http://azhistorymuseum.gov.az/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/0/00/National_Museum_of_History_of_Azerbaijan_11.JPG",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 40.36948,
                longitude: 49.84012
            },
            {name:"Heydar Aliyev Center ",
                description:"Cultural and historical exhibitions. ",
                link:"https://heydaraliyevcenter.az/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://www.zaha-hadid.com/wp-content/uploads/2019/12/hac_photobyiwanbaan4copy.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 40.39528,
                longitude: 49.86694
            }
        ],
        
    
    art: [
        {name:"Azerbaijan Carpet Museum",
            description:"Permanent carpet and textile art.",
            link: null,
            generalOpening : null, // will be populated dynamically from API
            image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg",
            today: null,     // will be filled dynamically
            externalApiId: null,
            latitude: 40.36833,
            longitude: 49.83883
        },
        {name:"YARAT Contemporary Art Space",
            description:"Permanent contemporary art exhibitions. ",
            link:"https://www.yarat.az/en",
            generalOpening : null, // will be populated dynamically from API
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/YARAT_Contemporary_Art_Space.jpg/1200px-YARAT_Contemporary_Art_Space.jpg",
            today: null,     // will be filled dynamically
            externalApiId: null,
            latitude: 40.3800,
            longitude: 49.8220

        }
    ]

    },
    Minsk: {
        country:"Belarus",
        history:[
            {name:"Belarusian Great Patriotic War Museum",
                description:"WWII museum. ",
                link:"http://war.museum.by/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Minsk_Kriegsmuseum.JPG",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 53.91618,
                longitude: 27.53791
            },
            {name:"	Museum of the History of Minsk",
                description:"City history museum.",
                link:"https://www.minskmuseum.by/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d7/a3/b2/belarusian-state-museum.jpg?w=1200&h=-1&s=1",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 53.8969,
                longitude: 27.5580
            }
        ],
        art:[
            {name:"National Art Museum of Belarus ",
                description:"Belarusian and European permanent art. ",
                link:"http://artmuseum.by/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/5/59/NAM_RB_-_National_Art_Museum_Ul._Lenina_20_Minsk.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 53.89833,
                longitude: 27.56057
            },
            {name:"Yakub Kolas Museum",
                description:" Literary and cultural museum.",
                link:"http://kolas.museum.by/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://www.spottedbylocals.com/wp-content/uploads/2024/10/Jakub-Kolas-Museum-scaled.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 53.91931,
                longitude: 27.60008
            }
            
        ]
    },
    Brussels:{
        country:"Belgium",
        history:[
            {name:"Museum of Natural Sciences ",
               description:"Dinosaur and natural history collection. ",
               link:"https://www.naturalsciences.be/",
               generalOpening : null, // will be populated dynamically from API
               image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Mus%C3%A9um_des_Sciences_naturelles_de_Belgique_%28entr%C3%A9e%29.JPG",
               today: null,     // will be filled dynamically
               externalApiId: null,
               latitude: 50.83653,
               longitude: 4.37669
    },
    {
        name:"Royal Museums Old Masters ",
        description:"Historical paintings collection.",
        link:"https://www.fine-arts-museum.be/",
        generalOpening : null, // will be populated dynamically from API
        image: "https://agendabrussels2.imgix.net/eab07ce86bc73c09bab452e9d9e8bd56e8b24175.jpg?w=1200&h=664&fit=clip",
        today: null,     // will be filled dynamically
        externalApiId: null,
        latitude: 50.8420,
        longitude: 4.3585
    }
        ],
        art:[
            {name:"Magritte Museum",
        description:"Surrealist art by René Magritte.",
        link:"https://www.musee-magritte-museum.be/",
        generalOpening : null, // will be populated dynamically from API
        image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Belgique_-_Bruxelles_-_H%C3%B4tel_du_Lotto_-_02.JPG",
        today: null,     // will be filled dynamically
        externalApiId: null,
        latitude: 50.84242,
        longitude: 4.35880
            },
            {name:"Royal Museums of Fine Arts",
                description:"Belgian art from Old Masters to modern.",
                link:"https://www.fine-arts-museum.be/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Royal_Museums_of_Fine_Arts_of_Belgium_%E2%80%93_Forum.jpg/500px-Royal_Museums_of_Fine_Arts_of_Belgium_%E2%80%93_Forum.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 50.8385,
                longitude: 4.3547
            },
            {name:"Belgian Comic Strip Center ",
                description:"Permanent comic art collection.",
                link:"https://www.comicstrip.be/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Brussel_-_Zandstraat_20_-_Belgisch_Stripcentrum_in_het_voormalig_Waucquez-warenhuis_%281903_door_Victor_Horta%29_20230826.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 50.8533,
                longitude: 4.3577
            }
        ]
    },
    Sarajevo:{
        country:"Bosnia & Herzegvonia",
        history:[
            {name:"National Museum of Bosnia & Herzegovina",
                description:"Archaeology & ethnography. ",
                link:"https://www.zemaljskimuzej.ba/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/National_Museum_of_BiH_Aerial.JPG",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 43.854625,
                longitude: 18.402669 
            },
            {name:"Gallery 11/07/95 ",
                description:"Srebrenica genocide memorial.",
                link:"http://www.galerija110795.ba/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/en/4/47/Gallery_11.07.95.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 43.8570,
                longitude: 18.4280
            },
            {name:"	War Childhood Museum",
                description:"Childhood in war exhibits.",
                link:"https://www.warchildhood.org/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/War_Childhood_Museum.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 43.861889,
                longitude: 18.428500
            },
            
        ],
        art:[
            {name:"Ars Aevi Museum of Contemporary Art ",
                description:"Permanent modern art collection. ",
                link:"http://www.arsaevimuseum.ba/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://balkandiskurs.com/app/uploads/2015/12/IMG_7073.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 43.85889,
                longitude: 18.43333
            }
        ]

        
    },
    Sofia:{
        country:"Bulgaria",
        history:[
            {name:"National Archaeological Museum",
                description:"From prehistory to medieval artifacts.",
                link:"http://naim.bg/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://museums.eu/remote.jpg.ashx?format=jpg&mode=crop&404=no_image.gif&urlb64=aHR0cHM6Ly9tdXNldW1zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9kYXRhL0RvY3VtZW50cy9NVVNFVU1TL2JnbmlhbS8yODEyMC9OYXRpb25hbCUyMEluc3RpdHV0ZSUyMG9mJTIwQXJjaGFlb2xvZ3klMjBhbmQlMjBNdXNldW0ucG5n&hmac=iiTlVFvDk2g",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 42.696144,
                longitude: 23.324335
            },
            
        ],
        art:[
            {name:"National Art Gallery",
                description:"Permanent Bulgarian art collection.",
                link:"http://nationalgallery.bg/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/8/83/RoyalPalaceGarden_Sofia_4.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 42.696205,
                longitude: 23.327320
            },
            {name:"	Sofia Arsenal",
                description:"Modern art collection.",
                link:"http://nationalgallery.bg/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://nationalgallery.bg/wp-content/uploads/2017/10/SAMSI-vhod-e1759914391669.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 42.680424,
                longitude: 23.320177
            },
            {name:"Museum of Socialist Art",
                description:"Permanent Soviet-era art.",
                link:null,
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Museum_of_Sozart_5.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 42.6810,
                longitude: 23.3565
            },
            {name:"Earth & Man National Museum",
                description:"Minerals and applied arts.",
                link:"http://earthandman.org/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Earth_and_Man_Museum_Sofia_4.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 42.6801,
                longitude: 23.3208
            }
        ]
    },
    Zagreb:{
        country:"Croatia",
        history:[
            {name:"Archaeological Museum",
                description:"Roman and medieval artifacts.",
                link:"http://www.amz.hr/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Split_Archaeological_Museum_01.jpg/1200px-Split_Archaeological_Museum_01.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 45.81111,
                longitude: 15.97722
            },
            
        ],
        art:[
            {name:"Museum of Broken Relationships",
                description:"Permanent conceptual art collection.",
                link:"http://brokenships.com/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/HR-ZG-Zagreb146.jpg/330px-HR-ZG-Zagreb146.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 45.81496,
                longitude: 15.97346
            },
            {name:"Mimara Museum",
                description:"Art from prehistory to modern.",
                link:"http://mimara.hr/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://www.visitzagreb.hr/wp-content/uploads/2018/01/Zagrab-Museum-Mimara-front-800x500.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 45.80500,
                longitude: 15.96680
            },
            {name:"Museum of Contemporary Art",
                description:"Permanent modern and contemporary art.",
                link:"http://www.msu.hr/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Msu-museum-contemporary-art-zagreb-2.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 45.77806,
                longitude: 15.98083 
            }
        ]
    },
    Nicosia:{
        country:"cyprus",
        history:[
            {name:"Leventis Municipal Museum",
                description:"Tells Nicosia’s 6,000-year history.",
                link:"http://leventismuseum.org.cy/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://images.squarespace-cdn.com/content/v1/604767d2a0a3ed5aaf779d5c/88340ea1-069a-47ea-84d9-701358666ff9/IMG_6614.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 35.1674,
                longitude: 33.3666  
               
            },
            {name:"Cyprus Museum",
                description:"The island’s main archaeological museum from prehistoric to early Christian.",
                link:null,
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Nicosia_01-2017_img28_Cyprus_Museum.jpg/1200px-Nicosia_01-2017_img28_Cyprus_Museum.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 35.1618,
                longitude: 33.3697
            },
            {name:"Cyprus Museum of Natural History",
                description:"Natural history collections: animals, minerals, fossils.",
                link:null,
                generalOpening : null, // will be populated dynamically from API
                image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Museum_of_Natural_History_in_Nicosia_-Dinosaurs.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 35.1269,
                longitude: 33.3803
            }
        ],
        art:[
            {name:"A. G. Leventis Gallery ",
                description:"Permanent Cypriot art (20th century to present) in Nicosia.",
                link:"https://www.leventisgallery.org/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://images.squarespace-cdn.com/content/v1/604767d2a0a3ed5aaf779d5c/1616970780827-RVFWYWXVT7MD0W3CAYVG/FCB_Leventis_Nicosia_Cyprus_-%C2%AEHufton%2BCrow_001.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 35.1579,
                longitude: 33.3669
            },
            {name:"CVAR",
                description:"Cypriot art and cultural heritage.",
                link:"https://www.severis.org/cvar/",
                generalOpening : null, // will be populated dynamically from API
                image: "https://cvar-live-beeb68bb85f54b0197fa9b6b5eab1-05b50c6.divio-media.org/images/img15.CVAR.width-585.jpg",
                today: null,     // will be filled dynamically
                externalApiId: null,
                latitude: 35.1663,
                longitude: 33.3617
            }

        ]
        
    },
    Prague:{
        country:"czech republic",
        history:[
            {name:"National Museum",
                description:"Czech history and natural sciences.",
                link:"https://www.nm.cz",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Museo_Nacional%2C_Praga%2C_Rep%C3%BAblica_Checa%2C_2022-07-02%2C_DD_265-267_HDR.jpg",
                today: null,
                externalApiId: null,
                latitude: 50.07944,
                longitude: 14.43083
            },
            {name:"Museum of Communism",
                description:"Daily life in Communist-era Czechoslovakia.",
                link:"https://www.muzeumkomunismu.cz/en",
                generalOpening : null,
                image: "https://cdn.praguecitytourism.city/2024/04/11145933/4-scaled.jpg",
                today: null,
                externalApiId: null,
                latitude: 50.08910,
                longitude: 14.42890        
            }
        ],
        art:[
            {name:"Mucha Museum",
                description:"Art Nouveau works by Alfons Mucha.",
                link:"https://www.mucha.cz/en/mucha-museum",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Praha-Nov%C3%A9_M%C4%9Bsto_Kounick%C3%BD_pal%C3%A1c_1.jpg",
                today: null,
                externalApiId: null,
                latitude: 50.08780,
                longitude: 14.42067

            },
            {name:"Museum Kampa",
                description:"Modern Czech and Central European art.",
                link:"https://www.museumkampa.cz",
                generalOpening : null,
                image: "https://www.avantgarde-prague.com/media/filer_public_thumbnails/filer_public/26/b3/26b38213-fb1e-4c8d-ad83-f9d62725a04b/004_sovovy_mlyny.jpg__1200x630_q85_crop_subsampling-2.jpg",
                today: null,
                externalApiId: null,
                latitude: 50.08679,
                longitude: 14.40652
            },
            {name:"House of the Black Madonna – Cubism Museum",
                description:"Czech Cubist art and design.",
                link:"https://www.ngprague.cz/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/D%C5%AFm_U_%C4%8Dern%C3%A9_Matky_Bo%C5%BE%C3%AD_03.JPG",
                today: null,
                externalApiId: null,
                latitude: 50.08803,
                longitude: 14.41985

            }
        ]
    },
    
    Copenhagen:{
        country:"denmark",
        history:[
            {name:"The Workers Museum",
                description:"Danish working-class life and culture.",
                link:"https://www.arbejdermuseet.dk/en/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Forsamlingsbygningen_R%C3%B8mersgade_Arbejdermuseet.jpg",
                today: null,
                externalApiId: null,
                latitude: 55.67688,
                longitude: 12.56834
            }
        ],
        art:[
            {name:"Statens Museum for Kunst (SMK)",
                description:"Denmark’s national gallery.",
                link:"https://www.smk.dk",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/SMK_Entrance.jpg",
                today: null,
                externalApiId: null,
                latitude: 55.68464,
                longitude: 12.57703
            },
            {name:"The David Collection",
                description:"Islamic and European decorative arts.",
                link:"https://www.davidmus.dk",
                generalOpening : null,
                image: "https://images.squarespace-cdn.com/content/v1/5ac530cff2e6b1f8c1cee361/1645759370252-VJD6SAI6DTODC51TDLXB/Islamisk-samling-Ghaznaviderne-og-Ghuriderne-Foto-Pernille-Klemp.jpeg",
                today: null,
                externalApiId: null,
                latitude: 55.68862,
                longitude: 12.57387
            },
            {name:"Hirschsprung Collection",
                description:"Danish Golden Age painters.",
                link:"https://hirschsprung.dk",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Hirschsprungske-samling.2004.jpg",
                today: null,
                externalApiId: null,
                latitude: 55.69609,
                longitude: 12.57110
            },
            {name:"Ordrupgaard",
                description:"French Impressionists and Danish masters.",
                link:"https://ordrupgaard.dk",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Ordupgaard_Copenhagen_Zaha_Hadid_1.jpg",
                today: null,
                externalApiId: null,
                latitude: 55.7575,
                longitude: 12.5581
            }
        ]
    },
    
    Tallinn:{
        country:"estonia",
        history:[
            {name:"Vabamu – Museum of Occupations and Freedom",
                description:"Soviet and Nazi occupation history in Estonia.",
                link:"https://vabamu.ee",
                generalOpening : null,
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/dd/fd/8f/vabamu-museum-of-occupations.jpg?w=900&h=500&s=1",
                today: null,
                externalApiId: null,
                latitude: 59.4333,
                longitude: 24.7485
            },
            {name:"Tallinn Museum of Orders of Knighthood",
                description:"Collection of medals, orders, and chivalry history.",
                link:"https://tallinnmuseum.com",
                generalOpening : null,
                image: "https://lp-cms-production.imgix.net/2019-06/79f5eb1219c3f992873cef606a18bc36-niguliste-museum.jpg?fit=crop&ar=1%3A1&w=1200&auto=format&q=75",
                today: null,
                externalApiId: null,
                latitude: 59.4328,
                longitude: 24.7376
            }
        ],
        art:[
            {name:"Kumu Art Museum",
                description:"Estonia’s main art museum (18th century–present).",
                link:"https://kumu.ekm.ee",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Le_KUMU%2C_mus%C3%A9e_dart_estonien_%28Tallinn%29_%287643040944%29.jpg/1200px-Le_KUMU%2C_mus%C3%A9e_dart_estonien_%28Tallinn%29_%287643040944%29.jpg",
                today: null,
                externalApiId: null,
                latitude: 59.4372,
                longitude: 24.7564
            },
            {name:"Kadriorg Art Museum",
                description:"European and Russian art in a baroque palace.",
                link:"https://kadriorg.ekm.ee",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Tallinn_asv2022-04_img55_Kadriorg_Palace.jpg",
                today: null,
                externalApiId: null,
                latitude: 59.4368,
                longitude: 24.7882
            },
            {name:"Mikkel Museum",
                description:"Private art collection donated by Johannes Mikkel.",
                link:"https://mikkel.ekm.ee",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/3/39/A._Weizenbergi_28%2C_Kadrioru_lossi_k%C3%B6%C3%B6gihoone.jpg",
                today: null,
                externalApiId: null,
                latitude: 59.4361,
                longitude: 24.7885
            }
        ]
    },
    
    Helsinki:{
        country:"finland",
        history:[
            {name:"National Museum of Finland",
                description:"Finnish history from prehistory to modern.",
                link:"https://www.kansallismuseo.fi/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Kansallismuseo_Helsinki.jpg",
                today: null,
                externalApiId: null,
                latitude: 60.1796,
                longitude: 24.9315
            }
        ],
        art:[
            {name:"Ateneum Art Museum",
                description:"Major classical Finnish art collection.",
                link:"https://ateneum.fi",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Helsinki_July_2013-26a.jpg",
                today: null,
                externalApiId: null,
                latitude: 60.1705,
                longitude: 24.9416
            },
            {name:"Kiasma Museum of Contemporary Art",
                description:"Contemporary Finnish and international art.",
                link:"https://kiasma.fi",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Kiasmamodernartmuseum.JPG",
                today: null,
                externalApiId: null,
                latitude: 60.1701,
                longitude: 24.9426      
            },
            {name:"Design Museum Helsinki",
                description:"Finnish design and applied arts.",
                link:"https://www.designmuseum.fi",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Designmuseo_2019.jpg",
                today: null,
                externalApiId: null,
                latitude: 60.1719,
                longtitude: 24.9383
            },
            {name:"Amos Rex",
                description:"Contemporary art in a unique underground space.",
                link:"https://amosrex.fi",
                generalOpening : null,
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/30/6c/f9/amos-rex.jpg?w=900&h=500&s=1",
                today: null,
                externalApiId: null,
                latitude: 60.1694,
                longitude: 24.9389
            }
        ]
    },
    Paris:{
        country:"france",
        history:[
            {name:"Musée Carnavalet",
                description:"History of Paris from prehistory to modern times.",
                link:"https://www.carnavalet.paris.fr/en",
                generalOpening : null,
                image: "https://www.carnavalet.paris.fr/sites/default/files/styles/1200x584/public/2021-05/wec2104_chatillon_carnavalet_S1100732.jpg?itok=krN23v34",
                today: null,
                externalApiId: null,
                latitude: 48.8570,
                longitude: 2.3620               
            },
            {name:"Musée de l'Armée",
                description:"French military history including Napoleon era.",
                link:"https://www.musee-armee.fr/en",
                generalOpening : null,
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/5d/cb/56/dome-des-invalides.jpg?w=1200&h=1200&s=1",
                today: null,
                externalApiId: null,
                latitude: 48.8556,
                longitude: 2.3126
            },
            {name:"Conciergerie",
                description:"Medieval royal palace and prison with historic exhibitions.",
                link:"https://www.paris-conciergerie.fr/en/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Paris_Conciergerie_265.jpg/1200px-Paris_Conciergerie_265.jpg",
                today: null,
                externalApiId: null,
                latitude: 48.8575,
                longitude: 2.3449
            },
            {name:"Hôtel de Cluny",
                description:"Medieval history museum of Paris.",
                link:"https://www.musee-moyenage.fr/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Paris_2012-aout-0006-2-Hotel-de-Cluny.jpg/1200px-Paris_2012-aout-0006-2-Hotel-de-Cluny.jpg",
                today: null,
                externalApiId: null,
                latitude: 48.8506,
                longitude: 2.3450
            },
            {name:"Musée de la Libération de Paris",
                description:"History of Paris during WWII and liberation.",
                link:"https://www.museedelaliberation.fr/",
                generalOpening : null,
                image: "https://aws-tiqets-cdn.imgix.net/images/content/96b315df299146a78cf64aaca423dc34.jpg?auto=format%2Ccompress&fit=crop&q=70",
                today: null,
                externalApiId: null,
                latitude: 48.8319,
                longitude: 2.2447
            }
        ],
        art:[
            {name:"Louvre Museum",
                description:"World-famous art collection including Mona Lisa.",
                link:"https://www.louvre.fr/en",
                generalOpening : null,
                image: "https://images.squarespace-cdn.com/content/v1/5edbbcf3253cf824ff6fd101/1746622908134-MQR1S54WLIG8YDQQAB3Y/1.jpg",
                today: null,
                externalApiId: null,
                latitude: 48.8606,
                longitude: 2.3376
            },
            {name:"Musée d'Orsay",
                description:"Impressionist and post-impressionist masterpieces.",
                link:"https://www.musee-orsay.fr/en/home.html",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Gare_d%27Orsay_%2849570190081%29.jpg",
                today: null,
                externalApiId: null,
                latitude: 48.8600,
                longitude: 2.3266
            },
            {name:"Centre Pompidou",
                description:"Modern and contemporary art museum.",
                link:"https://www.centrepompidou.fr/en",
                generalOpening : null,
                image: "https://www.franceguide.info/wp-content/uploads/sites/18/paris-centre-pompidou-hd.jpg",
                today: null,
                externalApiId: null,
                latitude: 48.8606,
                longitude: 2.3522
            },
            {name:"Musée Rodin",
                description:"Sculptures and paintings of Auguste Rodin.",
                link:"https://www.musee-rodin.fr/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Le_mus%C3%A9e_Rodin.jpg",
                today: null,
                externalApiId: null,
                latitude: 48.8556,
                longitude: 2.3158
            },
            {name:"Musée Marmottan Monet",
                description:"Largest collection of Claude Monet paintings.",
                link:"https://www.marmottan.fr/en/",
                generalOpening : null,
                image: "https://www.academiedesbeauxarts.fr/sites/default/files/styles/header/public/2019-10/Marmottan-Exterieur_01.jpg?h=8a336d86&itok=Q3VpFhTc",
                today: null,
                externalApiId: null,
                latitude: 48.8572,
                longitude: 2.2744
            }
        ]
    },
    
    Tbilisi:{
        country:"georgia",
        history:[
            {name:"Georgian National Museum – Simon Janashia Museum",
                description:"Archaeology, history, and ethnography of Georgia.",
                link:"https://museum.ge/en",
                generalOpening : null,
                image: "https://lh4.googleusercontent.com/proxy/KdaLLDK88x8aaz6fndgc-KmaMO_i67KsRuRuX3KbYfJuBFCkZdiBbwCviypwlutXR2Q_QxYlyiOJ9_Mv00nhIy7Gs7KSGpBXMjz8qo1behrAFWsgwmklRyw2q50",
                today: null,
                externalApiId: null,
                latitude: 41.7131,
                longitude: 44.7831
            },
            {name:"Tbilisi History Museum – Karvasla",
                description:"History of Tbilisi from ancient to modern times.",
                link:"https://museum.ge/en",
                generalOpening : null,
                image: "https://storage.georgia.travel/images/georgian-national-museum-ioseb-grishashvili-tbilisi-historical-museum-karvasla-gnta.webp",
                today: null,
                externalApiId: null,
                latitude: 41.6937,
                longitude: 44.8010
            }
        ],
        art:[
            {name:"National Gallery of Georgia",
                description:"Georgian and international art collection.",
                link:"https://museum.ge/en",
                generalOpening : null,
                image: "https://storage.georgia.travel/images/georgian-national-museum-national-gallery-of-paintings-gnta.webp",
                today: null,
                externalApiId: null,
                latitude: 41.7150,
                longitude: 44.7810
            },
            {name:"Gallery Art Area",
                description:"Contemporary Georgian art exhibitions.",
                link:null,
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Tbilisi_National_Gallery.JPG",
                today: null,
                externalApiId: null,
                latitude: 41.7129,
                longitude: 44.7900
            }
        ]
    },
    
    Berlin:{
        country:"germany",
        history:[
            {name:"German Historical Museum",
                description:"German history from the Middle Ages to modern times.",
                link:"https://www.dhm.de/en/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Zeughaus_Berlin_2012.jpg",
                today: null,
                externalApiId: null,
                latitude: 52.5176,
                longitude: 13.3969
            },
            {name:"Topography of Terror",
                description:"History of Nazi institutions and crimes in Berlin.",
                link:"https://www.topographie.de/en/",
                generalOpening : null,
                image: "https://cdn.contexttravel.com/image/upload/w_1500,q_60/v1686155183/blog/topography-of-terror-museum/image_credit_shutterstock_roberto_nencini.jpg",
                today: null,
                externalApiId: null,
                latitude: 52.5075,
                longitude: 13.3904
            },
            {name:"Berlin Wall Memorial",
                description:"History and remembrance of the Berlin Wall.",
                link:"https://www.berliner-mauer-gedenkstaette.de/en/",
                generalOpening : null,
                image: "https://www.visitberlin.de/system/files/styles/visitberlin_hero_visitberlin_desktop_2x/private/image/gedenkstaette12_c_visitBerlin_Foto_Dagmar_Schwelle_2016_DL_PPT_0.jpg.webp?itok=k-T-GpoA",
                today: null,
                externalApiId: null,
                latitude: 52.5351,
                longitude: 13.3904
            },
            {name:"DDR Museum",
                description:"Interactive exhibits on daily life in East Germany.",
                link:"https://www.ddr-museum.de/en/",
                generalOpening : null,
                image: "https://www.ddr-museum.de/application/files/cache/thumbnails/ddr-museum-eingang-2023-77c1c2704103becb0b67501b1effc6ab.webp",
                today: null,
                externalApiId: null,
                latitude: 52.5206,
                longitude: 13.4095
            },
            {name:"Allied Museum",
                description:"Cold War history and Allied forces in Berlin.",
                link:"https://www.alliiertenmuseum.de/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Berlin_Clayallee_AlliiertenMuseum_UAV_04-2017.jpg",
                today: null,
                externalApiId: null,
                latitude: 52.4469,
                longitude: 13.2957
            }
        ],
        art:[
            {name:"Pergamon Museum",
                description:"Ancient, Islamic, and Middle Eastern art collections.",
                link:"https://www.smb.museum/en/museums-institutions/pergamonmuseum/home/",
                generalOpening : null,
                image: "https://cdn.britannica.com/58/176458-050-AEFE3264/Ishtar-Gate-Berlin-Pergamon-Museum.jpg",
                today: null,
                externalApiId: null,
                latitude: 52.5212,
                longitude: 13.3969
            },
            {name:"Alte Nationalgalerie",
                description:"19th-century European art.",
                link:"https://www.smb.museum/en/museums-institutions/alte-nationalgalerie/home/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/2/23/AlteNationalgalerie_1a.jpg",
                today: null,
                externalApiId: null,
                latitude: 52.5163,
                longitude: 13.3966
            },
            {name:"Neue Nationalgalerie",
                description:"Modern 20th-century art collection.",
                link:"https://www.smb.museum/en/museums-institutions/neue-nationalgalerie/home/",
                generalOpening : null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQupQn3XDiY4RrJG8r1tA1R0jM-TJpmXNaKGQ&s",
                today: null,
                externalApiId: null,
                latitude: 52.5125,
                longitude: 13.3392
            },
            {name:"Gemäldegalerie",
                description:"European paintings from the 13th to 18th centuries.",
                link:"https://www.smb.museum/en/museums-institutions/gemaeldegalerie/home/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Berlin_Kulturforum_2002a.jpg",
                today: null,
                externalApiId: null,
                latitude: 52.5144,
                longitude: 13.3790
            },
            {name:"Hamburger Bahnhof – Museum für Gegenwart",
                description:"Contemporary art museum with international works.",
                link:"https://www.smb.museum/en/museums-institutions/hamburger-bahnhof/home/",
                generalOpening : null,
                image: "https://www.berlin.de/binaries/asset/image_assets/7586610/ratio_2_1/1655988896/1000x500/",
                today: null,
                externalApiId: null,
                latitude: 52.5296,
                longitude: 13.3867
            }
        ]
    },
    
    Athens:{
        country:"greece",
        history:[
            {name:"National Archaeological Museum",
                description:"Largest collection of Greek antiquities.",
                link:"https://www.namuseum.gr/en/",
                generalOpening : null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-rqB8kHXX4cv75SbOKF2RfsRhtWFK0GTLA&s",
                today: null,
                externalApiId: null,
                latitude: 37.9893,
                longitude: 23.7313
            },
            {name:"Acropolis Museum",
                description:"History and artifacts from the Acropolis.",
                link:"https://www.theacropolismuseum.gr/en",
                generalOpening : null,
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/b0/e6/7b/b-c-night-view-of-the.jpg?w=900&h=500&s=1",
                today: null,
                externalApiId: null,
                latitude: 37.9699,
                longitude: 23.7281
            },
            {name:"Byzantine and Christian Museum",
                description:"Byzantine and post-Byzantine Greek history and artifacts.",
                link:"https://www.byzantinemuseum.gr/en",
                generalOpening : null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrRK-Rc2IF8shBlyQgDOm26n_vgea-lQGs7w&s",
                today: null,
                externalApiId: null,
                latitude: 37.9753,
                longitude: 23.7447
            }
        ],
        art:[
            {name:"National Gallery – Alexandros Soutsos Museum",
                description:"Greek and European art collections.",
                link:"https://www.nationalgallery.gr/en",
                generalOpening : null,
                image: "https://www.nationalgallery.gr/wp-content/uploads/2021/10/nag-external-840x630.jpg",
                today: null,
                externalApiId: null,
                latitude: 37.9780,
                longitude: 23.7350
            },
            {name:"Benaki Museum",
                description:"Greek art from antiquity to modern times.",
                link:"https://www.benaki.org/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Benaki_Museum_Athens.JPG",
                today: null,
                externalApiId: null,
                latitude: 37.9756,
                longitude: 23.7343
            },
            {name:"Museum of Cycladic Art",
                description:"Cycladic and ancient Greek art.",
                link:"https://cycladic.gr/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/%CE%9C%CE%AD%CE%B3%CE%B1%CF%81%CE%BF_%CE%A3%CF%84%CE%B1%CE%B8%CE%AC%CF%84%CE%BF%CF%85_6697.jpg",
                today: null,
                externalApiId: null,
                latitude: 37.9758,
                longitude: 23.7435
            }
        ]
    },
    
    Budapest:{
        country:"hungary",
        history:[
            {name:"Hungarian National Museum",
                description:"Hungary’s history from medieval times to modern era.",
                link:"https://mnm.hu/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Magyar_Nemzeti_M%C3%BAzeum.jpg",
                today: null,
                externalApiId: null,
                latitude: 47.4954,
                longitude: 19.0610
            },
            {name:"House of Terror Museum",
                description:"History of fascist and communist regimes in Hungary.",
                link:"https://www.terrorhaza.hu/en/",
                generalOpening : null,
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/50/d6/c8/travel-hungary-infydiaries.jpg?w=1200&h=-1&s=1",
                today: null,
                externalApiId: null,
                latitude: 47.5006,
                longitude: 19.0613
            },
            {name:"Budapest History Museum",
                description:"History of Budapest from ancient to modern times.",
                link:"https://www.btm.hu/en",
                generalOpening : null,
                image: "https://media.wlrp.hu/images/ultimatebudapest.com/uploads/budapest-history-museum.jpg",
                today: null,
                externalApiId: null,
                latitude: 47.4965,
                longitude: 19.0390
            },
            {name:"Museum of Ethnography",
                description:"Hungarian folk culture, traditions, and artifacts.",
                link:"https://www.neprajz.hu/en",
                generalOpening : null,
                image: "https://www.neprajz.hu/binaries/content/gallery/hirek-imageset/2022/epulet/liget-budapest_palko-gyorgy_300dpi.jpg",
                today: null,
                externalApiId: null,
                latitude: 47.4956,
                longitude: 19.0599
            },
            {name:"Aquincum Museum",
                description:"Roman history and archaeology in Budapest.",
                link:"https://aquincum.hu/en/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Aquincumi_muzeum.jpg",
                today: null,
                externalApiId: null,
                latitude: 47.5523,
                longitude: 19.0822
            }
        ],
        art:[
            {name:"Hungarian National Gallery",
                description:"Hungarian art from medieval to modern times.",
                link:"https://mng.hu/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Buda--Castles01.jpg",
                today: null,
                externalApiId: null,
                latitude: 47.4967,
                longitude: 19.0392
            },
            {name:"Ludwig Museum of Contemporary Art",
                description:"Modern and contemporary international and Hungarian art.",
                link:"https://www.ludwigmuseum.hu/en",
                generalOpening : null,
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/26/59/3d/the-ludwig-museum-is.jpg?w=1200&h=-1&s=1",
                today: null,
                externalApiId: null,
                latitude: 47.5078,
                longitude: 19.0639
            },
            {name:"Museum of Fine Arts",
                description:"European art collections from the Middle Ages to the 20th century.",
                link:"https://www.szepmuveszeti.hu/en",
                generalOpening : null,
                image: "https://www.mfab.hu/app/uploads/2023/10/Szabek_honlapra_retusalt_UJ_1920x770.jpg",
                today: null,
                externalApiId: null,
                latitude: 47.5135,
                longitude: 19.0610
            },
            {name:"Koller Gallery",
                description:"Contemporary Hungarian and international art.",
                link:"https://www.kollergaleria.hu/",
                generalOpening : null,
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/f7/c3/80/entrance-from-the-yard.jpg?w=900&h=-1&s=1",
                today: null,
                externalApiId: null,
                latitude: 47.4969,
                longitude: 19.0673
            }
        ]
    },

    Reykjavik: {
        country: "iceland",
        history: [
            {name:"National Museum of Iceland",
                description:"Icelandic history from settlement to modern era.",
                link:"https://www.thjodminjasafn.is/english",
                generalOpening : null,
                image: "https://www.icelandicartcenter.is/_next/image?url=https%3A%2F%2Fmyndlistarmidstod.payload.is%2Fmedia%2Fthjodminjasafnid-2000x1333.jpg&w=2048&q=80",
                today: null,
                externalApiId: null,
                latitude: 64.1419,
                longitude: -21.9486
            },
            {name:"Reykjavik City Museum – Settlement Exhibition",
                description:"Archaeological remains of the earliest Viking settlement in Reykjavik.",
                link:"https://reykjavikcitymuseum.is/the-settlement-exhibition",
                generalOpening : null,
                image: "https://visitreykjavik.is/sites/default/files/styles/max_325x325/public/2025-06/871image04largeoriginalformat-jpeg.jpg?itok=2LHREhQC",
                today: null,
                externalApiId: null,
                latitude: 64.1475,
                longitude: -21.9426
            },
            {name:"Arbaer Open Air Museum",
                description:"Historic buildings and traditional Icelandic life.",
                link:"https://reykjavikcitymuseum.is/arbaer-open-air-museum",
                generalOpening : null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSl39V1zkx_QtshWTsHWRsByC8ZYDzMNJNw&s",
                today: null,
                externalApiId: null,
                latitude: 64.1279,
                longitude: -21.8163
            }
        ],
        art: [
            {name:"Reykjavik Art Museum – Hafnarhús",
                description:"Contemporary art with a focus on Icelandic artists.",
                link:"https://artmuseum.is",
                generalOpening : null,
                image: "https://visitreykjavik.is/sites/default/files/styles/max_325x325/public/images/2020-06/hafnarhus.jpg?itok=I9dUU8_H",
                today: null,
                externalApiId: null,
                latitude: 64.1472,
                longitude: -21.9392
            },
            {name:"Reykjavik Art Museum – Kjarvalsstaðir",
                description:"Works by Jóhannes Kjarval and modern Icelandic art.",
                link:"https://artmuseum.is",
                generalOpening : null,
                image: "https://www.museumguide.is/wp-content/uploads/2016/12/Kjarvalssta%C3%B0ir_web-Large.jpg",
                today: null,
                externalApiId: null,
                latitude: 64.1446,
                longitude: -21.9263
            },
            {name:"Reykjavik Art Museum – Ásmundarsafn",
                description:"Sculptures and works of Ásmundur Sveinsson.",
                link:"https://artmuseum.is",
                generalOpening : null,
                image: "https://www.icelandicartcenter.is/_next/image?url=https%3A%2F%2Fmyndlistarmidstod.payload.is%2Fmedia%2Flistasafn-reykjavikur-asmundarsafn-2000x1432.jpg&w=2048&q=80",
                today: null,
                externalApiId: null,
                latitude: 64.1396,
                longitude: -21.8925
            }
        ]
    },

    Dublin: {
        country: "ireland",
        history: [
            {name:"National Museum of Ireland – Archaeology",
                description:"Irish archaeology, from prehistoric to medieval periods.",
                link:"https://www.museum.ie/en-ie/museums/archaeology",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/National_Museum_of_Ireland.jpg/330px-National_Museum_of_Ireland.jpg",
                today: null,
                externalApiId: null,
                latitude: 53.3409,
                longitude: -6.2546
            },
            {name:"National Museum of Ireland – Decorative Arts & History",
                description:"Irish military history, decorative arts, and social history.",
                link:"https://www.museum.ie/en-ie/museums/decorative-arts-history",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Art-Museum-01.jpg",
                today: null,
                externalApiId: null,
                latitude: 53.3478,
                longitude: -6.2869

            },
            {name:"Dublinia",
                description:"Interactive exhibitions exploring Viking and medieval Dublin.",
                link:"https://www.dublinia.ie",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Dublinia%2C_Dublin%2C_Southeast_View_20150808_1.jpg",
                today: null,
                externalApiId: null,
                latitude: 53.3430,
                longitude: -6.2703
            }
        ],
        art: [
            {name:"National Gallery of Ireland",
                description:"European and Irish art from the Middle Ages to the 20th century.",
                link:"https://www.nationalgallery.ie",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/National_Gallery_of_Ireland%2C_Nov_2017.jpg/1200px-National_Gallery_of_Ireland%2C_Nov_2017.jpg",
                today: null,
                externalApiId: null,
                latitude: 53.3407,
                longitude: -6.2525
            },
            {name:"Irish Museum of Modern Art (IMMA)",
                description:"Modern and contemporary art exhibitions.",
                link:"https://imma.ie",
                generalOpening : null,
                image: "https://imma.ie/wp-content/uploads/2023/08/Image-1-2500x1875.jpg",
                today: null,
                externalApiId: null,
                latitude: 53.3429,
                longitude: -6.2974
            }
        ]
    },
    
    Rome: {
        country: "italy",
        history: [
            {name:"Capitoline Museums",
                description:"Ancient Roman art and archaeology.",
                link:"https://museicapitolini.org/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Capitolio9.jpg/330px-Capitolio9.jpg",
                today: null,
                externalApiId: null,
                latitude: 41.8929,
                longitude: 12.4825
            },
            {name:"National Roman Museum",
                description:"Roman antiquities spread across four major sites.",
                link:"https://museonazionaleromano.beniculturali.it/en/",
                generalOpening : null,
                image: "https://tourismmedia.italia.it/is/image/mitur/20220419110950-cloister-garden-museum-nazionale-romano-alle-terme-roma-lazio-via-wiki-YC6MtmO71d?wid=1240&hei=500&fit=constrain,1&fmt=webp",
                today: null,
                externalApiId: null,
                latitude: 41.9010,
                longitude: 12.5002
                         
            },
            {name:"Ara Pacis Museum",
                description:"Augustan-era altar and Roman Imperial history.",
                link:"https://www.arapacis.it/en",
                generalOpening : null,
                image: "https://www.turismoroma.it/sites/default/files/arapacis.jpg",
                today: null,
                externalApiId: null,
                latitude: 41.9079,
                longitude: 12.4768
            }
        ],
        art: [
            {name:"Vatican Museums",
                description:"One of the world’s largest art collections; includes the Sistine Chapel.",
                link:"https://m.museivaticani.va/content/museivaticani/en.html",
                generalOpening : null,
                image: "https://vatican.museum/images/w700-f1/storage/app/public/repository/0/eafe930d8fe14c8c857fee1045148d31.jpg",
                today: null,
                externalApiId: null,
                latitude: 41.9065,
                longitude: 12.4536
            },
            {name:"Galleria Borghese",
                description:"Renaissance and Baroque masterpieces, including Bernini and Caravaggio.",
                link:"https://galleriaborghese.beniculturali.it/en/",
                generalOpening : null,
                image: "https://galleriaborghese.beniculturali.it/en/wp-content/uploads/5.jpg",
                today: null,
                externalApiId: null,
                latitude: 41.9142,
                longitude: 12.4923
            },
            {name:"MAXXI",
                description:"National Museum of 21st Century Arts focusing on contemporary works.",
                link:"https://www.maxxi.art/en/",
                generalOpening : null,
                image: "https://www.maxxi.art/wp-content/uploads/2017/02/Motiv_Maxxi_307-1024x769.jpg",
                today: null,
                externalApiId: null,
                latitude: 41.9283,
                longitude: 12.4663

            }
        ]
    },

    NurSultan: {
        country: "kazakhstan",
        history: [
            {name:"National Museum of the Republic of Kazakhstan",
                description:"Kazakhstan’s archaeology, ethnography, and modern history.",
                link:"https://nmrk.kz/en/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/National_Museum_of_the_Republic_of_Kazakhstan.jpg/1200px-National_Museum_of_the_Republic_of_Kazakhstan.jpg",
                today: null,
                externalApiId: null,
                latitude: 51.1187,
                longitude: 71.4677

            },
            {name:"Museum of the First President",
                description:"History of the presidency and Kazakhstan’s recent political history.",
                link:"https://elbasimuseum.kz/en/",
                generalOpening : null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbG42cqgaYo-IPyZV5tqI0n2JLARYGmevS_Q&s",
                today: null,
                externalApiId: null,
                latitude: 51.1419,
                longitude: 71.4296
            }
        ],
        art: [
            {name:"Kulanshi Art Center",
                description:"Contemporary Kazakh and international art exhibitions.",
                link:"https://kulanshiart.kz",
                generalOpening : null,
                image: "https://eurasia.travel/wp-content/uploads/2024/10/6.-Kulanashi-Art-Centre-1024x683.jpg",
                today: null,
                externalApiId: null,
                latitude: 51.1259,
                longitude: 71.4416

            },
            {name:"Astana Art Gallery",
                description:"Modern Kazakh visual art and sculpture.",
                link:"http://www.astana.kz",
                generalOpening : null,
                image: "https://images.squarespace-cdn.com/content/v1/51eaca50e4b0868917ce9ca4/1520548547187-Z79GS8B144JA71QPF7R2/Front+Night.jpg",
                today: null,
                externalApiId: null,
                latitude: 51.1283,
                longitude: 71.4308
            }
        ]
    },

    Pristina: {
        country: "kosovo",
        history: [
            {name:"Kosovo Museum",
                description:"Archaeology, ethnography, and Kosovo’s historical artifacts.",
                link:"https://www.mmk-rks.com",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Muzeu_i_Kosov%C3%ABs.JPG",
                today: null,
                externalApiId: null,
                latitude: 42.6629,
                longitude: 21.1655

            }
        ],
        art: [
            {name:"National Gallery of Kosovo",
                description:"Contemporary Kosovo art and exhibitions.",
                link:"https://galeriakombetare.com",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Pristina_-_The_Kosova_Art_Gallery.JPG/1200px-Pristina_-_The_Kosova_Art_Gallery.JPG",
                today: null,
                externalApiId: null,
                latitude: 42.6616,
                longitude: 21.1636

            }
        ]
    },

    Riga: {
        country: "latvia",
        history: [
            {name:"Latvian National History Museum",
                description:"Latvian history from ancient times to the modern day.",
                link:"https://lnvm.lv/en",
                generalOpening : null,
                image: "https://www.liveriga.com/userfiles/images/apmekle/ko-redzet/muzeji-un-galerijas/vestures-muzeji/latvijas-nacionalais-vestures-muzejs/01_rigas_pils_no_daugavmalas.jpg?w=780&mode=3%3A2%7Ccrop&s=f2cfa68aa8e75a2b9c53a414fb5b5782",
                today: null,
                externalApiId: null,
                latitude: 56.9462,
                longitude: 24.1053
            },
            {name:"Riga City History and Navigation Museum",
                description:"History of Riga as a port and urban center.",
                link:"https://www.rigamuz.lv",
                generalOpening : null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiPFuKoUcLij_0HT30_V53BRuIZaOMdrmCAA&s",
                today: null,
                externalApiId: null,
                latitude: 56.9491,
                longitude: 24.1056

            }
        ],
        art: [
            {name:"Latvian National Museum of Art",
                description:"Latvian art from 18th century to today.",
                link:"https://www.lnmm.lv/en",
                generalOpening : null,
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/56/0f/b0/latvian-national-museum.jpg?w=1200&h=-1&s=1",
                today: null,
                externalApiId: null,
                latitude: 56.9572,
                longitude: 24.1136

            },
            {name:"Art Museum Riga Bourse",
                description:"European, Asian, and world art collections.",
                link:"https://www.lnmm.lv/en/ab",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/R%C4%ABgas_bir%C5%BEa.jpg",
                today: null,
                externalApiId: null,
                latitude: 56.9486,
                longitude: 24.1084

            }
        ]
    },

    Vaduz: {
        country: "liechtenstein",
        history: [
            {name:"Liechtenstein National Museum",
                description:"Natural history, archaeology, and Liechtenstein’s cultural heritage.",
                link:"https://www.landesmuseum.li",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Liechtensteinisches_Landesmuseum%2C_2014.JPG/250px-Liechtensteinisches_Landesmuseum%2C_2014.JPG",
                today: null,
                externalApiId: null,
                latitude: 47.1410,
                longitude: 9.5215

            }
        ],
        art: [
            {name:"Kunstmuseum Liechtenstein",
                description:"Modern and contemporary art in an iconic black-cube building.",
                link:"https://www.kunstmuseum.li",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/1/16/KML_HAF_aussen_vom_Staedtle_Barbara_Buehler.jpg",
                today: null,
                externalApiId: null,
                latitude: 47.1414,
                longitude: 9.5185
                 
            }
        ]
    },

    Vilnius: {
        country: "lithuania",
        history: [
            {name:"National Museum of Lithuania",
                description:"Lithuanian archaeology, ethnography, and history.",
                link:"https://www.lnm.lt/en/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Lietuvos_nacionalinis_muziejus.jpg/1200px-Lietuvos_nacionalinis_muziejus.jpg",
                today: null,
                externalApiId: null,
                latitude: 54.6840,
                longitude: 25.2860
            },
            {name:"Palace of the Grand Dukes of Lithuania",
                description:"Reconstruction and exhibitions on Lithuanian medieval statehood.",
                link:"https://www.valdovurumai.lt/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Vilnius_Gedimino_Pilies_Bok%C5%A1tas_Blick_auf_die_Valdovu_rumai.jpg",
                today: null,
                externalApiId: null,
                latitude: 54.6861,
                longitude: 25.2881
            }
        ],
        art: [
            {name:"MO Museum",
                description:"Modern and contemporary Lithuanian art.",
                link:"https://www.momuziejus.lt/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/MO_by_Augustas_Didzgalvis.jpg/330px-MO_by_Augustas_Didzgalvis.jpg",
                today: null,
                externalApiId: null,
                latitude: 54.6942,
                longitude: 25.2776

            },
            {name:"Vilnius Picture Gallery",
                description:"Lithuanian art from the 16th to 20th centuries.",
                link:"https://www.lndm.lt/en/vpg",
                generalOpening : null,
                image: "https://www.govilnius.lt/images/5e1ee12836de7443df7b30c9?w=750&h=500",
                today: null,
                externalApiId: null,
                latitude: 54.6865,
                longitude: 25.2827

            }
        ]
    },

    LuxembourgCity: {
        country: "luxembourg",
        history: [
            {name:"Luxembourg City History Museum",
                description:"Urban history and development of Luxembourg City.",
                link:"https://citymuseum.lu/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Historisches_Museum_der_Stadt_Luxemburg_8325-026.jpg",
                today: null,
                externalApiId: null,
                latitude: 49.6119,
                longitude: 6.1319
            },
            {name:"National Museum of History and Art",
                description:"Archaeology, fine arts, and Luxembourg’s cultural history.",
                link:"https://mnha.lu/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Luxembourg_city_2007_05.JPG/1200px-Luxembourg_city_2007_05.JPG",
                today: null,
                externalApiId: null,
                latitude: 49.6109,
                longitude: 6.1298

            }
        ],
        art: [
            {name:"Villa Vauban",
                description:"European art from the 17th to 19th centuries.",
                link:"https://villavauban.lu/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Villa_Vauban_Luxembourg_02.jpg",
                today: null,
                externalApiId: null,
                latitude: 49.6101,
                longitude: 6.1236
            }
        ]
    },

    Valletta: {
        country: "malta",
        history: [
            {name:"National Museum of Archaeology",
                description:"Artifacts from Malta’s prehistoric and megalithic cultures.",
                link:"https://heritagemalta.org/national-museum-of-archaeology",
                generalOpening : null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4LI2t4DDrPSWd3gcnn04FqY-uBMlHKi9hQ&s",
                today: null,
                externalApiId: null,
                latitude: 35.8986,
                longitude: 14.5125
                 
            },
            {name:"Fort St. Elmo – National War Museum",
                description:"Malta’s military history from ancient to modern times.",
                link:"https://heritagemalta.org/national-war-museum",
                generalOpening : null,
                image: "https://heritagemalta.mt/app/uploads/2021/12/DSC8788-1.jpg",
                today: null,
                externalApiId: null,
                latitude: 35.8993,
                longitude: 14.5103
            }
        ],
        art: [
            {name:"MUŻA – National Community Art Museum",
                description:"Malta’s national art collection.",
                link:"https://muza.gov.mt",
                generalOpening : null,
                image: "https://heritagemalta.mt/app/uploads/2021/11/muza-hero-scaled.jpg",
                today: null,
                externalApiId: null,
                latitude: 35.8991,
                longitude: 14.5110

            }
        ]
    },

    Chisinau: {
        country: "moldova",
        history: [
            {name:"National Museum of History of Moldova",
                description:"Moldovan history, culture, and archaeology.",
                link:"https://www.nationalmuseum.md/en/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Museum_of_History_%28AP4L0086_1PS%29_%2828922487610%29.jpg",
                today: null,
                externalApiId: null,
                latitude: 47.0226,
                longitude: 28.8322
            }
        ],
        art: [
            {name:"National Museum of Fine Arts of Moldova",
                description:"Moldovan and international fine arts.",
                link:"https://www.mnam.md/",
                generalOpening : null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP3xBrwl56z1zc9bYpt7qoQVznXak5ai-6tw&s",
                today: null,
                externalApiId: null,
                latitude: 47.0252,
                longitude: 28.8341
            }
        ]
    },

    Monaco: {
        country: "monaco",
        history: [
            {name:"Museum of Prehistoric Anthropology",
                description:"Prehistoric remains from the Monaco region.",
                link:"https://www.map-mc.org",
                generalOpening : null,
                image: "https://static.seetheworld.com/image_uploader/photos/c0/original/museum-of-prehistoric-anthropology-monaco-monaco.jpg",
                today: null,
                externalApiId: null
            },
            {name:"Maritime Museum & Oceanographic Museum",
                description:"Marine sciences, maritime history, and explorer collections.",
                link:"https://www.oceano.org",
                generalOpening : null,
                image: "https://cms.goteborg.com/uploads/2021/04/sjofartsmuseet-43Bild-1-1500x1125.jpg",
                today: null,
                externalApiId: null
            }
        ],
        art: [
            {name:"New National Museum of Monaco (NMNM)",
                description:"Contemporary visual arts in two historic villas.",
                link:"https://www.nmnm.mc",
                generalOpening : null,
                image: "https://www.nmnm.mc/wp-content/uploads/2022/02/villa-paloma.png",
                today: null,
                externalApiId: null
            }
        ]
    },

    Podgorica: {
        country: "montenegro",
        history: [
            {name:"Museum and Galleries of Podgorica",
                description:"Archaeology, ethnography, and history of the Podgorica region.",
                link:"https://pgmuzeji.me",
                generalOpening : null,
                image: "https://museu.ms/remote.jpg.ashx?width=1000&height=450&format=jpg&mode=crop&scale=both&404=no_image.gif&urlb64=aHR0cHM6Ly9tdXNldW1zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9kYXRhL0RvY3VtZW50cy9NVVNFVU1TL21lbWdwLzI3OTc0L011c2V1bXMlMjBhbmQlMjBHYWxsZXJpZXMlMjBvZiUyMFBvZGdvcmljYS5wbmc&hmac=E-ZdbHJkuss",
                today: null,
                externalApiId: null,
                latitude: 42.4410,
                longitude: 19.2628
            }
        ],
        art: [
            {name:"Centre of Contemporary Art of Montenegro",
                description:"Modern and contemporary art, including international collections.",
                link:"http://www.csucg.me",
                generalOpening : null,
                image: "https://museu.ms/remote.jpg.ashx?width=1000&height=450&format=jpg&mode=crop&scale=both&404=no_image.gif&urlb64=aHR0cHM6Ly9tdXNldW1zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9kYXRhL0RvY3VtZW50cy9NVVNFVU1TL21lY3N1Y2cvMjc5NzIvQ2VudHJlJTIwZm9yJTIwTW9kZXJuJTIwQXJ0cy5wbmc&hmac=l8eh2pR0qdE",
                today: null,
                externalApiId: null,
                latitude: 42.4413,
                longitude: 19.2631
            }
        ]
    },

    Amsterdam: {
        country: "netherlands",
        history: [
            {name:"Rijksmuseum",
                description:"Dutch art and history, including the Dutch Golden Age.",
                link:"https://www.rijksmuseum.nl/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/South_facade_of_the_Rijksmuseum_Amsterdam_%28DSCF0528%29.jpg/1200px-South_facade_of_the_Rijksmuseum_Amsterdam_%28DSCF0528%29.jpg",
                today: null,
                externalApiId: null,
                latitude: 52.359998,
                longitude: 4.885218
            },
            {name:"Amsterdam Museum",
                description:"History of Amsterdam from its origins to modern times.",
                link:"https://www.amsterdammuseum.nl/en",
                generalOpening : null,
                image: "https://www.dutchamsterdam.nl/i/aa/2022/04/Amsterdam-Museum.jpg",
                today: null,
                externalApiId: null,
                latitude: 52.3749,
                longitude: 4.8970
            },
            {name:"Anne Frank House",
                description:"Historic house and museum dedicated to Anne Frank.",
                link:"https://www.annefrank.org/en/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Amsterdam_%28NL%29%2C_Anne-Frank-Huis_--_2015_--_7185.jpg",
                today: null,
                externalApiId: null,
                latitude: 52.3752,
                longitude: 4.8839
            }
        ],
        art: [
            {name:"Van Gogh Museum",
                description:"World’s largest collection of Vincent van Gogh’s works.",
                link:"https://www.vangoghmuseum.nl/en",
                generalOpening : null,
                image: "https://images.adsttc.com/media/images/55e6/f619/e58e/ce03/1300/0374/newsletter/PORTADA_06_VanGoghMuseum_EntranceBuilding_HansvanHeeswijkArchitects_photo_RonaldTilleman.jpg?1441199623",
                today: null,
                externalApiId: null,
                latitude: 52.3584,
                longitude: 4.8811

            },
            {name:"Stedelijk Museum",
                description:"Modern and contemporary art and design.",
                link:"https://www.stedelijk.nl/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/6/61/De_nieuwe_vleugel_van_het_Stedelijk_Museum_Amsterdam.jpg",
                today: null,
                externalApiId: null,
                latitude: 52.3585,
                longitude: 4.8796

            }
        ]
    },
//double check the latitude longitude 
    Skopje: {
        country: "north macedonia",
        history: [
            {name:"Museum of the Macedonian Struggle",
                description:"History of Macedonian independence movements.",
                link:"https://www.mmb.org.mk",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Skopje_-_Museum_of_the_Macedonian_Struggle.jpg/330px-Skopje_-_Museum_of_the_Macedonian_Struggle.jpg",
                today: null,
                externalApiId: null
            },
            {name:"Museum of the City of Skopje",
                description:"Local history, culture, and heritage of Skopje.",
                link:"https://www.mgs.org.mk",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Antigua_estaci%C3%B3n_de_ferrocarril%2C_Skopie%2C_Macedonia%2C_2014-04-17%2C_DD_15.JPG/330px-Antigua_estaci%C3%B3n_de_ferrocarril%2C_Skopie%2C_Macedonia%2C_2014-04-17%2C_DD_15.JPG",
                today: null,
                externalApiId: null,
                latitude: 41.9981,
                longitude: 21.4310
            }
        ],
        art: [
            {name:"National Gallery of North Macedonia",
                description:"Macedonian visual arts from various periods.",
                link:"https://www.nationalgallery.mk",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Daut_Pasha_Hamam.jpg",
                today: null,
                externalApiId: null,
                latitude: 41.9986,
                longitude: 21.4292
            }
        ]
    },

    Oslo: {
        country: "norway",
        history: [
            {name:"Norwegian Museum of Cultural History",
                description:"Open-air museum with historic buildings and folk culture.",
                link:"https://norskfolkemuseum.no/en",
                generalOpening : null,
                image: "https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://media.newmindmedia.com/TellUs/image/%3Ffile%3DFolkemuset_Gol_stavkirke_Sabine_Zoller_1904560402.jpg%26dh%3D600%26dw%3D800%26cropX%3D0%26cropY%3D0%26cropH%3D1500%26cropW%3D2000%26t%3D4",
                today: null,
                externalApiId: null,
                latitude: 59.9133,
                longitude: 10.7226     

            },
            {name:"The Viking Ship Museum",
                description:"Famous Viking ships and archaeological finds.",
                link:"https://www.khm.uio.no/english",
                generalOpening : null,
                image: "https://www.vikingtidsmuseet.no/aktuelt/bilder/v1_ohpm_final_dn-clear1200px.jpg",
                today: null,
                externalApiId: null,
                latitude: 59.9106,
                longitude: 10.7319
            },
            {name:"Oslo City Museum",
                description:"History and cultural heritage of Oslo.",
                link:"https://munchmuseet.no/en/oslo-city-museum/",
                generalOpening : null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTylWr2Gc7-0pEMH1KDUs-TMz4kWrUC5mRsvw&s",
                today: null,
                externalApiId: null,
                latitude: 59.9170,
                longitude: 10.7333
            }
        ],
        art: [
            {name:"National Museum of Art, Architecture and Design",
                description:"Norway’s largest art museum with classical-to-modern art.",
                link:"https://www.nasjonalmuseet.no/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Nye_Nasjonalmuseet_%282022%29_%282%29.jpg",
                today: null,
                externalApiId: null,
                latitude: 59.9170,
                longitude: 10.7333
            },
            {name:"Munch Museum",
                description:"Dedicated to the works of Edvard Munch, including 'The Scream'.",
                link:"https://www.munchmuseet.no/en/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/5/56/MUNCH_Museum_front_%282020%29_4.jpg",
                today: null,
                externalApiId: null,
                latitude: 59.9073,
                longitude: 10.7615
            }
        ]
    },

    Warsaw: {
        country: "poland",
        history: [
            {name:"POLIN Museum of the History of Polish Jews",
                description:"1,000 years of Jewish life in Poland.",
                link:"https://polin.pl/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Museum_of_the_History_of_Polish_Jews_in_Warsaw_building_0011.jpg/330px-Museum_of_the_History_of_Polish_Jews_in_Warsaw_building_0011.jpg",
                today: null,
                externalApiId: null,
                latitude: 52.2342,
                longitude: 21.0069          
            },
            {name:"Warsaw Rising Museum",
                description:"History of the 1944 Warsaw Uprising.",
                link:"https://www.1944.pl/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Muzeum_Powstania_Warszawskiego_2023.jpg",
                today: null,
                externalApiId: null,
                latitude: 52.2421,
                longitude: 20.9926
            },
            {name:"Museum of the History of Poland",
                description:"Comprehensive exhibit of Polish national history.",
                link:"https://muzhp.pl/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Muzeum_Historii_Polski%2C_under_construction%2C_Warsaw%2C_2023%2C_02.jpg",
                today: null,
                externalApiId: null,
                latitude: 52.2392,
                longitude: 21.0112
            }
        ],
        art: [
            {name:"National Museum in Warsaw",
                description:"Polish and European art from antiquity to modern era.",
                link:"https://www.mnw.art.pl/en/",
                generalOpening : null,
                image: "https://museu.ms/remote.jpg.ashx?width=1000&height=450&format=jpg&mode=crop&scale=both&404=no_image.gif&urlb64=aHR0cHM6Ly9tdXNldW1zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9kYXRhL0RvY3VtZW50cy9NVVNFVU1TL3Bsd2Ftbnd3LzU2OTUwL2JhMzc5Zjg0NTIzNzRhNGI4ZGZjODEyNTY2YmMyMmUzLmpwZw&hmac=saMWnKn1iRs",
                today: null,
                externalApiId: null,
                latitude: 52.2324,
                longitude: 20.9928
            },
            {name:"Zachęta National Gallery of Art",
                description:"Contemporary art exhibitions.",
                link:"https://zacheta.art.pl/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Zach%C4%99ta_-_budynek_z_oddalenia.jpg/330px-Zach%C4%99ta_-_budynek_z_oddalenia.jpg",
                today: null,
                externalApiId: null,
                latitude: 52.2313,
                longitude: 21.0064
            }
        ]
    },

    Lisbon: {
        country: "portugal",
        history: [
            {name:"National Museum of Archaeology",
                description:"Portugal’s archaeological collections from prehistoric to Roman times.",
                link:"https://mnarqueologia.dgpc.pt/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Museo_Nacional_de_Arqueolog%C3%ADa._Lisboa.jpg",
                today: null,
                externalApiId: null,
                latitude: 38.7113,
                longitude: -9.2037
            },
            {name:"Lisbon Museum",
                description:"History of Lisbon from ancient times to today.",
                link:"https://museudelisboa.pt/en",
                generalOpening : null,
                image: "https://media.timeout.com/images/105817924/image.jpg",
                today: null,
                externalApiId: null,
                latitude: 38.7133,
                longitude: -9.1390     
            }
        ],
        art: [
            {name:"Calouste Gulbenkian Museum",
                description:"European, Oriental, and classical art collections.",
                link:"https://gulbenkian.pt/museu/en/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Museu_Calouste_Gulbenkian_%28Main_Entrance%29.jpg",
                today: null,
                externalApiId: null,
                latitude: 38.7360,
                longitude: -9.1530
            },
            {name:"National Museum of Ancient Art",
                description:"Portugal’s most important collection of fine arts.",
                link:"https://www.museudearteantiga.pt/en/",
                generalOpening : null,
                image: "https://image.wmsm.co/a8cf7953a24c20c14c3c35176f3d6870/national-museum-of-ancient-art-lisbon-1.jpg?quality=80&width=1280",
                today: null,
                externalApiId: null,
                latitude: 38.7077,
                longitude: -9.1690

            }
        ]
    },

    Bucharest: {
        country: "romania",
        history: [
            {name:"National Museum of Romanian History",
                description:"Romanian history from ancient times through modern era.",
                link:"http://www.mnir.ro",
                generalOpening : null,
                image: "https://museu.ms/remote.jpg.ashx?format=jpg&mode=crop&404=no_image.gif&urlb64=aHR0cHM6Ly9tdXNldW1zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9kYXRhL0RvY3VtZW50cy9NVVNFVU1TL3JvYnVtbmRpYXIvNTEwOTQvMDYwMDI3OGMwYzRiNDZhMTlkMGZhYWY4NzIyMTA1YWUuanBn&hmac=HdJHcCdokbI",
                today: null,
                externalApiId: null,
                latitude: 44.4396,
                longitude: 26.0976
            },
            {name:"Village Museum",
                description:"Open-air museum showcasing traditional Romanian rural life.",
                link:"https://muzeul-satului.ro/en/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/%282023%29_Biserica_de_lemn_din_Dragomire%C8%99ti%2C_Maramure%C8%99%2C_1722_-_img_18.jpg",
                today: null,
                externalApiId: null,
                latitude: 44.4540,
                longitude: 26.0800
            }
        ],
        art: [
            {name:"National Museum of Art of Romania",
                description:"Romanian and European art collections.",
                link:"https://mnar.arts.ro",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/2/29/The_Royal_Palace_%28AP4K1357_1PS%29_%2829291577856%29.jpg",
                today: null,
                externalApiId: null,
                latitude: 44.4398,
                longitude: 26.0963
            },
            {name:"Museum of Recent Art (MARe)",
                description:"Contemporary Romanian art from the post-1960s period.",
                link:"https://www.mare.ro/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/en/7/73/National_Museum_of_Contemporary_Art.jpg",
                today: null,
                externalApiId: null,
                latitude: 44.4556,
                longitude: 26.0989
            }
        ]
    },

    Moscow: {
        country: "russia",
        history: [
            {name:"State Historical Museum",
                description:"Russian history from antiquity to the 20th century.",
                link:"https://en.shm.ru",
                generalOpening : null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxD_NJb5Cb9JsEjVJitqA6MgRkeFdLrLtFVw&s",
                today: null,
                externalApiId: null
            },
            {name:"Museum of the Great Patriotic War",
                description:"Russia's WWII history and memorial complex.",
                link:"https://victorymuseum.ru/en/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Museum_of_the_Great_Patriotic_War_Moscow.jpg",
                today: null,
                externalApiId: null
            }
        ],
        art: [
            {name:"State Tretyakov Gallery",
                description:"Largest collection of Russian art.",
                link:"https://www.tretyakovgallery.ru/en/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Moscow_05-2012_TretyakovGallery.jpg",
                today: null,
                externalApiId: null
            },
            {name:"Pushkin State Museum of Fine Arts",
                description:"European and world art collections.",
                link:"https://pushkinmuseum.art/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Gmii.jpg",
                today: null,
                externalApiId: null
            }
        ]
    },

    SanMarino: {
        country: "san marino",
        history: [
            {name:"State Museum of San Marino",
                description:"Archaeology, art, and historical artifacts of San Marino.",
                link:"https://www.museidistato.sm",
                generalOpening : null,
                image: "https://www.sanmarinosite.com/wp/wp-content/uploads/2014/10/museo-di-stato-esterno-sanmarino-450x600.jpg",
                today: null,
                externalApiId: null,
                latitude: 43.9331,
                longitude: 12.4489
            },
            {name:"Museum of Ancient Arms",
                description:"Historic weaponry in the Second Tower of San Marino.",
                link:"https://www.museidistato.sm",
                generalOpening : null,
                image: "https://media-cdn.tripadvisor.com/media/photo-s/03/69/ae/09/torre-de-san-marin.jpg",
                today: null,
                externalApiId: null,
                latitude: 43.9338,
                longitude: 12.4473
            }
        ],
        art: [
            {name:"San Marino National Gallery of Modern and Contemporary Art",
                description:"Modern and contemporary art exhibitions.",
                link:"https://www.gallerianazionalesanmarino.sm",
                generalOpening : null,
                image: "https://www.sanmarinosite.com/wp/wp-content/uploads/2014/10/galleria-nazionale-san-marino-1.jpg",
                today: null,
                externalApiId: null,
                latitude: 43.9335,
                longitude: 12.4478
            }
        ]
    },

    Belgrade: {
        country: "serbia",
        history: [
            {name:"National Museum of Serbia",
                description:"Serbian archaeology, ethnography, and historical artifacts.",
                link:"https://www.narodnimuzej.rs/?lang=en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/National_Museum_of_Serbia_%28DSC04612%29.jpg/250px-National_Museum_of_Serbia_%28DSC04612%29.jpg",
                today: null,
                externalApiId: null,
                latitude: 44.8176,
                longitude: 20.4579      
            },
            {name:"Historical Museum of Serbia",
                description:"Documents, exhibitions, and artifacts on Serbian national history.",
                link:"https://www.istorijskimuzej.rs",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Historical_Museum_of_Serbia_%2813809954145%29.jpg/1200px-Historical_Museum_of_Serbia_%2813809954145%29.jpg",
                today: null,
                externalApiId: null,
                latitude: 44.8164,
                longitude: 20.4571
            }
        ],
        art: [
            {name:"Museum of Contemporary Art Belgrade",
                description:"Contemporary Yugoslav and Serbian art.",
                link:"https://msub.org.rs",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Beograd_-_Muzej_Savremene_Umetnosti_%28MoCAB%29_%28crop%29.jpg",
                today: null,
                externalApiId: null,
                latitude: 44.8116,
                longitude: 20.4571

            },
            {name:"Zepter Museum",
                description:"Modern Serbian art collections.",
                link:"https://zeptermuseum.rs/en/",
                generalOpening : null,
                image: "https://zeptermuzej.rs/wp-content/uploads/2021/08/zepter-zgrada.jpg",
                today: null,
                externalApiId: null,
                latitude: 44.8191,
                longitude: 20.4542
            }
        ]
    },

    Bratislava: {
        country: "slovakia",
        history: [
            {name:"Bratislava City Museum",
                description:"History of Bratislava from medieval to modern times.",
                link:"https://www.muzeumbratislava.sk",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Bratislava14Slovakia65.JPG",
                today: null,
                externalApiId: null,
                latitude: 48.1443,
                longitude: 17.1072
            },
            {name:"Slovak National Museum",
                description:"Archaeology, ethnography, and Slovak cultural history.",
                link:"https://www.snm.sk/?home&lang=en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Slovak_National_Museum_in_Bratislava_%281%29.jpg/330px-Slovak_National_Museum_in_Bratislava_%281%29.jpg",
                today: null,
                externalApiId: null,
                latitude: 48.1489,
                longitude: 17.1063
            }
        ],
        art: [
            {name:"Slovak National Gallery",
                description:"Slovak and international fine arts collections.",
                link:"https://www.sng.sk/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Slovensk%C3%A1_n%C3%A1rodn%C3%A1_gal%C3%A9ria05.jpg",
                today: null,
                externalApiId: null,
                latitude: 48.1462,
                longitude: 17.1105
            }
        ]
    },

    Ljubljana: {
        country: "slovenia",
        history: [
            {name:"National Museum of Slovenia",
                description:"Slovenian archaeology, history, and cultural heritage.",
                link:"https://www.nms.si/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/NarodniMuzej-ljubljana.JPG",
                today: null,
                externalApiId: null,
                latitude: 46.0511,
                longitude: 14.5085
            },
            {name:"City Museum of Ljubljana",
                description:"History of Ljubljana from prehistory to today.",
                link:"https://mgml.si/en/city-museum",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/AuerspergovaPalaca-Ljubljana.JPG",
                today: null,
                externalApiId: null,
                latitude: 46.0519,
                longitude: 14.5062      
            }
        ],
        art: [
            {name:"National Gallery of Slovenia",
                description:"Slovenian and European art from the Middle Ages to the 20th century.",
                link:"https://www.ng-slo.si/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/National_Gallery_of_Slovenia_at_night_2019_%2848728021908%29.jpg/250px-National_Gallery_of_Slovenia_at_night_2019_%2848728021908%29.jpg",
                today: null,
                externalApiId: null,
                latitude: 46.0507,
                longitude: 14.5134
            },
            {name:"Museum of Modern Art",
                description:"20th-century and contemporary Slovenian art.",
                link:"https://www.mg-lj.si/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/MoMa_NY_USA_1.jpg",
                today: null,
                externalApiId: null,
                latitude: 46.0517,
                longitude: 14.5103

            }
        ]
    },

    Madrid: {
        country: "spain",
        history: [
            {name:"National Archaeological Museum",
                description:"Archaeology and ancient history of the Iberian Peninsula.",
                link:"https://www.man.es/man/en/home",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Museo_Arqueol%C3%B3gico_Nacional_%2835039235760%29.jpg/330px-Museo_Arqueol%C3%B3gico_Nacional_%2835039235760%29.jpg",
                today: null,
                externalApiId: null,
                latitude: 40.4191,
                longitude: -3.6921  
            },
            {name:"Museo de Historia de Madrid",
                description:"History of Madrid from the 16th century to today.",
                link:"https://www.madrid.es/museodehistoria",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Museo_de_Historia_de_Madrid_%28Espa%C3%B1a%29_03.jpg/330px-Museo_de_Historia_de_Madrid_%28Espa%C3%B1a%29_03.jpg",
                today: null,
                externalApiId: null,
                latitude: 40.4265,
                longitude: -3.7110
            }
        ],
        art: [
            {name:"Museo del Prado",
                description:"Spain’s national art museum with masterpieces from Velázquez, Goya, and more.",
                link:"https://www.museodelprado.es/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg",
                today: null,
                externalApiId: null,
                latitude: 40.4138,
                longitude: -3.6921
            },
            {name:"Museo Reina Sofía",
                description:"Modern art museum home to Picasso’s Guernica and Spanish avant-garde art.",
                link:"https://www.museoreinasofia.es/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Madrid_-_Museo_Nacional_Centro_de_Arte_Reina_Sof%C3%ADa_%28MNCARS%29_03.JPG/330px-Madrid_-_Museo_Nacional_Centro_de_Arte_Reina_Sof%C3%ADa_%28MNCARS%29_03.JPG",
                today: null,
                externalApiId: null,
                latitude: 40.4086,
                longitude: -3.6946
            },
            {name:"Museo Thyssen-Bornemisza",
                description:"European art from the Middle Ages to contemporary periods.",
                link:"https://www.museothyssen.org/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Site_of_the_Retiro_and_the_Prado_in_Madrid_49_%2829684554308%29.jpg",
                today: null,
                externalApiId: null,
                latitude: 40.4139,
                longitude: -3.6921
            }
        ]
    },

    Stockholm: {
        country: "sweden",
        history: [
            {name:"The Swedish History Museum",
                description:"Viking artifacts and Swedish history from prehistoric to modern times.",
                link:"https://historiska.se/home/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Statens_Historiska_museum.jpg/330px-Statens_Historiska_museum.jpg",
                today: null,
                externalApiId: null,
                latitude: 59.3347,
                longitude: 18.0640
            },
            {name:"Stockholm City Museum",
                description:"City history, culture, and urban development.",
                link:"https://stadsmuseet.stockholm/en/",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Stockholms_stadsmuseum_och_Ryssg%C3%A5rden_2009.jpg/1200px-Stockholms_stadsmuseum_och_Ryssg%C3%A5rden_2009.jpg",
                today: null,
                externalApiId: null,
                latitude: 59.3293,
                longitude: 18.0694
            },
            {name:"Vasa Museum",
                description:"The 17th-century warship Vasa and maritime history.",
                link:"https://www.vasamuseet.se/en",
                generalOpening : null,
                image: "https://www.city-guide-stockholm.com/_bibli/articlesPage/31/images/1-vasa-lesley-williamson-1-7.jpg",
                today: null,
                externalApiId: null,
                latitude: 59.3275,
                longitude: 18.0911
            }
        ],
        art: [
            {name:"Moderna Museet",
                description:"Modern and contemporary art collections.",
                link:"https://www.modernamuseet.se/stockholm/en/",
                generalOpening : null,
                image: "https://cdn.sanity.io/images/6uvtz1ot/production/00e9a6ddd5f11022a7d181c5c44dcb5ee5b2bcff-2000x1333.jpg?w=3840&fm=webp&q=75&auto=format",
                today: null,
                externalApiId: null,
                latitude: 59.3265,
                longitude: 18.0845
            },
            {name:"Nationalmuseum",
                description:"Sweden’s national gallery with classical European art.",
                link:"https://www.nationalmuseum.se/en",
                generalOpening : null,
                image: "https://www.nationalmuseum.se/imager/1840fb061599927392a7a02c6ff293ec/nm-exteri%C3%B6r-2417_5d3b5a89a91d99f5838a19126bef32af.jpg",
                today: null,
                externalApiId: null,
                latitude: 59.3294,
                longitude: 18.0672     
            }
        ]
    },

    Bern: {
        country: "switzerland",
        history: [
            {name:"Bernisches Historisches Museum",
                description:"History, archaeology, and the Einstein Museum.",
                link:"https://www.bhm.ch/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Historic_museum_Bern1.jpg",
                today: null,
                externalApiId: null
            },
            {name:"Einstein Museum",
                description:"Life and work of Albert Einstein.",
                link:"https://www.bhm.ch/en/einstein-museum/",
                generalOpening : null,
                image: "https://ik.imagekit.io/jv7stoijc/tr:w-7844,h-5229,cm-extract,x-0,y-1:w-1100,f-auto/assets/Dauerausstellungen/Einstein/Fotoshooting-2025/111132445.JPG",
                today: null,
                externalApiId: null
            }
        ],
        art: [
            {name:"Kunstmuseum Bern",
                description:"Swiss and European art from the Middle Ages to modern times.",
                link:"https://www.kunstmuseumbern.ch",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Kunstmuseum_Bern%2C_exterior_view.jpg",
                today: null,
                externalApiId: null
            },
            {name:"Zentrum Paul Klee",
                description:"Largest collection of works by Paul Klee.",
                link:"https://www.zpk.org/en",
                generalOpening : null,
                image: "https://a.storyblok.com/f/272028/2362x1575/9767e2b49c/bern_aussenansicht_zentrum-paul-klee_3_c_zentrum-paul-klee.jpg",
                today: null,
                externalApiId: null
            }
        ]
    },

    Ankara: {
        country: "turkey",
        history: [
            {name:"Museum of Anatolian Civilizations",
                description:"Artifacts from ancient Anatolian cultures including Hittite, Phrygian, and Urartian.",
                link:"https://www.muze.gov.tr/museum?Id=1",
                generalOpening : null,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIa_8AmGj_CDBoLP1arFSd75wgGrvM5DBGQ&s",
                today: null,
                externalApiId: null
            },
            {name:"Ankara Ethnography Museum",
                description:"Ethnographic heritage and Ottoman cultural collections.",
                link:"https://www.ktb.gov.tr",
                generalOpening : null,
                image: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/49319d2c-8d9b-4640-96a4-8bb477668bd7.jpg",
                today: null,
                externalApiId: null
            }
        ],
        art: [
            {name:"CerModern",
                description:"Contemporary art exhibitions and cultural events.",
                link:"https://cermodern.org",
                generalOpening : null,
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/63/2a/7c/picsart-02-10-12-largejpg.jpg?w=900&h=-1&s=1",
                today: null,
                externalApiId: null
            }
        ]
    },

    Kyiv: {
        country: "ukraine",
        history: [
            {name:"National Museum of the History of Ukraine",
                description:"Ukrainian history from ancient times to today.",
                link:"https://www.nmiu.org",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%9D%D0%B0%D1%86%D1%96%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9_%D1%96%D1%81%D1%82%D0%BE%D1%80%D1%96%D1%97_%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8%2C_2015_%D1%80..jpg",
                today: null,
                externalApiId: null,
                latitude: 50.4450,
                longitude: 30.5226
            },
            {name:"Museum of the History of Kyiv",
                description:"Urban development and cultural heritage of Kyiv.",
                link:"https://kyivhistorymuseum.org/en/",
                generalOpening : null,
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/9f/38/2b/national-museum-of-the.jpg?w=1200&h=-1&s=1",
                today: null,
                externalApiId: null,
                latitude: 50.4501,
                longitude: 30.5234
            }
        ],
        art: [
            {name:"National Art Museum of Ukraine",
                description:"Ukrainian art from medieval icons to contemporary works.",
                link:"https://namu.kiev.ua/en/",
                generalOpening : null,
                image: "https://lh3.googleusercontent.com/ci/AL18g_QzwF2dvQ02uPbcAlB0ECgnn2T_9tm666oTIQMIGywGJ6OAJrlfnET9SwPyUpVoNNyZse2ab-ux",
                today: null,
                externalApiId: null,
                latitude: 50.4471,
                longitude: 30.5219
            },
            {name:"PinchukArtCentre",
                description:"Contemporary Ukrainian and international art.",
                link:"https://pinchukartcentre.org/en",
                generalOpening : null,
                image: "https://upload.wikimedia.org/wikipedia/commons/9/91/PinchukArtCentre.JPG",
                today: null,
                externalApiId: null,
                latitude: 50.4437,
                longitude: 30.5229
            }
        ]
    },

    London: {
        country: "united kingdom",
        history: [
            {name:"British Museum",
                description:"World history collections including Egyptian, Greek, and Middle Eastern artifacts.",
                link:"https://www.britishmuseum.org",
                generalOpening : null,
                image: "https://www.britishmuseum.org/sites/default/files/styles/16_9_media_huge/public/2019-10/British-Museum-Front-Day.jpg?h=cf99483c&itok=Dly6ZqDM",
                today: null,
                externalApiId: null,
                latitude: 51.5194,
                longitude: -0.1270          
            },
            {name:"Museum of London",
                description:"History of London from prehistoric times to the modern era.",
                link:"https://www.museumoflondon.org.uk",
                generalOpening : null,
                image: "https://www.britainexpress.com/images/attractions/editor3/Museum-of-London-4266.jpg",
                today: null,
                externalApiId: null,
                latitude: 51.5170,
                longitude: -0.0964
            }
        ],
        art: [
            {name:"National Gallery",
                description:"European paintings from the 13th to early 20th century.",
                link:"https://www.nationalgallery.org.uk",
                generalOpening : null,
                image: "https://www.nationalgallery.org.uk/media/10ubfzua/plan-your-visit-crop-photoshop.jpg?rxy=0.6015037593984962,0.4844054580896686&width=1150&height=640&v=1dbc100cbcf8fe0",
                today: null,
                externalApiId: null,
                latitude: 51.5089,
                longitude: -0.1283
            },
            {name:"Tate Modern",
                description:"Modern and contemporary international art.",
                link:"https://www.tate.org.uk/visit/tate-modern",
                generalOpening : null,
                image: "https://media.tate.org.uk/aztate-prd-ew-dg-wgtail-st1-ctr-data/images/tate_modern_1jpg.max-500x500.jpg",
                today: null,
                externalApiId: null,
                latitude: 51.5076,
                longitude: -0.0994
            }
        ]
    },

    VaticanCity: {
        country: "vatican city",
        history: [
            {name:"Vatican Museums – Historical Collections",
                description:"Vatican historical archives, papal collections, and archaeological artifacts.",
                link:"https://m.museivaticani.va/content/museivaticani/en.html",
                generalOpening : null,
                image: "https://www.walksofitaly.com/blog/wp-content/uploads/2021/06/7-Rome_Pristine-Sistine-16x9-0008.jpg",
                today: null,
                externalApiId: null
            }
        ],
        art: [
            {name:"Vatican Museums – Art Collections",
                description:"Renaissance, Baroque, and classical art, including the Sistine Chapel.",
                link:"https://m.museivaticani.va/content/museivaticani/en.html",
                generalOpening : null,
                image: "https://www.througheternity.com/upload/CONF83/20200426/_pinacoteca_raphael_tapestries_vatican_tour_-tSa-730X490.jpeg",
                today: null,
                externalApiId: null
            }
        ]
    } 
};

module.exports = museumData;
