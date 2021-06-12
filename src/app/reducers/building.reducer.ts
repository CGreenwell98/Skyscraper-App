import { createReducer, on } from '@ngrx/store';
import { BuildingState } from '../models/BuildingState';

export const initialBuildingState: BuildingState = {
  curBuilding: {
    id: '1',
    name: 'The Shard',
    height: '310',
    floors: '87',
    yearbuilt: '2012',
    primaryuse: 'Mixed',
    location: 'Southwark',
    notes: 'Tallest building in the UK',
    description:
      'The Shard, also referred to as the Shard of Glass, Shard London Bridge and formerly London Bridge Tower, is a 72-storey skyscraper, designed by the Italian architect Renzo Piano, in Southwark, London, that forms part of the Shard Quarter development. Standing 309.6 metres (1,016 feet) high, the Shard is the tallest building in the United Kingdom, and the seventh-tallest building in Europe. It is also the second-tallest free-standing structure in the United Kingdom, after the concrete tower of the Emley Moor transmitting station. It replaced Southwark Towers, a 24-storey office block built on the site in 1975.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/The_Shard_from_the_Sky_Garden_2015.jpg/240px-The_Shard_from_the_Sky_Garden_2015.jpg',
  },
};

export const buildingReducer = createReducer(initialBuildingState);
