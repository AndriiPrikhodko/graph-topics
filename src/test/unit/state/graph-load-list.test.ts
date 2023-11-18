import graphListSlice from '../../../reducers/graph-list.reducer';

test('graph list slice load graph list', () => {
    let state;
    state = graphListSlice({data:[],status:'loading',error:null}, {type:'api/loadGraphList/fulfilled',payload:['item1.json','item_2.json','item_3.json'],meta:{requestId:'yS-xzcrqY3tixSbmwJl68',requestStatus:'fulfilled'}});
    expect(state).toEqual({data:['item1.json','item_2.json','item_3.json'],status:'succeeded',error:null});
  });