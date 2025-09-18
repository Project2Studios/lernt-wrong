export interface OutdatedFact {
  id: string;
  fact: string;
  correction: string;
  explanation?: string;
  category: string;
  debunkedYear?: number;
  taughtUntilYear?: number;
  stillTaught?: boolean; // Still being taught despite being debunked
}

export const outdatedFacts: Record<string, OutdatedFact[]> = {
  "1970s": [
    {
      id: "pluto_planet",
      fact: "Pluto is the 9th planet in our solar system",
      correction: "Pluto was reclassified as a dwarf planet in 2006 due to its size and orbital characteristics.",
      explanation: "Pluto was discovered in 1930 and taught as the 9th planet for 76 years. The International Astronomical Union reclassified it in 2006 when they refined the definition of 'planet' to require clearing its orbital neighborhood. Pluto shares its orbit with many Kuiper Belt objects. Despite the scientific reclassification, many still emotionally refer to it as a planet.",
      category: "Astronomy",
      debunkedYear: 2006,
      taughtUntilYear: 2006
    },
    {
      id: "dinosaur_extinction",
      fact: "Dinosaurs went extinct gradually over millions of years",
      correction: "The asteroid impact theory (1980) showed that a massive asteroid caused rapid extinction 66 million years ago.",
      explanation: "Before 1980, paleontologists believed dinosaurs died out slowly due to climate change or competition. Luis Alvarez's team discovered the iridium layer in rock formations, proving a massive asteroid impact 66 million years ago caused rapid extinction. This revolutionary discovery shifted from gradualism to catastrophism in paleontology.",
      category: "Paleontology",
      debunkedYear: 1980,
      taughtUntilYear: 1985
    },
    {
      id: "tongue_taste_map",
      fact: "Different areas of the tongue taste different flavors",
      correction: "All taste buds can detect all basic tastes.",
      explanation: "This 'tongue map' was based on a mistranslation of German research from 1901. While different areas may have slightly different sensitivities, all taste buds can detect sweet, sour, salty, bitter, and umami tastes. Despite being debunked 50 years ago, this myth still appears in many current textbooks.",
      category: "Biology",
      debunkedYear: 1974,
      stillTaught: true
    },
    {
      id: "atoms_indivisible",
      fact: "Atoms are the smallest, indivisible units of matter",
      correction: "We now know atoms contain protons, neutrons, and electrons, and can be split in nuclear reactions.",
      explanation: "Dalton's atomic theory (1803) proposed atoms were indivisible. J.J. Thomson's discovery of electrons (1897) began proving atoms had internal structure. Ernest Rutherford's gold foil experiment (1909) revealed the nucleus. By the 1920s, quantum mechanics fully described atomic structure, but basic chemistry classes still often start with 'indivisible atoms.'",
      category: "Physics",
      debunkedYear: 1897,
      taughtUntilYear: 1950,
      stillTaught: true
    },
    {
      id: "ice_age_cooling",
      fact: "Earth is heading into another ice age due to natural cooling",
      correction: "Climate science now shows human activities are causing global warming, not cooling.",
      explanation: "In the 1970s, some scientists speculated about global cooling based on aerosol pollution and natural cycles. However, even then, more papers predicted warming than cooling. By 1979, the National Academy of Sciences concluded human CO2 emissions would cause significant warming. The 'ice age' myth was amplified by sensationalist media coverage.",
      category: "Climate Science",
      debunkedYear: 1979,
      taughtUntilYear: 1985
    },
    {
      id: "left_right_brain",
      fact: "People are either left-brained (logical) or right-brained (creative)",
      correction: "Neuroscience shows both hemispheres work together; this oversimplification has been debunked.",
      explanation: "University of Utah neuroscientists in 2013 studied 1,011 people aged 7-29 using brain imaging and found no evidence of hemispheric dominance. Despite this, 90%+ of teacher training programs still include this myth.",
      category: "Psychology",
      debunkedYear: 2013,
      stillTaught: true
    },
    {
      id: "cholesterol_deadly",
      fact: "All cholesterol is bad for your health and should be avoided",
      correction: "HDL (good) cholesterol is actually beneficial, and the body needs cholesterol for essential functions.",
      explanation: "The 2015 US Dietary Guidelines removed cholesterol limits after research showed dietary cholesterol has minimal impact on blood cholesterol for most people. The body produces cholesterol for essential functions like hormone production.",
      category: "Medicine",
      debunkedYear: 2015,
      taughtUntilYear: 2015
    },
    {
      id: "spinach_iron_myth",
      fact: "Spinach is exceptionally high in iron compared to other vegetables",
      correction: "A decimal point error in 1870 inflated spinach's iron content 10x; many vegetables have similar or higher iron.",
      explanation: "German chemist Gustav von Bunge incorrectly recorded spinach's iron content as 35mg/100g instead of 3.5mg in 1870. This error wasn't caught for decades and inspired Popeye's spinach obsession (1929). The error was corrected in the 1930s, but the myth persisted. Spinach actually contains 2.7mg/100g - less than many beans, lentils, and even some leafy greens.",
      category: "Nutrition",
      debunkedYear: 1937,
      stillTaught: true
    },
    {
      id: "hair_grows_after_death",
      fact: "Hair and nails continue growing after death",
      correction: "Skin shrinks as the body dehydrates, making hair and nails appear longer, but they don't actually grow.",
      explanation: "Hair and nail growth requires energy and cellular processes that stop at death. The appearance of growth comes from skin dehydration and retraction, exposing more of the hair shaft and nail plate. This forensic science principle was established by the 1920s but the myth persists in horror movies and folklore.",
      category: "Biology",
      debunkedYear: 1920,
      stillTaught: true
    },
    {
      id: "great_wall_space_myth",
      fact: "The Great Wall of China is the only man-made structure visible from space",
      correction: "Many structures are visible from space, and the Great Wall is actually very difficult to see without aid.",
      explanation: "This myth began in the 1930s before space travel existed. Astronauts consistently report the Great Wall is nearly impossible to see without magnification, blending with natural terrain. Cities, airports, and large roads are much more visible. NASA officially debunked this in 2003, but the myth persists in textbooks and popular culture.",
      category: "Geography",
      debunkedYear: 2003,
      stillTaught: true
    },
    {
      id: "goldfish_memory_myth",
      fact: "Goldfish have a 3-second memory span",
      correction: "Goldfish can remember things for months and can be trained to perform tricks.",
      explanation: "Studies have shown goldfish can be trained to navigate mazes, recognize human faces, and even play soccer. They can remember feeding schedules and respond to different colored lights. Their memory spans can last at least 3 months, possibly longer. This myth has been debunked for 60+ years but persists in educational settings.",
      category: "Biology",
      debunkedYear: 1965,
      stillTaught: true
    },
    {
      id: "lightning_never_strikes_twice",
      fact: "Lightning never strikes the same place twice",
      correction: "Lightning frequently strikes the same locations, especially tall buildings and towers.",
      explanation: "The Empire State Building is struck by lightning about 25 times per year. Lightning follows the path of least resistance to the ground, making tall structures prime targets repeatedly. This physics principle was understood by Benjamin Franklin in the 1750s when he invented lightning rods, yet the metaphorical saying persists as literal belief.",
      category: "Physics",
      debunkedYear: 1752,
      stillTaught: true
    },
    {
      id: "cracking_knuckles_arthritis",
      fact: "Cracking your knuckles causes arthritis",
      correction: "Studies show no link between knuckle cracking and arthritis development.",
      explanation: "Dr. Donald Unger famously cracked only his left hand's knuckles for 60 years and found no arthritis difference. Multiple controlled studies since the 1990s have confirmed no causal link. The myth persists through parental warnings and casual health advice despite decades of medical evidence.",
      category: "Medicine",
      debunkedYear: 1990,
      taughtUntilYear: 2000,
      stillTaught: true
    },
    {
      id: "reading_dim_light_ruins_eyes",
      fact: "Reading in dim light permanently damages your eyesight",
      correction: "While it may cause eye strain, there's no evidence of permanent damage from reading in low light.",
      explanation: "This myth likely originated from parents trying to encourage proper lighting habits. Multiple ophthalmological studies since the 1950s have found no evidence that reading in dim light causes permanent eye damage. The American Academy of Ophthalmology officially stated this in 2007, yet parents still commonly warn children about this non-existent danger.",
      category: "Medicine",
      debunkedYear: 2007,
      stillTaught: true
    },
    {
      id: "different_blood_types_personality",
      fact: "Your blood type determines your personality traits",
      correction: "No scientific evidence supports any correlation between blood type and personality.",
      explanation: "This pseudoscience originated in 1920s Japan and was debunked by multiple studies in the 1980s. Large-scale personality studies have consistently found zero correlation between ABO blood types and personality traits. Despite scientific consensus, blood type personality theory remains popular in East Asian countries and appears in dating apps and employment screening.",
      category: "Psychology",
      debunkedYear: 1980,
      stillTaught: true
    },
    {
      id: "sugar_makes_kids_hyperactive",
      fact: "Sugar causes hyperactivity in children",
      correction: "Controlled studies show no link between sugar consumption and hyperactive behavior.",
      explanation: "A 1995 JAMA meta-analysis of 23 experiments found no effect of sugar on behavior. The NIH announced no link as early as 1982. This myth persists despite overwhelming scientific evidence.",
      category: "Nutrition",
      debunkedYear: 1995,
      taughtUntilYear: 2000
    },
    {
      id: "waiting_after_eating_swim",
      fact: "You must wait an hour after eating before swimming or you'll get cramps and drown",
      correction: "While digestion uses energy, there's no evidence that swimming after eating causes dangerous cramps.",
      explanation: "The American Red Cross removed this warning from their guidelines in the 1990s after finding no documented cases of drowning caused by eating before swimming. Sports medicine research shows that while heavy meals may cause minor discomfort during exercise, they don't cause dangerous cramps. This persistent myth keeps kids out of pools unnecessarily.",
      category: "Health Science",
      debunkedYear: 1990,
      stillTaught: true
    },
    {
      id: "spicy_food_ulcers",
      fact: "Spicy food causes stomach ulcers",
      correction: "Ulcers are primarily caused by H. pylori bacteria, not spicy food consumption.",
      explanation: "Barry Marshall and Robin Warren's research (1982-1985) proved H. pylori bacteria causes 90%+ of ulcers. Marshall even infected himself to prove the point. They won the 2005 Nobel Prize for this discovery.",
      category: "Medicine",
      debunkedYear: 1982,
      taughtUntilYear: 1990
    },
    {
      id: "alpha_wolves_pack_leader",
      fact: "Wolf packs have alpha wolves that dominate through aggression",
      correction: "Wolf packs are actually family units led by parents, not aggressive dominance hierarchies.",
      explanation: "The 'alpha wolf' concept came from studies of captive wolves in artificial packs in the 1940s. Dr. David Mech, who popularized the term, spent decades correcting this error after studying wild wolves. Wild packs are simply families with parents leading their offspring. Mech has been trying to correct this misconception since the 1990s.",
      category: "Animal Behavior",
      debunkedYear: 1999,
      stillTaught: true
    },
    {
      id: "chameleons_change_color_camouflage",
      fact: "Chameleons change color primarily for camouflage",
      correction: "Chameleons change color mainly for communication and temperature regulation, not camouflage.",
      explanation: "Research from the 1970s showed chameleons change color primarily to signal mood, dominance, and mating readiness, and to regulate body temperature. While some species do use color for camouflage, it's not the primary function as commonly taught in schools and nature documentaries.",
      category: "Biology",
      debunkedYear: 1970,
      taughtUntilYear: 1995,
      stillTaught: true
    },
    {
      id: "quicksand_deadly_sinking",
      fact: "Quicksand is extremely dangerous and will suck you down completely",
      correction: "Quicksand is denser than the human body; you can't sink completely and can escape with proper technique.",
      explanation: "Physics research from the 1960s proved quicksand has a density of about 2g/mL while humans average 1g/mL, meaning you can't sink past your waist. The Hollywood dramatization of quicksand as a deadly trap has been scientifically debunked for decades but continues to appear in entertainment and educational materials.",
      category: "Physics",
      debunkedYear: 1960,
      taughtUntilYear: 1990,
      stillTaught: true
    },
    {
      id: "medieval_people_thought_earth_flat",
      fact: "People in medieval times believed the Earth was flat",
      correction: "Educated people knew Earth was round since ancient Greece; the flat Earth belief is a modern myth about the past.",
      explanation: "This myth was largely created by 19th-century Protestant scholars like Washington Irving to portray the Catholic Middle Ages as ignorant. Medieval scholars like Thomas Aquinas, Albertus Magnus, and Roger Bacon all taught spherical Earth theory. The myth was academically debunked by 1945 but persists in popular culture and some textbooks.",
      category: "History",
      debunkedYear: 1945,
      taughtUntilYear: 1980,
      stillTaught: true
    },
    {
      id: "vikings_horned_helmets",
      fact: "Vikings wore horned helmets in battle",
      correction: "No archaeological evidence supports horned helmets; this came from 19th-century romantic art and opera.",
      explanation: "This image was popularized by Carl Emil Doepler's costume designs for Wagner's Ring Cycle operas (1870s). Archaeological evidence shows Vikings wore simple conical or rounded iron helmets. The myth was academically debunked by the 1960s but remains entrenched in popular culture, children's books, and entertainment media.",
      category: "History",
      debunkedYear: 1960,
      taughtUntilYear: 1990,
      stillTaught: true
    },
    {
      id: "romans_vomited_to_eat_more",
      fact: "Ancient Romans regularly vomited during feasts to continue eating",
      correction: "The vomitorium was an exit from amphitheaters, not a place for vomiting; mass purging at feasts is largely myth.",
      explanation: "This myth confuses the Latin 'vomitorium' (meaning 'to spew forth' - referring to how crowds exited amphitheaters) with actual vomiting. While some Romans occasionally purged for health reasons, mass vomiting at feasts was not common practice. Classical scholars debunked this misconception by the 1960s, but it persists in popular culture and casual historical references.",
      category: "History",
      debunkedYear: 1960,
      taughtUntilYear: 1985,
      stillTaught: true
    },
    {
      id: "napoleon_short_height",
      fact: "Napoleon was unusually short for his time",
      correction: "Napoleon was about 5'7\", average height for 18th-century French men; the 'short' myth came from unit conversion errors.",
      explanation: "Napoleon was 5'2\" in French units (pieds du roi) but this converts to about 5'7\" in modern measurements. The confusion arose from differences between French and English measurement systems. British propaganda also contributed to the 'short' image. Historians corrected this error by the 1960s, but the myth persists in popular culture and casual references.",
      category: "History",
      debunkedYear: 1960,
      taughtUntilYear: 1985,
      stillTaught: true
    },
    {
      id: "witches_burned_salem",
      fact: "Witches were burned at the stake during the Salem witch trials",
      correction: "Salem witch trial victims were hanged, not burned; burning was more common in Europe.",
      explanation: "All 19 victims of the Salem witch trials were hanged, with one pressed to death. Burning witches was a European practice, not American. This confusion likely stems from mixing European and American witch trial history in popular media. Historians have clearly documented the execution methods since the trials ended in 1693, yet the burning myth persists in popular culture.",
      category: "History",
      debunkedYear: 1693,
      stillTaught: true
    },
    {
      id: "turkey_makes_you_sleepy",
      fact: "Turkey makes you sleepy because it's high in tryptophan",
      correction: "Many foods have similar tryptophan levels; holiday sleepiness comes from overeating and alcohol consumption.",
      explanation: "Turkey contains about 0.24g tryptophan per 100g, similar to chicken (0.24g) and less than cheddar cheese (0.32g). The myth was popularized in the 1980s but debunked by nutritional research in the 1990s. Holiday drowsiness actually results from large meals triggering blood flow to digestion, alcohol consumption, and relaxation from family gatherings. Despite scientific evidence, this myth persists in holiday traditions and casual nutrition discussions.",
      category: "Nutrition",
      debunkedYear: 1995,
      taughtUntilYear: 2005,
      stillTaught: true
    },
    {
      id: "cracking_joints_releases_toxins",
      fact: "Cracking joints releases built-up toxins and is therapeutic",
      correction: "Joint cracking releases gas bubbles from synovial fluid; no toxins are involved in the process.",
      explanation: "Medical research in the 1970s proved joint cracking (cavitation) releases nitrogen gas bubbles from synovial fluid, not toxins. Dr. Donald Unger's 60-year self-experiment (cracking only left hand knuckles) showed no difference in arthritis development, debunking therapeutic claims. Despite orthopedic consensus since the 1990s, chiropractors and alternative medicine practitioners still promote the 'toxin release' theory.",
      category: "Medicine",
      debunkedYear: 1990,
      taughtUntilYear: 2000,
      stillTaught: true
    },
    {
      id: "humans_swallow_spiders_sleeping",
      fact: "People swallow 8 spiders per year while sleeping",
      correction: "This statistic is completely fabricated; spiders avoid sleeping humans due to vibrations and breath.",
      explanation: "This myth was deliberately created in 1993 by columnist Lisa Holst to demonstrate how easily false information spreads. Spiders actively avoid the warm, humid, vibrating environment around sleeping humans. Despite being proven false from its creation, this 'fact' is still commonly cited in classrooms and casual conversation.",
      category: "Biology",
      debunkedYear: 1993,
      stillTaught: true
    }
  ],
  "1980s": [
    {
      id: "pluto_planet",
      fact: "Pluto is the 9th planet in our solar system",
      correction: "Pluto was reclassified as a dwarf planet in 2006 due to its size and orbital characteristics.",
      explanation: "Pluto was discovered in 1930 and taught as the 9th planet for 76 years. The International Astronomical Union reclassified it in 2006 when they refined the definition of 'planet' to require clearing its orbital neighborhood. Pluto shares its orbit with many Kuiper Belt objects. Despite the scientific reclassification, many still emotionally refer to it as a planet.",
      category: "Astronomy",
      debunkedYear: 2006,
      taughtUntilYear: 2006
    },
    {
      id: "brain_percentage",
      fact: "Humans only use 10% of their brain",
      correction: "Modern neuroscience shows we use nearly all of our brain, even during simple tasks.",
      explanation: "Brain imaging technology like fMRI and PET scans show that we use virtually every part of our brain, even during sleep. Damage to any area of the brain has noticeable effects. Despite decades of neuroscience evidence, 33% of teachers still believed this myth as of 2017.",
      category: "Neuroscience",
      debunkedYear: 1990,
      stillTaught: true
    },
    {
      id: "food_pyramid",
      fact: "The food pyramid with 6-11 servings of bread/grains is optimal",
      correction: "Nutritional science now emphasizes vegetables, healthy fats, and protein over heavy grain consumption.",
      explanation: "The USDA Food Guide Pyramid, introduced in 1992, recommended 6-11 daily servings of bread, cereal, rice, and pasta. This grain-heavy approach was heavily influenced by agricultural lobbying and dated nutritional understanding. Research from the 2000s onward revealed that refined carbohydrates contribute to obesity, diabetes, and metabolic disorders. The pyramid was replaced by MyPyramid in 2005, then MyPlate in 2011, which emphasizes vegetables and fruits over grains. Many nutritionists now advocate for Mediterranean or low-carb approaches. Despite updates, some schools and institutions still reference the original pyramid's proportions.",
      category: "Nutrition",
      debunkedYear: 2005,
      taughtUntilYear: 2010,
      stillTaught: true
    },
    {
      id: "continental_drift_theory",
      fact: "Continental drift was still considered controversial",
      correction: "Plate tectonics became widely accepted, explaining how continents move via seafloor spreading and subduction.",
      explanation: "Alfred Wegener proposed continental drift in 1912, but it was widely rejected because he couldn't explain the mechanism. The breakthrough came in the 1960s when seafloor spreading was discovered, showing how ocean floors expand at mid-ocean ridges. Harry Hess's 1962 theory of seafloor spreading and the discovery of magnetic striping patterns in ocean floors provided the missing mechanism. By 1968, plate tectonics unified continental drift with seafloor spreading and subduction zones. However, many geology textbooks continued teaching continental drift as 'controversial' into the early 1980s due to educational lag, despite the scientific consensus being established over a decade earlier.",
      category: "Geology",
      debunkedYear: 1968,
      taughtUntilYear: 1985
    },
    {
      id: "saturated_fat_deadly",
      fact: "All saturated fats cause heart disease and should be eliminated",
      correction: "Research now shows some saturated fats may be neutral or even beneficial, context and source matter more than type alone.",
      explanation: "The anti-saturated fat campaign began with Ancel Keys' Seven Countries Study in the 1950s, but this had methodological issues. By the 2010s, meta-analyses found no strong evidence linking saturated fat to heart disease. Some sources like coconut oil and dairy may even be beneficial. The dietary guidelines began changing in 2015.",
      category: "Nutrition",
      debunkedYear: 2010,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "memory_storage",
      fact: "Memory works like a computer, storing perfect copies of experiences",
      correction: "Memory is reconstructive and changes each time we recall it, often becoming less accurate over time.",
      explanation: "The computer metaphor for memory dominated psychology from the 1950s-1970s, suggesting memories were filed away like data on a hard drive. Elizabeth Loftus's groundbreaking research in the 1970s-80s revealed that memories are reconstructed each time we recall them, incorporating new information and changing details. Her studies on false memories showed people could be convinced they experienced events that never happened, like being lost in a mall as a child. Frederic Bartlett's earlier work on 'reconstructive memory' was largely ignored until Loftus's experiments proved memories are dynamic, not static. The computer metaphor persists in education because it feels intuitive and matches our subjective experience of 'retrieving' memories, despite overwhelming evidence of memory's reconstructive nature.",
      category: "Psychology",
      debunkedYear: 1974,
      taughtUntilYear: 1990,
      stillTaught: true
    },
    {
      id: "acid_rain_permanent",
      fact: "Acid rain damage to forests and lakes is permanent and irreversible",
      correction: "With pollution controls, many ecosystems have recovered significantly from acid rain damage.",
      explanation: "In the 1980s, scientists predicted catastrophic permanent damage from acid rain caused by sulfur dioxide emissions. The U.S. Clean Air Act (1990) required dramatic reductions in sulfur emissions. Many lakes and forests in the Northeast U.S. and Europe have since recovered their pH levels and biodiversity. Studies in the 2000s documented remarkable ecosystem recovery, proving environmental damage can be reversible with proper action.",
      category: "Environmental Science",
      debunkedYear: 2000,
      taughtUntilYear: 2005
    },
    {
      id: "computers_never_personal",
      fact: "Computers will never be needed in homes, they're too complex for regular people",
      correction: "Personal computers revolutionized work, education, and entertainment in homes worldwide.",
      explanation: "Ken Olsen of Digital Equipment Corporation made this prediction in 1977. The IBM PC was released in 1981, proving him wrong within 4 years. By 1990, personal computers were commonplace in homes and businesses.",
      category: "Technology",
      debunkedYear: 1981,
      taughtUntilYear: 1985
    },
    {
      id: "stress_causes_ulcers",
      fact: "Stress is the primary cause of stomach ulcers",
      correction: "Later discovered that H. pylori bacteria causes most ulcers, not stress alone.",
      explanation: "For decades, doctors prescribed bland diets and stress reduction for ulcers. Barry Marshall and Robin Warren's research (1982-1984) proved that Helicobacter pylori bacteria causes 90% of ulcers. Marshall famously infected himself with the bacteria to prove the point. They won the 2005 Nobel Prize for Medicine for this revolutionary discovery that transformed ulcer treatment from stress management to antibiotics.",
      category: "Medicine",
      debunkedYear: 1984,
      taughtUntilYear: 1995
    },
    {
      id: "nuclear_winter_certain",
      fact: "Nuclear war would definitely cause a nuclear winter lasting decades",
      correction: "While still a serious threat, models showed the effect would be less severe and shorter than initially predicted.",
      explanation: "Carl Sagan and colleagues' 1983 'nuclear winter' theory predicted massive nuclear war would block sunlight for years, causing global crop failure and famine. Later climate modeling in the 1990s-2000s showed the effects would be less severe and shorter-lasting than originally feared, though still catastrophic. Modern models suggest regional nuclear conflicts could cause significant but temporary climate effects, revising but not dismissing nuclear winter concerns.",
      category: "Climate Science",
      debunkedYear: 1990,
      taughtUntilYear: 2000
    },
    {
      id: "video_games_evil",
      fact: "Video games cause violence and have no educational value",
      correction: "Research shows games can improve cognitive skills, and violence correlation was largely debunked.",
      explanation: "Moral panic about video games peaked in the 1980s-1990s, with politicians blaming games for societal violence. However, comprehensive meta-analyses in the 2000s-2010s found no causal link between game playing and real-world aggression. Studies by IBM and educational researchers showed games can improve problem-solving, spatial skills, and teamwork. Despite research evidence, negative stereotypes persist in political discourse and some educational settings.",
      category: "Psychology",
      debunkedYear: 2005,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "mtv_kill_radio",
      fact: "Music television will completely kill radio broadcasting",
      correction: "Radio adapted and evolved, remaining a major medium alongside television and digital platforms.",
      explanation: "When MTV launched in 1981, media analysts predicted radio would become obsolete as visual music took over. Instead, radio adapted by diversifying formats (talk, news, sports), developing unique personalities, and embracing digital platforms. Radio's portability and local focus kept it relevant. Ironically, MTV itself shifted away from music videos by the 2000s, while radio continues to thrive globally.",
      category: "Media Studies",
      debunkedYear: 1990,
      taughtUntilYear: 1995
    },
    {
      id: "artificial_sweeteners_cancer",
      fact: "Artificial sweeteners like saccharin definitely cause cancer",
      correction: "Extensive human studies found no cancer risk from artificial sweeteners at normal consumption levels.",
      explanation: "The saccharin cancer scare began in 1977 with rat studies that used doses equivalent to 800+ diet sodas per day. Human epidemiological studies throughout the 1980s-2000s found no cancer risk. The FDA removed saccharin from the carcinogen list in 2000, but many people still avoid artificial sweeteners based on the outdated scare.",
      category: "Nutrition",
      debunkedYear: 2000,
      taughtUntilYear: 2005,
      stillTaught: true
    },
    {
      id: "microwaves_radiation_dangerous",
      fact: "Microwave ovens leak dangerous radiation that causes cancer",
      correction: "Microwaves use non-ionizing radiation and are safe when properly maintained and used.",
      explanation: "Fear of microwave radiation peaked in the 1980s due to confusion between ionizing radiation (like X-rays) and non-ionizing microwaves. The FDA extensively tested microwave ovens in the 1970s-1980s and found minimal leakage well below harmful levels. Multiple epidemiological studies since 1990 found no cancer risk from microwave use. Despite regulatory approval and safety testing, radiation fears persist in alternative health communities.",
      category: "Technology",
      debunkedYear: 1990,
      taughtUntilYear: 2000,
      stillTaught: true
    },
    {
      id: "typing_carpel_tunnel_inevitable",
      fact: "Regular computer typing inevitably leads to carpal tunnel syndrome",
      correction: "Proper ergonomics and breaks prevent most repetitive strain injuries from typing.",
      explanation: "As computers became common in the 1980s, carpal tunnel syndrome cases increased, leading to fears that typing was inherently dangerous. However, occupational health research in the 1990s showed that proper keyboard height, wrist position, and regular breaks prevent most repetitive strain injuries. True carpal tunnel syndrome has multiple causes beyond typing. Despite workplace ergonomics programs, typing fears persist in casual health discussions.",
      category: "Health Science",
      debunkedYear: 1995,
      taughtUntilYear: 2005
    },
    {
      id: "shaving_hair_grows_thicker",
      fact: "Shaving makes hair grow back thicker and darker",
      correction: "Shaving only affects the hair above skin; it doesn't change follicle structure or growth rate.",
      explanation: "This myth was scientifically debunked as early as 1928 by clinical studies, but persists because freshly cut hair feels coarser due to the blunt edge. The appearance of thickness comes from the uniform length of regrowth, not actual changes to hair follicles. Despite 95+ years of evidence, this myth is still commonly repeated by parents and in personal care discussions.",
      category: "Biology",
      debunkedYear: 1928,
      stillTaught: true
    },
    {
      id: "muscle_turns_to_fat",
      fact: "When you stop exercising, muscle tissue turns into fat",
      correction: "Muscle and fat are different tissues; muscle shrinks and fat may increase separately.",
      explanation: "This myth was debunked by basic physiology research in the 1960s. Muscle tissue (protein) and adipose tissue (fat) are completely different cell types that cannot transform into each other. When people stop exercising, muscle atrophies due to lack of use while fat may accumulate due to unchanged caloric intake. Despite being basic biology, this myth persists in fitness culture and informal health education.",
      category: "Exercise Science",
      debunkedYear: 1960,
      taughtUntilYear: 1985,
      stillTaught: true
    },
    {
      id: "bulls_hate_red",
      fact: "Bulls become angry when they see the color red",
      correction: "Bulls are colorblind to red; they react to the movement of the cape, not its color.",
      explanation: "Veterinary research in the 1960s proved that bulls, like most cattle, have dichromatic vision and cannot distinguish red from green. They respond to the motion and waving of the matador's cape, not its color. The red color is traditional for hiding bloodstains, not for angering bulls. Despite scientific evidence, this myth persists in popular culture and children's cartoons.",
      category: "Animal Behavior",
      debunkedYear: 1960,
      taughtUntilYear: 1985,
      stillTaught: true
    },
    {
      id: "vaccines_weaken_immune_system",
      fact: "Vaccines weaken the natural immune system",
      correction: "Vaccines actually train and strengthen the immune system to recognize specific threats.",
      explanation: "This misconception stems from misunderstanding how vaccines work. Vaccines introduce weakened or inactivated pathogens to train the immune system without causing disease. Extensive immunological research since the 1960s shows vaccinated individuals have stronger immune responses to targeted diseases. Multiple large-scale studies prove vaccines don't weaken overall immunity. Despite scientific consensus, this myth persists in anti-vaccination communities and alternative health circles.",
      category: "Medicine",
      debunkedYear: 1970,
      taughtUntilYear: 1990,
      stillTaught: true
    },
    {
      id: "breakfast_most_important_meal",
      fact: "Breakfast is definitively the most important meal of the day for everyone",
      correction: "Meal timing importance varies by individual; the 'most important meal' claim came from cereal marketing.",
      explanation: "The phrase 'breakfast is the most important meal of the day' was popularized by cereal companies in the early 1900s, particularly Kellogg's, to sell their products. While some people benefit from breakfast, nutrition research shows meal timing varies by individual metabolism, lifestyle, and health goals. Studies since the 2000s found intermittent fasting and skipping breakfast can be healthy for many people. Despite marketing origins, this claim persists in nutrition education and public health messaging.",
      category: "Nutrition",
      debunkedYear: 2005,
      stillTaught: true
    },
    {
      id: "electricity_dangerous_homes",
      fact: "Electricity in homes is too dangerous for widespread adoption",
      correction: "Safety standards and circuit breakers made electrical systems safe for residential use.",
      explanation: "Early electrical systems in the 1880s-1900s were genuinely dangerous, with poor insulation and no safety features. Thomas Edison and others initially opposed AC power as too dangerous. However, the development of circuit breakers, proper grounding, and electrical codes by the 1920s made home electricity safe. Gas lighting was actually more dangerous than electric lighting. Despite early concerns being resolved a century ago, some rural areas resisted electrical adoption until the 1950s.",
      category: "Technology",
      debunkedYear: 1920,
      taughtUntilYear: 1950
    },
    {
      id: "women_cant_run_marathons",
      fact: "Women's bodies can't handle the physical stress of marathon running",
      correction: "Women excel at long-distance running; this belief stemmed from sexist assumptions, not science.",
      explanation: "The Boston Marathon banned women until 1972 based on unfounded medical concerns about uterine damage and hysteria. Kathrine Switzer famously crashed the 1967 race, proving women could complete marathons. Sports medicine research in the 1970s-1980s showed women have advantages in ultra-distance events due to better fat metabolism and pain tolerance. Despite evidence and elite female marathon performances, some sporting institutions maintained discriminatory policies into the 1980s.",
      category: "Sports Science",
      debunkedYear: 1972,
      taughtUntilYear: 1985
    },
    {
      id: "flying_bumblebee_impossible",
      fact: "According to aerodynamics, bumblebees shouldn't be able to fly",
      correction: "This was based on oversimplified calculations; bumblebee flight mechanics are well understood now.",
      explanation: "This myth originated from a 1930s casual comment by engineer August Magnan, who applied fixed-wing aircraft calculations to bees. By the 1970s, high-speed photography and advanced mathematics fully explained bumblebee flight through figure-8 wing patterns and vortex generation. Despite being resolved 50+ years ago, this 'mystery' is still cited in motivational contexts and casual science discussions.",
      category: "Physics",
      debunkedYear: 1970,
      taughtUntilYear: 1990,
      stillTaught: true
    },
    {
      id: "german_language_banned_usa",
      fact: "German was almost made the official language of the United States",
      correction: "This is a persistent myth; English was the de facto language and no vote on German ever occurred.",
      explanation: "This myth stems from a misinterpretation of a 1794 Virginia petition to have some government documents translated into German for German-speaking citizens. There was never a vote to make German the official language, and English was already the working language of government. Historians have debunked this myth repeatedly since the 1940s.",
      category: "History",
      debunkedYear: 1940,
      taughtUntilYear: 1980,
      stillTaught: true
    },
    {
      id: "coca_cola_dissolves_teeth",
      fact: "Coca-Cola can dissolve teeth and bones overnight",
      correction: "While acidic, Coke requires much longer exposure to cause damage; stomach acid is actually stronger.",
      explanation: "This urban legend stems from Coca-Cola's acidity (pH 2.5) and demonstrations where teeth left in Coke for days show damage. However, normal consumption doesn't expose teeth to prolonged acid contact. Stomach acid (pH 1.5-2) is actually stronger than Coke. While frequent soda consumption can contribute to tooth decay, the 'overnight dissolution' claim is false. This myth was debunked by dental research in the 1980s but persists in health education and anti-soda campaigns.",
      category: "Chemistry",
      debunkedYear: 1985,
      stillTaught: true
    },
    {
      id: "immaculate_conception_virgin_birth",
      fact: "The Immaculate Conception refers to Jesus's virgin birth",
      correction: "The Immaculate Conception refers to Mary being born without original sin, not Jesus's birth.",
      explanation: "This common confusion between two distinct Catholic doctrines persists despite centuries of clarification. The Immaculate Conception (dogma declared 1854) refers to Mary being conceived without original sin. Jesus's virgin birth is called the Incarnation or Annunciation. Even many Catholics confuse these terms, and the misconception appears in educational materials and popular culture discussions of Christianity.",
      category: "Religious Studies",
      debunkedYear: 1854,
      stillTaught: true
    },
    {
      id: "glass_liquid_flows",
      fact: "Glass is a slow-flowing liquid, which is why old windows are thicker at the bottom",
      correction: "Glass is an amorphous solid; old window thickness variations come from manufacturing methods.",
      explanation: "This persistent myth confuses glass's amorphous structure with being a liquid. Old windows are thicker at the bottom because crown glass manufacturing created uneven sheets, and glaziers typically installed the thicker side down for stability. Modern materials science definitively classifies glass as an amorphous solid. Despite scientific consensus since the 1960s, this myth is still taught in some schools and appears in popular science discussions.",
      category: "Physics",
      debunkedYear: 1960,
      stillTaught: true
    },
    {
      id: "pennies_empire_state_deadly",
      fact: "A penny dropped from the Empire State Building could kill someone",
      correction: "Terminal velocity and air resistance limit a penny's speed; it would sting but not be lethal.",
      explanation: "Physics experiments and calculations show a penny reaches terminal velocity of about 50 mph due to air resistance, insufficient to cause lethal injury. MythBusters tested this extensively in 2003, confirming the penny would sting but not kill. The myth persists because people incorrectly apply free-fall calculations without considering air resistance. Despite physics education and popular TV debunking, this urban legend continues in casual discussions.",
      category: "Physics",
      debunkedYear: 2003,
      stillTaught: true
    }
  ],
  "1990s": [
    {
      id: "pluto_planet",
      fact: "Pluto is the 9th planet in our solar system",
      correction: "Pluto was reclassified as a dwarf planet in 2006 due to its size and orbital characteristics.",
      explanation: "Pluto was discovered in 1930 and taught as the 9th planet for 76 years. The International Astronomical Union reclassified it in 2006 when they refined the definition of 'planet' to require clearing its orbital neighborhood. Pluto shares its orbit with many Kuiper Belt objects. Despite the scientific reclassification, many still emotionally refer to it as a planet.",
      category: "Astronomy",
      debunkedYear: 2006,
      taughtUntilYear: 2006
    },
    {
      id: "ulcer_stress",
      fact: "Stomach ulcers are caused by stress and spicy food",
      correction: "H. pylori bacteria was discovered as the main cause of ulcers (Nobel Prize 2005), treatable with antibiotics.",
      explanation: "For decades, doctors prescribed bland diets and stress reduction for ulcers. Barry Marshall and Robin Warren's research (1982-1984) proved that Helicobacter pylori bacteria causes 90% of ulcers. Marshall famously infected himself with the bacteria to prove the point. They won the 2005 Nobel Prize for Medicine for this revolutionary discovery that transformed ulcer treatment from stress management to antibiotics.",
      category: "Medicine",
      debunkedYear: 1984,
      taughtUntilYear: 1995
    },
    {
      id: "internet_fad",
      fact: "The Internet is just a passing fad for academics",
      correction: "The Internet became the foundation of modern communication, commerce, and information sharing worldwide.",
      explanation: "Robert Metcalfe, inventor of Ethernet, predicted in 1995 that the Internet would 'catastrophically collapse' in 1996. He was so wrong that he literally ate his words (the printed prediction) at a conference in 1999.",
      category: "Technology",
      debunkedYear: 1999,
      taughtUntilYear: 2000
    },
    {
      id: "dna_junk",
      fact: "98% of human DNA is 'junk DNA' with no function",
      correction: "Much of this DNA regulates gene expression, affects disease risk, and serves important biological functions.",
      explanation: "The term 'junk DNA' was coined in 1972 by geneticist Susumu Ohno to describe non-coding DNA sequences. However, the ENCODE Project (2003-2012) revolutionized this understanding, revealing that 80% of the genome has biochemical function. Research since the 1990s showed 'junk DNA' includes regulatory elements, enhancers, and sequences affecting gene expression. Despite scientific evidence, many textbooks still describe most DNA as 'junk' or non-functional.",
      category: "Genetics",
      debunkedYear: 2012,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "hormone_replacement_safe",
      fact: "Hormone replacement therapy is completely safe for all postmenopausal women",
      correction: "Studies in the 2000s revealed increased risks of blood clots, stroke, and breast cancer for some women.",
      explanation: "HRT was widely promoted as safe and beneficial from the 1960s through 1990s based on observational studies. The Women's Health Initiative study (1991-2002) and Million Women Study (1996-2001) revealed significant risks including 26% increased breast cancer risk and doubled blood clot risk. The WHI study was halted early in 2002 due to safety concerns. Despite updated guidelines, many women still believe HRT is universally safe.",
      category: "Medicine",
      debunkedYear: 2002,
      taughtUntilYear: 2005,
      stillTaught: true
    },
    {
      id: "vaccines_autism_link",
      fact: "The MMR vaccine might cause autism in children",
      correction: "This fraudulent study was retracted; extensive research confirms vaccines do not cause autism.",
      explanation: "Andrew Wakefield's 1998 study linking MMR vaccines to autism was based on 12 children and contained fabricated data. The Lancet retracted it in 2010, and Wakefield lost his medical license. Multiple studies of millions of children have found no autism-vaccine link. Despite overwhelming scientific consensus and criminal prosecution of the fraudulent research, vaccine hesitancy persists in some communities, causing preventable disease outbreaks.",
      category: "Medicine",
      debunkedYear: 2010,
      stillTaught: true
    },
    {
      id: "ozone_hole_growing",
      fact: "The ozone hole will continue growing indefinitely",
      correction: "The Montreal Protocol successfully reduced ozone-depleting substances, and the hole is now healing.",
      explanation: "The Antarctic ozone hole was discovered in 1985, leading to apocalyptic predictions of ever-expanding ozone depletion. The Montreal Protocol (1987) phased out chlorofluorocarbons (CFCs) globally. By 2019, NASA confirmed the ozone hole was healing and shrinking. This represents one of the most successful international environmental agreements in history. Despite the recovery, many people still believe ozone depletion is worsening.",
      category: "Environmental Science",
      debunkedYear: 2019,
      taughtUntilYear: 2005
    },
    {
      id: "beta_carotene_supplements",
      fact: "Beta-carotene supplements prevent cancer and are beneficial for everyone",
      correction: "Studies showed beta-carotene supplements may actually increase cancer risk in smokers.",
      explanation: "Initial observational studies in the 1980s linked beta-carotene-rich foods to lower cancer rates. However, the Finnish Alpha-Tocopherol Beta-Carotene Cancer Prevention Study (1994) found 18% higher lung cancer rates in smokers taking beta-carotene supplements. The Beta-Carotene and Retinol Efficacy Trial was halted early due to increased cancer risk. This marked a major shift from supplement optimism to evidence-based caution in the 1990s.",
      category: "Nutrition",
      debunkedYear: 1994,
      taughtUntilYear: 2000
    },
    {
      id: "cold_fusion_breakthrough",
      fact: "Cold fusion was achieved and would revolutionize energy production",
      correction: "The 1989 cold fusion claims couldn't be replicated and were largely debunked by the scientific community.",
      explanation: "Martin Fleischmann and Stanley Pons announced nuclear fusion at room temperature in 1989, promising unlimited clean energy. However, other scientists couldn't replicate their results, and analysis revealed experimental errors. While some research continues, mainstream physics considers cold fusion unproven. The episode became a cautionary tale about premature scientific announcements and media hype in science.",
      category: "Physics",
      debunkedYear: 1989,
      taughtUntilYear: 1995
    },
    {
      id: "y2k_apocalypse",
      fact: "Y2K computer bug will cause global technological collapse",
      correction: "Extensive preparation prevented major issues, and most systems transitioned smoothly to 2000.",
      explanation: "The Y2K bug was a real problem where computers might misinterpret '00' as 1900 instead of 2000. However, massive global preparation efforts costing $300+ billion successfully updated systems. Some believed the preparations were unnecessary due to the smooth transition, not realizing the preparations themselves prevented the catastrophe. This demonstrates how successful prevention can make the original threat seem overblown.",
      category: "Technology",
      debunkedYear: 2000,
      taughtUntilYear: 2000
    },
    {
      id: "fat_free_healthy",
      fact: "Fat-free foods are automatically healthy and help with weight loss",
      correction: "Many fat-free foods are loaded with sugar and provide poor nutrition compared to natural fats.",
      explanation: "The low-fat diet craze of the 1980s-1990s led food manufacturers to create fat-free products loaded with sugar and artificial ingredients to maintain taste. Research in the 2000s showed these products often had more calories and less nutritional value than full-fat versions. The obesity epidemic worsened during the fat-free era, contributing to understanding that sugar, not fat, drives weight gain. Despite evidence, 'fat-free' marketing still influences consumer choices.",
      category: "Nutrition",
      debunkedYear: 2005,
      taughtUntilYear: 2010,
      stillTaught: true
    },
    {
      id: "recovered_memories_reliable",
      fact: "Recovered memories of childhood trauma are always accurate",
      correction: "Research showed recovered memories can be false and unreliable, leading to wrongful convictions.",
      explanation: "The recovered memory movement of the 1980s-1990s assumed repressed traumatic memories could be accurately recovered through therapy. However, research by Elizabeth Loftus and others proved that false memories could be implanted and feel completely real. The 'Satanic Panic' and numerous wrongful convictions resulted from false recovered memories. Legal systems have since restricted the admissibility of recovered memory testimony.",
      category: "Psychology",
      debunkedYear: 1995,
      taughtUntilYear: 2005
    },
    {
      id: "dinosaurs_cold_blooded",
      fact: "All dinosaurs were cold-blooded reptiles like modern lizards",
      correction: "Evidence now suggests many dinosaurs were warm-blooded or had mixed metabolic strategies.",
      explanation: "Traditional paleontology classified dinosaurs as cold-blooded reptiles based on their relationship to modern reptiles. However, evidence from the 1970s onward including bone histology, growth rates, predator-prey ratios, and behavior suggested many dinosaurs were warm-blooded. Modern research indicates dinosaurs likely had diverse metabolic strategies, with some being fully warm-blooded. Despite evolving understanding, many textbooks still teach dinosaurs as universally cold-blooded.",
      category: "Paleontology",
      debunkedYear: 1980,
      taughtUntilYear: 2000,
      stillTaught: true
    },
    {
      id: "multiple_intelligence_myth",
      fact: "Howard Gardner's multiple intelligences theory is scientifically validated",
      correction: "Psychometric research found little evidence for separate intelligences; general intelligence (g-factor) remains supported.",
      explanation: "Gardner's 1983 theory proposed eight distinct intelligences, becoming popular in education despite limited empirical support. Psychometric studies consistently show strong correlations between different cognitive abilities, supporting a general intelligence factor (g). Factor analysis fails to support Gardner's separate intelligences. Despite scientific criticism, multiple intelligence theory remains popular in educational circles and teacher training programs.",
      category: "Education",
      debunkedYear: 1990,
      stillTaught: true
    },
    {
      id: "mobile_phones_brain_cancer",
      fact: "Cell phones cause brain cancer from radiation exposure",
      correction: "Large-scale studies found no increased brain cancer risk from normal cell phone use.",
      explanation: "Fears about cell phone radiation emerged in the 1990s as mobile phones became common. However, massive epidemiological studies including the INTERPHONE study (2000-2004) and Danish cohort studies of millions of users found no increased brain cancer risk. The non-ionizing radiation from phones lacks the energy to damage DNA. Despite WHO and FDA safety statements, cell phone cancer fears persist in health-conscious communities.",
      category: "Health Science",
      debunkedYear: 2010,
      stillTaught: true
    },
    {
      id: "mozart_effect_babies",
      fact: "Playing Mozart to babies makes them smarter",
      correction: "The 'Mozart effect' was overstated; brief spatial improvements don't equal lasting intelligence gains.",
      explanation: "A 1993 study found college students performed slightly better on spatial reasoning tests after listening to Mozart. Media and marketers extrapolated this to claim Mozart music makes babies permanently smarter. However, the original effect was small, temporary (15 minutes), and didn't apply to infants. Replication studies failed to confirm lasting intelligence benefits. Despite debunking, the Mozart baby industry continues to market to concerned parents.",
      category: "Psychology",
      debunkedYear: 2000,
      stillTaught: true
    },
    {
      id: "subliminal_advertising_controls_behavior",
      fact: "Subliminal advertising can control consumer behavior and decisions",
      correction: "Research shows subliminal messages have minimal, short-term effects and can't control complex decisions.",
      explanation: "Fears about subliminal advertising peaked in the 1950s after James Vicary claimed movie theater subliminal messages increased popcorn sales. However, Vicary later admitted fabricating the data. Psychological research since the 1960s shows subliminal messages can influence simple preferences briefly but cannot control complex behaviors or decisions. Despite scientific debunking, subliminal advertising fears persist in popular culture and conspiracy theories.",
      category: "Psychology",
      debunkedYear: 1962,
      stillTaught: true
    },
    {
      id: "food_combining_digestion",
      fact: "You can't properly digest proteins and carbs eaten together",
      correction: "The human digestive system easily handles mixed meals; food combining rules lack scientific basis.",
      explanation: "The Hay Diet and food combining rules were popularized in the early 1900s by William Howard Hay, claiming that eating proteins and carbohydrates together caused digestive problems. However, human digestive physiology research shows our stomachs and intestines are perfectly designed to handle mixed meals. Most natural foods contain both proteins and carbohydrates. Despite physiological evidence, food combining diets remain popular in alternative health communities.",
      category: "Nutrition",
      debunkedYear: 1930,
      stillTaught: true
    },
    {
      id: "detox_diets_cleanse_toxins",
      fact: "Special detox diets are necessary to cleanse toxins from your body",
      correction: "Healthy liver and kidneys naturally detoxify the body; detox diets offer no additional benefits.",
      explanation: "The human liver and kidneys are sophisticated detoxification systems that work 24/7 to remove waste products and toxins from the body. Medical research has found no evidence that commercial detox diets, cleanses, or supplements improve this natural process. Many detox products fail to specify which 'toxins' they remove or provide evidence of effectiveness. Despite scientific consensus, the detox industry continues to market to health-conscious consumers.",
      category: "Nutrition",
      debunkedYear: 1990,
      stillTaught: true
    },
    {
      id: "lie_detector_reliable",
      fact: "Polygraph (lie detector) tests are reliable for detecting deception",
      correction: "Polygraphs measure stress responses, not lies, and have high false positive/negative rates.",
      explanation: "Polygraphs measure physiological stress responses (heart rate, blood pressure, sweating) that may accompany lying, but these same responses occur with anxiety, fear, or other emotions. Scientific studies show accuracy rates of only 70-90%, with significant false positive rates. The National Academy of Sciences (2003) concluded polygraphs are unreliable for security screening. Despite scientific criticism, polygraphs remain popular in law enforcement and entertainment.",
      category: "Psychology",
      debunkedYear: 2003,
      stillTaught: true
    },
    {
      id: "photographic_memory_exists",
      fact: "Some people have true photographic memory",
      correction: "Eidetic imagery exists but is rare and limited; true 'photographic memory' as popularly described doesn't exist.",
      explanation: "The concept of 'photographic memory' became popular in the 1960s-70s through case studies like that of 'S' by Alexander Luria, describing seemingly perfect recall. However, rigorous testing in the 1980s-90s by researchers like Charles Stromeyer and Ralph Haber found that true eidetic imagery (ability to see images in detail after they're removed) exists in only 2-10% of children and virtually disappears in adults. Studies showed that even exceptional memorizers like chess masters and memory champions use strategies and pattern recognition, not perfect visual recall. Modern neuroscience has found no evidence for brain mechanisms that could support perfect visual memory storage. The myth persists because exceptional memory abilities are often misunderstood as 'photographic,' reinforced by fictional portrayals in media.",
      category: "Neuroscience",
      debunkedYear: 1980,
      taughtUntilYear: 1995,
      stillTaught: true
    },
    {
      id: "sleepwalking_dangerous_wake",
      fact: "It's dangerous to wake someone who is sleepwalking",
      correction: "While they may be confused when awakened, it's not dangerous and may prevent injury.",
      explanation: "This myth persisted from early 20th-century beliefs about the soul leaving the body during sleep. Sleep science research from the 1970s-80s debunked this, showing that sleepwalkers simply have disrupted sleep cycles. Modern studies confirm that while awakened sleepwalkers may be confused or disoriented, there's no physical danger to them. The American Academy of Sleep Medicine now recommends gently guiding sleepwalkers back to bed, but states it's safe to wake them if they're in danger. The myth persists because confused reactions when awakened seem dramatic, reinforcing the false belief.",
      category: "Sleep Science",
      debunkedYear: 1980,
      taughtUntilYear: 1995,
      stillTaught: true
    },
    {
      id: "y2k_bug_overblown",
      fact: "The Y2K bug was completely overblown media hype with no real danger",
      correction: "Massive preparation efforts prevented serious problems; the threat was real but successfully mitigated.",
      explanation: "The Y2K bug stemmed from early computer systems using two-digit years, potentially causing failures when '00' was interpreted as 1900 instead of 2000. Between 1995-1999, governments and businesses spent an estimated $300-600 billion globally on Y2K remediation, upgrading systems, and testing. Because these massive efforts were successful - with only minor glitches occurring on January 1, 2000 - many retrospectively labeled it 'overblown hype.' However, the lack of disasters proved the remediation worked, not that the threat was imaginary. Some embedded systems, utilities, and financial systems did experience problems that were quickly resolved. The perception of 'hype' emerged because successful prevention made the original risk seem exaggerated.",
      category: "Technology"
    },
    {
      id: "killer_bees_invasion",
      fact: "Africanized 'killer bees' would devastate North American agriculture and kill thousands",
      correction: "While more aggressive than European bees, they integrated into ecosystems with manageable impact.",
      explanation: "The 'killer bee' panic began in the 1970s when Africanized honey bees (hybrids of African and European bees) escaped from research in Brazil and began spreading north. Media sensationalized their aggressive defensive behavior and swarming tendency, predicting agricultural collapse and mass casualties. The 1978 TV movie 'The Swarm' epitomized these fears. However, as they reached the southern U.S. in the 1990s, reality proved different. While Africanized bees are indeed more defensive and swarm more readily, they actually became beneficial pollinators and integrated with existing bee populations. U.S. bee deaths averaged only 1-2 annually from all bee stings (not specifically Africanized), far below predictions. Modern beekeeping adapted with protective equipment and management techniques. Research revealed their aggression was primarily defensive - they don't seek out victims but react more intensely to perceived threats to their hives.",
      category: "Entomology"
    },
    {
      id: "mad_cow_epidemic_usa",
      fact: "Mad cow disease would cause a major epidemic in the United States",
      correction: "Strict controls prevented widespread BSE; only a handful of cases occurred in North America.",
      explanation: "The UK BSE crisis (1986-1998) saw over 180,000 cattle infected and 177 human deaths from variant Creutzfeldt-Jakob disease. Media coverage and scientific projections in the early 1990s warned of potential epidemics spreading globally. In response, the U.S. implemented strict preventive measures starting in 1989: banning imports of British beef, prohibiting feeding mammalian protein to ruminants (1997), and establishing comprehensive surveillance systems. Canada followed similar protocols. These proactive controls worked: the U.S. has confirmed only 6 BSE cases since 2003, and Canada fewer than 20. The dire predictions of thousands of American deaths never materialized, proving that rapid regulatory response could prevent epidemic spread despite initial scientific uncertainty about the disease's potential scope.",
      category: "Veterinary Medicine",
      debunkedYear: 2006,
      taughtUntilYear: 2010
    },
    {
      id: "dvd_kill_movie_theaters",
      fact: "DVDs will completely kill movie theaters and cinema experience",
      correction: "Theaters adapted with better technology, experiences, and premium formats alongside home viewing.",
      explanation: "When DVDs launched in 1997 with superior picture quality and convenience over VHS, industry analysts predicted theater doom as home viewing improved. Studios worried about shortened theatrical windows affecting box office revenue. However, theaters responded by enhancing the cinema experience: installing digital projection, surround sound systems, IMAX screens, luxury seating, and expanded concessions. Rather than replacement, a complementary relationship emerged - people watched blockbusters in theaters for the spectacle, then purchased DVDs for repeated home viewing. Box office revenue actually grew alongside DVD sales through the 2000s. Similar patterns repeated with Blu-ray, streaming, and home theater systems - each time, theaters adapted rather than disappeared.",
      category: "Entertainment"
    },
    {
      id: "human_cloning_immediate",
      fact: "Human reproductive cloning is imminent and unstoppable",
      correction: "Technical challenges, ethical concerns, and regulations prevented human reproductive cloning.",
      explanation: "Dolly the sheep's successful cloning in 1996 sparked widespread predictions that human reproductive cloning was inevitable within years. Media coverage and some scientists suggested cloning clinics would soon exist globally, with wealthy individuals creating genetic copies of themselves. However, massive technical barriers emerged: cloning success rates remained below 3% even in animals, with high rates of miscarriage, birth defects, and premature aging. The process required hundreds of attempts for each success. Additionally, rapid international consensus emerged against human reproductive cloning - over 80 countries banned it by 2005, including major scientific nations. Ethical review boards, medical associations, and religious groups united in opposition. Even proponents of therapeutic cloning (for medical research) distinguished it from reproductive cloning. By 2023, no verified human reproductive cloning has occurred, despite decades of predictions and several fraudulent claims.",
      category: "Biotechnology"
    },
    {
      id: "email_kill_postal_service",
      fact: "Email will completely eliminate postal mail and shipping services",
      correction: "While personal mail declined, package delivery exploded with e-commerce growth.",
      explanation: "As email adoption accelerated in the 1990s, many predicted postal services would become obsolete as digital communication replaced physical mail. Personal correspondence and bill payments did shift dramatically online, with first-class mail volume peaking in 2001 and declining afterward. However, postal services transformed rather than disappeared. E-commerce growth, starting with companies like Amazon, created massive demand for package delivery that offset letter mail losses. The USPS delivered 1.2 billion packages in 2000 but over 7 billion by 2020. Services evolved to include hybrid digital-physical offerings like informed delivery, online shipping tools, and last-mile delivery partnerships. Postal services became logistics networks rather than just mail carriers.",
      category: "Technology"
    },
    {
      id: "genetic_engineering_food_dangerous",
      fact: "Genetically modified foods are inherently dangerous to human health",
      correction: "Extensive studies found approved GM foods are as safe as conventional foods.",
      explanation: "Early GMO fears emerged in the 1990s from uncertainty about new technology and environmental activism. However, over 280 scientific studies and reviews by organizations like the WHO, FDA, and European Food Safety Authority have found no evidence of health risks from approved GM foods. A landmark 2016 National Academy of Sciences report analyzed 20 years of data and concluded GM foods are as safe as conventional foods. The scientific consensus emerged by the mid-2000s, yet fears persist due to misinformation campaigns, labeling controversies, and general distrust of large agricultural corporations.",
      category: "Food Science",
      debunkedYear: 2005,
      taughtUntilYear: 2010,
      stillTaught: true
    },
    {
      id: "computer_chess_impossible",
      fact: "Computers will never beat human chess grandmasters",
      correction: "Deep Blue defeated Garry Kasparov in 1997, marking the beginning of AI dominance in chess.",
      explanation: "Throughout the 1980s and early 1990s, chess experts believed human intuition, pattern recognition, and strategic thinking would always surpass computer brute-force calculation. World champion Garry Kasparov defeated IBM's Deep Blue in 1996, reinforcing this belief. However, IBM's improved Deep Blue defeated Kasparov 3.5-2.5 in their 1997 rematch, becoming the first computer to beat a reigning world champion in a match. This breakthrough demonstrated that sufficient computational power could overcome human chess intuition. By the 2000s, chess engines like Fritz and Rybka consistently outplayed grandmasters. Today's engines like Stockfish and neural network-based systems like AlphaZero are virtually unbeatable by humans, leading to human-computer collaboration rather than pure competition in chess training and analysis.",
      category: "Computer Science"
    }
  ],
  "2000s": [
    {
      id: "pluto_planet",
      fact: "Pluto is the 9th planet in our solar system",
      correction: "Pluto was reclassified as a dwarf planet in 2006.",
      explanation: "The International Astronomical Union redefined what constitutes a planet, requiring that it 'clear its orbit' of other objects. Pluto shares its orbital space with many other objects in the Kuiper Belt and is much smaller than previously thought. It's now classified as a dwarf planet alongside Ceres and Eris.",
      category: "Astronomy",
      debunkedYear: 2006,
      taughtUntilYear: 2012
    },
    {
      id: "fat_bad",
      fact: "All dietary fats are bad for your health",
      correction: "Research distinguished between healthy fats (omega-3s, monounsaturated) and harmful trans fats.",
      explanation: "The low-fat diet craze peaked in the 1980s-1990s based on incomplete research. The Mediterranean diet studies and omega-3 research in the 2000s showed that certain fats are essential for health. Trans fats were identified as the real villains, leading to FDA bans by 2018. Despite this, many still avoid all fats.",
      category: "Nutrition",
      debunkedYear: 2005,
      taughtUntilYear: 2010,
      stillTaught: true
    },
    {
      id: "learning_styles",
      fact: "People learn best through their preferred learning style (visual, auditory, kinesthetic)",
      correction: "Extensive research shows no evidence that matching teaching to 'learning styles' improves outcomes.",
      explanation: "A 2008 systematic review found 'lack of credible evidence' for learning styles theory. Despite this, over 90% of teachers believe in learning styles and 50%+ of teacher preparation textbooks still include details about the theory.",
      category: "Education",
      debunkedYear: 2008,
      stillTaught: true
    },
    {
      id: "static_brain",
      fact: "Adult brains can't grow new neurons (neurogenesis doesn't occur)",
      correction: "Adult neurogenesis was confirmed in the hippocampus, showing the brain remains more plastic than thought.",
      explanation: "The dogma that adult brains couldn't generate new neurons was established in the early 1900s by Santiago Ramón y Cajal. Fred Gage's breakthrough research in the 1990s proved adult neurogenesis occurs in the hippocampus and olfactory bulb. Multiple studies since 2000 confirmed thousands of new neurons form daily in adult brains. Despite scientific consensus, many neuroscience textbooks still teach the 'static brain' model.",
      category: "Neuroscience",
      debunkedYear: 1998,
      taughtUntilYear: 2010,
      stillTaught: true
    },
    {
      id: "carbs_always_bad",
      fact: "All carbohydrates are bad and cause weight gain",
      correction: "Complex carbohydrates from whole foods are essential; the type and processing level matter more than avoidance.",
      explanation: "The anti-carbohydrate movement peaked with the Atkins diet in the 1990s-2000s. However, Harvard's Nurses' Health Study (1984-ongoing) and other research distinguished between refined and whole food carbohydrates. Studies since 2010 showed whole grains and complex carbs reduce disease risk. Despite nutritional science consensus, 'carbs are bad' messaging persists in popular diet culture and fitness communities.",
      category: "Nutrition",
      debunkedYear: 2010,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "antioxidant_supplements",
      fact: "Antioxidant supplements prevent aging and disease",
      correction: "Studies showed many antioxidant supplements are ineffective or potentially harmful; whole foods are better sources.",
      explanation: "The antioxidant supplement craze began in the 1990s based on observational studies linking antioxidant-rich foods to health benefits. However, controlled trials like the Beta-Carotene and Retinol Efficacy Trial (1996) showed supplements could increase cancer risk. Cochrane reviews since 2008 consistently found no benefit from antioxidant supplements. Despite scientific evidence, the global antioxidant supplement market continues growing, fueled by anti-aging marketing claims.",
      category: "Nutrition",
      debunkedYear: 2008,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "facebook_college_only",
      fact: "Social media platforms like Facebook are just for college students",
      correction: "Social media transformed global communication, commerce, and society across all demographics.",
      explanation: "Facebook launched in 2004 as a college-only platform, leading early observers to dismiss it as a fad for students. When Facebook opened to the general public in 2006, critics predicted it would remain niche. By 2012, Facebook reached 1 billion users across all age groups. Despite reaching 2.9 billion users globally by 2023, some institutions still underestimate social media's broad societal impact.",
      category: "Technology",
      debunkedYear: 2008,
      taughtUntilYear: 2012
    },
    {
      id: "human_genome_simple",
      fact: "Humans have about 100,000 genes (more than simpler organisms)",
      correction: "The Human Genome Project revealed humans have only ~20,000-25,000 genes, similar to many simpler organisms.",
      explanation: "Before the Human Genome Project (1990-2003), scientists estimated humans had 50,000-140,000 genes based on protein diversity. The shocking discovery in 2003 revealed only ~20,000-25,000 genes - fewer than rice plants (40,000) and similar to roundworms (20,000). This paradigm shift emphasized gene regulation and alternative splicing over gene quantity. Many biology textbooks took years to update these outdated estimates.",
      category: "Genetics",
      debunkedYear: 2003,
      taughtUntilYear: 2010,
      stillTaught: true
    },
    {
      id: "low_carb_dangerous",
      fact: "Low-carb diets are dangerous and unsustainable long-term",
      correction: "Research showed low-carb diets can be safe and effective for weight loss and diabetes management.",
      explanation: "Medical establishment in the 1990s condemned low-carb diets as dangerous fads that would cause kidney damage and heart disease. However, controlled studies like the A TO Z Weight Loss Study (2007) and multiple trials since 2010 showed low-carb diets can be safe and effective for weight loss and diabetes management. The American Diabetes Association officially recognized low-carb as a valid approach in 2019, though many healthcare providers still discourage it.",
      category: "Nutrition",
      debunkedYear: 2010,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "stem_cells_embryonic_only",
      fact: "Only embryonic stem cells have medical potential",
      correction: "Adult stem cells and induced pluripotent stem cells were discovered as viable alternatives for treatments.",
      explanation: "Early stem cell research in the 1990s focused on embryonic stem cells, leading scientists to believe they were the only viable option for regenerative medicine. Shinya Yamanaka's breakthrough discovery of induced pluripotent stem cells (iPSCs) in 2006 revolutionized the field, earning him the 2012 Nobel Prize. Adult stem cell therapies also proved successful for blood disorders and some cancers. Despite these advances, public discourse often still frames stem cell research around embryonic sources.",
      category: "Medicine",
      debunkedYear: 2006,
      taughtUntilYear: 2012
    },
    {
      id: "wikipedia_unreliable",
      fact: "Wikipedia is completely unreliable and should never be used for research",
      correction: "Studies showed Wikipedia's accuracy rivals traditional encyclopedias, especially for scientific topics.",
      explanation: "When Wikipedia launched in 2001, academics and educators dismissed it as unreliable due to its open-editing model. However, a landmark 2005 Nature study comparing Wikipedia to Encyclopedia Britannica found similar error rates (4 vs 3 errors per article). Subsequent studies confirmed Wikipedia's accuracy for scientific topics often exceeds traditional sources. Despite research validation, many educational institutions still prohibit Wikipedia as a source, though attitudes are gradually changing.",
      category: "Information Science",
      debunkedYear: 2005,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "planets_formation_slow",
      fact: "Planet formation takes tens of millions of years and is very rare",
      correction: "Exoplanet discoveries revealed planets form more quickly and commonly than previously thought.",
      explanation: "Traditional planet formation models suggested planets took 10-100 million years to form and required specific conditions. The first exoplanet around a main-sequence star was discovered in 1995, followed by thousands more. Observations revealed planets form in just 1-10 million years and exist around most stars. The Kepler Space Telescope (2009-2018) confirmed planets are common, not rare. Despite overwhelming evidence, early astronomy textbooks still taught planets were exceptional.",
      category: "Astronomy",
      debunkedYear: 2009,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "prions_impossible",
      fact: "Proteins cannot be infectious agents - only DNA/RNA can carry disease",
      correction: "Prion diseases (like mad cow disease) proved that misfolded proteins alone can cause infection.",
      explanation: "The protein-only hypothesis challenged the central dogma that only nucleic acids carry infectious information. Stanley Prusiner's research in the 1980s proved that misfolded proteins (prions) could transmit diseases like scrapie and Creutzfeldt-Jakob disease. His controversial theory was vindicated when he won the 1997 Nobel Prize. Despite scientific consensus since the 1990s, some textbooks still teach that only DNA/RNA can be infectious agents.",
      category: "Biology",
      debunkedYear: 1982,
      taughtUntilYear: 2000,
      stillTaught: true
    },
    {
      id: "digital_divide_permanent",
      fact: "The digital divide between rich and poor will only widen with technology",
      correction: "Mobile technology and internet expansion significantly reduced the digital divide in many regions.",
      explanation: "Sociologists in the 1990s predicted technology would create permanent divisions between the information rich and poor. However, mobile phone adoption exceeded predictions - by 2019, 67% of people in least developed countries had mobile subscriptions. Smartphone penetration and mobile internet access democratized digital participation globally. Despite narrowing gaps, digital literacy and quality access remain challenges.",
      category: "Sociology",
      debunkedYear: 2010,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "brontosaurus_fake_dinosaur",
      fact: "Brontosaurus was a fake dinosaur created by mistake",
      correction: "Recent analysis confirmed Brontosaurus is a valid genus distinct from Apatosaurus.",
      explanation: "In 1903, paleontologists concluded that Brontosaurus was the same as Apatosaurus, making the name invalid. For over a century, museums and textbooks taught that Brontosaurus was a mistaken classification. However, a comprehensive 2015 study by Tschopp, Mateus, and Benson using detailed statistical analysis proved Brontosaurus deserved separate genus status. Despite scientific rehabilitation, many educational materials still describe Brontosaurus as a 'fake' dinosaur.",
      category: "Paleontology",
      debunkedYear: 2015,
      stillTaught: true
    },
    {
      id: "carrots_improve_night_vision",
      fact: "Eating carrots significantly improves night vision",
      correction: "This was WWII propaganda to hide radar technology; carrots provide vitamin A but don't enhance night vision beyond normal levels.",
      explanation: "The British Royal Air Force spread this myth in 1940 to conceal their use of airborne radar for intercepting German bombers. While vitamin A deficiency can cause night blindness, extra carrots beyond normal nutrition don't improve vision. The propaganda was so successful it's still believed 80+ years later.",
      category: "Nutrition",
      debunkedYear: 1945,
      stillTaught: true
    },
    {
      id: "fingerprints_unique_foolproof",
      fact: "Fingerprints are completely unique and forensically foolproof",
      correction: "While rare, fingerprint errors occur; some patterns can be similar, and quality affects reliability.",
      explanation: "Fingerprint evidence was considered infallible since Francis Galton's work in the 1890s and widely accepted by courts for over a century. However, the 2004 Madrid bombing case revealed FBI errors in fingerprint analysis, leading to wrongful arrests. Scientific studies since 2009 showed subjective interpretation and confirmation bias can affect analysis. Despite known limitations, fingerprints are still often presented as absolute proof in courtrooms.",
      category: "Forensic Science",
      debunkedYear: 2004,
      taughtUntilYear: 2010,
      stillTaught: true
    },
    {
      id: "memory_like_video_recorder",
      fact: "Human memory works like a video recorder, storing exact copies of events",
      correction: "Memory is reconstructive, influenced by emotions, suggestions, and changes with each recall.",
      explanation: "The computer metaphor for memory dominated psychology from the 1960s-1980s, suggesting memories were stored like video recordings. Elizabeth Loftus's groundbreaking research in the 1970s proved memory is reconstructive and malleable. Her studies showed false memories could be implanted through suggestion. Despite decades of research on memory distortion, many legal systems and educational contexts still treat memory as literal recordings of events.",
      category: "Neuroscience",
      debunkedYear: 1975,
      taughtUntilYear: 1990,
      stillTaught: true
    },
    {
      id: "learning_disabilities_laziness",
      fact: "Learning disabilities are just laziness or lack of effort in disguise",
      correction: "Learning disabilities involve real neurological differences affecting information processing.",
      explanation: "Before the 1960s, children with learning disabilities were often labeled as lazy, defiant, or intellectually disabled. Samuel Kirk's research in the 1960s and subsequent neuroimaging studies revealed genuine brain differences in areas like phonological processing and working memory. The Individuals with Disabilities Education Act (1975) legally recognized learning disabilities as medical conditions. Despite scientific understanding, stigma persists in some educational settings where teachers may still attribute learning struggles to lack of effort.",
      category: "Education",
      debunkedYear: 1970,
      taughtUntilYear: 1985,
      stillTaught: true
    },
    {
      id: "humans_only_five_senses",
      fact: "Humans have exactly five senses: sight, hearing, smell, taste, and touch",
      correction: "Humans have many more senses including balance, proprioception, temperature, and pain reception.",
      explanation: "Aristotle's classification of five senses (circa 350 BCE) dominated Western thought for over 2,000 years. Modern neuroscience recognizes at least 9-21 senses including proprioception (body position), vestibular sense (balance), thermoception (temperature), and nociception (pain). These were scientifically identified throughout the 19th and 20th centuries. Despite neuroscientific evidence, elementary education and popular culture continue teaching only the classical five senses.",
      category: "Biology",
      debunkedYear: 1900,
      taughtUntilYear: 1980,
      stillTaught: true
    },
    {
      id: "swimming_after_eating_cramps",
      fact: "Swimming immediately after eating causes severe cramps and drowning",
      correction: "While digestion redirects some blood flow, exercise-induced cramps are not significantly increased by recent meals.",
      explanation: "This warning became widespread in the mid-20th century based on theoretical concerns about blood flow diversion during digestion. However, sports medicine research in the 1990s found no documented cases of drowning caused by eating before swimming. Studies showed exercise-induced cramping is more related to electrolyte imbalance and muscle fatigue than food intake. Despite scientific evidence, this myth persists in swimming safety guidelines and parental warnings.",
      category: "Sports Medicine",
      debunkedYear: 1990,
      stillTaught: true
    },
    {
      id: "mental_illness_personal_weakness",
      fact: "Mental illness is a sign of personal weakness or character flaw",
      correction: "Mental illnesses are medical conditions involving brain chemistry and structure, not character defects.",
      explanation: "Mental illness was stigmatized as moral weakness or personal failure for centuries. The biomedical model gained acceptance in the 1950s with the discovery of psychotropic medications and neuroimaging evidence of brain differences. Research in the 1980s-1990s established genetic, neurochemical, and structural brain factors in mental illness. Despite scientific understanding, stigma persists in many cultures and even some healthcare settings, where mental illness is still blamed on personal weakness.",
      category: "Mental Health",
      debunkedYear: 1980,
      taughtUntilYear: 2000,
      stillTaught: true
    },
    {
      id: "webmd_cyberchondria_myth",
      fact: "Online health information makes people unnecessarily paranoid about symptoms",
      correction: "While 'cyberchondria' exists, studies show online health info often improves patient knowledge and outcomes.",
      explanation: "When WebMD and similar sites launched in the late 1990s, physicians worried about 'cyberchondria' - patients self-diagnosing rare diseases online. However, Pew Research studies since 2006 found that 72% of internet users search for health information, and most use it responsibly to prepare for doctor visits. Research showed online health information improved patient-provider communication and health outcomes. Despite evidence, medical professionals still often dismiss patients who research symptoms online.",
      category: "Health Informatics",
      debunkedYear: 2006,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "mp3_kill_music_industry",
      fact: "MP3 downloads will completely destroy the music industry",
      correction: "The industry adapted with streaming services, creating new revenue models and distribution methods.",
      explanation: "When Napster launched in 1999, record industry executives predicted digital piracy would destroy music sales completely. The Recording Industry Association of America fought file-sharing aggressively throughout the 2000s. However, the industry adapted with iTunes (2003), Spotify (2008), and streaming services that now generate over 80% of music revenues. While physical sales declined, digital platforms created new opportunities for artists and labels. The industry proved more resilient than predicted.",
      category: "Music Industry",
      debunkedYear: 2010,
      taughtUntilYear: 2015
    },
    {
      id: "blogs_kill_journalism",
      fact: "Blogs and amateur content will eliminate professional journalism",
      correction: "Traditional and digital media coexist; both amateur and professional content serve different purposes.",
      explanation: "When blogging exploded in the early 2000s, media critics predicted amateur bloggers would replace professional journalists entirely. Some newspapers did struggle with declining readership and ad revenue. However, professional journalism adapted to digital formats while maintaining editorial standards, fact-checking, and investigative capabilities that amateur content often lacks. Studies showed readers value both citizen journalism for diverse perspectives and professional journalism for reliability and depth.",
      category: "Media Studies",
      debunkedYear: 2010,
      taughtUntilYear: 2015
    },
    {
      id: "google_make_us_stupid",
      fact: "Google and search engines are making people stupid and destroying memory",
      correction: "Research shows we adapt by remembering where to find information rather than facts themselves.",
      explanation: "Nicholas Carr's 2008 article 'Is Google Making Us Stupid?' sparked concerns about internet effects on cognition. However, cognitive research since 2011 showed the 'Google effect' or 'digital amnesia' represents cognitive adaptation, not deterioration. Studies by Betsy Sparrow and others found people develop 'transactive memory' - efficiently remembering where to find information rather than memorizing facts. This represents cognitive efficiency, not intellectual decline, though concerns about deep reading and attention persist.",
      category: "Cognitive Science",
      debunkedYear: 2011,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "video_games_antisocial",
      fact: "Video games make people antisocial and unable to form real relationships",
      correction: "Gaming often involves social interaction and can enhance teamwork and communication skills.",
      explanation: "Early video game research in the 1980s-1990s focused on negative effects and portrayed gamers as isolated. However, studies since 2005 revealed that 70% of gamers play with friends, and online gaming creates genuine social connections. Research by IBM and other institutions showed gaming can improve leadership, teamwork, and problem-solving skills. Massively multiplayer games require extensive social coordination and communication. Despite positive research, negative stereotypes persist in educational and therapeutic contexts.",
      category: "Psychology",
      debunkedYear: 2005,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "texting_killing_language_skills",
      fact: "Text messaging is destroying proper grammar and language skills",
      correction: "Studies show texting develops new literacy skills without harming traditional writing abilities.",
      explanation: "When text messaging became popular in the early 2000s, educators worried that 'textspeak' abbreviations would corrupt formal writing skills. However, linguistics research since 2007 showed texting actually correlates with better literacy skills. Studies by Nenagh Kemp and others found teenagers who use more textisms score higher on spelling and grammar tests. Texting develops phonological awareness and demonstrates linguistic creativity. Despite research evidence, many schools still ban phones over language concerns.",
      category: "Linguistics",
      debunkedYear: 2007,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "facebook_college_fad",
      fact: "Facebook is just a college fad that will never expand beyond universities",
      correction: "Facebook became the world's largest social network with billions of users across all demographics.",
      explanation: "When Facebook launched in 2004, it was exclusive to college students, leading many tech observers to dismiss it as a temporary campus networking tool. Even after opening to high schools (2005) and the general public (2006), skeptics predicted it would remain niche. However, Facebook's growth exploded from 1 million users in 2004 to over 2.9 billion by 2023, spanning all age groups globally. The platform fundamentally changed social interaction and became a dominant force in communication, politics, and commerce.",
      category: "Technology",
      debunkedYear: 2008,
      taughtUntilYear: 2010
    },
    {
      id: "swine_flu_pandemic_overblown",
      fact: "H1N1 swine flu pandemic preparations were massive overreaction",
      correction: "The pandemic was real and deadly; preparations likely prevented much worse outcomes globally.",
      explanation: "Critics called the 2009 H1N1 response an overreaction when initial death projections didn't materialize. However, the WHO-declared pandemic infected 700 million to 1.4 billion people and killed 151,700-575,400 globally in its first year. Rapid vaccine development, antiviral distribution, and coordinated international response likely prevented millions of deaths. Public health experts note that 'overpreparation' for pandemics is preferable to underpreparation, as COVID-19 later demonstrated.",
      category: "Public Health",
      debunkedYear: 2010,
      taughtUntilYear: 2015
    }
  ],
  "2010s": [
    {
      id: "eggs_cholesterol",
      fact: "Eating eggs raises your cholesterol and causes heart disease",
      correction: "Research showed dietary cholesterol has minimal impact on blood cholesterol for most people.",
      explanation: "The egg-cholesterol fear began with rabbit studies in 1913 that wrongly extrapolated to humans. The Framingham Heart Study and other research since the 1990s showed dietary cholesterol has minimal impact on blood cholesterol for 75% of people. The 2015 U.S. Dietary Guidelines removed cholesterol limits, stating 'cholesterol is not a nutrient of concern.' Despite scientific consensus, many still avoid eggs due to outdated health advice from the 1980s-1990s.",
      category: "Nutrition",
      debunkedYear: 2015,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "multitasking_efficient",
      fact: "Multitasking makes you more productive and efficient",
      correction: "Neuroscience research proved multitasking reduces productivity and increases errors due to task-switching costs.",
      explanation: "The multitasking myth grew from 1990s business culture and computer metaphors. Stanford neuroscientist Earl Miller's research proved the brain cannot truly multitask - it rapidly switches between tasks, losing time and accuracy with each switch. A 2009 Stanford study found heavy multitaskers performed worse on all cognitive measures. Despite overwhelming evidence since 2009, workplace cultures still reward and expect multitasking.",
      category: "Psychology",
      debunkedYear: 2009,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "universe_expansion_slowing",
      fact: "The universe's expansion is slowing down due to gravity",
      correction: "Dark energy was discovered to be accelerating the universe's expansion (Nobel Prize 2011).",
      explanation: "Until 1998, physicists assumed gravity would slow cosmic expansion. The Supernova Cosmology Project and High-Z Supernova Search Team discovered that distant supernovae were dimmer than expected, revealing accelerating expansion driven by dark energy. This revolutionary discovery earned the 2011 Nobel Prize in Physics and transformed our understanding of the universe.",
      category: "Cosmology",
      debunkedYear: 1998,
      taughtUntilYear: 2000
    },
    {
      id: "gluten_bad_everyone",
      fact: "Gluten is harmful for everyone and should be avoided",
      correction: "Only people with celiac disease or non-celiac gluten sensitivity need to avoid gluten; it's harmless for most people.",
      explanation: "Celiac disease affects only 1% of the population, identified in the 1940s and confirmed by research in the 1960s. The gluten-free trend exploded in the 2000s without scientific basis for general consumption. Multiple studies since 2017 showed gluten-free diets may actually increase cardiovascular risk for non-celiac individuals. Despite medical consensus, the gluten-free market continues growing based on unfounded health claims.",
      category: "Nutrition",
      debunkedYear: 2017,
      stillTaught: true
    },
    {
      id: "smartphones_fad",
      fact: "Smartphones and tablets are just expensive toys that won't replace computers",
      correction: "Mobile devices became the primary computing platform for billions of people worldwide.",
      explanation: "Tech critics in 2007-2010 dismissed the iPhone and iPad as luxury gadgets. By 2012, mobile internet usage exceeded desktop in many regions. Pew Research confirmed in 2015 that smartphones became essential tools for banking, education, and work. Despite overwhelming adoption evidence, some corporate IT departments still treated mobile as secondary until 2020.",
      category: "Technology",
      debunkedYear: 2012,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "higgs_boson_impossible",
      fact: "The Higgs boson might never be found or might not exist",
      correction: "The Higgs boson was discovered at CERN in 2012, confirming the Standard Model of particle physics.",
      explanation: "The Higgs mechanism was theorized in 1964, but many physicists doubted it could be experimentally verified due to the enormous energy requirements. The Large Hadron Collider proved these doubts wrong when it detected the Higgs boson on July 4, 2012, leading to a Nobel Prize in 2013. This discovery validated 50 years of theoretical physics.",
      category: "Physics",
      debunkedYear: 2012,
      taughtUntilYear: 2012
    },
    {
      id: "sitting_fine",
      fact: "Sitting for long periods is harmless as long as you exercise sometimes",
      correction: "Research showed prolonged sitting increases health risks independent of exercise levels.",
      explanation: "The phrase 'sitting is the new smoking' emerged from Dr. James Levine's research at Mayo Clinic in the 2000s. A 2012 meta-analysis of 18 studies found prolonged sitting increased mortality risk by 24% regardless of exercise levels. The American Heart Association issued guidelines in 2016 recommending movement breaks every 30 minutes. Despite workplace wellness programs, many office cultures still normalize 8+ hour sitting days.",
      category: "Health Science",
      debunkedYear: 2012,
      taughtUntilYear: 2016,
      stillTaught: true
    },
    {
      id: "organic_always_better",
      fact: "Organic food is always more nutritious and safer than conventional food",
      correction: "Studies showed minimal nutritional differences; both can be part of a healthy diet when properly produced.",
      explanation: "A 2012 Stanford meta-analysis of 237 studies found minimal nutritional differences between organic and conventional foods. While organic has slightly higher antioxidants, the differences are nutritionally insignificant. Pesticide residues in conventional foods are typically well below safety limits. The organic industry promotes 'natural is better' marketing despite scientific evidence showing both can be healthy choices. Public perception still heavily favors organic despite cost premiums of 20-40%.",
      category: "Nutrition",
      debunkedYear: 2012,
      taughtUntilYear: 2017,
      stillTaught: true
    },
    {
      id: "brain_games_prevent_dementia",
      fact: "Brain training games prevent cognitive decline and dementia",
      correction: "Large studies found brain games don't transfer to real-world cognitive improvements or dementia prevention.",
      explanation: "The brain training industry exploded in the 2000s claiming games could prevent dementia and enhance intelligence. However, the ACTIVE study (2014) and other large-scale research found minimal transfer to real-world tasks. The Stanford Center on Longevity issued a consensus statement in 2014 signed by 70+ scientists stating claims were exaggerated. Despite scientific consensus, the brain training market continues growing, with companies paying FTC fines for unsubstantiated claims.",
      category: "Neuroscience",
      debunkedYear: 2014,
      taughtUntilYear: 2018,
      stillTaught: true
    },
    {
      id: "text_messaging_killing_language",
      fact: "Text messaging and social media are destroying proper language skills",
      correction: "Research showed digital communication develops new literacy skills without damaging traditional ones.",
      explanation: "Panic about digital communication destroying language erupted in the early 2000s with text messaging popularity. However, linguistics research by David Crystal and others showed texting actually requires sophisticated language skills and awareness of context. Studies since 2010 found teenagers who text more score higher on reading and vocabulary tests. Digital communication develops new forms of literacy rather than destroying traditional skills, though concerns persist among educators.",
      category: "Linguistics",
      debunkedYear: 2010,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "violent_games_aggression",
      fact: "Playing violent video games directly causes real-world aggression",
      correction: "Long-term studies found no causal link between game violence and real-world violent behavior.",
      explanation: "Concerns about violent games peaked after Columbine (1999) and continued through the 2000s with politicians blaming games for violence. However, longitudinal studies by Christopher Ferguson and others found no causal relationship between game violence and real-world aggression. Youth violence actually decreased as gaming increased. The American Psychological Association's position evolved by 2017 to recognize insufficient evidence for causation, though moral panic persists in media coverage.",
      category: "Psychology",
      debunkedYear: 2015,
      taughtUntilYear: 2017,
      stillTaught: true
    },
    {
      id: "climate_pause_myth",
      fact: "Global warming paused or stopped in the 2000s",
      correction: "Improved data analysis showed warming continued; the 'pause' was a measurement artifact and cherry-picking.",
      explanation: "Climate skeptics claimed global warming 'paused' from 1998-2012 by cherry-picking the unusually hot 1998 El Niño year as a starting point. However, NOAA and NASA data corrections in 2015 showed steady warming continued throughout this period. Ocean heat content, the most reliable measure, showed uninterrupted warming. The 'pause' was a statistical artifact from selective data interpretation, not actual climate behavior.",
      category: "Climate Science",
      debunkedYear: 2015,
      taughtUntilYear: 2015
    },
    {
      id: "genetic_determinism",
      fact: "Genes determine behavior and personality more than environment",
      correction: "Epigenetics research showed environment can influence gene expression and traits significantly.",
      explanation: "The 'genes vs. environment' debate dominated psychology and genetics through the 20th century, with genetic determinism peaking after the Human Genome Project. However, epigenetics research since 2000 revealed that environmental factors can turn genes on or off, influencing traits across generations. Studies of identical twins and trauma survivors showed environment can override genetic predispositions. Despite this knowledge, genetic determinism persists in popular discussions of personality and behavior.",
      category: "Genetics",
      debunkedYear: 2010,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "tablets_laptop_killers",
      fact: "Tablets will completely replace laptops for all computing needs",
      correction: "Both devices found distinct niches; laptops remained essential for complex productivity tasks.",
      explanation: "When the iPad launched in 2010, tech analysts predicted tablets would replace laptops entirely within 5-10 years. Microsoft and others invested heavily in tablet-first strategies. However, productivity limitations became apparent - tablets excel for consumption and light tasks but struggle with complex productivity work requiring multiple windows, precise input, and professional software. Both devices found complementary roles rather than replacement relationships.",
      category: "Technology",
      debunkedYear: 2015,
      taughtUntilYear: 2017
    },
    {
      id: "adhd_overdiagnosed_fake",
      fact: "ADHD is overdiagnosed and mostly fake, just poor parenting or discipline",
      correction: "ADHD is a well-documented neurological condition with clear brain imaging differences and genetic components.",
      explanation: "ADHD skepticism peaked in the 1990s-2000s with claims of overdiagnosis and pharmaceutical conspiracy. However, neuroimaging studies consistently show structural brain differences in ADHD patients, particularly in prefrontal cortex and attention networks. Twin studies reveal 70-80% heritability. International studies show similar prevalence rates across cultures. Despite overwhelming evidence, stigma persists with many still viewing ADHD as a parenting or discipline issue.",
      category: "Mental Health",
      debunkedYear: 2010,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "vaccines_cause_allergies_asthma",
      fact: "Vaccines cause increased allergies and asthma in children",
      correction: "The 'hygiene hypothesis' research shows vaccines don't cause allergies; improved sanitation may play a role.",
      explanation: "Allergy rates increased alongside vaccination programs, leading to assumptions of causation. However, the hygiene hypothesis research since the 1990s showed that reduced early exposure to microbes (through sanitation, not vaccines) may contribute to allergies. Large population studies found no correlation between vaccination and allergy development. Vaccines may actually reduce allergic disease by preventing infections that can trigger asthma. Despite evidence, vaccine-allergy fears persist among some parents.",
      category: "Medicine",
      debunkedYear: 2010,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "natural_always_better_safer",
      fact: "'Natural' products are always safer and better than synthetic ones",
      correction: "Many natural substances are toxic; safety depends on the specific compound, not its origin.",
      explanation: "The naturalistic fallacy assumes anything natural must be good and synthetic must be bad. However, nature produces many toxins - ricin, cyanide, aflatoxins, and countless poisonous plants. Meanwhile, synthetic compounds undergo rigorous safety testing. Chemically identical molecules have identical effects regardless of origin. The 'natural' marketing appeals to evolutionary psychology but contradicts basic chemistry principles taught since the 1800s.",
      category: "Chemistry",
      debunkedYear: 1800,
      taughtUntilYear: 1950,
      stillTaught: true
    },
    {
      id: "low_fat_diet_healthiest",
      fact: "Low-fat diets are the healthiest option for everyone",
      correction: "Research showed healthy fats are essential; very low-fat diets can be harmful for some people.",
      explanation: "The low-fat diet movement dominated nutrition from the 1980s-2000s based on incomplete research linking dietary fat to heart disease. However, the Women's Health Initiative (2006) and other large studies found low-fat diets didn't reduce heart disease or cancer risk. Research revealed healthy fats (omega-3s, monounsaturated) are essential for brain function and hormone production. Despite scientific consensus since 2015, low-fat products still dominate supermarket shelves.",
      category: "Nutrition",
      debunkedYear: 2015,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "internet_makes_people_antisocial",
      fact: "Internet use makes people antisocial and destroys real relationships",
      correction: "Studies show the internet can enhance existing relationships and create new forms of meaningful social connection.",
      explanation: "Early internet research in the 1990s focused on displacement theory - that online activity replaced face-to-face interaction. However, longitudinal studies since 2000 showed the internet often supplements rather than replaces social connections. Research by MIT's Sherry Turkle and others found online communities can provide meaningful support and relationships. COVID-19 demonstrated the internet's crucial role in maintaining social connections during isolation.",
      category: "Sociology",
      debunkedYear: 2010,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "global_cooling_consensus",
      fact: "Scientists reached consensus about imminent global cooling in the 1970s",
      correction: "This was media hype; most climate papers in the 1970s actually predicted warming, not cooling.",
      explanation: "A 2008 study by Peterson, Connolley, and Fleck analyzed 1970s climate papers and found 62% predicted warming, 28% cooling, and 10% neutral. The 'global cooling consensus' was largely media sensationalism, particularly Newsweek's 1975 'The Cooling World' article. Even then, National Academy of Sciences reports acknowledged warming from CO2. Climate skeptics later used this false narrative to discredit climate science, despite the scientific record showing warming predictions dominated.",
      category: "Climate Science",
      debunkedYear: 2008,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "eating_late_night_weight_gain",
      fact: "Eating late at night automatically causes weight gain",
      correction: "Weight gain depends on total calories consumed, not timing; late eating may affect sleep and choices but isn't inherently fattening.",
      explanation: "The 'no eating after 8pm' rule became popular in dieting culture based on metabolism myths. However, controlled studies since the 2000s showed meal timing has minimal impact on weight gain - total caloric intake matters most. Late-night eating correlates with weight gain because people often choose high-calorie snacks and exceed daily calorie needs, not because of circadian metabolism changes. Despite research, time-restricted eating myths persist in diet culture.",
      category: "Nutrition",
      debunkedYear: 2010,
      taughtUntilYear: 2015,
      stillTaught: true
    },
    {
      id: "google_glass_privacy_nightmare",
      fact: "Google Glass will create an unstoppable privacy nightmare and social disruption",
      correction: "Technical limitations and social acceptance issues led to Google Glass being discontinued for consumers.",
      explanation: "When Google Glass launched in 2013, privacy advocates predicted surveillance dystopia with ubiquitous recording. Tech journalists warned of social fabric destruction and 'Glassholes' disrupting public spaces. However, the technology proved clunky, expensive ($1,500), with poor battery life and limited functionality. Social resistance and technical limitations led Google to discontinue consumer Glass in 2014, though enterprise versions continued. The privacy fears proved premature given the product's practical failures.",
      category: "Technology",
      debunkedYear: 2014,
      taughtUntilYear: 2016
    },
    {
      id: "3d_tv_future_entertainment",
      fact: "3D television will become the dominant form of home entertainment",
      correction: "Consumer interest in 3D TV quickly waned; manufacturers largely abandoned the technology.",
      explanation: "After Avatar's 3D success in 2009, TV manufacturers heavily promoted 3D as the next revolution. CES 2010-2012 featured walls of 3D TVs with industry predictions of market dominance. However, consumers found 3D glasses annoying, content limited, and the novelty wore off quickly. By 2017, most manufacturers discontinued 3D TV production. Streaming services and VR emerged as more compelling technologies, making 3D TV a brief technological detour.",
      category: "Entertainment Technology",
      debunkedYear: 2015,
      taughtUntilYear: 2017
    },
    {
      id: "peak_oil_civilization_collapse",
      fact: "Peak oil will cause immediate civilization collapse as resources run out",
      correction: "Fracking, renewable energy, and efficiency improvements changed oil supply dynamics significantly.",
      explanation: "Peak oil theory predicted global oil production would peak around 2005-2010, causing economic collapse and resource wars. Books like 'The Long Emergency' (2005) predicted societal breakdown. However, hydraulic fracturing unlocked vast shale oil reserves, while renewable energy costs plummeted 85%+ since 2010. Energy efficiency improvements reduced demand growth. While peak oil may still occur, the timeline and consequences proved far different than predicted.",
      category: "Energy Economics",
      debunkedYear: 2015,
      taughtUntilYear: 2018
    },
    {
      id: "tablets_replace_textbooks",
      fact: "Tablets will completely replace physical textbooks in all schools",
      correction: "Many schools use mixed approaches; physical books retain advantages for certain learning styles.",
      explanation: "When iPads launched in 2010, education technology advocates predicted digital textbooks would replace physical books within 5 years. Los Angeles Unified spent $1.3 billion on iPads in 2013. However, studies found students prefer physical books for deep reading and comprehension. Digital eye strain, distraction, and cost issues emerged. Most schools now use hybrid approaches, with physical books maintaining importance for sustained reading and note-taking.",
      category: "Educational Technology",
      debunkedYear: 2015,
      taughtUntilYear: 2018
    },
    {
      id: "qr_codes_everywhere_future",
      fact: "QR codes will be everywhere and replace all other information sharing methods",
      correction: "QR codes found niche uses but didn't achieve universal adoption until the COVID pandemic.",
      explanation: "QR codes were heavily promoted around 2010-2012 as the future of information sharing, with marketers predicting ubiquitous adoption. However, the need for special apps, poor user experience, and lack of compelling use cases limited adoption. QR codes remained niche until COVID-19 created demand for contactless menus and check-ins. Ironically, the predicted 'QR code revolution' finally arrived a decade later for health reasons, not convenience.",
      category: "Technology",
      debunkedYear: 2015,
      taughtUntilYear: 2020
    },
    {
      id: "bitcoin_worthless_bubble",
      fact: "Bitcoin is a worthless bubble that will crash to zero",
      correction: "Despite volatility, Bitcoin maintained value and gained institutional acceptance over time.",
      explanation: "Since Bitcoin's 2009 launch, prominent economists and investors repeatedly predicted its collapse. Nobel laureate Paul Krugman called it a bubble in 2013. JPMorgan CEO Jamie Dimon called it a 'fraud' in 2017. However, Bitcoin survived multiple crashes and gained institutional adoption - Tesla, MicroStrategy, and even countries like El Salvador adopted it. While volatile, Bitcoin demonstrated resilience and growing acceptance as 'digital gold' despite repeated burial predictions.",
      category: "Economics",
      debunkedYear: 2020,
      taughtUntilYear: 2021
    },
    {
      id: "facebook_timeline_user_revolt",
      fact: "Facebook Timeline will cause mass user exodus due to privacy concerns",
      correction: "Users adapted to Timeline; Facebook continued growing despite initial resistance.",
      explanation: "When Facebook introduced Timeline in 2011, users protested the new profile format that displayed their entire history chronologically. Privacy advocates warned about increased data exposure and predicted mass exodus. Petitions gathered millions of signatures demanding opt-out options. However, users gradually adapted to Timeline, and Facebook continued growing from 900 million to over 2 billion users. The controversy demonstrated users' adaptability to interface changes despite initial resistance.",
      category: "Social Media",
      debunkedYear: 2012,
      taughtUntilYear: 2014
    },
    {
      id: "google_plus_facebook_killer",
      fact: "Google+ will overtake Facebook as the dominant social network",
      correction: "Google+ failed to gain significant traction and was shut down after several years.",
      explanation: "When Google+ launched in 2011, tech analysts predicted it would leverage Google's ecosystem to dethrone Facebook. Google integrated G+ across all services and spent billions promoting it. However, users found it redundant to existing social networks, with forced integration creating resentment rather than adoption. Despite reaching 300 million 'users' (mostly inactive), Google+ shut down in 2019 after a data breach exposed the platform's failure to build genuine engagement.",
      category: "Technology",
      debunkedYear: 2015,
      taughtUntilYear: 2019
    }
  ],
  "2020s": [
    {
      id: "covid_just_flu",
      fact: "COVID-19 is just like the flu and will disappear quickly",
      correction: "COVID-19 proved to be far more transmissible and deadly than seasonal flu, causing a global pandemic.",
      explanation: "Early 2020 comparisons to seasonal flu were quickly disproven by epidemiological data showing COVID-19's higher transmission rate (R0 2-3 vs flu's 1.3) and case fatality rate. The WHO declared a pandemic in March 2020.",
      category: "Medicine",
      debunkedYear: 2020,
      taughtUntilYear: 2020
    },
    {
      id: "ai_decades_away",
      fact: "Artificial General Intelligence is decades away and won't affect most jobs",
      correction: "AI advancement accelerated rapidly, with models like ChatGPT transforming many industries within years.",
      explanation: "Expert predictions consistently placed AGI 20-50 years away throughout the 2010s. The 2019 AI expert survey predicted AGI by 2059. However, transformer architecture breakthroughs and massive compute scaling led to rapid capability improvements. GPT-3 (2020) and ChatGPT (2022) demonstrated human-level performance in many cognitive tasks, transforming industries from legal research to coding within months. The timeline compressed from decades to years, catching experts by surprise.",
      category: "Technology",
      debunkedYear: 2022,
      taughtUntilYear: 2022
    },
    {
      id: "remote_work_impossible",
      fact: "Most office jobs cannot be done remotely without major productivity loss",
      correction: "The pandemic proved many knowledge workers can be equally or more productive working remotely.",
      explanation: "Studies during COVID-19 lockdowns showed productivity either maintained or increased for most knowledge workers. Stanford research found 13% productivity increase with remote work. Business schools rapidly updated their curricula in 2020-2021.",
      category: "Workplace Psychology",
      debunkedYear: 2020,
      taughtUntilYear: 2020
    },
    {
      id: "crypto_worthless",
      fact: "Cryptocurrencies have no real-world value or institutional adoption",
      correction: "Major institutions, corporations, and even countries began adopting cryptocurrencies and blockchain technology.",
      explanation: "Traditional finance dismissed cryptocurrencies as worthless speculation throughout the 2010s. Warren Buffett called Bitcoin 'rat poison' in 2018. However, institutional adoption accelerated rapidly: Tesla bought $1.5B in Bitcoin (2021), El Salvador adopted Bitcoin as legal tender (2021), and major banks like JPMorgan launched crypto services. BlackRock filed for Bitcoin ETFs in 2023. Despite volatility, the institutional adoption proved crypto had achieved legitimate financial status.",
      category: "Economics",
      debunkedYear: 2021,
      taughtUntilYear: 2023
    },
    {
      id: "mRNA_vaccines_risky",
      fact: "mRNA vaccines are too new and risky for widespread use",
      correction: "mRNA COVID vaccines proved highly effective and safe, leading to Nobel Prize recognition in 2023.",
      explanation: "mRNA vaccine technology faced skepticism for being 'experimental' despite 30+ years of research by Katalin Karikó and others. Critics warned of unknown long-term effects and rushed development. However, clinical trials involving 100,000+ people demonstrated 95% efficacy and excellent safety profiles. Real-world data from billions of doses confirmed safety. The 2023 Nobel Prize in Physiology recognized the mRNA vaccine breakthrough that saved millions of lives.",
      category: "Medicine",
      debunkedYear: 2021,
      taughtUntilYear: 2023
    },
    {
      id: "lab_leak_conspiracy",
      fact: "COVID-19 lab leak theories are baseless conspiracy theories",
      correction: "Intelligence agencies and scientists acknowledged lab leak as a possible origin requiring investigation.",
      explanation: "Early 2020 scientific consensus strongly favored natural spillover, with lab leak theories dismissed as conspiracy thinking. Social media platforms banned lab leak discussions. However, the WHO's inconclusive 2021 investigation and U.S. intelligence assessments led to acknowledgment that lab leak was plausible. While natural origin remains more likely according to most virologists, the scientific community recognized the need for thorough investigation rather than dismissal.",
      category: "Virology",
      debunkedYear: 2021,
      taughtUntilYear: 2021
    },
    {
      id: "masks_ineffective",
      fact: "Masks don't work for preventing viral transmission in the general public",
      correction: "Multiple studies confirmed masks significantly reduce COVID transmission when properly worn.",
      explanation: "Early pandemic guidance discouraged public mask use, with health officials claiming limited evidence of effectiveness. The WHO and CDC initially recommended masks only for healthcare workers. However, accumulating evidence from natural experiments, laboratory studies, and population data showed significant transmission reduction with mask use. Guidance reversed by April 2020, though mask effectiveness debates continued despite overwhelming scientific evidence.",
      category: "Public Health",
      debunkedYear: 2020,
      taughtUntilYear: 2020
    },
    {
      id: "electric_cars_impractical",
      fact: "Electric cars will never be practical for most consumers due to range and charging",
      correction: "EV technology advanced rapidly with Tesla and others achieving mainstream adoption and infrastructure.",
      explanation: "Auto industry skeptics long claimed EVs would remain niche due to range anxiety, charging time, and infrastructure limitations. Tesla's Model 3 (2017) and subsequent vehicles proved these concerns overstated for most drivers. Battery technology improvements achieved 300+ mile ranges while charging networks expanded rapidly. EV sales exploded from 0.2% of global auto sales in 2011 to over 10% by 2022, with major automakers committing to all-electric futures.",
      category: "Transportation",
      debunkedYear: 2020,
      taughtUntilYear: 2022
    },
    {
      id: "social_media_harmless",
      fact: "Social media use has no significant impact on mental health",
      correction: "Research linked excessive social media use to increased anxiety, depression, and body image issues.",
      explanation: "Tech companies and early researchers downplayed social media's mental health impacts, citing benefits of connection and community. However, longitudinal studies since 2017 revealed significant correlations between heavy social media use and anxiety, depression, and body dysmorphia, particularly among teenagers. The Facebook internal documents released in 2021 revealed the company knew about these harms while publicly denying them. Mental health impacts are now widely recognized by researchers and policymakers.",
      category: "Psychology",
      debunkedYear: 2020,
      taughtUntilYear: 2021,
      stillTaught: true
    },
    {
      id: "nft_revolutionary",
      fact: "NFTs will revolutionize art ownership and digital commerce forever",
      correction: "Most NFT markets collapsed, revealing speculation bubbles rather than sustainable value propositions.",
      explanation: "During the 2021-2022 NFT boom, evangelists claimed non-fungible tokens would transform digital ownership, with projects like Bored Ape Yacht Club selling for hundreds of thousands of dollars. Proponents argued NFTs solved digital scarcity, enabled new creator economies, and would expand into gaming, music, and virtual real estate. Major brands, celebrities, and auction houses embraced NFTs. However, by late 2022, the market crashed spectacularly - trading volume dropped over 95%, many NFT collections became worthless, and high-profile projects collapsed. Problems included lack of actual ownership rights, environmental concerns, market manipulation, and discovery that most value came from speculation rather than utility. While blockchain technology has legitimate applications, the NFT art market proved to be largely a speculative bubble driven by FOMO and celebrity endorsements rather than sustainable innovation.",
      category: "Economics",
      debunkedYear: 2022
    },
    {
      id: "metaverse_inevitable",
      fact: "The metaverse will replace most real-world social and work interactions",
      correction: "VR adoption remained niche; people preferred real-world and traditional digital interactions.",
      explanation: "Meta's $13+ billion metaverse investment and corporate rebranding sparked predictions of imminent virtual reality dominance. Tech leaders predicted virtual meetings, shopping, and socializing would become primary interaction modes. However, VR headset adoption remained limited due to cost, comfort issues, and lack of compelling use cases. Users preferred video calls and traditional apps over VR environments. By 2023, Meta scaled back metaverse investments as reality diverged from hype.",
      category: "Technology",
      debunkedYear: 2023,
      taughtUntilYear: 2023
    },
    {
      id: "inflation_transitory",
      fact: "Post-pandemic inflation is definitely transitory and temporary",
      correction: "Inflation proved persistent, requiring central bank intervention and lasting longer than predicted.",
      explanation: "In early 2021, Federal Reserve Chair Jerome Powell and Treasury Secretary Janet Yellen confidently labeled rising inflation 'transitory,' predicting it would fade as pandemic supply chains normalized. This became official policy, with the Fed maintaining near-zero interest rates through 2021. The prediction was based on assumptions that inflation stemmed from temporary supply bottlenecks, pent-up demand, and base effects from 2020's low prices. However, inflation accelerated from 2.6% in March 2021 to 9.1% by June 2022 - the highest in 40 years. Multiple factors proved more persistent than expected: labor shortages, housing costs, energy prices, and expansionary fiscal policy. The Fed was forced to abandon the 'transitory' narrative by November 2021 and began aggressive rate hikes in 2022. This policy mistake highlighted how even expert economic predictions can fail when underlying assumptions about complex systems prove wrong.",
      category: "Economics",
      debunkedYear: 2021
    },
    {
      id: "work_from_home_productivity_myth",
      fact: "Working from home is inherently less productive than office work",
      correction: "Studies showed many remote workers are equally or more productive, challenging traditional office assumptions.",
      explanation: "Pre-pandemic corporate culture assumed office presence was essential for productivity and collaboration. Yahoo's Marissa Mayer famously banned remote work in 2013, with many companies following suit. However, forced remote work during COVID-19 revealed these assumptions were wrong for many knowledge workers. Stanford studies found 13% productivity increases with remote work, while Bloomberg research showed 40% of remote workers felt more productive. This challenged fundamental assumptions about workplace effectiveness.",
      category: "Workplace Psychology",
      debunkedYear: 2020,
      taughtUntilYear: 2020
    },
    {
      id: "zoom_fatigue_not_real",
      fact: "Video call fatigue is just an excuse, not a real phenomenon",
      correction: "Research identified specific psychological and physiological causes of video conferencing exhaustion.",
      explanation: "When video meetings exploded during the 2020 pandemic, many managers and productivity experts dismissed complaints of 'Zoom fatigue' as excuses for laziness or resistance to remote work. They argued that talking to people shouldn't be more tiring on screen than in person. However, Stanford researcher Jeremy Bailenson's 2021 study identified four specific causes: excessive eye contact creating fight-or-flight responses, cognitive overload from processing multiple faces simultaneously, increased self-awareness from seeing oneself constantly, and reduced mobility during calls. Microsoft's 2021 brain wave research found video meetings generated significantly more stress markers than audio-only calls. Neuroimaging studies revealed that video calls require 15-20% more mental energy to process the same conversation due to synchronization delays and missing non-verbal cues. This validated millions of workers' experiences and led to 'camera-optional' policies and meeting-free time blocks becoming standard workplace accommodations.",
      category: "Psychology",
      debunkedYear: 2021
    },
    {
      id: "social_media_addiction_myth",
      fact: "Social media addiction isn't real, it's just poor self-control",
      correction: "Neurological studies found social media can trigger addiction-like brain patterns similar to substance abuse.",
      explanation: "Tech companies and some researchers dismissed social media addiction claims as moral panic rather than medical reality. However, neuroimaging studies since 2018 revealed social media activates the same brain reward pathways as gambling and substance addiction. Research found similar dopamine patterns, tolerance effects, and withdrawal symptoms. The WHO recognized 'gaming disorder' in 2018, while multiple studies confirmed social media can trigger genuine addiction-like responses in vulnerable individuals.",
      category: "Neuroscience",
      debunkedYear: 2020,
      taughtUntilYear: 2022,
      stillTaught: true
    },
    {
      id: "electric_grid_renewable_impossible",
      fact: "Renewable energy can never reliably power entire electrical grids",
      correction: "Multiple countries and regions achieved 100% renewable electricity for extended periods.",
      explanation: "Fossil fuel advocates long claimed renewable energy was too intermittent for grid-scale power, requiring baseload coal or nuclear plants. However, Costa Rica ran on 99%+ renewable electricity for multiple years, while countries like Iceland, Norway, and Paraguay achieved 100% renewable power. California and other regions regularly operate on 100% renewables for hours or days. Advanced battery storage and grid management proved fossil fuel baseload wasn't necessary for reliable electricity.",
      category: "Energy Science",
      debunkedYear: 2020,
      taughtUntilYear: 2022
    },
    {
      id: "lab_grown_meat_impossible_scale",
      fact: "Lab-grown meat will never be commercially viable or scalable",
      correction: "Cultured meat gained regulatory approval and commercial production in multiple countries.",
      explanation: "Traditional agriculture and meat industry advocates claimed lab-grown meat would never overcome technical hurdles for commercial production. Critics cited high costs, energy requirements, and scalability challenges. However, Singapore approved cultured chicken in 2020, followed by the U.S. in 2023. Multiple companies achieved commercial production with dramatically falling costs. While still expensive, cultured meat proved technically and commercially viable, transforming from science fiction to market reality.",
      category: "Biotechnology",
      debunkedYear: 2020,
      taughtUntilYear: 2023
    },
    {
      id: "quantum_computing_overhype",
      fact: "Quantum computing is pure hype with no practical applications",
      correction: "Quantum computers achieved 'quantum supremacy' and found applications in optimization and cryptography.",
      explanation: "Skeptics long dismissed quantum computing as theoretical physics with no practical value, calling it decades away from usefulness. However, Google's quantum supremacy achievement in 2019 proved quantum computers could solve specific problems exponentially faster than classical computers. IBM, Google, and other companies deployed quantum computers for optimization, drug discovery, and cryptography research. While general-purpose quantum computing remains challenging, specific applications demonstrated real-world value.",
      category: "Computer Science",
      debunkedYear: 2019,
      taughtUntilYear: 2022
    },
    {
      id: "autonomous_vehicles_decade_away",
      fact: "Fully autonomous vehicles are at least a decade away from reality",
      correction: "Self-driving cars deployed commercially in multiple cities, though with limitations.",
      explanation: "Auto industry analysts and regulators consistently predicted autonomous vehicles needed 10+ years of development. Skeptics cited safety concerns, regulatory hurdles, and technical complexity. However, Waymo launched commercial robotaxi service in Phoenix (2020), followed by San Francisco and other cities. While full autonomy remains limited to specific routes and conditions, commercial deployment proved the technology viable much faster than predicted.",
      category: "Transportation",
      debunkedYear: 2020,
      taughtUntilYear: 2022
    },
    {
      id: "gene_editing_too_dangerous",
      fact: "CRISPR gene editing is too dangerous and imprecise for medical use",
      correction: "CRISPR treatments received approval for sickle cell disease and other conditions.",
      explanation: "When CRISPR was discovered, bioethicists and some scientists warned it was too dangerous for human use due to off-target effects and unknown consequences. The 2018 Chinese scientist controversy reinforced safety concerns. However, careful clinical trials proved CRISPR could be used safely for specific conditions. The FDA approved CRISPR treatments for sickle cell disease and beta-thalassemia in 2023, with patients showing remarkable improvements and no serious side effects.",
      category: "Biotechnology",
      debunkedYear: 2021,
      taughtUntilYear: 2023
    },
    {
      id: "tiktok_just_dancing_app",
      fact: "TikTok is just a dancing app for teenagers with no broader impact",
      correction: "TikTok became a major platform for news, education, business, and cultural influence across all ages.",
      explanation: "Early TikTok analysis dismissed it as a frivolous dancing app for Gen Z with no lasting cultural impact. Critics compared it to Vine and predicted quick decline. However, TikTok evolved into a primary news source for young adults, educational platform for complex topics, and major business tool for marketing and commerce. The platform influenced music charts, political movements, and consumer trends, proving far more impactful than initial assessments suggested.",
      category: "Social Media",
      debunkedYear: 2020,
      taughtUntilYear: 2021
    },
    {
      id: "contact_tracing_apps_useless",
      fact: "COVID contact tracing apps are useless privacy violations that won't help",
      correction: "Studies showed contact tracing apps helped reduce transmission when widely adopted.",
      explanation: "Privacy advocates and tech skeptics dismissed COVID contact tracing apps as surveillance tools with minimal health benefits. Low adoption rates in some countries reinforced pessimism. However, countries with high adoption like South Korea and Germany saw measurable transmission reductions. UK studies found their NHS app averted 600,000 infections. Apple and Google's privacy-preserving protocols addressed surveillance concerns while maintaining effectiveness for public health.",
      category: "Public Health Technology",
      debunkedYear: 2020,
      taughtUntilYear: 2021
    },
    {
      id: "remote_learning_inferior",
      fact: "Remote learning is vastly inferior and will never match in-person education",
      correction: "Pandemic experience showed online learning can be effective with proper design and technology.",
      explanation: "Educational traditionalists long argued that remote learning couldn't match in-person instruction quality. The forced pivot to online learning in 2020 initially seemed to confirm this view with widespread struggles. However, well-designed online programs showed comparable or superior outcomes for many subjects. Khan Academy, Arizona State Online, and other programs demonstrated effective digital pedagogy. While social aspects remain challenging, academic outcomes proved online learning could be highly effective when properly implemented.",
      category: "Educational Technology",
      debunkedYear: 2020,
      taughtUntilYear: 2021
    },
    {
      id: "delivery_drones_impractical",
      fact: "Delivery drones are impractical gimmicks that will never work commercially",
      correction: "Multiple companies successfully deployed commercial drone delivery services.",
      explanation: "Logistics experts dismissed delivery drones as publicity stunts facing insurmountable regulatory, safety, and economic challenges. Critics cited weather limitations, air traffic concerns, and cost inefficiency. However, companies like Zipline (medical supplies in Africa), Wing (Australia/U.S. deliveries), and Amazon Prime Air proved commercial viability. Regulatory approvals expanded rapidly, with drones successfully delivering packages, food, and medical supplies in multiple markets.",
      category: "Transportation",
      debunkedYear: 2020,
      taughtUntilYear: 2022
    },
    {
      id: "climate_change_pause_again",
      fact: "Global warming has paused again due to natural cooling cycles",
      correction: "2020s broke multiple temperature records, confirming continued warming trend.",
      explanation: "Climate skeptics recycled the 'global warming pause' narrative from the 2000s, claiming La Niña cycles in 2020-2022 indicated renewed cooling. However, 2016, 2019, 2020, and 2023 each broke global temperature records. Ocean heat content continued rising unabated. The temporary La Niña cooling was overwhelmed by continued greenhouse gas warming, with each successive year remaining among the hottest on record. The 'pause' narrative was again debunked by empirical temperature data.",
      category: "Climate Science",
      debunkedYear: 2021,
      taughtUntilYear: 2023
    },
    {
      id: "space_tourism_century_away",
      fact: "Space tourism for civilians is at least a century away from reality",
      correction: "Multiple private companies began offering civilian spaceflights in the 2020s.",
      explanation: "Aerospace experts consistently predicted civilian space travel would remain science fiction for decades or centuries. High costs, safety risks, and technical complexity seemed insurmountable. However, SpaceX, Blue Origin, and Virgin Galactic achieved civilian spaceflights in 2021. The Inspiration4 mission put civilians in orbit for three days. While expensive, space tourism transitioned from impossible to commercially available within years, not centuries.",
      category: "Aerospace",
      debunkedYear: 2021,
      taughtUntilYear: 2021
    },
    {
      id: "wfh_destroy_innovation",
      fact: "Remote work permanently destroys innovation and creative collaboration",
      correction: "Many companies maintained or improved innovation with hybrid and remote work models.",
      explanation: "Corporate leaders initially feared remote work would kill innovation, citing concerns about reduced 'water cooler conversations' and serendipitous collaboration. However, Harvard Business School studies found remote teams often increased innovation through more diverse perspectives and focused deep work. Companies like GitLab, Shopify, and Atlassian reported higher innovation metrics while fully remote. The key proved to be intentional collaboration design rather than physical proximity. Despite evidence, some executives still mandate office returns citing innovation concerns.",
      category: "Workplace Science",
      debunkedYear: 2022,
      taughtUntilYear: 2023,
      stillTaught: true
    },
    {
      id: "supply_chain_fixed_quickly",
      fact: "Post-pandemic supply chain disruptions will be resolved within months",
      correction: "Supply chain issues persisted for years, reshaping global trade and manufacturing strategies.",
      explanation: "In early 2020, economists and business leaders predicted supply chain disruptions would resolve quickly as pandemic restrictions lifted. The assumption was that global trade would 'snap back' to normal within 6-12 months. However, complex interdependencies, labor shortages, geopolitical tensions, and demand shifts created cascading effects lasting through 2023 and beyond. The Suez Canal blockage, semiconductor shortages, and China's zero-COVID policy extended disruptions far beyond initial predictions. Companies began 'reshoring' and building supply chain resilience rather than relying on just-in-time efficiency.",
      category: "Economics",
      debunkedYear: 2022,
      taughtUntilYear: 2023
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

  // Sort facts chronologically - oldest first (most nostalgic content at top)
  return uniqueFacts.sort((a, b) => {
    // Primary sort: use debunkedYear or taughtUntilYear (whichever is available)
    const aYear = a.debunkedYear || a.taughtUntilYear || 9999; // Default to far future if no year
    const bYear = b.debunkedYear || b.taughtUntilYear || 9999;

    if (aYear !== bYear) {
      return aYear - bYear; // Earlier years first
    }

    // Secondary sort: by fact ID for consistent ordering when years are equal
    return a.id.localeCompare(b.id);
  });
}