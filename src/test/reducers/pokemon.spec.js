import rootReducer from "../../reducers";

const modelConst = "POKEMON";

const initialState = {
  error: {},
  list: {},
  message: "",
  object:{}
};

const mockResponseResults = {
  'count': 964,
  'next': 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
  'previous': null,
  'results': [
    { 'name': 'bulbasaur', 'url': 'https://pokeapi.co/api/v2/pokemon/1/' },
    { 'name': 'ivysaur', 'url': 'https://pokeapi.co/api/v2/pokemon/2/' },
    { 'name': 'venusaur', 'url': 'https://pokeapi.co/api/v2/pokemon/3/' },
    { 'name': 'charmander', 'url': 'https://pokeapi.co/api/v2/pokemon/4/' },
    { 'name': 'charmeleon', 'url': 'https://pokeapi.co/api/v2/pokemon/5/' },
    { 'name': 'charizard', 'url': 'https://pokeapi.co/api/v2/pokemon/6/' },
    { 'name': 'squirtle', 'url': 'https://pokeapi.co/api/v2/pokemon/7/' },
    { 'name': 'wartortle', 'url': 'https://pokeapi.co/api/v2/pokemon/8/' },
    { 'name': 'blastoise', 'url': 'https://pokeapi.co/api/v2/pokemon/9/' },
    { 'name': 'caterpie', 'url': 'https://pokeapi.co/api/v2/pokemon/10/' },
    { 'name': 'metapod', 'url': 'https://pokeapi.co/api/v2/pokemon/11/' },
    { 'name': 'butterfree', 'url': 'https://pokeapi.co/api/v2/pokemon/12/' },
    { 'name': 'weedle', 'url': 'https://pokeapi.co/api/v2/pokemon/13/' },
    { 'name': 'kakuna', 'url': 'https://pokeapi.co/api/v2/pokemon/14/' },
    { 'name': 'beedrill', 'url': 'https://pokeapi.co/api/v2/pokemon/15/' },
    { 'name': 'pidgey', 'url': 'https://pokeapi.co/api/v2/pokemon/16/' },
    { 'name': 'pidgeotto', 'url': 'https://pokeapi.co/api/v2/pokemon/17/' },
    { 'name': 'pidgeot', 'url': 'https://pokeapi.co/api/v2/pokemon/18/' },
    { 'name': 'rattata', 'url': 'https://pokeapi.co/api/v2/pokemon/19/' },
    { 'name': 'raticate', 'url': 'https://pokeapi.co/api/v2/pokemon/20/' }],
};
const mockResponsePokemon = {
  'abilities': [
    {
      'ability': {
        'name': 'shed-skin',
        'url': 'https://pokeapi.co/api/v2/ability/61/',
      }, 'is_hidden': false, 'slot': 1,
    }],
  'base_experience': 72,
  'forms': [
    {
      'name': 'kakuna',
      'url': 'https://pokeapi.co/api/v2/pokemon-form/14/',
    }],
  'game_indices': [
    {
      'game_index': 14,
      'version': {
        'name': 'white-2',
        'url': 'https://pokeapi.co/api/v2/version/22/',
      },
    },
    {
      'game_index': 14,
      'version': {
        'name': 'black-2',
        'url': 'https://pokeapi.co/api/v2/version/21/',
      },
    },
    {
      'game_index': 14,
      'version': {
        'name': 'white',
        'url': 'https://pokeapi.co/api/v2/version/18/',
      },
    },
    {
      'game_index': 14,
      'version': {
        'name': 'black',
        'url': 'https://pokeapi.co/api/v2/version/17/',
      },
    },
    {
      'game_index': 14,
      'version': {
        'name': 'soulsilver',
        'url': 'https://pokeapi.co/api/v2/version/16/',
      },
    },
    {
      'game_index': 14,
      'version': {
        'name': 'heartgold',
        'url': 'https://pokeapi.co/api/v2/version/15/',
      },
    },
    {
      'game_index': 14,
      'version': {
        'name': 'platinum',
        'url': 'https://pokeapi.co/api/v2/version/14/',
      },
    },
    {
      'game_index': 14,
      'version': {
        'name': 'pearl',
        'url': 'https://pokeapi.co/api/v2/version/13/',
      },
    },
    {
      'game_index': 14,
      'version': {
        'name': 'diamond',
        'url': 'https://pokeapi.co/api/v2/version/12/',
      },
    },
    {
      'game_index': 14,
      'version': {
        'name': 'leafgreen',
        'url': 'https://pokeapi.co/api/v2/version/11/',
      },
    },
    {
      'game_index': 14,
      'version': {
        'name': 'firered',
        'url': 'https://pokeapi.co/api/v2/version/10/',
      },
    },
    {
      'game_index': 14,
      'version': {
        'name': 'emerald',
        'url': 'https://pokeapi.co/api/v2/version/9/',
      },
    },
    {
      'game_index': 14,
      'version': {
        'name': 'sapphire',
        'url': 'https://pokeapi.co/api/v2/version/8/',
      },
    },
    {
      'game_index': 14,
      'version': {
        'name': 'ruby',
        'url': 'https://pokeapi.co/api/v2/version/7/',
      },
    },
    {
      'game_index': 14,
      'version': {
        'name': 'crystal',
        'url': 'https://pokeapi.co/api/v2/version/6/',
      },
    },
    {
      'game_index': 14,
      'version': {
        'name': 'silver',
        'url': 'https://pokeapi.co/api/v2/version/5/',
      },
    },
    {
      'game_index': 14,
      'version': {
        'name': 'gold',
        'url': 'https://pokeapi.co/api/v2/version/4/',
      },
    },
    {
      'game_index': 113,
      'version': {
        'name': 'yellow',
        'url': 'https://pokeapi.co/api/v2/version/3/',
      },
    },
    {
      'game_index': 113,
      'version': {
        'name': 'blue',
        'url': 'https://pokeapi.co/api/v2/version/2/',
      },
    },
    {
      'game_index': 113,
      'version': {
        'name': 'red',
        'url': 'https://pokeapi.co/api/v2/version/1/',
      },
    }],
  'height': 6,
  'held_items': [],
  'id': 14,
  'is_default': true,
  'location_area_encounters': 'https://pokeapi.co/api/v2/pokemon/14/encounters',
  'moves': [
    {
      'move': {
        'name': 'string-shot',
        'url': 'https://pokeapi.co/api/v2/move/81/',
      },
      'version_group_details': [
        {
          'level_learned_at': 0,
          'move_learn_method': {
            'name': 'tutor',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          'version_group': {
            'name': 'heartgold-soulsilver',
            'url': 'https://pokeapi.co/api/v2/version-group/10/',
          },
        }],
    },
    {
      'move': {
        'name': 'harden',
        'url': 'https://pokeapi.co/api/v2/move/106/',
      }, 'version_group_details': [
        {
          'level_learned_at': 1,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'ultra-sun-ultra-moon',
            'url': 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          'level_learned_at': 0,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'ultra-sun-ultra-moon',
            'url': 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          'level_learned_at': 1,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'sun-moon',
            'url': 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          'level_learned_at': 0,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'sun-moon',
            'url': 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          'level_learned_at': 7,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'omega-ruby-alpha-sapphire',
            'url': 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          'level_learned_at': 1,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'omega-ruby-alpha-sapphire',
            'url': 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          'level_learned_at': 7,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'x-y',
            'url': 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          'level_learned_at': 1,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'x-y',
            'url': 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          'level_learned_at': 7,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'black-2-white-2',
            'url': 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          'level_learned_at': 1,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'black-2-white-2',
            'url': 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          'level_learned_at': 7,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'xd',
            'url': 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          'level_learned_at': 1,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'xd',
            'url': 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          'level_learned_at': 7,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'colosseum',
            'url': 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          'level_learned_at': 1,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'colosseum',
            'url': 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          'level_learned_at': 7,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'black-white',
            'url': 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          'level_learned_at': 1,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'black-white',
            'url': 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          'level_learned_at': 7,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'heartgold-soulsilver',
            'url': 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          'level_learned_at': 1,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'heartgold-soulsilver',
            'url': 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          'level_learned_at': 7,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'platinum',
            'url': 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          'level_learned_at': 1,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'platinum',
            'url': 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          'level_learned_at': 7,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'diamond-pearl',
            'url': 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          'level_learned_at': 1,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'diamond-pearl',
            'url': 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          'level_learned_at': 7,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'firered-leafgreen',
            'url': 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          'level_learned_at': 1,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'firered-leafgreen',
            'url': 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          'level_learned_at': 7,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'emerald',
            'url': 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          'level_learned_at': 1,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'emerald',
            'url': 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          'level_learned_at': 7,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'ruby-sapphire',
            'url': 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          'level_learned_at': 1,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'ruby-sapphire',
            'url': 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          'level_learned_at': 7,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'crystal',
            'url': 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          'level_learned_at': 1,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'crystal',
            'url': 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          'level_learned_at': 7,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'gold-silver',
            'url': 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          'level_learned_at': 1,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'gold-silver',
            'url': 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          'level_learned_at': 1,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'yellow',
            'url': 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          'level_learned_at': 1,
          'move_learn_method': {
            'name': 'level-up',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          'version_group': {
            'name': 'red-blue',
            'url': 'https://pokeapi.co/api/v2/version-group/1/',
          },
        }],
    },
    {
      'move': {
        'name': 'iron-defense',
        'url': 'https://pokeapi.co/api/v2/move/334/',
      },
      'version_group_details': [
        {
          'level_learned_at': 0,
          'move_learn_method': {
            'name': 'tutor',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          'version_group': {
            'name': 'omega-ruby-alpha-sapphire',
            'url': 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          'level_learned_at': 0,
          'move_learn_method': {
            'name': 'tutor',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          'version_group': {
            'name': 'black-2-white-2',
            'url': 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          'level_learned_at': 0,
          'move_learn_method': {
            'name': 'tutor',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          'version_group': {
            'name': 'heartgold-soulsilver',
            'url': 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          'level_learned_at': 0,
          'move_learn_method': {
            'name': 'tutor',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          'version_group': {
            'name': 'platinum',
            'url': 'https://pokeapi.co/api/v2/version-group/9/',
          },
        }],
    },
    {
      'move': {
        'name': 'bug-bite',
        'url': 'https://pokeapi.co/api/v2/move/450/',
      },
      'version_group_details': [
        {
          'level_learned_at': 0,
          'move_learn_method': {
            'name': 'tutor',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          'version_group': {
            'name': 'omega-ruby-alpha-sapphire',
            'url': 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          'level_learned_at': 0,
          'move_learn_method': {
            'name': 'tutor',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          'version_group': {
            'name': 'black-2-white-2',
            'url': 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          'level_learned_at': 0,
          'move_learn_method': {
            'name': 'tutor',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          'version_group': {
            'name': 'heartgold-soulsilver',
            'url': 'https://pokeapi.co/api/v2/version-group/10/',
          },
        }],
    },
    {
      'move': {
        'name': 'electroweb',
        'url': 'https://pokeapi.co/api/v2/move/527/',
      },
      'version_group_details': [
        {
          'level_learned_at': 0,
          'move_learn_method': {
            'name': 'tutor',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          'version_group': {
            'name': 'omega-ruby-alpha-sapphire',
            'url': 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          'level_learned_at': 0,
          'move_learn_method': {
            'name': 'tutor',
            'url': 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          'version_group': {
            'name': 'black-2-white-2',
            'url': 'https://pokeapi.co/api/v2/version-group/14/',
          },
        }],
    }],
  'name': 'kakuna',
  'order': 18,
  'species': {
    'name': 'kakuna',
    'url': 'https://pokeapi.co/api/v2/pokemon-species/14/',
  },
  'sprites': {
    'back_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png',
    'back_female': null,
    'back_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/14.png',
    'back_shiny_female': null,
    'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
    'front_female': null,
    'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/14.png',
    'front_shiny_female': null,
  },
  'stats': [
    {
      'base_stat': 35,
      'effort': 0,
      'stat': { 'name': 'speed', 'url': 'https://pokeapi.co/api/v2/stat/6/' },
    },
    {
      'base_stat': 25,
      'effort': 0,
      'stat': {
        'name': 'special-defense',
        'url': 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      'base_stat': 25,
      'effort': 0,
      'stat': {
        'name': 'special-attack',
        'url': 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      'base_stat': 50,
      'effort': 2,
      'stat': { 'name': 'defense', 'url': 'https://pokeapi.co/api/v2/stat/3/' },
    },
    {
      'base_stat': 25,
      'effort': 0,
      'stat': { 'name': 'attack', 'url': 'https://pokeapi.co/api/v2/stat/2/' },
    },
    {
      'base_stat': 45,
      'effort': 0,
      'stat': { 'name': 'hp', 'url': 'https://pokeapi.co/api/v2/stat/1/' },
    }],
  'types': [
    {
      'slot': 2,
      'type': { 'name': 'poison', 'url': 'https://pokeapi.co/api/v2/type/4/' },
    },
    {
      'slot': 1,
      'type': { 'name': 'bug', 'url': 'https://pokeapi.co/api/v2/type/7/' },
    }],
  'weight': 100,
};
const errorMochResponse = {
  errors: []
};

describe("Pokemon Reducers", () => {
  it("should return the initial state", () => {
    expect(rootReducer(undefined, { type: "Something" }).pokemon).toEqual(initialState);
  });

  it("should return the reducer on loading", () => {
    const type = `GET_${modelConst}_LOADING`;
    expect(rootReducer(
      undefined,
      {
        isLoading: true,
        someOtherStuff: "Morestuff",
        type,
      },
    ).pokemon).toEqual({
      ...initialState,
      loading: true,
      message: type,
    });
  });

  it("should get data pokemon", () => {
    const type = `GET_${modelConst}_SUCCESS`;
    expect(rootReducer(
      {
        pokemon: {
          ...initialState,
          loading: false,
        },
      },
      {
        type,
        response: mockResponsePokemon,
      },
    ).pokemon).toEqual({
      ...initialState,
      loading: false,
      object:mockResponsePokemon ,
      error: {},
      message: type,
    });
  });

  it("should get a pokemon failure", () => {
    const type = `GET_${modelConst}_ERROR`;
    expect(rootReducer({
      pokemon: {
        ...initialState,
        loading: false,
      },
    }, {
      type,
      response: errorMochResponse,
    }).pokemon).toEqual({
      ...initialState,
      loading: false,
      error: errorMochResponse,
      list: {},
      message: type,
    });
  });
});
