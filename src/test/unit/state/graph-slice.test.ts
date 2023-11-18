import {setGraphData} from '../../../reducers/graph.reducer';
import graphSlice from '../../../reducers/graph.reducer';


test('graph slice actions', () => {
  const state = graphSlice({nodes:[{id:'1'},{id:'2'},{id:'3'}, {id:'4'}],links:[{source:'1',target:'2'},{source:'1',target:'3'},{source:'4',target:'3'}]}, setGraphData);
  expect(state).toEqual({nodes:[{id:'1'},{id:'2'},{id:'3'}, {id:'4'}],links:[{source:'1',target:'2'},{source:'1',target:'3'}, {source:'4',target:'3'}]})
});
