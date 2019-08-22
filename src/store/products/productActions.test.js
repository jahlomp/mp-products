import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions'
import * as types from '../types'
import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_PRODUCTS_SUCCESS when fetching products has been done', () => {
    fetchMock.getOnce('/5c3e15e63500006e003e9795', {
      headers: { 'content-type': 'application/json', "accept": "application/json" }
    })

    const expectedActions = [
      { type: types.FETCH_PRODUCTS },
      { type: types.FETCH_PRODUCTS_SUCCESS, products: { products: [
{
"id": 1,
"name": "Exforge 10mg",
"prices": [
{
"id": 1,
"price": 10.99,
"date": "2019-01-01T17:16:32+00:00"
},
{
"id": 2,
"price": 9.2,
"date": "2018-11-01T17:16:32+00:00"
}
]
},
{
"id": 2,
"name": "Exforge 20mg",
"prices": [
{
"id": 3,
"price": 12,
"date": "2019-01-01T17:16:32+00:00"
},
{
"id": 4,
"price": 13.2,
"date": "2018-11-01T17:16:32+00:00"
}
]
},
{
"id": 3,
"name": "Paracetamol 20MG",
"prices": [
{
"id": 5,
"price": 5,
"date": "2017-01-01T17:16:32+00:00"
},
{
"id": 6,
"price": 13.2,
"date": "2018-11-01T17:16:32+00:00"
}
]
}
] } }
    ]
    const store = mockStore({ products: {} })

    return store.dispatch(actions.fetchProducts()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
