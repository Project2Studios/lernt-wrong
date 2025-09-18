#!/usr/bin/env node

/**
 * Script to research and populate sources for all facts in the Neon database
 * This script will be used in conjunction with Claude agents to systematically
 * research and add credible academic sources to all facts.
 */

import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const sql = neon(process.env.DATABASE_URL);

// Comprehensive fact sources compiled by research agents
const factSources = {
  // ASTRONOMY & PHYSICS (Agent 1 Research)
  'pluto_planet': {
    source: 'International Astronomical Union Resolution B5 (2006)',
    sourceUrl: 'https://www.iau.org/news/pressreleases/detail/iau0603/'
  },
  'dinosaur_extinction': {
    source: 'Alvarez et al. (1980) Science 208:1095-1108',
    sourceUrl: 'https://doi.org/10.1126/science.208.4448.1095'
  },
  'atoms_indivisible': {
    source: 'Thomson J.J. (1897) Cathode Rays. Philosophical Magazine 44:293-316',
    sourceUrl: 'https://doi.org/10.1080/14786449708621070'
  },
  'hubble_expansion': {
    source: 'Hubble E. (1929) A relation between distance and radial velocity among extra-galactic nebulae. PNAS 15(3):168-173',
    sourceUrl: 'https://doi.org/10.1073/pnas.15.3.168'
  },
  'cosmic_microwave_background': {
    source: 'Penzias A.A. & Wilson R.W. (1965) A Measurement of Excess Antenna Temperature at 4080 Mc/s. ApJ 142:419-421',
    sourceUrl: 'https://ui.adsabs.harvard.edu/abs/1965ApJ...142..419P'
  },
  'event_horizon_telescope': {
    source: 'Event Horizon Telescope Collaboration (2019) First M87 Event Horizon Telescope Results. ApJL 875(1):L1',
    sourceUrl: 'https://doi.org/10.3847/2041-8213/ab0ec7'
  },

  // BIOLOGY & MEDICINE (Agent 2 Research)
  'tongue_taste_map': {
    source: 'Collings VB (1974) Human taste response as a function of locus of stimulation on the tongue and soft palate. Perception & Psychophysics 16:169-174',
    sourceUrl: 'https://doi.org/10.3758/BF03203270'
  },
  'ulcer_stress': {
    source: 'Marshall BJ, Warren JR (2005) Nobel Prize in Physiology or Medicine for discovery of Helicobacter pylori',
    sourceUrl: 'https://www.nobelprize.org/prizes/medicine/2005/press-release/'
  },
  'cholesterol_deadly': {
    source: 'U.S. Department of Agriculture (2015) 2015–2020 Dietary Guidelines for Americans. 8th Edition',
    sourceUrl: 'https://health.gov/our-work/food-nutrition/previous-dietary-guidelines/2015'
  },
  'left_right_brain': {
    source: 'Nielsen JA, Zielinski BA, Ferguson MA, et al. (2013) An Evaluation of the Left-Brain vs. Right-Brain Hypothesis. PLOS One 8(8):e71275',
    sourceUrl: 'https://doi.org/10.1371/journal.pone.0071275'
  },
  'sugar_makes_kids_hyperactive': {
    source: 'Wolraich ML, Wilson DB, White JW (1995) The effect of sugar on behavior or cognition in children. A meta-analysis. JAMA 274:1617-1621',
    sourceUrl: 'https://doi.org/10.1001/jama.1995.03530200053037'
  },
  'spinach_iron_myth': {
    source: 'USDA Food Composition Database (2024) Spinach, raw - Iron content and bioavailability analysis',
    sourceUrl: 'https://fdc.nal.usda.gov/fdc-app.html#/food-details/168462/nutrients'
  },
  'vitamins_uspstf': {
    source: 'US Preventive Services Task Force (2022) Vitamin, Mineral, and Multivitamin Supplementation. JAMA 327:2334-2347',
    sourceUrl: 'https://doi.org/10.1001/jama.2022.8970'
  },
  'arthroscopic_placebo': {
    source: 'Moseley JB, O\'Malley K, Petersen NJ, et al. (2002) A controlled trial of arthroscopic surgery for osteoarthritis. NEJM 347:81-88',
    sourceUrl: 'https://doi.org/10.1056/NEJMoa013259'
  },

  // PSYCHOLOGY & TECHNOLOGY (Agent 3 Research)
  'learning_styles': {
    source: 'Pashler H, McDaniel M, Rohrer D, & Bjork R (2008) Learning styles: Concepts and evidence. Psychological Science in the Public Interest 9(3):105-119',
    sourceUrl: 'https://doi.org/10.1111/j.1539-6053.2009.01038.x'
  },
  'stanford_prison_experiment': {
    source: 'Le Texier T (2019) Debunking the Stanford Prison Experiment. American Psychologist 74(7):823-839',
    sourceUrl: 'https://doi.org/10.1037/amp0000401'
  },
  'internet_prediction_failure': {
    source: 'Stoll C (1995, February 26) The Internet? Bah! Newsweek',
    sourceUrl: 'https://www.newsweek.com/clifford-stoll-why-web-wont-be-nirvana-185306'
  },
  'multiple_intelligences_criticism': {
    source: 'Waterhouse L (2006) Multiple intelligences, the Mozart effect, and emotional intelligence: A critical review. Educational Psychologist 41(4):207-225',
    sourceUrl: 'https://doi.org/10.1207/s15326985ep4104_1'
  },
  'mozart_effect_babies': {
    source: 'Steele KM, Bass KE, & Crook MD (1999) The mystery of the Mozart effect: Failure to replicate. Psychological Science 10(4):366-369',
    sourceUrl: 'https://doi.org/10.1111/1467-9280.00169'
  },
  'violent_video_games_myth': {
    source: 'Ferguson CJ, Copenhaver A, & Markey P (2020) Reexamining the findings of the APA 2015 task force on violent media. Perspectives on Psychological Science 15(6):1423-1443',
    sourceUrl: 'https://doi.org/10.1177/1745691620927666'
  },
  'repressed_memory_debunked': {
    source: 'Loftus EF & Pickrell JE (1995) The formation of false memories. Psychiatric Annals 25(12):720-725',
    sourceUrl: 'https://doi.org/10.3928/0048-5713-19951201-07'
  },
  'digital_natives_myth': {
    source: 'Bennett S, Maton K, & Kervin L (2008) The \'digital natives\' debate: A critical review of the evidence. British Journal of Educational Technology 39(5):775-786',
    sourceUrl: 'https://doi.org/10.1111/j.1467-8535.2007.00793.x'
  },
  'ten_thousand_hour_rule': {
    source: 'Macnamara BN, Hambrick DZ, & Oswald FL (2014) Deliberate practice and performance: A meta-analysis. Psychological Science 25(8):1608-1618',
    sourceUrl: 'https://doi.org/10.1177/0956797614535810'
  },
  'social_media_depression': {
    source: 'Orben A & Przybylski AK (2019) The association between adolescent well-being and digital technology use. Nature Human Behaviour 3(2):173-182',
    sourceUrl: 'https://doi.org/10.1038/s41562-018-0506-1'
  }
};

async function updateFactSources() {
  console.log('🔬 Starting fact source population...');

  let updated = 0;
  let errors = 0;

  for (const [factId, sourceData] of Object.entries(factSources)) {
    try {
      console.log(`📝 Updating ${factId}...`);

      await sql`
        UPDATE facts
        SET source = ${sourceData.source},
            source_url = ${sourceData.sourceUrl},
            updated_at = NOW()
        WHERE id = ${factId}
      `;

      // Check if the update worked by querying the fact
      const check = await sql`
        SELECT source FROM facts WHERE id = ${factId}
      `;

      if (check.length > 0 && check[0].source === sourceData.source) {
        updated++;
        console.log(`✅ Updated ${factId}`);
      } else if (check.length === 0) {
        console.log(`⚠️  No fact found with ID: ${factId}`);
      } else {
        console.log(`❓ Update status unclear for ${factId}`);
      }

    } catch (error) {
      errors++;
      console.error(`❌ Error updating ${factId}:`, error.message);
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Updated: ${updated} facts`);
  console.log(`   Errors: ${errors} facts`);
  console.log(`   Total processed: ${Object.keys(factSources).length} facts`);
}

async function listFactsNeedingSources() {
  console.log('🔍 Checking facts that need sources...');

  try {
    const facts = await sql`
      SELECT id, fact_text, category, debunked_year
      FROM facts
      WHERE source IS NULL OR source = ''
      ORDER BY category, debunked_year
    `;

    console.log(`\n📋 ${facts.length} facts need sources:`);
    facts.forEach((fact, index) => {
      console.log(`${index + 1}. [${fact.category}] ${fact.id}: ${fact.fact_text.substring(0, 80)}...`);
    });

    return facts;
  } catch (error) {
    console.error('❌ Error fetching facts:', error);
    return [];
  }
}

// Main execution
async function main() {
  const command = process.argv[2];

  switch (command) {
    case 'list':
      await listFactsNeedingSources();
      break;
    case 'update':
      await updateFactSources();
      break;
    case 'check':
      await listFactsNeedingSources();
      console.log('\nTo update sources, run: node populate-sources.js update');
      break;
    default:
      console.log('Usage:');
      console.log('  node populate-sources.js list   - List facts needing sources');
      console.log('  node populate-sources.js update - Update facts with sources');
      console.log('  node populate-sources.js check  - Check status and show help');
  }
}

main().catch(console.error);