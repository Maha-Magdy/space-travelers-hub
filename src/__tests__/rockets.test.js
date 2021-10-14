import rocketsReducer from '../redux/rockets/rockets';

describe('Unit tests for rockets', () => {
  jest.mock('../redux/rockets/rockets');

  const ROCKETS_LIST = 'space_travelers_hub/rockets/ROCKETS_LIST';
  const RESERVE_ROCKET = 'space_travelers_hub/rockets/RESERVE_ROCKET';
  const CANCEL_RESERVATION = 'space_travelers_hub/rockets/CANCEL_RESERVATION';

  const rockets = [
    {
      id: 'falcon1',
      name: 'Falcon 1',
    },
  ];

  describe('reducers', () => {
    it('returns the correct state for ROCKETS_LIST action', () => {
      expect(
        rocketsReducer([], { type: ROCKETS_LIST, payload: rockets }),
      ).toEqual(rockets);
    });

    it('returns the correct state for RESERVE_ROCKET action', () => {
      const expectedOutputState = [
        {
          id: 'falcon1',
          name: 'Falcon 1',
          reserved: true,
        },
      ];
      expect(
        rocketsReducer(rockets, { type: RESERVE_ROCKET, payload: 'falcon1' }),
      ).toEqual(expectedOutputState);
    });

    it('returns the correct state for CANCEL_RESERVATION action', () => {
      const expectedOutputState = [
        {
          id: 'falcon1',
          name: 'Falcon 1',
          reserved: false,
        },
      ];
      expect(
        rocketsReducer(rockets, {
          type: CANCEL_RESERVATION,
          payload: 'falcon1',
        }),
      ).toEqual(expectedOutputState);
    });
  });
});
