'use strict';

import {readFileSync} from 'fs';
import {join} from 'path';
import EasyGraphQLTester from 'easygraphql-tester';

const schemaCode = readFileSync(
    join(__dirname, '..', 'schema.graphql'),
    'utf8'
);

describe('Queries', () => {
  let tester;

  beforeAll(() => {
    tester = new EasyGraphQLTester(schemaCode);
  });

  it('Should get all the fields on characters', () => {
    const query = `
      {
        characters {
          id
          name
          description
        }
      }
    `;

    tester.test(true, query);
  });

  it('Should get all the fields on places', () => {
    const query = `
      {
        places {
          id
          name
          description
        }
      }
    `;

    tester.test(true, query);
  });

  it('Should get all the fields on occurrences', () => {
    const query = `
      {
        occurrences {
          id
          name
          description
          startDate
          endDate
          places {
            id
          }
          characters {
            id
          }
        }
      }
    `;

    tester.test(true, query);
  });
});
