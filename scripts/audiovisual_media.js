// Array of objects. Each object contains sound and picture tha can be used in the program.
// !Tag is not used in program so far, remove if it won't be used at the end
let audioVisualMedia = [
	{	tag: generateTag(),
		audio: new Audio("../media/1_beben_4180ms.wav"),
		visual: "../media/1_beben_4180ms.jpg",
		winner: false,
		description: "Drum"
	},
	{
		tag: generateTag(),
		audio: new Audio("../media/2_grzechotka_czerwona_7375ms.wav"),
		visual: "../media/2_grzechotka_czerwona_7375ms.jpg",
		winner: false,
		description: "Rattle"
	},
	{
		tag: generateTag(),
		audio: new Audio("../media/3_dzwonek_zolty_6606ms.wav"),
		visual: "../media/3_dzwonek_zolty_6606ms.jpg",
		winner: false,
		description: "Bell"
	},

	{
		tag: generateTag(),
		audio: new Audio("../media/5_trojkat2_7007ms.wav"),
		visual: "../media/5_trojkat2_7007ms.jpg",
		winner: false,
		description: "Triangle"
	},

	{
		tag: generateTag(),
		audio: new Audio("../media/6_tamburyno_stukanie1_4389ms.wav"),
		visual: "../media/6_tamburyno_stukanie1_4389ms.jpg",
		winner: false,
		description: "Tambourine"
	},
		{
		tag: generateTag(),
		audio: new Audio("../media/7_dzwoneczki_6860ms.wav"),
		visual: "../media/7_dzwoneczki_6860ms.jpg",
		winner: false,
		description: "Little bells"
	},
		{
		tag: generateTag(),
		audio: new Audio("../media/8_drewienko_akustyczne_9894ms.wav"),
		visual: "../media/8_drewienko_akustyczne_9894ms.jpg",
		winner: false,
		description: "tWood"
	}
];