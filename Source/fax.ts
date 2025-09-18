export interface OutdatedFact {
  id: string;
  fact: string;
  correction: string;
  category: string;
  debunkedYear?: number;
}

export const outdatedFacts: Record<string, OutdatedFact[]> = {
  "1970s": [
    {
      id: "pluto_planet",
      fact: "Pluto is the 9th planet in our solar s ystem",
      correction: "Pluto was reclassified as a dwarf planet in 2006 due to its size and orbital characteristics.",
      category: "Astronomy"
    },
    {
      id: "dinosaur_extinction",
      fact: "Dinosaurs went extinct gradually over millions of years",
      correction: "The asteroid impact theory (1980) showed that a massive asteroid caused rapid extinction 66 million years ago.",
      category: "Paleontology"
    },
    {
      id: "tongue_taste_map",
      fact: "Different areas of the tongue taste different flavors",
      correction: "All taste buds can detect all basic tastes. This 'tongue map' was based on a mistranslation of German research.",
      category: "Biology"
    },
    {
      id: "atoms_indivisible",
      fact: "Atoms are the smallest, indivisible units of matter",
      correction: "We now know atoms contain protons, neutrons, and electrons, and can be split in nuclear reactions.",
      category: "Physics"
    },
    {
      id: "ice_age_cooling",
      fact: "Earth is heading into another ice age due to natural cooling",
      correction: "Climate science now shows human activities are causing global warming, not cooling.",
      category: "Climate Science"
    },
    {
      id: "left_right_brain",
      fact: "People are either left-brained (logical) or right-brained (creative)",
      correction: "Neuroscience shows both hemispheres work together; this oversimplification has been debunked.",
      category: "Psychology"
    },
    {
      id: "cholesterol_deadly",
      fact: "All cholesterol is bad for your health and should be avoided",
      correction: "HDL (good) cholesterol is actually beneficial, and the body needs cholesterol for essential functions.",
      category: "Medicine"
    },
    {
      id: "spinach_iron_myth",
      fact: "Spinach is exceptionally high in iron compared to other vegetables",
      correction: "A decimal point error in 1870 inflated spinach's iron content 10x; many vegetables have similar or higher iron.",
      category: "Nutrition"
    },
    {
      id: "hair_grows_after_death",
      fact: "Hair and nails continue growing after death",
      correction: "Skin shrinks as the body dehydrates, making hair and nails appear longer, but they don't actually grow.",
      category: "Biology"
    },
    {
      id: "great_wall_space_myth",
      fact: "The Great Wall of China is the only man-made structure visible from space",
      correction: "Many structures are visible from space, and the Great Wall is actually very difficult to see without aid.",
      category: "Geography"
    },
    {
      id: "goldfish_memory_myth",
      fact: "Goldfish have a 3-second memory span",
      correction: "Goldfish can remember things for months and can be trained to perform tricks and recognize faces.",
      category: "Biology"
    },
    {
      id: "lightning_never_strikes_twice",
      fact: "Lightning never strikes the same place twice",
      correction: "Lightning frequently strikes the same locations, especially tall buildings and towers.",
      category: "Physics"
    },
    {
      id: "cracking_knuckles_arthritis",
      fact: "Cracking your knuckles causes arthritis",
      correction: "Studies show no link between knuckle cracking and arthritis development.",
      category: "Medicine"
    },
    {
      id: "reading_dim_light_ruins_eyes",
      fact: "Reading in dim light permanently damages your eyesight",
      correction: "While it may cause eye strain, there's no evidence of permanent damage from reading in low light.",
      category: "Medicine"
    },
    {
      id: "different_blood_types_personality",
      fact: "Your blood type determines your personality traits",
      correction: "No scientific evidence supports any correlation between blood type and personality.",
      category: "Psychology"
    },
    {
      id: "sugar_makes_kids_hyperactive",
      fact: "Sugar causes hyperactivity in children",
      correction: "Controlled studies show no link between sugar consumption and hyperactive behavior.",
      category: "Nutrition"
    },
    {
      id: "waiting_after_eating_swim",
      fact: "You must wait an hour after eating before swimming or you'll get cramps and drown",
      correction: "While digestion uses energy, there's no evidence that swimming after eating causes dangerous cramps.",
      category: "Health Science"
    },
    {
      id: "spicy_food_ulcers",
      fact: "Spicy food causes stomach ulcers",
      correction: "Ulcers are primarily caused by H. pylori bacteria, not spicy food consumption.",
      category: "Medicine"
    },
    {
      id: "alpha_wolves_pack_leader",
      fact: "Wolf packs have alpha wolves that dominate through aggression",
      correction: "Wolf packs are actually family units led by parents, not aggressive dominance hierarchies.",
      category: "Animal Behavior"
    },
    {
      id: "chameleons_change_color_camouflage",
      fact: "Chameleons change color primarily for camouflage",
      correction: "Chameleons change color mainly for communication and temperature regulation, not camouflage.",
      category: "Biology"
    },
    {
      id: "quicksand_deadly_sinking",
      fact: "Quicksand is extremely dangerous and will suck you down completely",
      correction: "Quicksand is denser than the human body; you can't sink completely and can escape with proper technique.",
      category: "Physics"
    },
    {
      id: "medieval_people_thought_earth_flat",
      fact: "People in medieval times believed the Earth was flat",
      correction: "Educated people knew Earth was round since ancient Greece; the flat Earth belief is a modern myth about the past.",
      category: "History"
    },
    {
      id: "vikings_horned_helmets",
      fact: "Vikings wore horned helmets in battle",
      correction: "No archaeological evidence supports horned helmets; this came from 19th-century romantic art and opera.",
      category: "History"
    },
    {
      id: "romans_vomited_to_eat_more",
      fact: "Ancient Romans regularly vomited during feasts to continue eating",
      correction: "The vomitorium was an exit from amphitheaters, not a place for vomiting; mass purging at feasts is largely myth.",
      category: "History"
    },
    {
      id: "napoleon_short_height",
      fact: "Napoleon was unusually short for his time",
      correction: "Napoleon was about 5'7\", average height for 18th-century French men; the 'short' myth came from unit conversion errors.",
      category: "History"
    },
    {
      id: "witches_burned_salem",
      fact: "Witches were burned at the stake during the Salem witch trials",
      correction: "Salem witch trial victims were hanged, not burned; burning was more common in Europe.",
      category: "History"
    },
    {
      id: "turkey_makes_you_sleepy",
      fact: "Turkey makes you sleepy because it's high in tryptophan",
      correction: "Many foods have similar tryptophan levels; holiday sleepiness comes from overeating and alcohol consumption.",
      category: "Nutrition"
    },
    {
      id: "cracking_joints_releases_toxins",
      fact: "Cracking joints releases built-up toxins and is therapeutic",
      correction: "Joint cracking releases gas bubbles from synovial fluid; no toxins are involved in the process.",
      category: "Medicine"
    },
    {
      id: "humans_swallow_spiders_sleeping",
      fact: "People swallow 8 spiders per year while sleeping",
      correction: "This statistic is completely fabricated; spiders avoid sleeping humans due to vibrations and breath.",
      category: "Biology"
    }
  ],
  "1980s": [
    {
      id: "pluto_planet",
      fact: "Pluto is the 9th planet in our solar system",
      correction: "Pluto was reclassified as a dwarf planet in 2006 due to its size and orbital characteristics.",
      category: "Astronomy"
    },
    {
      id: "brain_percentage",
      fact: "Humans only use 10% of their brain",
      correction: "Modern neuroscience shows we use nearly all of our brain, even during simple tasks. Brain imaging proves this myth false.",
      category: "Neuroscience"
    },
    {
      id: "food_pyramid",
      fact: "The food pyramid with 6-11 servings of bread/grains is optimal",
      correction: "Nutritional science now emphasizes vegetables, healthy fats, and protein over heavy grain consumption.",
      category: "Nutrition"
    },
    {
      id: "continental_drift_theory",
      fact: "Continental drift was still considered controversial",
      correction: "Plate tectonics became widely accepted, explaining how continents move via seafloor spreading and subduction.",
      category: "Geology"
    },
    {
      id: "saturated_fat_deadly",
      fact: "All saturated fats cause heart disease and should be eliminated",
      correction: "Research now shows some saturated fats may be neutral or even beneficial, context and source matter more than type alone.",
      category: "Nutrition"
    },
    {
      id: "memory_storage",
      fact: "Memory works like a computer, storing perfect copies of experiences",
      correction: "Memory is reconstructive and changes each time we recall it, often becoming less accurate over time.",
      category: "Psychology"
    },
    {
      id: "acid_rain_permanent",
      fact: "Acid rain damage to forests and lakes is permanent and irreversible",
      correction: "With pollution controls, many ecosystems have recovered significantly from acid rain damage.",
      category: "Environmental Science"
    },
    {
      id: "computers_never_personal",
      fact: "Computers will never be needed in homes, they're too complex for regular people",
      correction: "Personal computers revolutionized work, education, and entertainment in homes worldwide.",
      category: "Technology"
    },
    {
      id: "stress_causes_ulcers",
      fact: "Stress is the primary cause of stomach ulcers",
      correction: "Later discovered that H. pylori bacteria causes most ulcers, not stress alone.",
      category: "Medicine"
    },
    {
      id: "nuclear_winter_certain",
      fact: "Nuclear war would definitely cause a nuclear winter lasting decades",
      correction: "While still a serious threat, models showed the effect would be less severe and shorter than initially predicted.",
      category: "Climate Science"
    },
    {
      id: "video_games_evil",
      fact: "Video games cause violence and have no educational value",
      correction: "Research shows games can improve cognitive skills, and violence correlation was largely debunked.",
      category: "Psychology"
    },
    {
      id: "mtv_kill_radio",
      fact: "Music television will completely kill radio broadcasting",
      correction: "Radio adapted and evolved, remaining a major medium alongside television and digital platforms.",
      category: "Media Studies"
    },
    {
      id: "artificial_sweeteners_cancer",
      fact: "Artificial sweeteners like saccharin definitely cause cancer",
      correction: "Extensive human studies found no cancer risk from artificial sweeteners at normal consumption levels.",
      category: "Nutrition"
    },
    {
      id: "microwaves_radiation_dangerous",
      fact: "Microwave ovens leak dangerous radiation that causes cancer",
      correction: "Microwaves use non-ionizing radiation and are safe when properly maintained and used.",
      category: "Technology"
    },
    {
      id: "typing_carpel_tunnel_inevitable",
      fact: "Regular computer typing inevitably leads to carpal tunnel syndrome",
      correction: "Proper ergonomics and breaks prevent most repetitive strain injuries from typing.",
      category: "Health Science"
    },
    {
      id: "shaving_hair_grows_thicker",
      fact: "Shaving makes hair grow back thicker and darker",
      correction: "Shaving only affects the hair above skin; it doesn't change follicle structure or growth rate.",
      category: "Biology"
    },
    {
      id: "muscle_turns_to_fat",
      fact: "When you stop exercising, muscle tissue turns into fat",
      correction: "Muscle and fat are different tissues; muscle shrinks and fat may increase separately.",
      category: "Exercise Science"
    },
    {
      id: "bulls_hate_red",
      fact: "Bulls become angry when they see the color red",
      correction: "Bulls are colorblind to red; they react to the movement of the cape, not its color.",
      category: "Animal Behavior"
    },
    {
      id: "vaccines_weaken_immune_system",
      fact: "Vaccines weaken the natural immune system",
      correction: "Vaccines actually train and strengthen the immune system to recognize specific threats.",
      category: "Medicine"
    },
    {
      id: "breakfast_most_important_meal",
      fact: "Breakfast is definitively the most important meal of the day for everyone",
      correction: "Meal timing importance varies by individual; the 'most important meal' claim came from cereal marketing.",
      category: "Nutrition"
    },
    {
      id: "electricity_dangerous_homes",
      fact: "Electricity in homes is too dangerous for widespread adoption",
      correction: "Safety standards and circuit breakers made electrical systems safe for residential use.",
      category: "Technology"
    },
    {
      id: "women_cant_run_marathons",
      fact: "Women's bodies can't handle the physical stress of marathon running",
      correction: "Women excel at long-distance running; this belief stemmed from sexist assumptions, not science.",
      category: "Sports Science"
    },
    {
      id: "flying_bumblebee_impossible",
      fact: "According to aerodynamics, bumblebees shouldn't be able to fly",
      correction: "This was based on oversimplified calculations; bumblebee flight mechanics are well understood now.",
      category: "Physics"
    },
    {
      id: "german_language_banned_usa",
      fact: "German was almost made the official language of the United States",
      correction: "This is a persistent myth; English was the de facto language and no vote on German ever occurred.",
      category: "History"
    },
    {
      id: "coca_cola_dissolves_teeth",
      fact: "Coca-Cola can dissolve teeth and bones overnight",
      correction: "While acidic, Coke requires much longer exposure to cause damage; stomach acid is actually stronger.",
      category: "Chemistry"
    },
    {
      id: "immaculate_conception_virgin_birth",
      fact: "The Immaculate Conception refers to Jesus's virgin birth",
      correction: "The Immaculate Conception refers to Mary being born without original sin, not Jesus's birth.",
      category: "Religious Studies"
    },
    {
      id: "glass_liquid_flows",
      fact: "Glass is a slow-flowing liquid, which is why old windows are thicker at the bottom",
      correction: "Glass is an amorphous solid; old window thickness variations come from manufacturing methods.",
      category: "Physics"
    },
    {
      id: "pennies_empire_state_deadly",
      fact: "A penny dropped from the Empire State Building could kill someone",
      correction: "Terminal velocity and air resistance limit a penny's speed; it would sting but not be lethal.",
      category: "Physics"
    }
  ],
  "1990s": [
    {
      id: "pluto_planet",
      fact: "Pluto is the 9th planet in our solar system",
      correction: "Pluto was reclassified as a dwarf planet in 2006 due to its size and orbital characteristics.",
      category: "Astronomy"
    },
    {
      id: "ulcer_stress",
      fact: "Stomach ulcers are caused by stress and spicy food",
      correction: "H. pylori bacteria was discovered as the main cause of ulcers (Nobel Prize 2005), treatable with antibiotics.",
      category: "Medicine"
    },
    {
      id: "internet_fad",
      fact: "The Internet is just a passing fad for academics",
      correction: "The Internet became the foundation of modern communication, commerce, and information sharing worldwide.",
      category: "Technology"
    },
    {
      id: "dna_junk",
      fact: "98% of human DNA is 'junk DNA' with no function",
      correction: "Much of this DNA regulates gene expression, affects disease risk, and serves important biological functions.",
      category: "Genetics"
    },
    {
      id: "hormone_replacement_safe",
      fact: "Hormone replacement therapy is completely safe for all postmenopausal women",
      correction: "Studies in the 2000s revealed increased risks of blood clots, stroke, and breast cancer for some women.",
      category: "Medicine"
    },
    {
      id: "vaccines_autism_link",
      fact: "The MMR vaccine might cause autism in children",
      correction: "This fraudulent study was retracted; extensive research confirms vaccines do not cause autism.",
      category: "Medicine"
    },
    {
      id: "ozone_hole_growing",
      fact: "The ozone hole will continue growing indefinitely",
      correction: "The Montreal Protocol successfully reduced ozone-depleting substances, and the hole is now healing.",
      category: "Environmental Science"
    },
    {
      id: "beta_carotene_supplements",
      fact: "Beta-carotene supplements prevent cancer and are beneficial for everyone",
      correction: "Studies showed beta-carotene supplements may actually increase cancer risk in smokers.",
      category: "Nutrition"
    },
    {
      id: "cold_fusion_breakthrough",
      fact: "Cold fusion was achieved and would revolutionize energy production",
      correction: "The 1989 cold fusion claims couldn't be replicated and were largely debunked by the scientific community.",
      category: "Physics"
    },
    {
      id: "y2k_apocalypse",
      fact: "Y2K computer bug will cause global technological collapse",
      correction: "Extensive preparation prevented major issues, and most systems transitioned smoothly to 2000.",
      category: "Technology"
    },
    {
      id: "fat_free_healthy",
      fact: "Fat-free foods are automatically healthy and help with weight loss",
      correction: "Many fat-free foods are loaded with sugar and provide poor nutrition compared to natural fats.",
      category: "Nutrition"
    },
    {
      id: "recovered_memories_reliable",
      fact: "Recovered memories of childhood trauma are always accurate",
      correction: "Research showed recovered memories can be false and unreliable, leading to wrongful convictions.",
      category: "Psychology"
    },
    {
      id: "dinosaurs_cold_blooded",
      fact: "All dinosaurs were cold-blooded reptiles like modern lizards",
      correction: "Evidence now suggests many dinosaurs were warm-blooded or had mixed metabolic strategies.",
      category: "Paleontology"
    },
    {
      id: "multiple_intelligence_myth",
      fact: "Howard Gardner's multiple intelligences theory is scientifically validated",
      correction: "Psychometric research found little evidence for separate intelligences; general intelligence (g-factor) remains supported.",
      category: "Education"
    },
    {
      id: "mobile_phones_brain_cancer",
      fact: "Cell phones cause brain cancer from radiation exposure",
      correction: "Large-scale studies found no increased brain cancer risk from normal cell phone use.",
      category: "Health Science"
    },
    {
      id: "mozart_effect_babies",
      fact: "Playing Mozart to babies makes them smarter",
      correction: "The 'Mozart effect' was overstated; brief spatial improvements don't equal lasting intelligence gains.",
      category: "Psychology"
    },
    {
      id: "subliminal_advertising_controls_behavior",
      fact: "Subliminal advertising can control consumer behavior and decisions",
      correction: "Research shows subliminal messages have minimal, short-term effects and can't control complex decisions.",
      category: "Psychology"
    },
    {
      id: "food_combining_digestion",
      fact: "You can't properly digest proteins and carbs eaten together",
      correction: "The human digestive system easily handles mixed meals; food combining rules lack scientific basis.",
      category: "Nutrition"
    },
    {
      id: "detox_diets_cleanse_toxins",
      fact: "Special detox diets are necessary to cleanse toxins from your body",
      correction: "Healthy liver and kidneys naturally detoxify the body; detox diets offer no additional benefits.",
      category: "Nutrition"
    },
    {
      id: "lie_detector_reliable",
      fact: "Polygraph (lie detector) tests are reliable for detecting deception",
      correction: "Polygraphs measure stress responses, not lies, and have high false positive/negative rates.",
      category: "Psychology"
    },
    {
      id: "photographic_memory_exists",
      fact: "Some people have true photographic memory",
      correction: "Eidetic imagery exists but is rare and limited; true 'photographic memory' as popularly described doesn't exist.",
      category: "Neuroscience"
    },
    {
      id: "sleepwalking_dangerous_wake",
      fact: "It's dangerous to wake someone who is sleepwalking",
      correction: "While they may be confused when awakened, it's not dangerous and may prevent injury.",
      category: "Sleep Science"
    },
    {
      id: "y2k_bug_overblown",
      fact: "The Y2K bug was completely overblown media hype with no real danger",
      correction: "Massive preparation efforts prevented serious problems; the threat was real but successfully mitigated.",
      category: "Technology"
    },
    {
      id: "killer_bees_invasion",
      fact: "Africanized 'killer bees' would devastate North American agriculture and kill thousands",
      correction: "While more aggressive than European bees, they integrated into ecosystems with manageable impact.",
      category: "Entomology"
    },
    {
      id: "mad_cow_epidemic_usa",
      fact: "Mad cow disease would cause a major epidemic in the United States",
      correction: "Strict controls prevented widespread BSE; only a handful of cases occurred in North America.",
      category: "Veterinary Medicine"
    },
    {
      id: "dvd_kill_movie_theaters",
      fact: "DVDs will completely kill movie theaters and cinema experience",
      correction: "Theaters adapted with better technology, experiences, and premium formats alongside home viewing.",
      category: "Entertainment"
    },
    {
      id: "human_cloning_immediate",
      fact: "Human reproductive cloning is imminent and unstoppable",
      correction: "Technical challenges, ethical concerns, and regulations prevented human reproductive cloning.",
      category: "Biotechnology"
    },
    {
      id: "email_kill_postal_service",
      fact: "Email will completely eliminate postal mail and shipping services",
      correction: "While personal mail declined, package delivery exploded with e-commerce growth.",
      category: "Technology"
    },
    {
      id: "genetic_engineering_food_dangerous",
      fact: "Genetically modified foods are inherently dangerous to human health",
      correction: "Extensive studies found approved GM foods are as safe as conventional foods.",
      category: "Food Science"
    },
    {
      id: "computer_chess_impossible",
      fact: "Computers will never beat human chess grandmasters",
      correction: "Deep Blue defeated Garry Kasparov in 1997, marking the beginning of AI dominance in chess.",
      category: "Computer Science"
    }
  ],
  "2000s": [
    {
      id: "pluto_planet",
      fact: "Pluto is the 9th planet in our solar system",
      correction: "Pluto was reclassified as a dwarf planet in 2006 due to its size and orbital characteristics.",
      category: "Astronomy",
      debunkedYear: 2006
    },
    {
      id: "fat_bad",
      fact: "All dietary fats are bad for your health",
      correction: "Research distinguished between healthy fats (omega-3s, monounsaturated) and harmful trans fats.",
      category: "Nutrition"
    },
    {
      id: "learning_styles",
      fact: "People learn best through their preferred learning style (visual, auditory, kinesthetic)",
      correction: "Extensive research shows no evidence that matching teaching to 'learning styles' improves outcomes.",
      category: "Education"
    },
    {
      id: "static_brain",
      fact: "Adult brains can't grow new neurons (neurogenesis doesn't occur)",
      correction: "Adult neurogenesis was confirmed in the hippocampus, showing the brain remains more plastic than thought.",
      category: "Neuroscience"
    },
    {
      id: "carbs_always_bad",
      fact: "All carbohydrates are bad and cause weight gain",
      correction: "Complex carbohydrates from whole foods are essential; the type and processing level matter more than avoidance.",
      category: "Nutrition"
    },
    {
      id: "antioxidant_supplements",
      fact: "Antioxidant supplements prevent aging and disease",
      correction: "Studies showed many antioxidant supplements are ineffective or potentially harmful; whole foods are better sources.",
      category: "Nutrition"
    },
    {
      id: "facebook_college_only",
      fact: "Social media platforms like Facebook are just for college students",
      correction: "Social media transformed global communication, commerce, and society across all demographics.",
      category: "Technology"
    },
    {
      id: "human_genome_simple",
      fact: "Humans have about 100,000 genes (more than simpler organisms)",
      correction: "The Human Genome Project revealed humans have only ~20,000-25,000 genes, similar to many simpler organisms.",
      category: "Genetics"
    },
    {
      id: "low_carb_dangerous",
      fact: "Low-carb diets are dangerous and unsustainable long-term",
      correction: "Research showed low-carb diets can be safe and effective for weight loss and diabetes management.",
      category: "Nutrition"
    },
    {
      id: "stem_cells_embryonic_only",
      fact: "Only embryonic stem cells have medical potential",
      correction: "Adult stem cells and induced pluripotent stem cells were discovered as viable alternatives for treatments.",
      category: "Medicine"
    },
    {
      id: "wikipedia_unreliable",
      fact: "Wikipedia is completely unreliable and should never be used for research",
      correction: "Studies showed Wikipedia's accuracy rivals traditional encyclopedias, especially for scientific topics.",
      category: "Information Science"
    },
    {
      id: "planets_formation_slow",
      fact: "Planet formation takes tens of millions of years and is very rare",
      correction: "Exoplanet discoveries revealed planets form more quickly and commonly than previously thought.",
      category: "Astronomy"
    },
    {
      id: "prions_impossible",
      fact: "Proteins cannot be infectious agents - only DNA/RNA can carry disease",
      correction: "Prion diseases (like mad cow disease) proved that misfolded proteins alone can cause infection.",
      category: "Biology"
    },
    {
      id: "digital_divide_permanent",
      fact: "The digital divide between rich and poor will only widen with technology",
      correction: "Mobile technology and internet expansion significantly reduced the digital divide in many regions.",
      category: "Sociology"
    },
    {
      id: "brontosaurus_fake_dinosaur",
      fact: "Brontosaurus was a fake dinosaur created by mistake",
      correction: "Recent analysis confirmed Brontosaurus is a valid genus distinct from Apatosaurus.",
      category: "Paleontology"
    },
    {
      id: "carrots_improve_night_vision",
      fact: "Eating carrots significantly improves night vision",
      correction: "This was WWII propaganda to hide radar technology; carrots provide vitamin A but don't enhance night vision beyond normal levels.",
      category: "Nutrition"
    },
    {
      id: "fingerprints_unique_foolproof",
      fact: "Fingerprints are completely unique and forensically foolproof",
      correction: "While rare, fingerprint errors occur; some patterns can be similar, and quality affects reliability.",
      category: "Forensic Science"
    },
    {
      id: "memory_like_video_recorder",
      fact: "Human memory works like a video recorder, storing exact copies of events",
      correction: "Memory is reconstructive, influenced by emotions, suggestions, and changes with each recall.",
      category: "Neuroscience"
    },
    {
      id: "learning_disabilities_laziness",
      fact: "Learning disabilities are just laziness or lack of effort in disguise",
      correction: "Learning disabilities involve real neurological differences affecting information processing.",
      category: "Education"
    },
    {
      id: "humans_only_five_senses",
      fact: "Humans have exactly five senses: sight, hearing, smell, taste, and touch",
      correction: "Humans have many more senses including balance, proprioception, temperature, and pain reception.",
      category: "Biology"
    },
    {
      id: "swimming_after_eating_cramps",
      fact: "Swimming immediately after eating causes severe cramps and drowning",
      correction: "While digestion redirects some blood flow, exercise-induced cramps are not significantly increased by recent meals.",
      category: "Sports Medicine"
    },
    {
      id: "mental_illness_personal_weakness",
      fact: "Mental illness is a sign of personal weakness or character flaw",
      correction: "Mental illnesses are medical conditions involving brain chemistry and structure, not character defects.",
      category: "Mental Health"
    },
    {
      id: "webmd_cyberchondria_myth",
      fact: "Online health information makes people unnecessarily paranoid about symptoms",
      correction: "While 'cyberchondria' exists, studies show online health info often improves patient knowledge and outcomes.",
      category: "Health Informatics"
    },
    {
      id: "mp3_kill_music_industry",
      fact: "MP3 downloads will completely destroy the music industry",
      correction: "The industry adapted with streaming services, creating new revenue models and distribution methods.",
      category: "Music Industry"
    },
    {
      id: "blogs_kill_journalism",
      fact: "Blogs and amateur content will eliminate professional journalism",
      correction: "Traditional and digital media coexist; both amateur and professional content serve different purposes.",
      category: "Media Studies"
    },
    {
      id: "google_make_us_stupid",
      fact: "Google and search engines are making people stupid and destroying memory",
      correction: "Research shows we adapt by remembering where to find information rather than facts themselves.",
      category: "Cognitive Science"
    },
    {
      id: "video_games_antisocial",
      fact: "Video games make people antisocial and unable to form real relationships",
      correction: "Gaming often involves social interaction and can enhance teamwork and communication skills.",
      category: "Psychology"
    },
    {
      id: "texting_killing_language_skills",
      fact: "Text messaging is destroying proper grammar and language skills",
      correction: "Studies show texting develops new literacy skills without harming traditional writing abilities.",
      category: "Linguistics"
    },
    {
      id: "facebook_college_fad",
      fact: "Facebook is just a college fad that will never expand beyond universities",
      correction: "Facebook became the world's largest social network with billions of users across all demographics.",
      category: "Technology"
    },
    {
      id: "swine_flu_pandemic_overblown",
      fact: "H1N1 swine flu pandemic preparations were massive overreaction",
      correction: "The pandemic was real and deadly; preparations likely prevented much worse outcomes globally.",
      category: "Public Health"
    }
  ],
  "2010s": [
    {
      id: "eggs_cholesterol",
      fact: "Eating eggs raises your cholesterol and causes heart disease",
      correction: "Research showed dietary cholesterol has minimal impact on blood cholesterol for most people.",
      category: "Nutrition"
    },
    {
      id: "multitasking_efficient",
      fact: "Multitasking makes you more productive and efficient",
      correction: "Neuroscience research proved multitasking reduces productivity and increases errors due to task-switching costs.",
      category: "Psychology"
    },
    {
      id: "universe_expansion_slowing",
      fact: "The universe's expansion is slowing down due to gravity",
      correction: "Dark energy was discovered to be accelerating the universe's expansion (Nobel Prize 2011).",
      category: "Cosmology"
    },
    {
      id: "gluten_bad_everyone",
      fact: "Gluten is harmful for everyone and should be avoided",
      correction: "Only people with celiac disease or non-celiac gluten sensitivity need to avoid gluten; it's harmless for most people.",
      category: "Nutrition"
    },
    {
      id: "smartphones_fad",
      fact: "Smartphones and tablets are just expensive toys that won't replace computers",
      correction: "Mobile devices became the primary computing platform for billions of people worldwide.",
      category: "Technology"
    },
    {
      id: "higgs_boson_impossible",
      fact: "The Higgs boson might never be found or might not exist",
      correction: "The Higgs boson was discovered at CERN in 2012, confirming the Standard Model of particle physics.",
      category: "Physics"
    },
    {
      id: "sitting_fine",
      fact: "Sitting for long periods is harmless as long as you exercise sometimes",
      correction: "Research showed prolonged sitting increases health risks independent of exercise levels.",
      category: "Health Science"
    },
    {
      id: "organic_always_better",
      fact: "Organic food is always more nutritious and safer than conventional food",
      correction: "Studies showed minimal nutritional differences; both can be part of a healthy diet when properly produced.",
      category: "Nutrition"
    },
    {
      id: "brain_games_prevent_dementia",
      fact: "Brain training games prevent cognitive decline and dementia",
      correction: "Large studies found brain games don't transfer to real-world cognitive improvements or dementia prevention.",
      category: "Neuroscience"
    },
    {
      id: "text_messaging_killing_language",
      fact: "Text messaging and social media are destroying proper language skills",
      correction: "Research showed digital communication develops new literacy skills without damaging traditional ones.",
      category: "Linguistics"
    },
    {
      id: "violent_games_aggression",
      fact: "Playing violent video games directly causes real-world aggression",
      correction: "Long-term studies found no causal link between game violence and real-world violent behavior.",
      category: "Psychology"
    },
    {
      id: "climate_pause_myth",
      fact: "Global warming paused or stopped in the 2000s",
      correction: "Improved data analysis showed warming continued; the 'pause' was a measurement artifact and cherry-picking.",
      category: "Climate Science"
    },
    {
      id: "genetic_determinism",
      fact: "Genes determine behavior and personality more than environment",
      correction: "Epigenetics research showed environment can influence gene expression and traits significantly.",
      category: "Genetics"
    },
    {
      id: "tablets_laptop_killers",
      fact: "Tablets will completely replace laptops for all computing needs",
      correction: "Both devices found distinct niches; laptops remained essential for complex productivity tasks.",
      category: "Technology"
    },
    {
      id: "adhd_overdiagnosed_fake",
      fact: "ADHD is overdiagnosed and mostly fake, just poor parenting or discipline",
      correction: "ADHD is a well-documented neurological condition with clear brain imaging differences and genetic components.",
      category: "Mental Health"
    },
    {
      id: "vaccines_cause_allergies_asthma",
      fact: "Vaccines cause increased allergies and asthma in children",
      correction: "The 'hygiene hypothesis' research shows vaccines don't cause allergies; improved sanitation may play a role.",
      category: "Medicine"
    },
    {
      id: "natural_always_better_safer",
      fact: "'Natural' products are always safer and better than synthetic ones",
      correction: "Many natural substances are toxic; safety depends on the specific compound, not its origin.",
      category: "Chemistry"
    },
    {
      id: "low_fat_diet_healthiest",
      fact: "Low-fat diets are the healthiest option for everyone",
      correction: "Research showed healthy fats are essential; very low-fat diets can be harmful for some people.",
      category: "Nutrition"
    },
    {
      id: "internet_makes_people_antisocial",
      fact: "Internet use makes people antisocial and destroys real relationships",
      correction: "Studies show the internet can enhance existing relationships and create new forms of meaningful social connection.",
      category: "Sociology"
    },
    {
      id: "global_cooling_consensus",
      fact: "Scientists reached consensus about imminent global cooling in the 1970s",
      correction: "This was media hype; most climate papers in the 1970s actually predicted warming, not cooling.",
      category: "Climate Science"
    },
    {
      id: "eating_late_night_weight_gain",
      fact: "Eating late at night automatically causes weight gain",
      correction: "Weight gain depends on total calories consumed, not timing; late eating may affect sleep and choices but isn't inherently fattening.",
      category: "Nutrition"
    },
    {
      id: "google_glass_privacy_nightmare",
      fact: "Google Glass will create an unstoppable privacy nightmare and social disruption",
      correction: "Technical limitations and social acceptance issues led to Google Glass being discontinued for consumers.",
      category: "Technology"
    },
    {
      id: "3d_tv_future_entertainment",
      fact: "3D television will become the dominant form of home entertainment",
      correction: "Consumer interest in 3D TV quickly waned; manufacturers largely abandoned the technology.",
      category: "Entertainment Technology"
    },
    {
      id: "peak_oil_civilization_collapse",
      fact: "Peak oil will cause immediate civilization collapse as resources run out",
      correction: "Fracking, renewable energy, and efficiency improvements changed oil supply dynamics significantly.",
      category: "Energy Economics"
    },
    {
      id: "tablets_replace_textbooks",
      fact: "Tablets will completely replace physical textbooks in all schools",
      correction: "Many schools use mixed approaches; physical books retain advantages for certain learning styles.",
      category: "Educational Technology"
    },
    {
      id: "qr_codes_everywhere_future",
      fact: "QR codes will be everywhere and replace all other information sharing methods",
      correction: "QR codes found niche uses but didn't achieve universal adoption until the COVID pandemic.",
      category: "Technology"
    },
    {
      id: "bitcoin_worthless_bubble",
      fact: "Bitcoin is a worthless bubble that will crash to zero",
      correction: "Despite volatility, Bitcoin maintained value and gained institutional acceptance over time.",
      category: "Economics"
    },
    {
      id: "facebook_timeline_user_revolt",
      fact: "Facebook Timeline will cause mass user exodus due to privacy concerns",
      correction: "Users adapted to Timeline; Facebook continued growing despite initial resistance.",
      category: "Social Media"
    },
    {
      id: "google_plus_facebook_killer",
      fact: "Google+ will overtake Facebook as the dominant social network",
      correction: "Google+ failed to gain significant traction and was shut down after several years.",
      category: "Technology"
    }
  ],
  "2020s": [
    {
      id: "covid_just_flu",
      fact: "COVID-19 is just like the flu and will disappear quickly",
      correction: "COVID-19 proved to be far more transmissible and deadly than seasonal flu, causing a global pandemic.",
      category: "Medicine",
      debunkedYear: 2020
    },
    {
      id: "ai_decades_away",
      fact: "Artificial General Intelligence is decades away and won't affect most jobs",
      correction: "AI advancement accelerated rapidly, with models like ChatGPT transforming many industries within years.",
      category: "Technology",
      debunkedYear: 2022
    },
    {
      id: "remote_work_impossible",
      fact: "Most office jobs cannot be done remotely without major productivity loss",
      correction: "The pandemic proved many knowledge workers can be equally or more productive working remotely.",
      category: "Workplace Psychology",
      debunkedYear: 2020
    },
    {
      id: "crypto_worthless",
      fact: "Cryptocurrencies have no real-world value or institutional adoption",
      correction: "Major institutions, corporations, and even countries began adopting cryptocurrencies and blockchain technology.",
      category: "Economics"
    },
    {
      id: "mRNA_vaccines_risky",
      fact: "mRNA vaccines are too new and risky for widespread use",
      correction: "mRNA COVID vaccines proved highly effective and safe, leading to Nobel Prize recognition in 2023.",
      category: "Medicine"
    },
    {
      id: "lab_leak_conspiracy",
      fact: "COVID-19 lab leak theories are baseless conspiracy theories",
      correction: "Intelligence agencies and scientists acknowledged lab leak as a possible origin requiring investigation.",
      category: "Virology",
      debunkedYear: 2021
    },
    {
      id: "masks_ineffective",
      fact: "Masks don't work for preventing viral transmission in the general public",
      correction: "Multiple studies confirmed masks significantly reduce COVID transmission when properly worn.",
      category: "Public Health",
      debunkedYear: 2020
    },
    {
      id: "electric_cars_impractical",
      fact: "Electric cars will never be practical for most consumers due to range and charging",
      correction: "EV technology advanced rapidly with Tesla and others achieving mainstream adoption and infrastructure.",
      category: "Transportation",
      debunkedYear: 2020
    },
    {
      id: "social_media_harmless",
      fact: "Social media use has no significant impact on mental health",
      correction: "Research linked excessive social media use to increased anxiety, depression, and body image issues.",
      category: "Psychology"
    },
    {
      id: "nft_revolutionary",
      fact: "NFTs will revolutionize art ownership and digital commerce forever",
      correction: "Most NFT markets collapsed, revealing speculation bubbles rather than sustainable value propositions.",
      category: "Economics",
      debunkedYear: 2022
    },
    {
      id: "metaverse_inevitable",
      fact: "The metaverse will replace most real-world social and work interactions",
      correction: "VR adoption remained niche; people preferred real-world and traditional digital interactions.",
      category: "Technology"
    },
    {
      id: "inflation_transitory",
      fact: "Post-pandemic inflation is definitely transitory and temporary",
      correction: "Inflation proved persistent, requiring central bank intervention and lasting longer than predicted.",
      category: "Economics",
      debunkedYear: 2021
    },
    {
      id: "work_from_home_productivity_myth",
      fact: "Working from home is inherently less productive than office work",
      correction: "Studies showed many remote workers are equally or more productive, challenging traditional office assumptions.",
      category: "Workplace Psychology"
    },
    {
      id: "zoom_fatigue_not_real",
      fact: "Video call fatigue is just an excuse, not a real phenomenon",
      correction: "Research identified specific psychological and physiological causes of video conferencing exhaustion.",
      category: "Psychology",
      debunkedYear: 2021
    },
    {
      id: "social_media_addiction_myth",
      fact: "Social media addiction isn't real, it's just poor self-control",
      correction: "Neurological studies found social media can trigger addiction-like brain patterns similar to substance abuse.",
      category: "Neuroscience"
    },
    {
      id: "electric_grid_renewable_impossible",
      fact: "Renewable energy can never reliably power entire electrical grids",
      correction: "Multiple countries and regions achieved 100% renewable electricity for extended periods.",
      category: "Energy Science"
    },
    {
      id: "lab_grown_meat_impossible_scale",
      fact: "Lab-grown meat will never be commercially viable or scalable",
      correction: "Cultured meat gained regulatory approval and commercial production in multiple countries.",
      category: "Biotechnology",
      debunkedYear: 2020
    },
    {
      id: "quantum_computing_overhype",
      fact: "Quantum computing is pure hype with no practical applications",
      correction: "Quantum computers achieved 'quantum supremacy' and found applications in optimization and cryptography.",
      category: "Computer Science",
      debunkedYear: 2019
    },
    {
      id: "autonomous_vehicles_decade_away",
      fact: "Fully autonomous vehicles are at least a decade away from reality",
      correction: "Self-driving cars deployed commercially in multiple cities, though with limitations.",
      category: "Transportation",
      debunkedYear: 2020
    },
    {
      id: "gene_editing_too_dangerous",
      fact: "CRISPR gene editing is too dangerous and imprecise for medical use",
      correction: "CRISPR treatments received approval for sickle cell disease and other conditions.",
      category: "Biotechnology",
      debunkedYear: 2021
    },
    {
      id: "tiktok_just_dancing_app",
      fact: "TikTok is just a dancing app for teenagers with no broader impact",
      correction: "TikTok became a major platform for news, education, business, and cultural influence across all ages.",
      category: "Social Media",
      debunkedYear: 2020
    },
    {
      id: "contact_tracing_apps_useless",
      fact: "COVID contact tracing apps are useless privacy violations that won't help",
      correction: "Studies showed contact tracing apps helped reduce transmission when widely adopted.",
      category: "Public Health Technology",
      debunkedYear: 2020
    },
    {
      id: "remote_learning_inferior",
      fact: "Remote learning is vastly inferior and will never match in-person education",
      correction: "Pandemic experience showed online learning can be effective with proper design and technology.",
      category: "Educational Technology",
      debunkedYear: 2020
    },
    {
      id: "delivery_drones_impractical",
      fact: "Delivery drones are impractical gimmicks that will never work commercially",
      correction: "Multiple companies successfully deployed commercial drone delivery services.",
      category: "Transportation",
      debunkedYear: 2020
    },
    {
      id: "climate_change_pause_again",
      fact: "Global warming has paused again due to natural cooling cycles",
      correction: "2020s broke multiple temperature records, confirming continued warming trend.",
      category: "Climate Science",
      debunkedYear: 2021
    },
    {
      id: "space_tourism_century_away",
      fact: "Space tourism for civilians is at least a century away from reality",
      correction: "Multiple private companies began offering civilian spaceflights in the 2020s.",
      category: "Aerospace",
      debunkedYear: 2021
    },
    {
      id: "wfh_destroy_innovation",
      fact: "Remote work permanently destroys innovation and creative collaboration",
      correction: "Many companies maintained or improved innovation with hybrid and remote work models.",
      category: "Workplace Science",
      debunkedYear: 2022
    },
    {
      id: "supply_chain_fixed_quickly",
      fact: "Post-pandemic supply chain disruptions will be resolved within months",
      correction: "Supply chain issues persisted for years, reshaping global trade and manufacturing strategies.",
      category: "Economics",
      debunkedYear: 2022
    }
  ]
};

export function getFactsForGraduationYear(year: number): OutdatedFact[] {
  const decade = Math.floor(year / 10) * 10;
  const decadeKey = `${decade}s`;
  
  // Get facts from the graduation decade and earlier decades
  let relevantFacts: OutdatedFact[] = [];
  
  Object.keys(outdatedFacts).forEach(key => {
    const keyDecade = parseInt(key.replace('s', ''));
    if (keyDecade <= decade) {
      relevantFacts = [...relevantFacts, ...outdatedFacts[key]];
    }
  });
  
  // Remove duplicates based on ID
  const uniqueFacts = relevantFacts.filter((fact, index, self) =>
    index === self.findIndex(f => f.id === fact.id)
  );
  
  return uniqueFacts;
}