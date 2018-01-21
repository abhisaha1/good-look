let tempData = {};

export const saveStepData = obj => {
    tempData = {
        ...tempData,
        ...obj,
        steps: { ...tempData.steps, ...obj.steps }
    };

    Storage.set();
};

export const getTempData = () => {
    return tempData;
};

export const Storage = {
    get: () => {
        if (typeof localStorage === "undefined") {
            return {};
        }
        if (localStorage.data) {
            return JSON.parse(localStorage.data);
        }
        return {};
    },
    set: () => {
        if (typeof localStorage === "undefined") {
            return;
        }
        localStorage.data = JSON.stringify(tempData);
    }
};

export const config = {
    mode: {
        IN_PERSON: "In Person",
        ONLINE: "Online"
    },
    cities: {
        BB: "Brisbane"
    },
    dayPhase: {
        MORNING: "Morning",
        AFTERNOON: "Afternoon",
        EVENING: "Evening"
    },
    occasion: [
        { label: "Business casual for work", image: "" },
        { label: "Suit up for work", image: "" },
        { label: "Smart casual leisure", image: "" },
        { label: "Sporty", image: "" },
        { label: "Special event", image: "" },
        { label: "Tell me more about the occasion", image: "" }
    ],
    style: [
        { image: "Smart Casual.jpg", label: "Smart Casual" },
        { image: "Classic.jpg", label: "Classic" },
        { image: "Natural.jpg", label: "Natural" },
        { image: "Sporty.jpg", label: "Sporty" },
        { image: "Urban.jpg", label: "Urban" },
        { image: "Minimalistic.jpg", label: "Minimalistic" }
    ],
    brand: [
        {
            image: "nike.jpg",
            label: "Nike"
        },
        {
            image: "hugoboss.jpg",
            label: "Hugo Boss"
        },
        {
            image: "tommyhilfiger.jpg",
            label: "Tommy Hilfiger"
        },
        {
            image: "scothandsoda.jpg",
            label: "Scotch&Soda"
        },
        {
            image: "levis.jpg",
            label: "Levis"
        },
        {
            image: "adidas.jpg",
            label: "Adidas"
        },
        {
            image: "gstar.jpg",
            label: "G-Star"
        },
        {
            image: "bensherman.jpg",
            label: "Ben Sherman"
        },
        {
            image: "minimum.jpg",
            label: "Minimum"
        },
        {
            image: "diesel.jpg",
            label: "Diesel"
        },
        {
            image: "vans.jpg",
            label: "Vans"
        },
        {
            image: "samsoe.jpg",
            label: "Samsoe Samsoe"
        },
        {
            image: "timberland.jpg",
            label: "Timberland"
        },

        {
            image: "marcopolo.jpg",
            label: "Marc O'Polo"
        },
        {
            image: "ralphlaurenpolo.png",
            label: "Ralph Lauren"
        },
        {
            image: "converse.jpg",
            label: "Converse"
        },
        {
            image: "lee.jpg",
            label: "Lee"
        },
        {
            image: "topman.jpg",
            label: "Topman"
        },
        {
            image: "herschel.jpg",
            label: "Herschel"
        },
        {
            image: "cheapmonday.png",
            label: "Cheap Monday"
        },
        {
            image: "pepe.png",
            label: "Pepe Jeans"
        },
        {
            image: "carhartt.png",
            label: "Carhartt"
        },
        {
            image: "lacoste.png",
            label: "Lacoste"
        },
        {
            image: "calvinklein.png",
            label: "Calvin Klein"
        }
    ],
    wear: [
        {
            image: "tanktop.jpg",
            label: "Tank Tops"
        },
        {
            image: "tshirt.jpg",
            label: "T-Shirts"
        },
        {
            image: "poloshirt.jpg",
            label: "Polo Shirts"
        },
        {
            image: "longsleeves.jpg",
            label: "Long Sleeves"
        },
        {
            image: "cardigan.jpg",
            label: "Cardigan"
        },
        {
            image: "knit.jpg",
            label: "Knit"
        },
        {
            image: "sweatshirt.jpg",
            label: "Sweatshirt"
        },
        {
            image: "sweatjacket.jpg",
            label: "Sweat Jacket"
        },
        {
            image: "hoodie.jpg",
            label: "Hoodie"
        }
    ],
    fits: [
        {
            image: "slim.jpg",
            label: "Slim"
        },
        {
            image: "regular.jpg",
            label: "Regular"
        },
        {
            image: "relaxed.jpg",
            label: "Relaxed"
        }
    ],
    patterns: [
        {
            image: "uni.jpg",
            label: "Uni"
        },
        {
            image: "bigcheckered.jpg",
            label: "Big Checkered"
        },
        {
            image: "smallcheckered.jpg",
            label: "Small checkered"
        },
        {
            image: "striped.jpg",
            label: "Striped"
        },
        {
            image: "print.jpg",
            label: "Print"
        }
    ],
    outwear: [
        {
            image: "bomberjacket.jpg",
            label: "Bomber Jackets"
        },
        {
            image: "leatherjacket.jpg",
            label: "Leather Jackets"
        },
        {
            image: "vest.jpg",
            label: "Vests"
        },
        {
            image: "downvest.jpg",
            label: "Down Vests"
        },
        {
            image: "trenchcoat.jpg",
            label: "Trenchcoats"
        },
        {
            image: "parkas.jpg",
            label: "Parkas"
        },
        {
            image: "downjacket.jpg",
            label: "Down Jackets"
        },
        {
            image: "functionalwear.jpg",
            label: "Functional Wear"
        },
        {
            image: "blazers.jpg",
            label: "Blazers"
        }
    ],
    pants: [
        {
            image: "jeans.jpg",
            label: "Jeans"
        },
        {
            image: "chinos.jpg",
            label: "Chinos"
        },
        {
            image: "suit pants.jpg",
            label: "Suit Pants"
        }
    ],
    pantfits: [
        {
            image: "slim.jpg",
            label: "Slim"
        },
        {
            image: "straightleg.jpg",
            label: "Straight Leg"
        },
        {
            image: "tapered.jpg",
            label: "Tapered"
        },
        {
            image: "loosefit.jpg",
            label: "Loose Fit"
        },
        {
            image: "bootcut.jpg",
            label: "Bootcut"
        }
    ],
    suits: [
        {
            image: "slim.jpg",
            label: "Slim"
        },
        {
            image: "regular.jpg",
            label: "Regular"
        },
        {
            image: "",
            label: "I don't need a suit"
        }
    ],
    shoes: [
        {
            image: "casual sneakers.jpg",
            label: "Casual Sneakers"
        },
        {
            image: "fashionsneakers.jpg",
            label: "Fashion Sneakers"
        },
        {
            image: "desert boots.jpg",
            label: "Desert Boots"
        },
        {
            image: "elegant shoes.jpg",
            label: "Elegant Shoes"
        },
        {
            image: "business shoes.jpg",
            label: "Business Shoes"
        },
        {
            image: "slippers.jpg",
            label: "Slippers"
        },
        {
            image: "canvas sneakers.jpg",
            label: "Canvas Sneakers"
        },
        {
            image: "boat shoes.jpg",
            label: "Boat Shoes"
        },
        {
            image: "chelsea boots.jpg",
            label: "Chelsea Boots"
        },
        {
            image: "boots.jpg",
            label: "Boots"
        },
        {
            image: "",
            label: "Not required"
        }
    ],
    sizes_uw: ["xs", "s", "m", "l", "xl", "xxl"],
    sizes_shirts: [
        "34 - xs",
        "36 - s",
        "38 - m",
        "40 - m/l",
        "42 - l",
        "44 - xl",
        "46 - xxl",
        "don't know"
    ],
    sizes_pj: [28, 29, 30, 31, 32, 33, 34, 35, 36, 38],
    sizes_shoes: [
        "7/40.5",
        "8/42",
        "9/43",
        "10/44.5",
        "11/46",
        "12/47",
        "13/48"
    ],
    hair: ["Blonde", "Dark Blonde", "Red", "Brown", "Black", "Grey", "None"]
};
